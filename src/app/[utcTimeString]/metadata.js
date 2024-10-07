import moment from "moment";

// This function generates metadata (like OG tags) server-side
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
          url: `http://localhost:3000/path/to/generated/image.png`, // Adjust path
          alt: `Local Time: ${localTimeFormatted.format("HH:mm")}`,
        },
      ],
    },
  };
}
