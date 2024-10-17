import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'md' }) => {
  const baseStyle = "px-[35px] py-[10px] font-sans font-semibold rounded-[10px]";
  const variantStyles = {
    primary: 'bg-primary text-whiteSecondary hover:bg-[#004B89]',
    secondary: 'bg-whiteSecondary text-black border-[2px] border-primary hover:bg-[#DBEFFF]',
  };
  const sizeStyles = {
    sm: 'py-2 px-4',
    md: 'py-3 px-6',
    lg: 'py-[20px] px-[50px]',
  };

  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]}`;

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
