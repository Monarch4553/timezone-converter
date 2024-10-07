// app/[utcTimeString]/page.jsx
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
    description: `Shared time: ${localTimeFormatted.format("MMMM Do YYYY, HH:mm")}`,
    openGraph: {
      title: `Local Time: ${localTimeFormatted.format("HH:mm")}`,
      description: `Shared time: ${localTimeFormatted.format("MMMM Do YYYY, HH:mm")}`,
      url: `http://localhost:3000/${utcTimeString}`, // Keep this as the original URL for sharing
      images: [
        {
          url: `http://localhost:3000/path/to/generated/image.png`, // Adjust path to your image
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
      <div className="flex relative items-center justify-center min-h-screen bg-cover bg-[url('/gradient-2.svg')]">
        <div className="relative max-w-xl w-full">
          <div className="bg-white backdrop-blur-2xl bg-opacity-55 z-10 relative rounded-[2.5rem] px-6 py-8 shadow-lg">
            <p className="text-2xl text-gray-700 text-center">
              {localTimeFormatted.format("dddd")}
            </p>
  
            <div className="p-4 my-4 text-2xl justify-center items-center gap-6 rounded-2xl flex">
              <div className="flex flex-col text-center">
                <h1 className="text-[8rem] leading-[1.2]">
                  {localTimeFormatted.format("hh")}
                </h1>
                <p className="opacity-60">Hours</p>
              </div>
              <p className="text-[8rem] opacity-40 mb-14">:</p>
              <div className="flex flex-col text-center">
                <h1 className="text-[8rem] leading-[1.2]">
                  {localTimeFormatted.format("mm")}
                </h1>
                <p className="opacity-60">Minutes</p>
              </div>
            </div>
  
            <Link href="/" className="text-lg mt-6 bg-white text-black h-16 inline-block text-center">
              Share your time
            </Link>
          </div>
        </div>
      </div>
    );
  }
