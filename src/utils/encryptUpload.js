/* encryptUpload.js -> Encrypt the user's facial embedding (vector) and upload it securely to IPFS. 
Returns a CID which acts as a pointer to this encrypted data.
To run -> node app/src/encryptUpload.js
 Run below commands in main directory !
npm install ipfs-http-client crypto-js dotenv

<------------           JUST FOR KNOWLEDGE          ------------>
// IPFS tells us the name of the file(hash) , instead of the locationof the file instead (like https url)

// Flow -> 
/*
1) Generate facial embedings
2) Encrypt it (Using some form of key or something to encrypt)
3) Upload encrypted data to IPFS
4) Store CID (Some kind of signature)
Now authenticating (Do reverse)
5) Retrieve CID 
6) Fetch encrypted data from IPFS
7) decrypt data
8) compare vectors
facial vector →  Encrypt with secret key →  Upload to IPFS → Get CID
*/

/*
1) npm install ipfs-http-client crypto-js
2) 
*/

// app/src/encryptUpload.js
import { create } from "ipfs-http-client";
import { encryptVector } from "./encryption.js";
import register from "./register.js";

const projectId = "f581148b0d0e4acfb815ab8df8aa9c18";
const projectSecret = "ygTRClvsYxPe7EkOUA3Nuc7ahxeQbld9u1wvYnFayI/IR/YY45NPKQ";

const auth = "Basic " + btoa(`${projectId}:${projectSecret}`);
const ipfs = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: { authorization: auth },
});

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
    const data = {
      vector: faceEmbedding,
      metadata: {
        userId: userId,
        timestamp: new Date().toISOString(),
        dimensions: faceEmbedding.length,
      },
    };

    // Encrypt the data
    const encrypted = encryptVector(data, secretKey);

    // Upload to IPFS
    const result = await ipfs.add(encrypted);
    console.log("Uploaded to IPFS");
    console.log("CID:", result.path);

    await register(faceEmbedding, result.path);

    return {
      success: true,
      cid: result.path,
      userId: userId,
      timestamp: new Date().toISOString(),
    };
  } catch (err) {
    console.error("Upload failed:", err.message);
    return {
      success: false,
      error: err.message,
    };
  }
}
