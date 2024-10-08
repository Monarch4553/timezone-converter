"use client"
import CustomBolbsAnimation from "@/components/CustomBolbsAnimation";
import moment from "moment-timezone";
import Link from "next/link";
import Head from "next/head";

// Function to generate metadata for sharing
// export async function generateMetadata({ params }) {
//   const { utcTimeString } = params;

//   // Decode the URL-encoded utcTimeString
//   const decodedUtcTimeString = decodeURIComponent(utcTimeString);

//   console.log(decodedUtcTimeString);

//   // Convert UTC to local time using moment.js
//   const localTimeFormatted = moment.utc(decodedUtcTimeString).local();

//   return {
//     title: `Local Time: ${localTimeFormatted.format("HH:mm")}`,
//     description: `Shared time: ${localTimeFormatted.format(
//       "MMMM Do YYYY, HH:mm"
//     )}`,
//     openGraph: {
//       title: `Local Time: ${localTimeFormatted.format("HH:mm")}`,
//       description: `Shared time: ${localTimeFormatted.format(
//         "MMMM Do YYYY, HH:mm"
//       )}`,
//       url: `http://localhost:3000/${utcTimeString}`,
//       images: [
//         {
//           url: `http://localhost:3000/path/to/generated/image.png`,
//           alt: `Local Time: ${localTimeFormatted.format("HH:mm")}`,
//         },
//       ],
//     },
//   };
// }

export default function ViewRequestedTime({ params }) {
  const { utcTimeString } = params;

  // Decode the URL-encoded utcTimeString
  const decodedUtcTimeString = decodeURIComponent(utcTimeString);

  // Detect the user's local timezone on the client side
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Convert UTC to the user's specific timezone using moment.js
  const localTimeFormatted = moment.utc(decodedUtcTimeString).tz(timezone);

  const formattedTime = localTimeFormatted.format("MMMM Do YYYY, HH:mm");
  return (
    <>
      <Head>
        {/* Dynamically set page metadata */}
        <title>asd</title>
        <meta name="description" content={`Shared time: ${formattedTime}`} />
        <meta
          property="og:title"
          content={`Local Time: ${localTimeFormatted.format("HH:mm")}`}
        />
        <meta
          property="og:description"
          content={`Shared time: ${formattedTime}`}
        />
        <meta
          property="og:url"
          content={`http://localhost:3000/${utcTimeString}`}
        />
        <meta
          property="og:image"
          content="http://localhost:3000/path/to/generated/image.png"
        />
      </Head>
      <div className="gradient-bg flex items-center h-screen justify-center">
        <CustomBolbsAnimation />
        <div className="px-2 mx-auto max-w-xl w-full">
          <div className="bg-white backdrop-blur-2xl bg-opacity-55 z-10 relative rounded-[2.5rem] px-6 py-8 shadow-lg">
            <p className="text-2xl text-gray-700 text-center">
              {localTimeFormatted.isValid()
                ? localTimeFormatted.format("dddd (Do MMM)")
                : "Invalid date"}
            </p>

            <div className="p-4 my-4 text-2xl justify-center items-center gap-6 rounded-2xl flex">
              <div className="flex flex-col text-center">
                <h1 className="text-[4rem] sm:text-[8rem] leading-[1.2]">
                  {localTimeFormatted.isValid()
                    ? localTimeFormatted.format("HH")
                    : "--"}
                </h1>
                <p className="opacity-60">Hours</p>
              </div>
              <p className="text-[4rem] sm:text-[8rem] opacity-40 mb-14">:</p>
              <div className="flex flex-col text-center">
                <h1 className="text-[4rem] sm:text-[8rem] leading-[1.2]">
                  {localTimeFormatted.isValid()
                    ? localTimeFormatted.format("mm")
                    : "--"}
                </h1>
                <p className="opacity-60">Minutes</p>
              </div>
            </div>

            <Link href="/">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center w-full rounded-md bg-[linear-gradient(110deg,white,45%,#f1f1f1,55%,white)] bg-[length:200%_100%] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Generate your time
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
