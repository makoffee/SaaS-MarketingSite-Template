# Authentication Flow Documentation

## Overview

The application now includes a complete authentication flow with login/signup screens and a protected dashboard area. This implementation is designed to integrate with AWS Cognito for authentication and Stripe for payment processing.

## Current Implementation

### View Structure

The application has three main views:

1. **Landing Page** - Public marketing site
2. **Authentication** - Login and signup screens
3. **Dashboard** - Protected area with sidebar navigation

### Navigation Flow

```
Landing Page
    ↓ (Click "Get eysign" or "Login")
Auth Screen (Login/Signup tabs)
    ↓ (Successful login/signup)
Dashboard
    ↓ (Click "Logout")
Landing Page
```

### Components

#### AuthScreen (`/components/auth/AuthScreen.tsx`)
- Dual-tab interface (Login/Signup)
- AWS Cognito-compatible form fields
- Features:
  - Email and password authentication
  - Password visibility toggle
  - "Remember me" checkbox
  - Social login placeholders (Google, GitHub)
  - Form validation and error states
  - Loading states during authentication

**Form Fields:**
- **Login:**
  - Email (required)
  - Password (required)
  - Remember me (optional)
  
- **Signup:**
  - Full Name (required)
  - Email (required)
  - Password (required, with validation hint)
  - Terms of Service agreement (required)

#### DashboardLayout (`/components/dashboard/DashboardLayout.tsx`)
- Responsive sidebar navigation
- Top bar with search, notifications, and user menu
- Dark mode support
- Theme toggle
- Usage statistics in sidebar
- Logout functionality

#### DashboardOverview (`/components/dashboard/DashboardOverview.tsx`)
- Stats cards (Projects, Minutes, Languages, Team)
- Usage charts (Monthly usage bar chart)
- Language distribution pie chart
- Recent projects list with status

## AWS Cognito Integration Points

The current implementation uses placeholder authentication. To integrate with AWS Cognito:

### 1. Install AWS Amplify
```bash
npm install aws-amplify @aws-amplify/ui-react
```

### 2. Configure Amplify
Create `/config/aws-config.ts`:
```typescript
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: process.env.REACT_APP_AWS_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID,
  }
});
```

### 3. Update AuthScreen Component

Replace the placeholder authentication in `AuthScreen.tsx`:

**Login:**
```typescript
import { signIn } from 'aws-amplify/auth';

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");
  
  try {
    await signIn({
      username: loginEmail,
      password: loginPassword,
    });
    onLogin();
  } catch (error: any) {
    setError(error.message || "Failed to sign in");
  } finally {
    setIsLoading(false);
  }
};
```

**Signup:**
```typescript
import { signUp } from 'aws-amplify/auth';

const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");
  
  try {
    await signUp({
      username: signupEmail,
      password: signupPassword,
      options: {
        userAttributes: {
          name: signupName,
        }
      }
    });
    // Handle email verification flow
    onLogin();
  } catch (error: any) {
    setError(error.message || "Failed to create account");
  } finally {
    setIsLoading(false);
  }
};
```

### 4. Add Email Verification

AWS Cognito requires email verification. Add a verification step:

```typescript
import { confirmSignUp } from 'aws-amplify/auth';

const handleVerification = async (code: string) => {
  try {
    await confirmSignUp({
      username: signupEmail,
      confirmationCode: code,
    });
    onLogin();
  } catch (error: any) {
    setError(error.message || "Invalid verification code");
  }
};
```

### 5. Update App.tsx for Session Persistence

Check for existing sessions on app load:

```typescript
import { getCurrentUser } from 'aws-amplify/auth';

useEffect(() => {
  checkAuthStatus();
}, []);

const checkAuthStatus = async () => {
  try {
    await getCurrentUser();
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  } catch {
    setIsAuthenticated(false);
  }
};
```

## Stripe Integration Points

For payment processing and subscription management:

### 1. Install Stripe
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

### 2. Add Checkout Flow

Create a subscription checkout component that redirects to Stripe Checkout:

```typescript
import { loadStripe } from '@stripe/stripe-js';

const handleSubscribe = async (priceId: string) => {
  const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY!);
  
  // Call your backend to create checkout session
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId }),
  });
  
  const session = await response.json();
  await stripe?.redirectToCheckout({ sessionId: session.id });
};
```

### 3. Update Pricing Component

Add checkout buttons to the pricing tiers in `/components/landing/Pricing.tsx`.

## Security Considerations

1. **Never store passwords** - AWS Cognito handles password security
2. **Use HTTPS** - Always use HTTPS in production
3. **Environment Variables** - Store all API keys and secrets in environment variables
4. **CSRF Protection** - Implement CSRF tokens for state-changing operations
5. **Rate Limiting** - Add rate limiting to prevent brute force attacks
6. **Session Management** - Use secure, httpOnly cookies for session tokens

## Environment Variables Required

```bash
# AWS Cognito
REACT_APP_AWS_REGION=eu-west-1
REACT_APP_USER_POOL_ID=eu-west-1_xxxxx
REACT_APP_USER_POOL_CLIENT_ID=xxxxx

# Stripe
REACT_APP_STRIPE_PUBLIC_KEY=pk_test_xxxxx
```

## Testing

### Test Accounts

Create test accounts in AWS Cognito console for development:
- Individual tier: test-individual@example.com
- Studio tier: test-studio@example.com
- Enterprise tier: test-enterprise@example.com

### Stripe Test Mode

Use Stripe test mode credit card numbers:
- Success: 4242 4242 4242 4242
- Decline: 4000 0000 0000 0002
- 3D Secure: 4000 0025 0000 3155

## Current State

The authentication flow is currently simulated with:
- A 1-second delay to mimic API calls
- Simple email/password validation
- State-based routing between views

This provides a complete UI/UX that can be easily connected to real backend services.

## Next Steps

1. Set up AWS Cognito user pool
2. Configure social identity providers (Google, GitHub)
3. Implement email verification flow
4. Add password reset functionality
5. Set up Stripe products and pricing
6. Create backend API for Stripe checkout sessions
7. Implement webhook handlers for subscription events
8. Add protected route middleware
9. Implement token refresh logic
10. Add comprehensive error handling
