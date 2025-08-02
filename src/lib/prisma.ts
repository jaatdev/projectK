
// Import the PrismaClient constructor from the Prisma package
import { PrismaClient } from "@prisma/client";


// This function creates a new instance of PrismaClient
// PrismaClient is used to interact with your database using Prisma ORM
const prismaClientSingleton = () => {
  return new PrismaClient();
};


// Extend the global object to optionally include a singleton Prisma client
// This prevents creating multiple PrismaClient instances in development (which can cause issues with hot reloading)
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;


// Use the existing Prisma client if it exists, otherwise create a new one
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();


// Export the Prisma client for use throughout the app
export default prisma;


// In development, store the Prisma client on the global object
// This avoids creating a new client every time the code reloads
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
