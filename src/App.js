// // // // import React, { useState } from 'react';

// // // // function DropdownMenu() {
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   // Open the dropdown on hover
// // // //   const handleMouseEnter = () => {
// // // //     setIsOpen(true);
// // // //   };

// // // //   // Close the dropdown on mouse leave
// // // //   const handleMouseLeave = () => {
// // // //     setIsOpen(false);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       {/* Sidebar Menu Item */}
// // // //       <div 
// // // //         className="menu-item" 
// // // //         onMouseEnter={handleMouseEnter} 
// // // //         onMouseLeave={handleMouseLeave}
// // // //         style={{ position: 'relative', width: '200px', background: 'lightgray', padding: '10px' }}
// // // //       >
// // // //         <span>Menu Item</span>

// // // //         {/* Dropdown */}
// // // //         {isOpen && (
// // // //           <div 
// // // //             className="dropdown-menu" 
// // // //             style={{
// // // //               position: 'absolute',
// // // //               top: '0',
// // // //               left: '200px',
// // // //               background: '#fff',
// // // //               border: '1px solid #ddd',
// // // //               padding: '10px',
// // // //               width: '300px',
// // // //               zIndex: '1000'
// // // //             }}
// // // //           >
// // // //             <ul>
// // // //               <li>Option 1</li>
// // // //               <li>Option 2</li>
// // // //               <li>Option 3</li>
// // // //               <li>Option 4</li>
// // // //             </ul>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default DropdownMenu;



// // // import React, { useState } from 'react';

// // // function DropdownMenu() {
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   const handleMouseEnter = () => {
// // //     setIsOpen(true);
// // //   };

// // //   const handleMouseLeave = () => {
// // //     setIsOpen(false);
// // //   };

// // //   return (
// // //     <div className="relative">
// // //       {/* Sidebar Menu Item */}
// // //       <div
// // //         className="p-4 w-64 bg-gray-100 hover:bg-gray-200 cursor-pointer"
// // //         onMouseEnter={handleMouseEnter}
// // //         onMouseLeave={handleMouseLeave}
// // //       >
// // //         <span>Menu Item</span>

// // //         {/* Dropdown */}
// // //         {isOpen && (
// // //           <div
// // //             className="absolute left-64 top-0 bg-white shadow-lg p-4 w-96 rounded-lg"
// // //             onMouseLeave={handleMouseLeave}
// // //           >
// // //             <ul className="space-y-2">
// // //               <li className="hover:text-blue-600 cursor-pointer">Option 1jnvnalrv aefnm afa f jfma  ab enfoa abiefjnaw</li>
// // //               <li className="hover:text-blue-600 cursor-pointer">Option 2</li>
// // //               <li className="hover:text-blue-600 cursor-pointer">Option 3</li>
// // //               <li className="hover:text-blue-600 cursor-pointer">Option 4</li>
// // //               <li className="hover:text-blue-600 cursor-pointer">Option 5</li>
// // //             </ul>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default DropdownMenu;



// // import React, { useState } from 'react';

// // function DropdownMenu() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const handleMouseEnter = () => {
// //     setIsOpen(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsOpen(false);
// //   };

// //   return (
// //     <div className="relative">
// //       {/* Sidebar Menu Item */}
// //       <div
// //         className="p-4 md:w-64 w-36 bg-gray-100 hover:bg-gray-200 cursor-pointer"
// //         onMouseEnter={handleMouseEnter}
// //         onMouseLeave={handleMouseLeave}
// //       >
// //         <span>Menu Item</span>

// //         {/* Dropdown */}
// //         {isOpen && (
// //           <div
// //             className="absolute md:left-64 left-36 top-0 bg-white shadow-lg p-4 w-80 md:w-96 lg:w-[32rem] rounded-lg"
// //             onMouseLeave={handleMouseLeave}
// //           >
// //             <ul className="space-y-2">
// //               <li className="hover:text-blue-600 cursor-pointer">
// //                 Option 1 jnvnalrv aefnm afa f jfma ab enfoa abiefjnaw
// //               </li>
// //               <li className="hover:text-blue-600 cursor-pointer">Option 2</li>
// //               <li className="hover:text-blue-600 cursor-pointer">Option 3</li>
// //               <li className="hover:text-blue-600 cursor-pointer">Option 4</li>
// //               <li className="hover:text-blue-600 cursor-pointer">Option 5</li>
// //             </ul>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default DropdownMenu;


// import React, { useState } from 'react';

// function DropdownMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       {/* Sidebar Menu Item */}
//       <div
//         className="p-4 md:w-64 w-36 bg-gray-100 hover:bg-gray-200 cursor-pointer"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <span>Menu Item</span>

//         {/* Dropdown */}
//         {isOpen && (
//           <div
//             className="absolute md:left-64 left-36 top-0 bg-white shadow-lg p-4 w-80 md:w-96 lg:w-[32rem] rounded-lg"
//             onMouseLeave={handleMouseLeave}
//           >
//             <ul className="space-y-2">
//               <li className="hover:text-blue-600 cursor-pointer">
//                 Option 1 jnvnalrv aefnm afa f jfma ab enfoa abiefjnaw
//               </li>
//               <li className="hover:text-blue-600 cursor-pointer">Option 2</li>
//               <li className="hover:text-blue-600 cursor-pointer">Option 3</li>
//               <li className="hover:text-blue-600 cursor-pointer">Option 4</li>
//               <li className="hover:text-blue-600 cursor-pointer">Option 5</li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default DropdownMenu;


import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* Sidebar Menu Item */}
      <div
        className="p-4 md:w-64 w-36 bg-gray-100 hover:bg-gray-200 cursor-pointer relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>Menu Item</span>

        {/* Dropdown */}
        {isOpen && (
          <div
            className="absolute left-0 top-16 bg-white shadow-lg p-4 w-80 md:w-96 lg:w-[32rem] rounded-lg"
            onMouseLeave={handleMouseLeave}
          >
            <ul className="space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">
                Option 1 jnvnalrv aefnm afa f jfma ab enfoa abiefjnaw
              </li>
              <li className="hover:text-blue-600 cursor-pointer">Option 2</li>
              <li className="hover:text-blue-600 cursor-pointer">Option 3</li>
              <li className="hover:text-blue-600 cursor-pointer">Option 4</li>
              <li className="hover:text-blue-600 cursor-pointer">Option 5</li>
            </ul>
          </div>
        )}
      </div>
      
    </div>

  );
}

export default DropdownMenu;
