# Select Plan Implementation

## Overview
Implemented a plan selection flow for the onboarding process with two distinct user journeys.

## User Flows

### Flow 1: General Signup → Select Plan → Dashboard
1. User clicks any "Get Started" CTA button (Hero, CallToAction, Navigation)
2. User is directed to `/auth?mode=signup` (signup form is displayed)
3. User creates an account
4. User is directed to `/select-plan`
5. User selects either Individual or Studio plan
6. User is redirected to `/app` (dashboard)

**Note:** If user clicks "Contact Sales" on Enterprise plan, it does not navigate to dashboard (placeholder for sales contact flow).

### Flow 2: Plan Selection → Signup → Dashboard
1. User selects Individual or Studio plan from pricing section on landing page
2. User is directed to `/auth?mode=signup&plan={planName}` (signup form is displayed)
3. User creates an account
4. User is redirected directly to `/app` (dashboard), skipping plan selection

**Note:** If user clicks "Contact Sales" on Enterprise plan from pricing page, they are directed to signup with plan=Enterprise, then to dashboard. This will be updated when sales contact flow is implemented.

### Flow 3: Existing User Login
1. User clicks login button or navigates to `/auth` without query params
2. User enters credentials on `/auth` (login form is displayed by default)
3. User is redirected directly to `/app` (dashboard)

## Components Created/Modified

### New Components
- `/components/onboarding/SelectPlan.tsx` - Plan selection screen with same styling as landing page pricing

### Modified Components
- `/App.tsx` - Added routing logic for both flows with authentication state management
- `/components/auth/AuthScreen.tsx` - Added `selectedPlan` and `initialMode` props
- `/components/landing/Pricing.tsx` - Added `onPlanSelect` callback
- `/components/landing/Hero.tsx` - Added `onGetStarted` callback
- `/components/landing/CallToAction.tsx` - Added `onGetStarted` callback

## Technical Details

### Routing
- `/` - Landing page
- `/auth` - Authentication page (login/signup)
  - Query params: `?mode=login|signup&plan={planName}`
- `/select-plan` - Plan selection (semi-protected, requires authentication)
- `/app/*` - Dashboard (protected, requires authentication)

### State Management
- `isAuthenticated` - Tracks if user is logged in
- `needsPlanSelection` - Tracks if user needs to select a plan after signup

### Route Protection Logic
The `/select-plan` route uses conditional rendering to prevent redirect issues:
- If not authenticated → Redirect to landing page
- If authenticated AND `needsPlanSelection === true` → Show SelectPlan page
- If authenticated AND `needsPlanSelection === false` → Redirect to `/app`

This ensures that when a user selects a plan and the state updates, they are redirected to the dashboard instead of the landing page.

### URL Parameters
- `mode` - Determines if auth screen shows login or signup form
- `plan` - Pre-selected plan name (skips plan selection after signup)

## Design Consistency

### Visual Elements
- Uses same background gradient and blur effects as AuthScreen
- Reuses pricing card components from landing page
- Maintains consistent CTA button styling with brand gradients:
  - Primary (Most Popular): `from-indigo-500 to-purple-600`
  - Individual: `from-cyan-500 to-teal-500`
  - Enterprise: `from-purple-500 to-pink-500`

### User Experience
- X button in top-right to go back to landing
- Logo centered at top
- Responsive grid layout (1 column mobile, 3 columns desktop)
- Same card styling and animations as pricing section

## Testing Checklist

- [ ] Click "Get Started" from Hero → Creates account → Select plan → Dashboard
- [ ] Click "Get Started" from CallToAction → Creates account → Select plan → Dashboard
- [ ] Click "Get eysign" from Navigation → Creates account → Select plan → Dashboard
- [ ] Click "Start Individual" from Pricing → Creates account → Dashboard (skip plan selection)
- [ ] Click "Try Studio" from Pricing → Creates account → Dashboard (skip plan selection)
- [ ] Click "Contact Sales" from Pricing → Creates account → Dashboard (skip plan selection)
- [ ] Login with existing account → Dashboard (skip plan selection)
- [ ] X button on SelectPlan screen → Returns to landing page
- [ ] X button on Auth screen → Returns to landing page
- [ ] Direct access to /select-plan without auth → Redirects to landing page
- [ ] Direct access to /app without auth → Redirects to /auth

## Future Enhancements

- Store selected plan in user profile/database
- Integrate with Stripe for payment processing
- Show selected plan badge on auth screen when coming from pricing
- Add plan comparison on select-plan screen
- Handle plan upgrades/downgrades in dashboard billing section
