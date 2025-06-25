import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div
        className="w-16 h-16 border-4 border-dashed rounded-full animate-spin"
        style={{ borderColor: '#c59d5f transparent #c59d5f transparent' }}
      ></div>
    </div>
  );
};

export default Loading;
