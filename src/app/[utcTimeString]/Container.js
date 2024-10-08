"use client"
import moment from 'moment-timezone'
import Link from 'next/link';
export default function Container({time}) {

  // Decode the URL-encoded utcTimeString
  const decodedUtcTimeString = decodeURIComponent(time);

  // Detect the user's local timezone on the client side
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Convert UTC to the user's specific timezone using moment.js
  const localTimeFormatted = moment.utc(decodedUtcTimeString).tz(timezone);
  return (
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
  )
}
