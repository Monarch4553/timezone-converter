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

export default async function ViewRequestedTime({ params }) {
  const { utcTimeString } = params;
  const decodedTime = await decodeTime(utcTimeString);
  return (
    <div className="gradient-bg flex items-center h-screen justify-center">
      <div className="hidden md:block">
        <CustomBolbsAnimation />
      </div>
      <div className="px-2 mx-auto max-w-xl w-full">
        <Container time={decodedTime} />
      </div>
    </div>
  );
}

// Function to fetch the decoded time
async function decodeTime(encodedStr) {
  const response = await fetch('http://localhost:3000/api/decode', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ encodedStr }), // Pass the encoded string to the API
  });

  if (response.ok) {
    const { decodedTime } = await response.json();
    return decodedTime;
  } else {
    console.error("Failed to decode time");
    return null; // Handle error accordingly
  }
}
