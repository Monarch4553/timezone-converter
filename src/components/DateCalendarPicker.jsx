
import { Clock } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import moment from "moment";

const DateCalendarPicker = ({ date, setDate }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="px-4 cursor-pointer items-center py-3 flex gap-2 bg-white shadow-lg rounded-full absolute top-6 right-6">
          <Clock strokeWidth={2} size={18} className="mt-[2px]" />
          <p>{moment(date).format("MMMM Do, YYYY")}</p>{" "}
          {/* Display the formatted date */}
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={date}
          disabled={{
            before: new Date(), // Disable all dates before today
          }}
          onSelect={(selectedDate) => setDate(selectedDate || new Date())} // Update with selected date
          todayButton="Today" // Button to quickly select today's date
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateCalendarPicker;
