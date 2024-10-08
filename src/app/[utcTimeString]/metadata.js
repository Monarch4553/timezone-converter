export default function generateMetadata() {


  return {
    title: ` Hey, Someone Shared Their Time!`,
    description: `To view their scheduled time in your format, click here`,
    openGraph: {
      title: `Hey, Someone Shared Their Time!`,
      description: `To view their scheduled time in your format, click here`,
      url: `http://localhost:3000`,
      images: [
        {
          url: `http://localhost:3000/path/to/generated/image.png`,
          alt: `Logo`,
        },
      ],
    },
  };
}
