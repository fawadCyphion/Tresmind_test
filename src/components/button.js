import { Button } from '@mui/material';
import React from 'react';

const CustomButton = ({ style, label, variant, sx, ...props }) => {
  const variantStyle = variant === 'contained' ? {
    background: "#007bff",
    color: "#ffffff",
  } : {
    background: "transparent",
    color: "#007bff",
    border: "1px solid #007bff",
  };

  const finalStyle = { ...variantStyle, ...style };

  return (
    <Button style={finalStyle} sx={sx} {...props}>
      {label}
    </Button>
  );
};

export default CustomButton;
