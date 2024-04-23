'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';

const LockPage = () => {
  const [lockKey, setLockKey] = useState('manusharma');

  const handleAuthentication = async () => {
    try {
      const data = await fetch('/api/protected', {
        method: 'post',
        body: JSON.stringify({ lock: lockKey }),
      });

      const response = await data.json();
      console.log({ response });
    } catch (error) {}
  };

  return (
    <div className='flex flex-row gap-4 h-full w-full'>
      <div className='col1 w-2/3 bg-gradient-to-r from-slate-200 via-slate-500 h-full'>
        <h1>hello</h1>
      </div>
      <div className='col2 w-1/3'>world</div>
      <Button onClick={handleAuthentication}>Unlock</Button>
    </div>
  );
};

export default LockPage;
