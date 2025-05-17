import { create } from "ipfs-http-client";
import { encryptVector } from "./encryption.js";
import register from "./register.js";

// Configuration from environment variables
const config = {
  ipfs: {
    projectId: import.meta.env.VITE_IPFS_PROJECT_ID,
    projectSecret: import.meta.env.VITE_IPFS_PROJECT_SECRET,
    host: import.meta.env.VITE_IPFS_HOST,
    port: import.meta.env.VITE_IPFS_PORT,
    protocol: import.meta.env.VITE_IPFS_PROTOCOL,
  },
  secretKey: import.meta.env.VITE_SECRET_KEY,
};

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
    const encrypted = encryptVector(data, config.secretKey);
    console.log("Encrypted data:", encrypted);

    const auth =
      "Basic " + btoa(`${config.ipfs.projectId}:${config.ipfs.projectSecret}`);

    const ipfs = create({
      host: config.ipfs.host,
      port: config.ipfs.port,
      protocol: config.ipfs.protocol,
      headers: {
        authorization: auth,
      },
    });

    // ...existing code...
  } catch (err) {
    console.error("Upload failed:", err.message);
    return {
      success: false,
      error: err.message,
    };
  }
}
