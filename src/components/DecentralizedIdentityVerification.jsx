// import React, { useState, useEffect } from "react";
// import {
//   User,
//   FileText,
//   CheckCircle,
//   Shield,
//   Database,
//   Key,
//   Camera,
//   Loader,
//   Lock,
//   ThumbsUp,
// } from "lucide-react";

// const DecentralizedIdentityVerification = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [verificationStatus, setVerificationStatus] = useState("waiting");
//   const [activeTab, setActiveTab] = useState("verification");
//   const [faceScanComplete, setFaceScanComplete] = useState(false);
//   const [showAnimation, setShowAnimation] = useState(false);
//   const [zkProofGenerated, setZkProofGenerated] = useState(false);

//   // Demo steps progress handler
//   const handleNextStep = () => {
//     if (currentStep < 6) {
//       setCurrentStep(currentStep + 1);

//       if (currentStep === 5) {
//         setVerificationStatus("complete");
//       } else if (currentStep === 1) {
//         setVerificationStatus("scanning");
//         setShowAnimation(true);
//       } else {
//         setVerificationStatus("processing");
//       }

//       // For demo purposes: complete face scan after 3 seconds when on step 2
//       if (currentStep === 2) {
//         setTimeout(() => setFaceScanComplete(true), 3000);
//       }

//       // Generate ZK proof when on step 4
//       if (currentStep === 4) {
//         setTimeout(() => setZkProofGenerated(true), 2500);
//       }
//     }
//   };

//   useEffect(() => {
//     // Automatically progress to next step after face scan completes
//     if (faceScanComplete && currentStep === 2) {
//       const timer = setTimeout(() => handleNextStep(), 1000);
//       return () => clearTimeout(timer);
//     }

//     // Automatically progress to next step after ZK proof is generated
//     if (zkProofGenerated && currentStep === 4) {
//       const timer = setTimeout(() => handleNextStep(), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [faceScanComplete, zkProofGenerated, currentStep]);

//   // Reset animations when changing steps
//   useEffect(() => {
//     setShowAnimation(false);
//     const timer = setTimeout(() => {
//       if (currentStep === 2 || currentStep === 3 || currentStep === 4) {
//         setShowAnimation(true);
//       }
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [currentStep]);

//   return (
//     <div className="flex h-screen bg-gray-900 text-white">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
//         <div className="p-4 flex items-center justify-center border-b border-gray-700">
//           <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full h-10 w-10 flex items-center justify-center mr-2">
//             <Shield size={20} />
//           </div>
//           <div className="font-bold text-xl">dKYC</div>
//         </div>

//         <div className="flex-1 p-4">
//           <nav className="space-y-2">
//             <button
//               className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${
//                 activeTab === "dashboard" ? "bg-gray-700" : "hover:bg-gray-700"
//               }`}
//               onClick={() => setActiveTab("dashboard")}
//             >
//               <Database size={18} />
//               <span>Dashboard</span>
//             </button>

//             <button
//               className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${
//                 activeTab === "verification"
//                   ? "bg-gradient-to-r from-blue-600 to-purple-600"
//                   : "hover:bg-gray-700"
//               }`}
//               onClick={() => setActiveTab("verification")}
//             >
//               <User size={18} />
//               <span>Identity Verification</span>
//             </button>

//             <button
//               className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${
//                 activeTab === "proofs" ? "bg-gray-700" : "hover:bg-gray-700"
//               }`}
//               onClick={() => setActiveTab("proofs")}
//             >
//               <FileText size={18} />
//               <span>My Proofs</span>
//             </button>

//             <button
//               className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg ${
//                 activeTab === "settings" ? "bg-gray-700" : "hover:bg-gray-700"
//               }`}
//               onClick={() => setActiveTab("settings")}
//             >
//               <Key size={18} />
//               <span>Settings</span>
//             </button>
//           </nav>
//         </div>

//         {/* Wallet Connection */}
//         <div className="p-4 border-t border-gray-700">
//           <div className="flex items-center justify-between bg-gray-700 rounded-lg p-2">
//             <div className="flex items-center space-x-2">
//               <div className="h-3 w-3 rounded-full bg-green-400"></div>
//               <span className="text-sm">Connected</span>
//             </div>
//             <div className="text-xs bg-gray-800 px-2 py-1 rounded">
//               0x6F4...1a2B
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-gray-800 p-4 border-b border-gray-700">
//           <h1 className="text-xl font-semibold">
//             Decentralized AI-Powered Identity Verification
//           </h1>
//           <p className="text-sm text-gray-400 mt-1">
//             Verify your identity without compromising privacy using AI and
//             zero-knowledge proofs
//           </p>
//         </header>

//         {/* Main Content Area */}
//         <div className="flex-1 p-6 overflow-auto">
//           {/* Verification Steps */}
//           <div className="mb-8">
//             <div className="flex items-center justify-between">
//               {[1, 2, 3, 4, 5, 6].map((step) => (
//                 <div key={step} className="flex flex-col items-center">
//                   <div
//                     className={`relative flex items-center justify-center rounded-full h-12 w-12 ${
//                       currentStep > step
//                         ? "bg-green-500"
//                         : currentStep === step
//                         ? "bg-gradient-to-r from-blue-500 to-purple-600"
//                         : "bg-gray-700"
//                     } ${currentStep === step ? "animate-pulse" : ""}`}
//                   >
//                     {currentStep > step ? (
//                       <CheckCircle size={24} />
//                     ) : (
//                       <span>{step}</span>
//                     )}
//                   </div>
//                   <div className="text-xs text-gray-400 mt-2 text-center max-w-20">
//                     {step === 1 && "ID Upload"}
//                     {step === 2 && "Facial Scan"}
//                     {step === 3 && "AI Verification"}
//                     {step === 4 && "ZK Proof"}
//                     {step === 5 && "Blockchain Storage"}
//                     {step === 6 && "Identity Ready"}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Progress Bar */}
//             <div className="mt-4 h-1 w-full bg-gray-700 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
//                 style={{ width: `${(currentStep - 1) * 20}%` }}
//               ></div>
//             </div>
//           </div>

//           {/* Verification Area */}
//           <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
//             <div className="flex flex-col items-center">
//               {/* Current Step UI - ID Upload */}
//               {currentStep === 1 && (
//                 <div className="text-center">
//                   <div className="mb-4 bg-gray-700 rounded-xl p-8 inline-block">
//                     <FileText size={64} className="text-gray-400" />
//                   </div>
//                   <h2 className="text-xl font-semibold mb-2">
//                     Upload Government ID
//                   </h2>
//                   <p className="text-gray-400 mb-6 max-w-md">
//                     Upload a valid government-issued ID. Your data will be
//                     processed securely and won't be stored.
//                   </p>
//                   <div className="flex space-x-4">
//                     <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">
//                       Upload ID
//                     </button>
//                     <button
//                       className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90"
//                       onClick={handleNextStep}
//                     >
//                       Continue
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Facial Scan Step */}
//               {currentStep === 2 && (
//                 <div className="text-center">
//                   <div className="mb-4 bg-gray-700 rounded-xl p-4 inline-block relative overflow-hidden h-64 w-64">
//                     <Camera size={64} className="text-gray-400 mx-auto my-12" />
//                     {showAnimation && !faceScanComplete && (
//                       <div
//                         className="absolute left-0 right-0 h-1 bg-blue-500"
//                         style={{
//                           animation: "scan 2s linear infinite",
//                           boxShadow:
//                             "0 0 10px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)",
//                         }}
//                       ></div>
//                     )}
//                     {faceScanComplete && (
//                       <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-80">
//                         <CheckCircle size={64} className="text-green-500" />
//                       </div>
//                     )}
//                   </div>
//                   <h2 className="text-xl font-semibold mb-2">
//                     Face Verification
//                   </h2>
//                   <p className="text-gray-400 mb-6 max-w-md">
//                     {faceScanComplete
//                       ? "Scan complete! Proceeding to next step..."
//                       : "Position your face within the frame. This scan creates a biometric hash that never leaves your device."}
//                   </p>
//                   {!faceScanComplete && (
//                     <button
//                       className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90"
//                       onClick={() => setFaceScanComplete(true)}
//                     >
//                       Start Scan
//                     </button>
//                   )}
//                 </div>
//               )}

//               {/* AI Verification Step */}
//               {currentStep === 3 && (
//                 <div className="text-center">
//                   <div className="mb-4 bg-gray-700 rounded-xl p-8 inline-block h-64 w-64 flex flex-col items-center justify-center">
//                     {showAnimation && (
//                       <div className="relative">
//                         <Loader
//                           size={64}
//                           className="text-blue-500 animate-spin"
//                         />
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <Shield size={32} className="text-purple-500" />
//                         </div>
//                       </div>
//                     )}
//                     <div className="mt-6 w-full">
//                       <div className="h-4 bg-gray-600 rounded-full mb-2">
//                         <div className="h-full bg-blue-500 rounded-full w-3/4"></div>
//                       </div>
//                       <div className="flex justify-between text-xs text-gray-400">
//                         <span>Processing...</span>
//                         <span>75%</span>
//                       </div>
//                     </div>
//                   </div>
//                   <h2 className="text-xl font-semibold mb-2">
//                     AI Document Verification
//                   </h2>
//                   <p className="text-gray-400 mb-6 max-w-md">
//                     Our AI is verifying document authenticity and extracting
//                     relevant identity features.
//                   </p>
//                   <button
//                     className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90"
//                     onClick={handleNextStep}
//                   >
//                     Continue
//                   </button>
//                 </div>
//               )}

//               {/* ZK Proof Generation Step */}
//               {currentStep === 4 && (
//                 <div className="text-center">
//                   <div className="mb-4 bg-gray-700 rounded-xl p-8 inline-block h-64 w-64 flex items-center justify-center relative">
//                     <Lock size={64} className="text-gray-400" />
//                     {showAnimation && !zkProofGenerated && (
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <div className="w-32 h-32 border-4 border-purple-500 rounded-full opacity-20"></div>
//                         <div className="absolute w-32 h-32 border-t-4 border-purple-500 rounded-full animate-spin"></div>
//                       </div>
//                     )}
//                     {zkProofGenerated && (
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <CheckCircle size={64} className="text-green-500" />
//                       </div>
//                     )}
//                   </div>
//                   <h2 className="text-xl font-semibold mb-2">
//                     Creating Zero-Knowledge Proof
//                   </h2>
//                   <p className="text-gray-400 mb-6 max-w-md">
//                     {zkProofGenerated
//                       ? "ZK proof successfully generated!"
//                       : "Generating cryptographic proof that verifies your identity without revealing personal data."}
//                   </p>
//                   {!zkProofGenerated && (
//                     <button
//                       className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90"
//                       onClick={() => setZkProofGenerated(true)}
//                     >
//                       Generate Proof
//                     </button>
//                   )}
//                 </div>
//               )}

//               {/* Blockchain Storage Step */}
//               {currentStep === 5 && (
//                 <div className="text-center">
//                   <div className="mb-4 bg-gray-700 rounded-xl p-8 inline-block h-64 w-64 flex items-center justify-center">
//                     <div className="space-y-4">
//                       <div className="flex items-center space-x-2 text-sm">
//                         <div className="animate-pulse h-3 w-3 rounded-full bg-green-400"></div>
//                         <span>Connected to Blockchain</span>
//                       </div>
//                       <div className="p-4 bg-gray-800 rounded text-left text-xs font-mono break-all">
//                         <div>Hash: 0x7f83b1...6fb04d5</div>
//                         <div className="mt-2">
//                           Status:{" "}
//                           <span className="text-green-400">Confirmed</span>
//                         </div>
//                         <div className="mt-2">Block: #18457653</div>
//                       </div>
//                       <div className="flex justify-center">
//                         <CheckCircle size={24} className="text-green-500" />
//                       </div>
//                     </div>
//                   </div>
//                   <h2 className="text-xl font-semibold mb-2">
//                     Storing Verification on Blockchain
//                   </h2>
//                   <p className="text-gray-400 mb-6 max-w-md">
//                     Your identity proof is being securely stored on the
//                     blockchain. Only you control access to this data.
//                   </p>
//                   <button
//                     className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90"
//                     onClick={handleNextStep}
//                   >
//                     Complete Verification
//                   </button>
//                 </div>
//               )}

//               {/* Complete Step */}
//               {currentStep === 6 && (
//                 <div className="text-center">
//                   <div className="mb-4 bg-green-500 bg-opacity-20 rounded-xl p-8 inline-block h-64 w-64 flex items-center justify-center">
//                     <div className="relative">
//                       <div className="absolute animate-ping opacity-75 h-16 w-16 rounded-full bg-green-500"></div>
//                       <div className="relative rounded-full h-16 w-16 bg-green-500 flex items-center justify-center">
//                         <ThumbsUp size={32} className="text-white" />
//                       </div>
//                     </div>
//                   </div>
//                   <h2 className="text-xl font-semibold mb-2">
//                     Verification Complete!
//                   </h2>
//                   <p className="text-gray-400 mb-6 max-w-md">
//                     Your decentralized identity has been verified and securely
//                     stored. You can now use it across any compatible service.
//                   </p>
//                   <div className="flex space-x-4 justify-center">
//                     <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">
//                       View My Proofs
//                     </button>
//                     <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90">
//                       Use My Identity
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Information Card */}
//               <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mt-6 w-full">
//                 <h3 className="text-lg font-semibold mb-3">
//                   How It Works: Web3 + AI Privacy
//                 </h3>
//                 <div className="grid grid-cols-3 gap-6">
//                   <div className="bg-gray-700 p-4 rounded-lg">
//                     <div className="flex items-center mb-2">
//                       <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
//                         <User size={16} />
//                       </div>
//                       <h4 className="font-medium">AI Processing</h4>
//                     </div>
//                     <p className="text-sm text-gray-400">
//                       Our AI extracts biometric features without storing raw
//                       images. Your data never leaves your device.
//                     </p>
//                   </div>

//                   <div className="bg-gray-700 p-4 rounded-lg">
//                     <div className="flex items-center mb-2">
//                       <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center mr-2">
//                         <Shield size={16} />
//                       </div>
//                       <h4 className="font-medium">Zero-Knowledge Proofs</h4>
//                     </div>
//                     <p className="text-sm text-gray-400">
//                       ZK proofs cryptographically verify your identity without
//                       revealing any personal information.
//                     </p>
//                   </div>

//                   <div className="bg-gray-700 p-4 rounded-lg">
//                     <div className="flex items-center mb-2">
//                       <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center mr-2">
//                         <Database size={16} />
//                       </div>
//                       <h4 className="font-medium">Blockchain Storage</h4>
//                     </div>
//                     <p className="text-sm text-gray-400">
//                       Only encrypted hashes are stored on-chain. No central
//                       database means no single point of failure.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DecentralizedIdentityVerification;

///22222///

// import React, { useState } from "react";
// import { Camera, ShieldCheck, Lock, Check, ArrowRight } from "lucide-react";

// const DecentralizedIdentityVerification = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [photoID, setPhotoID] = useState(null);
//   const [livePhoto, setLivePhoto] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleUploadID = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setPhotoID(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   const handleCaptureSelfie = () => {
//     // Simulating camera capture
//     setLivePhoto("/api/placeholder/320/320");
//   };

//   const handleNextStep = () => {
//     if (currentStep < 4) {
//       setCurrentStep(currentStep + 1);
//     }

//     // Simulate processing when submitting
//     if (currentStep === 2) {
//       setIsProcessing(true);
//       setTimeout(() => {
//         setIsProcessing(false);
//         setCurrentStep(3);
//       }, 3000);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-xl p-6 max-w-3xl mx-auto">
//       {/* Progress bar */}
//       <div className="mb-8">
//         <div className="flex justify-between mb-2">
//           {["ID Upload", "Facial Verification", "Processing", "Complete"].map(
//             (step, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div
//                   className={`w-8 h-8 rounded-full flex items-center justify-center
//                 ${
//                   currentStep > index + 1
//                     ? "bg-green-500 text-white"
//                     : currentStep === index + 1
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-500"
//                 }`}
//                 >
//                   {currentStep > index + 1 ? <Check size={16} /> : index + 1}
//                 </div>
//                 <span className="text-xs mt-1">{step}</span>
//               </div>
//             )
//           )}
//         </div>
//         <div className="w-full bg-gray-200 h-2 rounded-full">
//           <div
//             className="bg-blue-600 h-2 rounded-full transition-all duration-300"
//             style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Step 1: ID Upload */}
//       {currentStep === 1 && (
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Upload Photo ID</h3>
//           <p className="text-gray-600 mb-6">
//             Please upload a clear photo of your government-issued ID
//           </p>

//           {!photoID ? (
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 text-center">
//               <input
//                 type="file"
//                 id="id-upload"
//                 className="hidden"
//                 onChange={handleUploadID}
//                 accept="image/*"
//               />
//               <label htmlFor="id-upload" className="cursor-pointer">
//                 <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//                   <svg
//                     width="32"
//                     height="32"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//                     <polyline points="17 8 12 3 7 8"></polyline>
//                     <line x1="12" y1="3" x2="12" y2="15"></line>
//                   </svg>
//                 </div>
//                 <p className="text-blue-600 font-medium">Click to upload ID</p>
//                 <p className="text-gray-500 text-sm mt-1">
//                   Passport, Driver's License, or National ID
//                 </p>
//               </label>
//             </div>
//           ) : (
//             <div className="mb-6">
//               <div className="relative w-full h-64 bg-gray-50 rounded-lg overflow-hidden mb-3">
//                 <img
//                   src={photoID}
//                   alt="ID Document"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   className="text-blue-600 text-sm"
//                   onClick={() => setPhotoID(null)}
//                 >
//                   Change photo
//                 </button>
//                 <div className="flex items-center text-green-600 text-sm">
//                   <Check size={16} className="mr-1" />
//                   ID uploaded
//                 </div>
//               </div>
//             </div>
//           )}

//           <button
//             className={`w-full py-3 flex items-center justify-center rounded-md text-white font-medium ${
//               photoID
//                 ? "bg-blue-600 hover:bg-blue-700"
//                 : "bg-gray-300 cursor-not-allowed"
//             }`}
//             onClick={handleNextStep}
//             disabled={!photoID}
//           >
//             Continue <ArrowRight size={16} className="ml-2" />
//           </button>
//         </div>
//       )}

//       {/* Step 2: Facial Verification */}
//       {currentStep === 2 && (
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Facial Verification</h3>
//           <p className="text-gray-600 mb-6">
//             Take a selfie for facial features verification
//           </p>

//           {!livePhoto ? (
//             <div className="border border-gray-300 rounded-lg p-4 mb-6">
//               <div className="bg-gray-800 h-64 rounded-lg flex items-center justify-center mb-4">
//                 <Camera size={48} className="text-gray-400" />
//               </div>
//               <div className="text-center">
//                 <button
//                   className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//                   onClick={handleCaptureSelfie}
//                 >
//                   Capture Photo
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="mb-6">
//               <div className="relative w-full h-64 bg-gray-50 rounded-lg overflow-hidden mb-3">
//                 <img
//                   src={livePhoto}
//                   alt="Selfie"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <div className="flex justify-between">
//                 <button
//                   className="text-blue-600 text-sm"
//                   onClick={() => setLivePhoto(null)}
//                 >
//                   Retake photo
//                 </button>
//                 <div className="flex items-center text-green-600 text-sm">
//                   <Check size={16} className="mr-1" />
//                   Selfie captured
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="flex space-x-4">
//             <button
//               className="w-1/2 py-3 bg-gray-200 hover:bg-gray-300 rounded-md font-medium"
//               onClick={() => setCurrentStep(1)}
//             >
//               Back
//             </button>
//             <button
//               className={`w-1/2 py-3 rounded-md text-white font-medium ${
//                 livePhoto
//                   ? "bg-blue-600 hover:bg-blue-700"
//                   : "bg-gray-300 cursor-not-allowed"
//               }`}
//               onClick={handleNextStep}
//               disabled={!livePhoto}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Step 3: Processing */}
//       {currentStep === 3 && (
//         <div className="text-center py-6">
//           <div className="mb-6">
//             {isProcessing ? (
//               <div className="mx-auto w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//             ) : (
//               <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//                 <ShieldCheck size={32} className="text-green-600" />
//               </div>
//             )}
//           </div>

//           <h3 className="text-xl font-semibold mb-4">
//             {isProcessing
//               ? "Processing Your Information"
//               : "Processing Complete"}
//           </h3>

//           <ul className="text-left max-w-sm mx-auto mb-6 space-y-3">
//             <li className="flex items-center">
//               <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
//                 <Check size={12} className="text-green-600" />
//               </div>
//               <span>Facial embeddings extracted</span>
//             </li>
//             <li className="flex items-center">
//               <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
//                 <Check size={12} className="text-green-600" />
//               </div>
//               <span>Features hashed and stored on-chain</span>
//             </li>
//             <li className="flex items-center">
//               <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
//                 <Check size={12} className="text-green-600" />
//               </div>
//               <span>Encrypted data stored on IPFS</span>
//             </li>
//           </ul>

//           {!isProcessing && (
//             <button
//               className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium"
//               onClick={() => setCurrentStep(4)}
//             >
//               View Credential
//             </button>
//           )}
//         </div>
//       )}

//       {/* Step 4: Complete */}
//       {currentStep === 4 && (
//         <div className="text-center py-6">
//           <div className="mb-6">
//             <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//               <Check size={32} className="text-green-600" />
//             </div>
//           </div>

//           <h3 className="text-xl font-semibold mb-4">
//             Maven Identity Created!
//           </h3>
//           <p className="text-gray-600 mb-6">
//             Your decentralized identity credential has been created
//           </p>

//           <div className="bg-gray-50 rounded-lg p-4 mb-6 max-w-sm mx-auto">
//             <div className="flex items-center mb-3">
//               <Lock size={18} className="text-blue-600 mr-2" />
//               <span className="font-medium">Privacy Guaranteed</span>
//             </div>
//             <p className="text-sm text-gray-600 text-left">
//               Your raw data never left your device. Only encrypted facial
//               embeddings are stored securely using blockchain technology.
//             </p>
//           </div>

//           <button
//             className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium"
//             onClick={() => (window.location.href = "/dashboard")}
//           >
//             Go to Dashboard
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// const Registration = () => {
//   const [showVerification, setShowVerification] = useState(false);

//   const handleStartRegistration = () => {
//     setShowVerification(true);
//   };

//   return (
//     <section className="bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-16 px-4">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold mb-4 text-center">
//           Register for Maven Identity
//         </h2>
//         <p className="text-lg text-center mb-12 max-w-2xl mx-auto opacity-90">
//           Create your decentralized identity credential in minutes with our
//           privacy-preserving verification process
//         </p>

//         {!showVerification ? (
//           <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl">
//             <div className="grid md:grid-cols-2 gap-8">
//               {/* How it works section */}
//               <div className="space-y-6">
//                 <div className="flex items-center space-x-3">
//                   <div className="bg-white/20 rounded-full p-2">
//                     <svg
//                       width="24"
//                       height="24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <circle cx="12" cy="12" r="10" stroke="#fff"></circle>
//                       <path
//                         d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
//                         stroke="#fff"
//                       ></path>
//                       <line
//                         x1="12"
//                         y1="17"
//                         x2="12.01"
//                         y2="17"
//                         stroke="#fff"
//                       ></line>
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-semibold">How It Works</h3>
//                 </div>

//                 <ul className="space-y-3 pl-4">
//                   <li className="flex items-center">
//                     <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 text-sm">
//                       1
//                     </div>
//                     <span>Scan your ID document</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 text-sm">
//                       2
//                     </div>
//                     <span>Complete facial recognition</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 text-sm">
//                       3
//                     </div>
//                     <span>Create zero-knowledge proof</span>
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 text-sm">
//                       4
//                     </div>
//                     <span>Receive your blockchain credential</span>
//                   </li>
//                 </ul>

//                 <div className="bg-white/10 rounded-lg p-4 mt-6">
//                   <div className="flex items-center mb-2">
//                     <Lock size={16} className="mr-2" />
//                     <span className="font-medium">Privacy Guaranteed</span>
//                   </div>
//                   <p className="text-sm opacity-90">
//                     Your personal data never leaves your device. Only encrypted
//                     proofs are stored on the blockchain.
//                   </p>
//                 </div>
//               </div>

//               {/* Start verification section */}
//               <div className="flex flex-col justify-center items-center space-y-6">
//                 <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-3">
//                   <ShieldCheck size={48} />
//                 </div>
//                 <h3 className="text-xl font-semibold text-center">
//                   Ready to create your digital identity?
//                 </h3>
//                 <p className="text-center opacity-90">
//                   Get verified in under 5 minutes and access the full power of
//                   decentralized applications
//                 </p>
//                 <button
//                   type="button"
//                   className="mt-4 bg-white text-blue-900 py-4 px-8 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-50 transition-colors w-full md:w-auto"
//                   onClick={handleStartRegistration}
//                 >
//                   Begin Verification
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="verification-container">
//             <DecentralizedIdentityVerification />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Registration;

// 33//

// import React, { useState } from "react";
// import { Camera, ShieldCheck, Lock, Check, ArrowRight } from "lucide-react";
// import "./DecentralizedIdentityVerification.css";

// const DecentralizedIdentityVerification = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [photoID, setPhotoID] = useState(null);
//   const [livePhoto, setLivePhoto] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleUploadID = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setPhotoID(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   const handleCaptureSelfie = () => {
//     // Simulating camera capture
//     // In a real implementation, you would use the device camera
//     const mockSelfieUrl = "https://via.placeholder.com/320";
//     setLivePhoto(mockSelfieUrl);
//   };

//   const handleNextStep = () => {
//     if (currentStep < 4) {
//       setCurrentStep(currentStep + 1);
//     }

//     // Simulate processing when submitting
//     if (currentStep === 2) {
//       setIsProcessing(true);
//       setTimeout(() => {
//         setIsProcessing(false);
//         setCurrentStep(3);
//       }, 3000);
//     }
//   };

//   return (
//     <div className="verification-panel">
//       {/* Progress bar */}
//       <div className="progress-container">
//         <div className="step-indicators">
//           {["ID Upload", "Facial Verification", "Processing", "Complete"].map(
//             (step, index) => (
//               <div key={index} className="step-indicator">
//                 <div
//                   className={`step-circle ${
//                     currentStep > index + 1
//                       ? "completed"
//                       : currentStep === index + 1
//                       ? "active"
//                       : ""
//                   }`}
//                 >
//                   {currentStep > index + 1 ? <Check size={16} /> : index + 1}
//                 </div>
//                 <span className="step-label">{step}</span>
//               </div>
//             )
//           )}
//         </div>
//         <div className="progress-bar">
//           <div
//             className="progress-fill"
//             style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Step 1: ID Upload */}
//       {currentStep === 1 && (
//         <div className="step-content">
//           <h3 className="step-title">Upload Photo ID</h3>
//           <p className="step-description">
//             Please upload a clear photo of your government-issued ID
//           </p>

//           {!photoID ? (
//             <div className="upload-container">
//               <input
//                 type="file"
//                 id="id-upload"
//                 className="file-input"
//                 onChange={handleUploadID}
//                 accept="image/*"
//               />
//               <label htmlFor="id-upload" className="upload-label">
//                 <div className="upload-icon">
//                   <svg
//                     width="32"
//                     height="32"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//                     <polyline points="17 8 12 3 7 8"></polyline>
//                     <line x1="12" y1="3" x2="12" y2="15"></line>
//                   </svg>
//                 </div>
//                 <p className="upload-text">Click to upload ID</p>
//                 <p className="upload-subtext">
//                   Passport, Driver's License, or National ID
//                 </p>
//               </label>
//             </div>
//           ) : (
//             <div className="preview-container">
//               <div className="id-preview">
//                 <img
//                   src={photoID}
//                   alt="ID Document"
//                   className="preview-image"
//                 />
//               </div>
//               <div className="preview-actions">
//                 <button
//                   className="change-button"
//                   onClick={() => setPhotoID(null)}
//                 >
//                   Change photo
//                 </button>
//                 <div className="upload-status">
//                   <Check size={16} className="status-icon" />
//                   ID uploaded
//                 </div>
//               </div>
//             </div>
//           )}

//           <button
//             className={`next-button ${!photoID ? "disabled" : ""}`}
//             onClick={() => handleNextStep()}
//             disabled={!photoID}
//           >
//             Continue <ArrowRight size={16} className="button-icon" />
//           </button>
//         </div>
//       )}

//       {/* {currentStep === 2 && (
//         <div className="step-content">
//           <h3 className="step-title">Facial Verification</h3>
//           <p className="step-description">
//             Take a selfie for facial features verification
//           </p>

//           {!livePhoto ? (
//             <div className="camera-container">
//               <div className="camera-preview">
//                 <video
//                   ref={(ref) => {
//                     if (ref && !ref.srcObject) {
//                       navigator.mediaDevices
//                         .getUserMedia({ video: true })
//                         .then((stream) => {
//                           ref.srcObject = stream;
//                           ref.onloadedmetadata = () => {
//                             ref.play();
//                           };
//                         })
//                         .catch((err) => {
//                           console.error("Camera access error:", err);
//                         });
//                     }
//                   }}
//                   onLoadedMetadata={(e) => e.target.play()}
//                   autoPlay
//                   playsInline
//                   muted
//                   className="camera-feed"
//                 />
//               </div>
//               <div className="camera-actions"> */}
//       {/* <button
//                   className="capture-button"
//                   onClick={() => {
//                     const video = document.querySelector("video");
//                     const canvas = document.createElement("canvas");
//                     canvas.width = video.videoWidth;
//                     canvas.height = video.videoHeight;
//                     const context = canvas.getContext("2d");
//                     context.drawImage(video, 0, 0, canvas.width, canvas.height);
//                     const photoData = canvas.toDataURL("image/png");
//                     setLivePhoto(photoData);

//                     // Stop camera after capture
//                     const tracks = video.srcObject?.getTracks();
//                     tracks?.forEach((track) => track.stop());
//                     video.srcObject = null;
//                   }}
//                 >
//                   Capture Photo
//                 </button> */}
//       {/* </div>
//             </div>
//           ) : (
//             <div className="preview-container">
//               <div className="selfie-preview">
//                 <img src={livePhoto} alt="Selfie" className="preview-image" />
//               </div>
//               <div className="preview-actions">
//                 <button
//                   className="change-button"
//                   onClick={() => setLivePhoto(null)}
//                 >
//                   Retake photo
//                 </button>
//                 <div className="upload-status">
//                   <Check size={16} className="status-icon" />
//                   Selfie captured
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="button-group">
//             <button className="back-button" onClick={() => setCurrentStep(1)}>
//               Back
//             </button>
//             <button
//               className={`submit-button ${!livePhoto ? "disabled" : ""}`}
//               onClick={handleNextStep}
//               disabled={!livePhoto}
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       )} */}

//       {/* Step 3: Processing
//       {currentStep === 3 && (
//         <div className="processing-content">
//           <div className="processing-icon-container">
//             {isProcessing ? (
//               <div className="loading-spinner"></div>
//             ) : (
//               <div className="success-icon">
//                 <ShieldCheck size={32} className="shield-check-icon" />
//               </div>
//             )}
//           </div>

//           <h3 className="processing-title">
//             {isProcessing
//               ? "Processing Your Information"
//               : "Processing Complete"}
//           </h3>

//           <ul className="processing-steps">
//             <li className="processing-step">
//               <div className="step-check">
//                 <Check size={12} className="check-icon" />
//               </div>
//               <span>Facial embeddings extracted</span>
//             </li>
//             <li className="processing-step">
//               <div className="step-check">
//                 <Check size={12} className="check-icon" />
//               </div>
//               <span>Features hashed and stored on-chain</span>
//             </li>
//             <li className="processing-step">
//               <div className="step-check">
//                 <Check size={12} className="check-icon" />
//               </div>
//               <span>Encrypted data stored on IPFS</span>
//             </li>
//           </ul> */}
//       {/*
//           {!isProcessing && (
//             <button className="view-button" onClick={() => setCurrentStep(4)}>
//               View Credential
//             </button>
//           )}
//         </div>
//       )} */}

//       {/* Step 4: Complete */}
//       {/* {currentStep === 4 && (
//         <div className="complete-content">
//           <div className="complete-icon">
//             <Check size={32} className="check-icon" />
//           </div>

//           <h3 className="complete-title">Maven Identity Created!</h3>
//           <p className="complete-description">
//             Your decentralized identity credential has been created
//           </p>

//           <div className="privacy-note">
//             <div className="note-header">
//               <Lock size={18} className="lock-icon" />
//               <span className="note-title">Privacy Guaranteed</span>
//             </div>
//             <p className="note-text">
//               Your raw data never left your device. Only encrypted facial
//               embeddings are stored securely using blockchain technology.
//             </p>
//           </div>

//           <button
//             className="dashboard-button"
//             onClick={() => (window.location.href = "/dashboard")}
//           >
//             Go to Dashboard
//           </button>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default DecentralizedIdentityVerification;
import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { uploadToIpfs } from "../utils/encryptUpload";
import axios from "axios";
import "./DecentralizedIdentityVerification.css";

const DecentralizedIdentityVerification = () => {
  const [photoID, setPhotoID] = useState(null);

  const handleUploadID = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoID(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="verification-panel">
      <div className="step-content">
        <h3 className="step-title">Upload Photo ID</h3>
        <p className="step-description">
          Please upload a clear photo of your government-issued ID
        </p>

        {!photoID ? (
          <div className="upload-container">
            <input
              type="file"
              id="id-upload"
              className="file-input"
              onChange={handleUploadID}
              accept="image/*"
            />
            <label htmlFor="id-upload" className="upload-label">
              <div className="upload-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <p className="upload-text">Click to upload ID</p>
              <p className="upload-subtext">
                Passport, Driver's License, or National ID
              </p>
            </label>
          </div>
        ) : (
          <div className="preview-container">
            <div className="id-preview">
              <img src={photoID} alt="ID Document" className="preview-image" />
            </div>
            <div className="preview-actions">
              <button
                className="change-button"
                onClick={() => setPhotoID(null)}
              >
                Change photo
              </button>
              <div className="upload-status">
                <Check size={16} className="status-icon" />
                ID uploaded
              </div>
            </div>
          </div>
        )}

        <button
          className={`next-button ${!photoID ? "disabled" : ""}`}
          disabled={!photoID}
          onClick={async() => {
            const input = document.getElementById("id-upload");
            const file = input?.files?.[0];
            if (!file) return;

            const formData = new FormData();
            formData.append("file", file);

            try {
              const response = await axios.post("http://localhost:8000/upload", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              });

              uploadToIpfs(response.data.embeddings)

              console.log("Server Response:", response.data);
            } catch (error) {
              console.error("Upload failed:", error);
            }
          }}
        >
          Continue <ArrowRight size={16} className="button-icon" />
        </button>
      </div>
    </div>
  );
};

export default DecentralizedIdentityVerification;
