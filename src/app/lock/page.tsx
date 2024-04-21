import Image from 'next/image';
import React from 'react';

const LockPage = () => {
  return (
    <div className='flex flex-row gap-4 h-full w-full'>
      <div className="col1 w-2/3 bg-gradient-to-r from-slate-200 via-slate-500 h-full">
        <h1>hello</h1>
      </div>
      <div className="col2 w-1/3">world</div>
    </div>
  )
};

export default LockPage;
