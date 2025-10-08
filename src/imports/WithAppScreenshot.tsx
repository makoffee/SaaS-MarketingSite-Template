import svgPaths from "./svg-6lasejgvip";
import imgFixedAspectRatioSpacer from "figma:asset/2c538b351719621f5126383fb41c688d0f3ad17d.png";
import imgFixedAspectRatioSpacer1 from "figma:asset/e4da5ddee6db75dd53dbe28d78631b7481961204.png";
import imgFixedAspectRatioSpacer2 from "figma:asset/a396cf5cb3d48bb5666a6bbe45f7d6d33a9ce029.png";
import imgFixedAspectRatioSpacer3 from "figma:asset/42e5f267d727af0b638508713f25852eb15925e0.png";
import imgImage from "figma:asset/1e5998acefdf45a5f4733f7e52c720a712f188d4.png";
import imgFixedAspectRatioSpacer4 from "figma:asset/f58d113362e9912302573a78ce1b1ecc9b9a62c2.png";
import imgSimpleCentered from "figma:asset/4fcd3c72fb99092f18efe2e9007a4023b4750564.png";
import imgWithAppScreenshot from "figma:asset/81a906d51751f5ed5a485b02bf54116e7cc1150a.png";

function Menu() {
  return (
    <div className="content-stretch flex font-['Inter:600',_sans-serif] gap-[48px] items-center justify-start leading-[0] not-italic relative shrink-0 text-[14px] text-gray-100 text-nowrap" data-name="Menu">
      <div className="relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Products</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Features</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Solutions</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Pricing</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Enterprise</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">Support</p>
      </div>
    </div>
  );
}

function ArrowRightMicro() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right/micro">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right/micro">
          <path clipRule="evenodd" d={svgPaths.p354ec780} fill="var(--fill-0, #F3F4F6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Button">
      <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-gray-100 text-nowrap">
        <p className="leading-[20px] whitespace-pre">Log in</p>
      </div>
      <ArrowRightMicro />
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Navigation bar">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex h-[80px] items-center justify-between px-[32px] py-[24px] relative w-full">
          <div className="bg-[#7c86ff] shrink-0 size-[32px]" data-name="Logo" />
          <Menu />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-start leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Heading">
      <div className="font-['Inter:600',_sans-serif] relative shrink-0 text-[72px] text-gray-100 w-full">
        <p className="leading-[72px]">EYZ Ability</p>
      </div>
      <div className="font-['Inter:500',_sans-serif] relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[28px]">{`AI-Powered Media Localization & Accessibility for Global Streaming`}</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#7c86ff] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Get started now</p>
      </div>
    </div>
  );
}

function ArrowRightMicro1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right/micro">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right/micro">
          <path clipRule="evenodd" d={svgPaths.p354ec780} fill="var(--fill-0, #F3F4F6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Button">
      <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-gray-100 text-nowrap">
        <p className="leading-[20px] whitespace-pre">Learn more</p>
      </div>
      <ArrowRightMicro1 />
    </div>
  );
}

function Button3() {
  return (
    <div className="content-center flex flex-wrap gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Button">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center max-w-[672px] relative shrink-0 w-full" data-name="Text">
      <Heading />
      <Button3 />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout() {
  return <div className="w-full" data-name="Aspect ratio keeper # Rotated Auto Layout" style={{ height: "2e-05px" }} />;
}

function FixedAspectRatioSpacer() {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-no-repeat bg-size-[100%_105.41%] bg-top-left relative rounded-[6px] shrink-0 w-full" data-name="Fixed-aspect-ratio-spacer" style={{ backgroundImage: `url('${imgFixedAspectRatioSpacer}')` }}>
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative w-full">
        <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1104", "--transform-inner-height": "0", height: "calc(1px * ((var(--transform-inner-width) * 0.562500536441803) + (var(--transform-inner-height) * 0.8267970085144043)))" } as React.CSSProperties}>
          <div className="flex-none rotate-[325.771deg] w-full">
            <AspectRatioKeeperRotatedAutoLayout />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(243,244,246,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Image() {
  return (
    <div className="bg-[rgba(243,244,246,0.05)] max-w-[1248px] relative rounded-[16px] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute border border-[rgba(243,244,246,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start max-w-inherit p-[16px] relative w-full">
          <FixedAspectRatioSpacer />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-center text-gray-300 w-[233px]">
            <p className="leading-[20px]">*musterfoto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center justify-start pb-[160px] pt-[128px] px-[32px] relative w-full">
          <Text />
          <Image />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:600',_sans-serif] gap-[8px] items-start justify-start relative shrink-0 w-full" data-name="Heading">
      <div className="relative shrink-0 text-[#7c86ff] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">The complete toolkit for global media distribution.</p>
      </div>
      <div className="min-w-full relative shrink-0 text-[48px] text-gray-100" style={{ width: "min-content" }}>
        <p className="leading-[48px]">{`Seamless Media Accessibility & Localization`}</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-start leading-[0] max-w-[672px] not-italic relative shrink-0" data-name="Text">
      <Heading1 />
      <div className="font-['Inter:400',_sans-serif] relative shrink-0 text-[#99a1af] text-[18px] w-full">
        <p className="leading-[28px]">{`Revolutionize how you reach global audiences with specialized AI that understands context, ensures compliance, and expands your content's reach.`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1232px] relative shrink-0 w-full" data-name="Container">
      <Text1 />
    </div>
  );
}

function CloudArrowUpSolid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="cloud-arrow-up/solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="cloud-arrow-up/solid">
          <path clipRule="evenodd" d={svgPaths.p32920000} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-start relative shrink-0 w-[20px]" data-name="Container">
      <CloudArrowUpSolid />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start justify-start min-h-px min-w-[300px] relative shrink-0" data-name="Container">
      <Container1 />
      <div className="basis-0 font-['Inter:600',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[0px] text-gray-100">
        <p className="leading-[24px] text-[16px]">
          <span>
            {`Automated Captioning `}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#99a1af]">Generate accurate, high-quality closed captions for your content, ensuring compliance with accessibility standards for all viewers.</span>
        </p>
      </div>
    </div>
  );
}

function LockClosedSolid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lock-closed/solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lock-closed/solid">
          <path clipRule="evenodd" d={svgPaths.p2054fa80} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-start relative shrink-0 w-[20px]" data-name="Container">
      <LockClosedSolid />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start justify-start min-h-px min-w-[300px] relative shrink-0" data-name="Container">
      <Container3 />
      <div className="basis-0 font-['Inter:600',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[0px] text-gray-100">
        <p className="leading-[24px] text-[16px]">
          <span>
            Precision Transcriptions
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#99a1af]">Our specialized AI provides verbatim transcriptions for video and audio content, trained on media-specific terminology for unmatched accuracy.</span>
        </p>
      </div>
    </div>
  );
}

function ArrowPathSolid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-path/solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-path/solid">
          <path clipRule="evenodd" d={svgPaths.p3d1fe880} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-start relative shrink-0 w-[20px]" data-name="Container">
      <ArrowPathSolid />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start justify-start min-h-px min-w-[300px] relative shrink-0" data-name="Container">
      <Container5 />
      <div className="basis-0 font-['Inter:600',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[0px] text-gray-100">
        <p className="leading-[24px] text-[16px]">
          <span>
            {`Dynamic Audio Descriptions `}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#99a1af]">Create rich, detailed audio descriptions that enhance content for visually impaired audiences, powered by our sophisticated EYZflow technology.</span>
        </p>
      </div>
    </div>
  );
}

function FingerPrintSolid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="finger-print/solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="finger-print/solid">
          <path clipRule="evenodd" d={svgPaths.p1f359980} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-start relative shrink-0 w-[20px]" data-name="Container">
      <FingerPrintSolid />
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start justify-start min-h-px min-w-[300px] relative shrink-0" data-name="Container">
      <Container7 />
      <div className="basis-0 font-['Inter:600',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[0px] text-gray-100">
        <p className="leading-[24px] text-[16px]">
          <span>
            Global Compliance
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#99a1af]">Instantly adapt your media to meet regional accessibility laws and content regulations with our automated compliance engine.</span>
        </p>
      </div>
    </div>
  );
}

function Cog6ToothSolid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="cog-6-tooth/solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="cog-6-tooth/solid">
          <path clipRule="evenodd" d={svgPaths.p371ab480} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-start relative shrink-0 w-[20px]" data-name="Container">
      <Cog6ToothSolid />
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start justify-start min-h-px min-w-[300px] relative shrink-0" data-name="Container">
      <Container9 />
      <div className="basis-0 font-['Inter:600',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[0px] text-[16px] text-gray-100">
        <p className="mb-0">Powerful API</p>
        <p className="font-['Inter:Regular',_sans-serif] font-normal text-[#99a1af]">Integrate our AI capabilities directly into your existing video production workflows and content management systems (CMS) with a robust developer API.</p>
      </div>
    </div>
  );
}

function ServerSolid() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="server/solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="server/solid">
          <g id="Vector">
            <path d={svgPaths.p2fb2af00} fill="var(--fill-0, #7C86FF)" />
            <path clipRule="evenodd" d={svgPaths.pa347100} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-start relative shrink-0 w-[20px]" data-name="Container">
      <ServerSolid />
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start justify-start min-h-px min-w-[300px] relative shrink-0" data-name="Container">
      <Container11 />
      <div className="basis-0 font-['Inter:600',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative self-stretch shrink-0 text-[0px] text-gray-100">
        <p className="leading-[24px] text-[16px]">
          <span>
            {`Advanced AI `}
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[#99a1af]">Our EYZflow AI is specifically trained for the nuances of streaming media, outperforming generic AI to deliver unparalleled quality and context-aware results.</span>
        </p>
      </div>
    </div>
  );
}

function Plate() {
  return (
    <div className="content-start flex flex-wrap gap-[64px] items-start justify-start max-w-[1232px] relative shrink-0 w-full" data-name="Plate">
      <Container2 />
      <Container4 />
      <Container6 />
      <Container8 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Simple3X2() {
  return (
    <div className="bg-[#101828] box-border content-stretch flex flex-col gap-[96px] h-[900px] items-center justify-center overflow-clip px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Simple 3x2">
      <Container />
      <Plate />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:600',_sans-serif] gap-[8px] items-center justify-start leading-[0] max-w-[672px] not-italic relative shrink-0 w-full" data-name="Heading">
      <div className="relative shrink-0 text-[#7c86ff] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">AI Powered</p>
      </div>
      <div className="min-w-full relative shrink-0 text-[48px] text-center text-gray-100" style={{ width: "min-content" }}>
        <p className="leading-[48px]">Context-Aware Accessibility for Any Audience</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-start leading-[0] not-italic pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Heading">
      <div className="font-['Inter:500',_sans-serif] relative shrink-0 text-[18px] text-gray-100 w-full">
        <p className="leading-[28px]">Intuitive AI Management Console</p>
      </div>
      <div className="font-['Inter:400',_sans-serif] relative shrink-0 text-[#99a1af] text-[14px] w-full">
        <p className="leading-[20px]">A streamlined dashboard gives you complete control over your media localization and accessibility projects, from upload to final delivery.</p>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[40px] px-[40px] relative w-full">
          <Heading3 />
        </div>
      </div>
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout1() {
  return <div className="h-0 w-full" data-name="Aspect ratio keeper # Rotated Auto Layout" />;
}

function AspectRatioKeeperAdditionallyRotatedAutoLayout() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative w-full" data-name="Aspect ratio keeper # Additionally rotated Auto Layout">
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "290", "--transform-inner-height": "0", height: "calc(1px * ((var(--transform-inner-width) * 0.7029484510421753) + (var(--transform-inner-height) * 0.7112395167350769)))" } as React.CSSProperties}>
        <div className="flex-none rotate-[224.664deg] w-full">
          <AspectRatioKeeperRotatedAutoLayout1 />
        </div>
      </div>
    </div>
  );
}

function AspectRatioKeeperAdditionallyRotatedAutoLayout1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative w-full" data-name="Aspect ratio keeper # Additionally rotated Auto Layout">
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "290", "--transform-inner-height": "203.84375", height: "calc(1px * ((var(--transform-inner-width) * 0.7029487490653992) + (var(--transform-inner-height) * 0.7112398743629456)))" } as React.CSSProperties}>
        <div className="flex-none rotate-[44.664deg] w-full">
          <AspectRatioKeeperAdditionallyRotatedAutoLayout />
        </div>
      </div>
    </div>
  );
}

function AspectRatioKeeperAdditionallyRotatedAutoLayout2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative w-full" data-name="Aspect ratio keeper # Additionally rotated Auto Layout">
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "290", "--transform-inner-height": "348.828125", height: "calc(1px * ((var(--transform-inner-width) * 0.6293200850486755) + (var(--transform-inner-height) * 0.7771457433700562)))" } as React.CSSProperties}>
        <div className="flex-none rotate-[39deg] w-full">
          <AspectRatioKeeperAdditionallyRotatedAutoLayout1 />
        </div>
      </div>
    </div>
  );
}

function AspectRatioKeeperAdditionallyRotatedAutoLayout3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative w-full" data-name="Aspect ratio keeper # Additionally rotated Auto Layout">
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "290", "--transform-inner-height": "453.578125", height: "calc(1px * ((var(--transform-inner-width) * 0.532345712184906) + (var(--transform-inner-height) * 0.8465270400047302)))" } as React.CSSProperties}>
        <div className="flex-none rotate-[327.836deg] w-full">
          <AspectRatioKeeperAdditionallyRotatedAutoLayout2 />
        </div>
      </div>
    </div>
  );
}

function AspectRatioKeeperAdditionallyRotatedAutoLayout4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative w-full" data-name="Aspect ratio keeper # Additionally rotated Auto Layout">
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "290", "--transform-inner-height": "538.34375", height: "calc(1px * ((var(--transform-inner-width) * 0.47715896368026733) + (var(--transform-inner-height) * 0.8788174390792847)))" } as React.CSSProperties}>
        <div className="flex-none rotate-[331.5deg] w-full">
          <AspectRatioKeeperAdditionallyRotatedAutoLayout3 />
        </div>
      </div>
    </div>
  );
}

function FixedAspectRatioSpacer1() {
  return (
    <div className="basis-0 bg-no-repeat bg-size-[100%_114.21%] bg-top-left content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip relative rounded-[34px] shrink-0" data-name="Fixed-aspect-ratio-spacer" style={{ backgroundImage: `url('${imgFixedAspectRatioSpacer1}')` }}>
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "290", "--transform-inner-height": "611.546875", height: "calc(1px * ((var(--transform-inner-width) * 0.4453619718551636) + (var(--transform-inner-height) * 0.8953506350517273)))" } as React.CSSProperties}>
        <div className="flex-none rotate-[333.554deg] w-full">
          <AspectRatioKeeperAdditionallyRotatedAutoLayout4 />
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="bg-gray-700 max-w-[314px] relative rounded-[48px] shrink-0 w-full" data-name="Image">
      <div className="flex flex-row items-center max-w-inherit overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-start max-w-inherit p-[12px] relative w-full">
          <FixedAspectRatioSpacer1 />
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Bottom">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-[40px] px-[40px] relative size-full">
          <Image1 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 bg-[#101828] grow h-[612px] min-h-px min-w-[360px] relative rounded-bl-[32px] rounded-br-[8px] rounded-tl-[32px] rounded-tr-[8px] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col h-[612px] items-start justify-start min-w-inherit overflow-clip relative w-full">
        <Top />
        <Bottom />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(243,244,246,0.1)] border-solid inset-0 pointer-events-none rounded-bl-[32px] rounded-br-[8px] rounded-tl-[32px] rounded-tr-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-start leading-[0] not-italic pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Heading">
      <div className="font-['Inter:500',_sans-serif] relative shrink-0 text-[18px] text-gray-100 w-full">
        <p className="leading-[28px]">Unmatched AI Performance</p>
      </div>
      <div className="font-['Inter:400',_sans-serif] relative shrink-0 text-[#99a1af] text-[14px] w-full">
        <p className="leading-[20px]">Our specialized AI, built on years of experience in streaming services, ensures rapid processing and consistent, high-quality output.</p>
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[40px] px-[40px] relative w-full">
          <Heading4 />
        </div>
      </div>
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout2() {
  return <div className="w-full" data-name="Aspect ratio keeper # Rotated Auto Layout" style={{ height: "2e-05px" }} />;
}

function FixedAspectRatioSpacer2() {
  return (
    <div className="bg-left bg-no-repeat bg-size-[100%_96.84%] content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Fixed-aspect-ratio-spacer" style={{ backgroundImage: `url('${imgFixedAspectRatioSpacer2}')` }}>
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "314.65625", "--transform-inner-height": "0", height: "calc(1px * ((var(--transform-inner-width) * 0.3333330452442169) + (var(--transform-inner-height) * 0.9428092837333679)))" } as React.CSSProperties}>
        <div className="flex-none rotate-[340.529deg] w-full">
          <AspectRatioKeeperRotatedAutoLayout2 />
        </div>
      </div>
    </div>
  );
}

function Bottom1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Bottom">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pb-0 pt-[40px] px-[40px] relative size-full">
          <FixedAspectRatioSpacer2 />
        </div>
      </div>
    </div>
  );
}

function Top2() {
  return (
    <div className="basis-0 bg-[#101828] grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Top">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative size-full">
        <Top1 />
        <Bottom1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(243,244,246,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-start leading-[0] not-italic pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Heading">
      <div className="font-['Inter:500',_sans-serif] relative shrink-0 text-[18px] text-gray-100 w-full">
        <p className="leading-[28px]">Improved Accuracy</p>
      </div>
      <div className="font-['Inter:400',_sans-serif] relative shrink-0 text-[#99a1af] text-[14px] w-full">
        <p className="leading-[20px]">EYZflow is trained on vast datasets of media content to provide superior accuracy in translation and transcription, eliminating common AI errors.</p>
      </div>
    </div>
  );
}

function Top3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[40px] px-[40px] relative w-full">
          <Heading5 />
        </div>
      </div>
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout3() {
  return <div className="h-[394.667px] w-full" data-name="Aspect ratio keeper # Rotated Auto Layout" />;
}

function FixedAspectRatioSpacer3() {
  return (
    <div className="bg-[51.62%_50%] bg-no-repeat bg-size-[170.13%_102.7%] content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-full" data-name="Fixed-aspect-ratio-spacer" style={{ backgroundImage: `url('${imgFixedAspectRatioSpacer3}')` }}>
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "394.65625", "--transform-inner-height": "394.65625", height: "calc(1px * ((var(--transform-inner-width) * 0.9270249009132385) + (var(--transform-inner-height) * 0.3749997913837433)))" } as React.CSSProperties}>
        <div className="flex-none rotate-[292.024deg] w-full">
          <AspectRatioKeeperRotatedAutoLayout3 />
        </div>
      </div>
    </div>
  );
}

function Bottom2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Bottom">
      <FixedAspectRatioSpacer3 />
    </div>
  );
}

function Bottom3() {
  return (
    <div className="basis-0 bg-[#101828] grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full" data-name="Bottom">
      <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative size-full">
        <Top3 />
        <Bottom2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(243,244,246,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[612px] items-start justify-center min-h-px min-w-[360px] relative shrink-0" data-name="Container">
      <Top2 />
      <Bottom3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-start leading-[0] not-italic pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Heading">
      <div className="font-['Inter:500',_sans-serif] relative shrink-0 text-[18px] text-gray-100 w-full">
        <p className="leading-[28px]">{`Powerful API & Integrations`}</p>
      </div>
      <div className="font-['Inter:400',_sans-serif] relative shrink-0 text-[#99a1af] text-[14px] w-full">
        <p className="leading-[20px]">Seamlessly integrate localEYZ.ai into your production pipeline, enabling developers to automate tasks and streamline media accessibility workflows.</p>
      </div>
    </div>
  );
}

function Top4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[40px] px-[40px] relative w-full">
          <Heading6 />
        </div>
      </div>
    </div>
  );
}

function Bottom4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Bottom">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center pb-0 pt-[40px] px-[40px] relative size-full">
          <div className="absolute bg-center bg-cover bg-no-repeat h-[448px] left-[40px] right-[-9.33px] rounded-tl-[12px] top-[40px]" data-name="Image" style={{ backgroundImage: `url('${imgImage}')` }} />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 bg-[#101828] grow h-[612px] min-h-px min-w-[360px] relative rounded-bl-[8px] rounded-br-[32px] rounded-tl-[8px] rounded-tr-[32px] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col h-[612px] items-start justify-start min-w-inherit overflow-clip relative w-full">
        <Top4 />
        <Bottom4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(243,244,246,0.1)] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[32px] rounded-tl-[8px] rounded-tr-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start justify-start max-w-[1216px] relative shrink-0 w-full" data-name="Content">
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function ThreeColumnBentoGrid() {
  return (
    <div className="bg-gray-950 box-border content-stretch flex flex-col gap-[40px] h-[900px] items-center justify-center overflow-clip px-[32px] py-[40px] relative shrink-0 w-[1440px]" data-name="Three column bento grid">
      <Heading2 />
      <Content1 />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout4() {
  return <div className="h-full w-0" data-name="Aspect ratio keeper # Rotated Auto Layout" />;
}

function AspectRatioKeeperAdditionally45RotatedAutoLayout() {
  return (
    <div className="content-stretch flex h-[384px] items-start justify-start relative w-full" data-name="Aspect ratio keeper # Additionally 45º rotated Auto Layout">
      <div className="flex h-full items-center justify-center relative shrink-0" style={{ "--transform-inner-width": "0", "--transform-inner-height": "384", width: "calc(1px * ((var(--transform-inner-height) * 0.4142167270183563) + (var(--transform-inner-width) * 0.9101782441139221)))" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[24.47deg]">
          <AspectRatioKeeperRotatedAutoLayout4 />
        </div>
      </div>
    </div>
  );
}

function FixedAspectRatioSpacer4() {
  return (
    <div className="bg-center bg-cover bg-no-repeat content-stretch flex flex-col items-start justify-start overflow-clip relative rounded-[16px] shrink-0 size-[384px]" data-name="Fixed-aspect-ratio-spacer" style={{ backgroundImage: `url('${imgFixedAspectRatioSpacer4}')` }}>
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "384", "--transform-inner-height": "384", height: "calc(1px * ((var(--transform-inner-width) * 0.7071117162704468) + (var(--transform-inner-height) * 0.7071018218994141)))" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg] w-full">
          <AspectRatioKeeperAdditionally45RotatedAutoLayout />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-start leading-[0] max-w-[672px] not-italic relative shrink-0 w-full" data-name="Heading">
      <div className="font-['Inter:600',_sans-serif] relative shrink-0 text-[48px] text-gray-100 w-full">
        <p className="leading-[48px]">Simplify your workflow</p>
      </div>
      <div className="font-['Inter:400',_sans-serif] relative shrink-0 text-[18px] text-gray-300 w-full">
        <p className="leading-[28px]">Accelerate Your Growth and empower your teams to reach new markets, reduce manual labor, and ensure every piece of content is instantly accessible and compliant, everywhere in the world.</p>
      </div>
    </div>
  );
}

function CheckCircleMini() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check-circle/mini">
          <path clipRule="evenodd" d={svgPaths.p19773c80} fill="var(--fill-0, #F3F4F6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-start min-h-px min-w-[272px] relative shrink-0" data-name="Container">
      <CheckCircleMini />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-gray-100">
        <p className="leading-[24px]">Global Content Monetization</p>
      </div>
    </div>
  );
}

function CheckCircleMini1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check-circle/mini">
          <path clipRule="evenodd" d={svgPaths.p19773c80} fill="var(--fill-0, #F3F4F6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-start min-h-px min-w-[272px] relative shrink-0" data-name="Container">
      <CheckCircleMini1 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-gray-100">
        <p className="leading-[24px]">Scalable Media Operations</p>
      </div>
    </div>
  );
}

function CheckCircleMini2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check-circle/mini">
          <path clipRule="evenodd" d={svgPaths.p19773c80} fill="var(--fill-0, #F3F4F6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-start min-h-px min-w-[272px] relative shrink-0" data-name="Container">
      <CheckCircleMini2 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-gray-100">
        <p className="leading-[24px]">Reduced Production Costs</p>
      </div>
    </div>
  );
}

function CheckCircleMini3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check-circle/mini">
          <path clipRule="evenodd" d={svgPaths.p19773c80} fill="var(--fill-0, #F3F4F6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-start min-h-px min-w-[272px] relative shrink-0" data-name="Container">
      <CheckCircleMini3 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-gray-100">
        <p className="leading-[24px]">{`Regulatory Compliance `}</p>
      </div>
    </div>
  );
}

function CheckCircleMini4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check-circle/mini">
          <path clipRule="evenodd" d={svgPaths.p19773c80} fill="var(--fill-0, #F3F4F6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-start min-h-px min-w-[272px] relative shrink-0" data-name="Container">
      <CheckCircleMini4 />
      <div className="font-['Inter:400',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-gray-100 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Enhanced Viewer Engagement</p>
      </div>
    </div>
  );
}

function CheckCircleMini5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check-circle/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check-circle/mini">
          <path clipRule="evenodd" d={svgPaths.p19773c80} fill="var(--fill-0, #F3F4F6)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-start min-h-px min-w-[272px] relative shrink-0" data-name="Container">
      <CheckCircleMini5 />
      <div className="font-['Inter:400',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-gray-100 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Streamlined Team Collaboration</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] items-start justify-start relative shrink-0 w-full" data-name="Text">
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function ArrowRightMicro2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right/micro">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right/micro">
          <path clipRule="evenodd" d={svgPaths.p354ec780} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0" data-name="Button">
      <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#7c86ff] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Find out more</p>
      </div>
      <ArrowRightMicro2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[40px] grow items-start justify-center min-h-px min-w-[392px] relative shrink-0" data-name="Text">
      <Heading7 />
      <Text2 />
      <Button4 />
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-[rgba(243,244,246,0.05)] relative rounded-[24px] shrink-0 w-[1216px]" data-name="Content">
      <div className="box-border content-center flex flex-wrap gap-[80px] items-center justify-center overflow-clip p-[80px] relative w-[1216px]">
        <FixedAspectRatioSpacer4 />
        <Text3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(243,244,246,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function TwoColumnsWithPhoto() {
  return (
    <div className="bg-[#101828] box-border content-stretch flex flex-col gap-[40px] h-[900px] items-center justify-center overflow-clip px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Two columns with photo">
      <Content2 />
    </div>
  );
}

function Primary() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:600',_sans-serif] gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Primary">
      <div className="relative shrink-0 text-[#7c86ff] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Pricing</p>
      </div>
      <div className="min-w-full relative shrink-0 text-[60px] text-center text-gray-100" style={{ width: "min-content" }}>
        <p className="leading-[60px]">Solutions Scaled to Your Needs</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Title">
      <Primary />
      <div className="font-['Inter:500',_sans-serif] max-w-[850px] relative shrink-0 text-[#99a1af] text-[20px] text-center w-full">
        <p className="leading-[28px]">{`Whether you're a content creator, a growing production company, or a global enterprise, we have a plan designed to help you reach your audience.`}</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#7c86ff] box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[16px] whitespace-pre">Annually</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="box-border content-stretch flex items-start justify-start px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center text-nowrap">
        <p className="leading-[16px] whitespace-pre">Monthly</p>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-start justify-start p-[4px] relative rounded-[9999px] shrink-0" data-name="Button Group">
      <div aria-hidden="true" className="absolute border border-[#1e2939] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Container">
      <div className="font-['Inter:600',_sans-serif] relative shrink-0 text-[18px] text-gray-100 w-full">
        <p className="leading-[28px]">Individual</p>
      </div>
      <div className="font-['Inter:400',_sans-serif] relative shrink-0 text-[#99a1af] text-[14px] w-full">
        <p className="leading-[20px]">For Content Creators and Freelancers</p>
      </div>
    </div>
  );
}

function Month() {
  return (
    <div className="box-border content-stretch flex h-full items-end justify-center pb-[4px] pt-0 px-0 relative shrink-0" data-name="Month">
      <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">/month</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[4px] h-[44px] items-end justify-start relative shrink-0 w-[304px]" data-name="Container">
      <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[36px] text-center text-gray-100 text-nowrap">
        <p className="leading-[40px] whitespace-pre">$9</p>
      </div>
      <Month />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full" data-name="Heading">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative w-full">
          <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#7c86ff] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">Get Individual</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#372aac] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Top5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full" data-name="Top">
      <Heading8 />
      <Button7 />
    </div>
  );
}

function CheckMini() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[0px]">
        <p className="leading-[20px] text-[14px]">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic text-white">150min</span>
          <span>{` AI compute per month`}</span>
        </p>
      </div>
    </div>
  );
}

function CheckMini1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini1 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">30 day content retention</p>
      </div>
    </div>
  );
}

function CheckMini2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini2 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">50 GB storage limit</p>
      </div>
    </div>
  );
}

function CheckMini3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini3 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">HD (1080p) support</p>
      </div>
    </div>
  );
}

function CheckMini4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start opacity-0 relative shrink-0 w-full" data-name="Container">
      <CheckMini4 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">48-hour support response time</p>
      </div>
    </div>
  );
}

function Bottom5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-start relative shrink-0 w-full" data-name="Bottom">
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      {[...Array(2).keys()].map((_, i) => (
        <Container28 key={i} />
      ))}
    </div>
  );
}

function Container30() {
  return (
    <div className="basis-0 grow max-w-[384px] min-h-px min-w-[296px] relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1e2939] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start justify-start max-w-inherit min-w-inherit p-[40px] relative w-full">
          <Top5 />
          <Bottom5 />
        </div>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(124,134,255,0.2)] box-border content-stretch flex items-center justify-start px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
      <div className="font-['Inter:500',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#7c86ff] text-[14px] text-center text-nowrap">
        <p className="leading-[20px] whitespace-pre">Most popular</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-start relative shrink-0 w-full" data-name="Heading">
      <div className="basis-0 font-['Inter:600',_sans-serif] grow h-full leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#7c86ff] text-[18px]">
        <p className="leading-[28px]">Studio</p>
      </div>
      <Badge />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-start relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <div className="font-['Inter:400',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[14px] w-full">
        <p className="leading-[20px]">For Teams and Production Houses</p>
      </div>
    </div>
  );
}

function Month1() {
  return (
    <div className="box-border content-stretch flex h-full items-end justify-center pb-[4px] pt-0 px-0 relative shrink-0" data-name="Month">
      <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">/month</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[4px] h-[44px] items-end justify-start relative shrink-0 w-[304px]" data-name="Container">
      <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[36px] text-center text-gray-100 text-nowrap">
        <p className="leading-[40px] whitespace-pre">$99</p>
      </div>
      <Month1 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full" data-name="Heading">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#7c86ff] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative w-full">
          <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
            <p className="leading-[20px] whitespace-pre">Get Studio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Top6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full" data-name="Top">
      <Heading10 />
      <Button8 />
    </div>
  );
}

function CheckMini6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini6 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[0px]">
        <p className="leading-[20px] text-[14px]">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic text-white">1500min</span>
          <span>{` AI compute per month`}</span>
        </p>
      </div>
    </div>
  );
}

function CheckMini7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini7 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">For professional teams</p>
      </div>
    </div>
  );
}

function CheckMini8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini8 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">5 seats ($10 more per seat)</p>
      </div>
    </div>
  );
}

function CheckMini9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini9 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">90 day content retention</p>
      </div>
    </div>
  );
}

function CheckMini10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini10 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">500 GB storage limit</p>
      </div>
    </div>
  );
}

function CheckMini11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini11 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">4K video support</p>
      </div>
    </div>
  );
}

function Bottom6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-start relative shrink-0 w-full" data-name="Bottom">
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="basis-0 grow max-w-[384px] min-h-px min-w-[296px] relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-indigo-600 border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_0px_14px_0px_#7c86ff]" />
      <div className="max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start justify-start max-w-inherit min-w-inherit p-[40px] relative w-full">
          <Top6 />
          <Bottom6 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-start leading-[0] not-italic relative shrink-0 w-full" data-name="Container">
      <div className="font-['Inter:600',_sans-serif] relative shrink-0 text-[18px] text-gray-100 w-full">
        <p className="leading-[28px]">Enterprise</p>
      </div>
      <div className="font-['Inter:400',_sans-serif] relative shrink-0 text-[#99a1af] text-[14px] w-full">
        <p className="leading-[20px]">For Companies and Organizations</p>
      </div>
    </div>
  );
}

function Month2() {
  return (
    <div className="box-border content-stretch flex h-full items-end justify-center pb-[4px] pt-0 px-0 relative shrink-0" data-name="Month">
      <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">starting at</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex gap-[4px] h-[44px] items-end justify-start relative shrink-0 w-[304px]" data-name="Container">
      <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[36px] text-center text-gray-100 text-nowrap">
        <p className="leading-[40px] whitespace-pre">$199</p>
      </div>
      <Month2 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full" data-name="Heading">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative w-full">
          <div className="font-['Inter:600',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#7c86ff] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">Sales Request</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#372aac] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Top7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-start relative shrink-0 w-full" data-name="Top">
      <Heading11 />
      <Button9 />
    </div>
  );
}

function CheckMini12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini12 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[0px]">
        <p className="leading-[20px] text-[14px]">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic text-white">Unmetered</span>
          <span>{` AI compute per month`}</span>
        </p>
      </div>
    </div>
  );
}

function CheckMini13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini13 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">Dedicated account manager</p>
      </div>
    </div>
  );
}

function CheckMini14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini14 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">SSO (Single Sign-On)</p>
      </div>
    </div>
  );
}

function CheckMini15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini15 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">Custom scalable pricing</p>
      </div>
    </div>
  );
}

function CheckMini16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini16 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">{`Unlimited storage & projects`}</p>
      </div>
    </div>
  );
}

function CheckMini17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="check/mini">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check/mini">
          <path clipRule="evenodd" d={svgPaths.p1a814600} fill="var(--fill-0, #7C86FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full" data-name="Container">
      <CheckMini17 />
      <div className="basis-0 font-['Inter:400',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#99a1af] text-[14px]">
        <p className="leading-[20px]">4K and 8K video support</p>
      </div>
    </div>
  );
}

function Bottom7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-start relative shrink-0 w-full" data-name="Bottom">
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 grow max-w-[384px] min-h-px min-w-[296px] relative rounded-[24px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1e2939] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start justify-start max-w-inherit min-w-inherit p-[40px] relative w-full">
          <Top7 />
          <Bottom7 />
        </div>
      </div>
    </div>
  );
}

function CardList() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] h-[516px] items-start justify-center relative shrink-0 w-full" data-name="Card list">
      <Container30 />
      <Container39 />
      <Container48 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-start max-w-[1216px] relative shrink-0 w-full" data-name="Content">
      <ButtonGroup />
      <CardList />
    </div>
  );
}

function ThreeTiersWithToggle() {
  return (
    <div className="bg-[#101828] box-border content-stretch flex flex-col gap-[64px] items-center justify-center overflow-clip px-[32px] py-[40px] relative shrink-0 w-[1440px]" data-name="Three tiers with toggle">
      <Title />
      <Content3 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-indigo-500 box-border content-stretch flex items-start justify-start px-[14px] py-[10px] relative rounded-bl-[6px] rounded-tl-[6px] shrink-0" data-name="Button">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Browse files</p>
      </div>
    </div>
  );
}

function InputBox() {
  return (
    <div className="bg-white box-border content-stretch flex items-start justify-start px-[14px] py-[10px] relative rounded-br-[6px] rounded-tr-[6px] shrink-0 w-[332px]" data-name="Input box">
      <div aria-hidden="true" className="absolute border border-[rgba(124,134,255,0.3)] border-solid inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px]" />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap">
        <p className="leading-[20px] whitespace-pre">or drag and drop files here</p>
      </div>
    </div>
  );
}

function InputBox1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Input box">
      <Button10 />
      <InputBox />
    </div>
  );
}

function Tips() {
  return (
    <div className="content-stretch flex gap-[5px] items-start justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap w-[331px]" data-name="Tips">
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-gray-300">
        <p className="leading-[20px] text-nowrap whitespace-pre">5gb file upload limit</p>
      </div>
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-indigo-500">
        <p className="leading-[20px] text-nowrap whitespace-pre">view features</p>
      </div>
    </div>
  );
}

function InputBox2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-start relative shrink-0" data-name="Input box">
      <InputBox1 />
      <Tips />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-start relative shrink-0 w-full" data-name="Heading">
      <div className="font-['Inter:600',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[48px] text-center text-gray-100" style={{ width: "min-content" }}>
        <p className="leading-[48px]">Ready to Unlock Your Global Audience?</p>
      </div>
      <div className="font-['Inter:400',_sans-serif] leading-[0] max-w-[750px] min-w-full not-italic relative shrink-0 text-[18px] text-center text-white" style={{ width: "min-content" }}>
        <p className="leading-[28px]">localEYZ.ai empowers you to effortlessly scale your content distribution and meet the demands of a diverse, worldwide audience with our specialized AI-powered solutions.</p>
      </div>
      <InputBox2 />
    </div>
  );
}

function SimpleCentered() {
  return (
    <div className="bg-[position:0%_0%,_50%_50%] bg-[rgba(16,24,40,0.6)] bg-size-[auto,cover] box-border content-stretch flex flex-col gap-[40px] h-[900px] items-center justify-center overflow-clip px-[32px] py-0 relative shrink-0 w-[1440px]" data-name="Simple centered" style={{ backgroundImage: `url('${imgSimpleCentered}')` }}>
      <Heading12 />
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="basis-0 font-['Inter:Bold',_sans-serif] font-bold grow leading-[44px] min-h-px min-w-px not-italic relative shrink-0 text-[36px] text-white">
        <p className="mb-0">Want product news and updates?</p>
        <p>Sign up for our newsletter.</p>
      </div>
    </div>
  );
}

function InputBox3() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.02)] grow min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Input box">
      <div aria-hidden="true" className="absolute border border-gray-800 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex items-start justify-start px-[14px] py-[10px] relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap">
            <p className="leading-[20px] whitespace-pre">Enter your email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-indigo-500 box-border content-stretch flex items-start justify-start px-[14px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">Subscribe</p>
      </div>
    </div>
  );
}

function InputBox4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Input box">
      <InputBox3 />
      <Button11 />
    </div>
  );
}

function Tips1() {
  return (
    <div className="content-stretch flex items-start justify-start leading-[0] not-italic relative shrink-0 text-[14px]" data-name="Tips">
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-gray-300 w-[233px]">
        <p className="leading-[20px]">{`We care about your data. Read our `}</p>
      </div>
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-indigo-500 text-nowrap">
        <p className="leading-[20px] whitespace-pre">privacy policy.</p>
      </div>
    </div>
  );
}

function InputBox5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-start relative shrink-0 w-[445px]" data-name="Input box">
      <InputBox4 />
      <Tips1 />
    </div>
  );
}

function SimpleSideBySide() {
  return (
    <div className="bg-gray-900 box-border content-stretch flex gap-[64px] items-center justify-center overflow-clip px-[104px] py-[120px] relative shrink-0 w-[1440px]" data-name="Simple side-by-side">
      <Text4 />
      <InputBox5 />
    </div>
  );
}

export default function WithAppScreenshot() {
  return (
    <div className="bg-center bg-cover bg-no-repeat content-stretch flex flex-col items-start justify-start opacity-0 relative size-full" data-name="With app screenshot" style={{ backgroundImage: `url('${imgWithAppScreenshot}')` }}>
      <NavigationBar />
      <Content />
      <Simple3X2 />
      <ThreeColumnBentoGrid />
      <TwoColumnsWithPhoto />
      <ThreeTiersWithToggle />
      <SimpleCentered />
      <SimpleSideBySide />
    </div>
  );
}