import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <ThemeToggle />
      <Button>Hello Home</Button>
    </div>
  );
};

export default HomePage;
