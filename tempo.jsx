// import React, { useState, useEffect } from "react";
// import { Modal, Ripple, initTE } from "tw-elements";
// import { CSSTransition } from "react-transition-group";

// const MyComponent = () => {
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   useEffect(() => {
//     initTE({ Modal, Ripple });
//   }, []);

//   return (
//     <div className="space-y-2">
//       {/* Button trigger vertically centered modal*/}
//       <button
//         type="button"
//         className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//         onClick={() => setIsModalOpen(true)}
//         data-te-ripple-init
//         data-te-ripple-color="light"
//       >
//         Vertically centered modal
//       </button>

//       <CSSTransition
//         in={isModalOpen}
//         timeout={300}
//         classNames="modal"
//         unmountOnExit
//       >
//         <div
//           data-te-modal-init
//           className="fixed left-0 top-0 z-[1055] w-full h-full flex items-center justify-center"
//           id="exampleModalCenter"
//           tabIndex="-1"
//           aria-labelledby="exampleModalCenterTitle"
//           aria-modal="true"
//           role="dialog"
//         >
//           <div
//             data-te-modal-dialog-ref
//             className="relative flex flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 z-[1056] w-[500px]" // Adjust z-index and width here
//           >
//             <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
//               <h5
//                 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
//                 id="exampleModalScrollableLabel"
//               >
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
//                 data-te-modal-dismiss
//                 aria-label="Close"
//                 onClick={closeModal}
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="h-6 w-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div className="relative p-4">
//               <p>This is a vertically centered modal.</p>
//             </div>

//             <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
//               <button
//                 type="button"
//                 className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
//                 data-te-modal-dismiss
//                 data-te-ripple-init
//                 data-te-ripple-color="light"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </CSSTransition>
//     </div>
//   );
// };

// export default MyComponent;
