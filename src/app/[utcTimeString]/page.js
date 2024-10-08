import CustomBolbsAnimation from "@/components/CustomBolbsAnimation";

import Container from "./Container";

export async function generateMetadata({ params }) {
  const { utcTimeString } = params;

  return {
    title: `Hey, Someone Shared Their Time!`,
    description: `Click the link to check the time`,
    openGraph: {
      title: `Hey, Someone Shared Their Time!`,
      description: `Click the link to check the time`,
      url: `http://localhost:3000/${utcTimeString}`,
      images: [
        {
          url: `http://localhost:3000/path/to/generated/image.png`,
          alt: `Logo`,
        },
      ],
    },
  };
}

export default function ViewRequestedTime({ params }) {
  const { utcTimeString } = params;

  return (
    <div className="gradient-bg flex items-center h-screen justify-center">
      <CustomBolbsAnimation />
      <div className="px-2 mx-auto max-w-xl w-full">
        <Container time={utcTimeString} />
      </div>
    </div>
  );
}
