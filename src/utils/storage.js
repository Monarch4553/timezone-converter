const map = {}; // This will store the encoded to original mappings

// Duration for 1 week in milliseconds
const ONE_WEEK =  7 * 24 * 60 * 60 * 1000;

// Function to clean up expired entries
const cleanUpExpiredEntries = () => {
  const now = Date.now();
  for (const encodedStr in map) {
    if (map[encodedStr].expiration < now) {
      delete map[encodedStr]; // Remove expired entry
    }
  }
  console.log('cleaning, items in memory:',map);

};



// Set an interval to clean up expired entries every day
setInterval(cleanUpExpiredEntries,24 * 60 * 60 * 1000); // Cleanup every 24 hours

export function store(encodedStr, original) {
  const expiration = Date.now() + ONE_WEEK; // Set expiration time
  map[encodedStr] = { original, expiration }; // Store original and expiration


}

export function retrieve(encodedStr) {
  const entry = map[encodedStr];

  // Return the original string if it exists
  return entry ? entry.original : null; // Return null if does not exist
}
