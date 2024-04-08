import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MotionBox = motion(Box)
const AnimatedBox = ({ imageSrc, altText = "Image" }) => (

  <MotionBox
    sx={{
      bgcolor: "#2B2323",
      borderRadius: 5,
      padding: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    whileHover={{
      scale: 1.1, 
      backgroundColor: "#ffffff" 
    }}
  >
    <Image src={imageSrc} alt={altText} layout="fixed" width={150} height={150} />
  </MotionBox>

);

export default AnimatedBox;
