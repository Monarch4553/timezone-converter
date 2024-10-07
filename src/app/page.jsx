"use client"
import { Blob } from "@/assets/icons";
import DateCalendarPicker from "@/components/DateCalendarPicker";
import { TimePickerInputBox } from "@/components/TimePickerInputBox";
import TimezoneButton from "@/components/TimezoneButton";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState, useEffect } from "react";
import moment from "moment"; // Importing moment.js
import Image from "next/image";

export default function Home() {
  const [date, setDate] = useState(moment()); // Initialize with the current date using moment
  const [isCopied, setIsCopied] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");

  // Function to generate the link when date changes
  const generateLink = (selectedDate) => {
    if (!selectedDate) return;

    // Format the date to UTC string using moment
    const utcString = moment(selectedDate).utc().format(); 

    // Generate the link with the UTC time
    const link = `${window.location.origin}/${utcString}`;
    setGeneratedLink(link);
  };

  // useEffect to update link whenever the date changes
  useEffect(() => {
    generateLink(date);
  }, [date]);

  // Handle copy functionality
  const handleCopy = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(generatedLink);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="grid overflow-hidden grid-cols-2 min-h-screen ">
      <div className="relative   w-full h-full">
    <Image fill alt="Chair with folders on it" src='https://images.pexels.com/photos/25194072/pexels-photo-25194072/free-photo-of-pile-of-leaflets-on-a-chair.jpeg'/>
      </div>
      <div className="flex items-center bg-cover bg-[url('/gradient.svg')] justify-center relative">
        <TimezoneButton />
        <DateCalendarPicker date={date} setDate={setDate} />

        <div className="relative max-w-lg w-full">
          <Blob className="fill-purple-400 z-[1] size-96 -bottom-32 -left-32 absolute drop-shadow-2xl" />
          <div className="bg-white backdrop-blur-2xl bg-opacity-55 z-10 relative rounded-[2.5rem] px-12 py-12 shadow-lg">
            {/* TimePickerInputBox provides the date in the given format */}
            <TimePickerInputBox date={date} setDate={(newDate) => setDate(moment(newDate))} />

            {/* Display and Copy Generated Link */}
            <div
              onClick={handleCopy}
              className="flex group items-center gap-2 bg-white py-2 pl-4 pr-2 mt-12 cursor-pointer border rounded-full justify-between"
            >
              <div className="">
                <p className="line-clamp-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {generatedLink || "Pick a time to generate a link"}
                </p>
              </div>
              <Button
                className={`text-base shrink-0 transition-all w-10 p-0 duration-300 ${
                  isCopied && "bg-green-500 hover:bg-green-500"
                }`}
                disabled={!generatedLink}
              >
                {isCopied ? <Check size={18} /> : <Copy size={18} />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
