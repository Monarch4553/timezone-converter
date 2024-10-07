"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { TimePickerInput } from "./ui/time-picker/time-picker-input";
import { TimePeriodSelect } from "./ui/time-picker/period-select";
import { Button } from "./ui/button";

export function TimePickerInputBox({ date, setDate }) {
  const [period, setPeriod] = React.useState("PM");
  const [isAm, setIsAm] = React.useState(true);
  const minuteRef = React.useRef(null);
  const hourRef = React.useRef(null);
  // const secondRef = React.useRef(null);
  const periodRef = React.useRef(null);
  const togglePeriod = () => {
    setIsAm((prev) => !prev);
  };
  return (
    <div className="flex  justify-center items-center gap-2">
      <div className="grid  text-center">
        <Label htmlFor="hours" className="text-2xl">
          Hours
        </Label>
        <TimePickerInput
          picker="hours"
          period={period}
          date={date}
          setDate={setDate}
          ref={hourRef}
          onRightFocus={() => minuteRef.current?.focus()}
        />
      </div>
      <p className="text-[8rem]">:</p>
      <div className="grid  text-center">
        <Label htmlFor="minutes" className="text-2xl">
          Minutes
        </Label>
        <TimePickerInput
          picker="minutes"
          id="minutes12"
          date={date}
          setDate={setDate}
          ref={minuteRef}
          onLeftFocus={() => hourRef.current?.focus()}
          onRightFocus={() => periodRef.current?.focus()}
          // onRightFocus={() => secondRef.current?.focus()}
        />
      </div>
      {/* <p className="text-[8rem]">:</p> */}
      {/* For seconds */}
      {/* <div className="grid  text-center">
        <Label htmlFor="seconds" className="text-2xl">
          Seconds
        </Label>
        <TimePickerInput
          picker="seconds"
          id="seconds12"
          date={date}
          setDate={setDate}
          ref={secondRef}
          onLeftFocus={() => minuteRef.current?.focus()}
          onRightFocus={() => periodRef.current?.focus()}
        />
      </div> */}



      {/* AM/PM */}
      {/* <div className="flex flex-col    h-full  text-center">
        <Label htmlFor="period" className="text-2xl">
          Period
        </Label>
        <button className="text-[8rem]  w-52 flex-1" onClick={togglePeriod}>
          {isAm ? "AM" : "PM"}
        </button>
      </div> */}
    </div>
  );
}
