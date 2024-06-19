export const generateOTP= async()=> {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
  

// Function to check if OTP is expired
export const isOtpExpired = async(creationTime,expirationTime)=> {
  // Parse the creation time to a Date object
  const creationDate = new Date(creationTime);

  // Get the current time
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = currentDate - creationDate;

  // Convert the difference to minutes
  const diffInMinutes = diffInMs / (1000 * 60);

  // Check if the difference is greater than 5 minutes
  return diffInMinutes > expirationTime;
}