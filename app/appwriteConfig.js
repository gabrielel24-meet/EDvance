import { Client, Account } from "appwrite";

const appwriteClient = new Client();
appwriteClient
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your AppWrite endpoint
  .setProject("67b2217a00250075826a"); // Replace with your AppWrite Project ID

const account = new Account(appwriteClient);

//Function to log in
const loginUser = async (email, password) => {
  try {
    return await account.createEmailPasswordSession(email, password); // Corrected function name
  } catch (error) {
    throw error;
  }
};

//Check if user is logged in
const getSession = async () => {
  try {
    return await account.get();
  } catch (error) {
    return null; // No active session
  }
};

//Logout function
const logoutUser = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

export { account, getSession, logoutUser };