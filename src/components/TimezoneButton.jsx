// app/components/TimezoneButton.jsx
import { Globe } from "lucide-react";

// Server component
export default function TimezoneButton() {
  // Get the user's timezone on the server side
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className="px-4 items-center py-3 flex gap-2 bg-white shadow-lg rounded-full absolute bottom-6 right-6">
      <Globe strokeWidth={1.5} size={20} className="mt-[2px]" />
      <p className="text-sm">{userTimeZone}</p>
    </div>
  );
}
