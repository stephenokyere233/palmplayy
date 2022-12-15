import React from 'react'

const Controller = () => {
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 bg-gray-300 `;

  return (
    <div className={`${glass} absolute bottom-0 z-10  flex h-20 w-full  items-center justify-center border-t border-gray-600  shadow-2xl shadow-gray-200`}>
      Controller
    </div>
  );
}

export default Controller
