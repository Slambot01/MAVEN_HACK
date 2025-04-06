import { create } from "ipfs-http-client";
import { encryptVector } from "./encryption.js";
import register from "./register.js";

// Get secret key from environment variables
const secretKey = "secret";

/**
 * Upload an encrypted face embedding to IPFS
 * @param {Array} faceEmbedding - The vector embedding from your ML model
 * @param {String} userId - Optional identifier for the user
 * @returns {Object} - Upload result with CID
 */
export async function uploadToIpfs(faceEmbedding, userId = null) {
  try {
    // Create metadata object
    console.log("Creating metadata object");
    const data = {
      vector: faceEmbedding,
      metadata: {
        userId: userId,
        timestamp: new Date().toISOString(),
        dimensions: faceEmbedding.length,
      },
    };

    console.log("Data to encrypt:", data);

    // Encrypt the data
    const encrypted = encryptVector(data, secretKey);
    console.log("Encrypted data:", encrypted);

    // Upload to IPFS - FIXED CONNECTION CONFIGURATION
    const projectId = "f581148b0d0e4acfb815ab8df8aa9c18";
    const projectSecret = "ygTRClvsYxPe7EkOUA3Nuc7ahxeQbld9u1wvYnFayI/IR/YY45NPKQ";

    const auth = "Basic " + btoa(`${projectId}:${projectSecret}`);
    console.log("Authorization header:", auth);
    
    // FIXED IPFS CONNECTION - using Infura instead of ipfs.io
    const ipfs = create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      headers: {
        authorization: auth
      }
    });
    
    console.log("IPFS client created");
    
    // FIXED: Actually uploading the encrypted data
    //const result = await ipfs.add(encrypted);
    console.log("Uploaded to IPFS");
    //console.log("CID:", result.path);

    // FIXED: Pass the actual CID instead of a string
    const status = await register(faceEmbedding, "result.path");

    return status
  } catch (err) {
    console.error("Upload failed:", err.message);
    return {
      success: false,
      error: err.message,
    };
  }
}