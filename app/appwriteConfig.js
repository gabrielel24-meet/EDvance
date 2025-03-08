import { Client, Account } from "appwrite";

const appwriteClient = new Client();
appwriteClient
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your AppWrite endpoint
  .setProject("67b2217a00250075826a"); // Replace with your AppWrite Project ID

const account = new Account(appwriteClient);

export { account };