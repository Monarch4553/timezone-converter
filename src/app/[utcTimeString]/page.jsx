'use client'; // Required for using hooks like useState and useEffect

import { Blob } from "@/assets/icons";
import TimezoneButton from "@/components/TimezoneButton";
import { Button } from "@/components/ui/button";
import moment from "moment";
import { useState, useEffect } from "react";
import Link from "next/link";
 

export default function ViewRequestedTime({ params }) {
  const [localTime, setLocalTime] = useState(null);
  const { utcTimeString } = params;

  // Decode the URL-encoded utcTimeString
  const decodedUtcTimeString = decodeURIComponent(utcTimeString);


  
  // Convert UTC to the user's local timezone using moment.js
  useEffect(() => {
    if (decodedUtcTimeString) {
      const localTimeFormatted = moment.utc(decodedUtcTimeString).local();
      setLocalTime(localTimeFormatted);
    }
  }, [decodedUtcTimeString]);
 

  return (
    <div className="flex relative items-center justify-center min-h-screen bg-cover bg-[url('/gradient-2.svg')]">
      <TimezoneButton />
      <div className="relative max-w-xl w-full">
        <Blob className="fill-purple-400 z-[1] size-96 -bottom-32 -right-32 absolute drop-shadow-2xl" />
        <div
          id="capture"
          className="bg-white backdrop-blur-2xl bg-opacity-55 z-10 relative rounded-[2.5rem] px-6 py-8 shadow-lg"
        >
          <p className="text-2xl text-gray-700 text-center">
            {localTime ? localTime.format("dddd") : "Loading..."}
          </p>

          <div className="p-4 my-4 text-2xl justify-center items-center gap-6 rounded-2xl flex">
            <div className="flex flex-col text-center">
              <h1 className="text-[8rem] leading-[1.2]">
                {localTime ? localTime.format("hh") : "--"}
              </h1>
              <p className="opacity-60">Hours</p>
            </div>
            <p className="text-[8rem] opacity-40 mb-14">:</p>
            <div className="flex flex-col text-center">
              <h1 className="text-[8rem] leading-[1.2]">
                {localTime ? localTime.format("mm") : "--"}
              </h1>
              <p className="opacity-60">Minutes</p>
            </div>
          </div>

          <Button className="text-lg mt-6 bg-white text-black h-16" size="lg" asChild>
            <Link href="/">Share your time</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
