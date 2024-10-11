"use client";
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



 
  
     
 
  
  // Function to generate the link when the date changes
  const generateLink = async (selectedDate) => {
    if (!selectedDate) return;

    // Format the date to UTC string using moment
    const utcString = moment(selectedDate).utc().format();

    // Call the API to encode the UTC string
    const response = await fetch("/api/encode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: utcString }),
    });

    if (response.ok) {
      const { encodedString } = await response.json();
      // Generate the link with the encoded string
      const link = `${window.location.origin}/${encodedString}`;
      setGeneratedLink(link);
    } else {
      console.error("Failed to encode date");
    }
  };

  // useEffect to update link whenever the date changes
  useEffect(() => {
    const timer = setTimeout(() => {
      generateLink(date);
    }, 300); // 1-second timeout

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
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
    <div className="grid overflow-hidden min-h-screen lg:grid-cols-2">
      <div className="relative hidden md:block w-full h-full">
        <Image
          fill
          priority
          className="object-cover"
          alt="Chair with folders on it"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes based on your layout
          src="https://images.pexels.com/photos/25194072/pexels-photo-25194072/free-photo-of-pile-of-leaflets-on-a-chair.jpeg"
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-cover bg-[url('/gradient.svg')] relative min-h-screen">
        {/* <TimezoneButton />
        <DateCalendarPicker date={date} setDate={setDate} /> */}

        <div className="relative max-w-lg w-full px-4">
          {/* Added px-4 for padding on smaller screens */}
          <Blob className="fill-purple-400 z-[1] size-96 -bottom-32 -left-32 absolute drop-shadow-2xl" />
          <div className="bg-white backdrop-blur-2xl bg-opacity-55 z-10 relative rounded-[2.5rem] py-8 px-4 md:px-8 md:py-12 shadow-lg">
            {/* TimePickerInputBox provides the date in the given format */}
            <TimePickerInputBox
              date={date}
              setDate={(newDate) => setDate(moment(newDate))}
            />

            {/* Display and Copy Generated Link */}
            <div
              onClick={handleCopy}
              className="flex group items-center gap-2 bg-white py-2 pl-4 pr-2 mt-2 sm:mt-12 cursor-pointer border rounded-full justify-between"
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
