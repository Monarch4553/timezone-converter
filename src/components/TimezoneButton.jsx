"use client";
import { Globe } from "lucide-react";

// Server component
export default function TimezoneButton() {
  const [timeZone, setTimezone] = useState(null);
  useEffect(() => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(userTimeZone);
  }, []);

  return (
    <div className="px-4 items-center py-3 flex gap-2 bg-white shadow-lg rounded-full absolute bottom-6 right-6">
      <Globe strokeWidth={1.5} size={20} className="mt-[2px]" />
      <p className="text-sm">{timeZone}</p>
    </div>
  );
}
