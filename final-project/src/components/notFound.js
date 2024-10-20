import React from 'react';
import notFoundImage from '../assets/img/not-found.png';
import Button from './button';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center h-screen text-center">
      <h1 className="text-[96px] font-sans font-bold text-primary mt-[100px]">404</h1>
      <img
        src={notFoundImage}
        alt="Not Found"
        className="w-1/3 h-1/3 object-contain"
      />
      <p className="text-[16px] font-sans font-light text-blackSecondary mt-[20px] mx-[400px] mb-[20px]">We’re sorry but the page you are looking for cannot be found. Please try and search the right path or navigate to the home screen below</p>
      <Button variant="primary" onClick={() => window.location.href = "/"}>Back to Home</Button>
    </div>
  );
};

export default NotFound;
