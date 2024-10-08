import CustomBolbsAnimation from "@/components/CustomBolbsAnimation";
import { Button } from "@/components/ui/button";
import moment from "moment";
import Link from "next/link";

// Function to generate metadata for sharing
export async function generateMetadata({ params }) {
  const { utcTimeString } = params;

  // Decode the URL-encoded utcTimeString
  const decodedUtcTimeString = decodeURIComponent(utcTimeString);

  // Convert UTC to local time using moment.js
  const localTimeFormatted = moment.utc(decodedUtcTimeString).local();

  return {
    title: `Local Time: ${localTimeFormatted.format("HH:mm")}`,
    description: `Shared time: ${localTimeFormatted.format(
      "MMMM Do YYYY, HH:mm"
    )}`,
    openGraph: {
      title: `Local Time: ${localTimeFormatted.format("HH:mm")}`,
      description: `Shared time: ${localTimeFormatted.format(
        "MMMM Do YYYY, HH:mm"
      )}`,
      url: `http://localhost:3000/${utcTimeString}`,
      images: [
        {
          url: `http://localhost:3000/path/to/generated/image.png`,
          alt: `Local Time: ${localTimeFormatted.format("HH:mm")}`,
        },
      ],
    },
  };
}

export default function ViewRequestedTime({ params }) {
  const { utcTimeString } = params;

  // Decode the URL-encoded utcTimeString
  const decodedUtcTimeString = decodeURIComponent(utcTimeString);

  // Convert UTC to the user's local timezone using moment.js
  const localTimeFormatted = moment.utc(decodedUtcTimeString).local();

  return (
    <div className="  gradient-bg   flex items-center h-screen  justify-center    ">
      <CustomBolbsAnimation />

      <div className="   px-2 mx-auto  max-w-xl w-full">
        {/* Static Blobs with Random Positions and Colors */}

        <div className="bg-white backdrop-blur-2xl bg-opacity-55 z-10 relative rounded-[2.5rem] px-6 py-8 shadow-lg">
          <p className="text-2xl text-gray-700 text-center">
            {localTimeFormatted.format("dddd (Do MMM)")}
          </p>

          <div className="p-4 my-4 text-2xl justify-center items-center gap-6 rounded-2xl flex">
            <div className="flex flex-col text-center">
              <h1 className="text-[4rem] sm:text-[8rem] leading-[1.2]">
                {localTimeFormatted.format("HH")}
              </h1>
              <p className="opacity-60">Hours</p>
            </div>
            <p className="text-[4rem] sm:text-[8rem] opacity-40 mb-14">:</p>
            <div className="flex flex-col text-center">
              <h1 className="text-[4rem] sm:text-[8rem] leading-[1.2]">
                {localTimeFormatted.format("mm")}
              </h1>
              <p className="opacity-60">Minutes</p>
            </div>
          </div>

          <button className="inline-flex h-12 animate-shimmer items-center justify-center w-full rounded-md bg-[linear-gradient(110deg,white,45%,#f1f1f1,55%,white)] bg-[length:200%_100%] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Shimmer
        </button>
        </div>
      </div>
    </div>
  );
}


 
      