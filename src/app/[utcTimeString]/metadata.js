import moment from "moment";

// This function generates metadata (like OG tags) server-side
export async function generateMetadata({ params }) {
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

  return {
    title: `Local Time: ${localTimeFormatted || "Loading..."}`,
    description: `Shared time: ${localTimeFormatted || "Loading..."}`,
    openGraph: {
      title: `Local Time: ${localTimeFormatted || "Loading..."}`,
      description: `Shared time: ${localTimeFormatted || "Loading..."}`,
      url: `http://localhost:3000/${utcTimeString}`, // Keep this as the original URL for sharing
      images: [
        {
          url: `http://localhost:3000/path/to/generated/image.png`, // Adjust path
          alt: `Local Time: ${localTimeFormatted || "Time"}`,
        },
      ],
    },
  };
}
