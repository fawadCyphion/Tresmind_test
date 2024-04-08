import React, { useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; 
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image'; 
import Flag from '/public/eng-flag.png'; 
import { useInView } from 'react-intersection-observer';


const MobileSlides = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  
    useEffect(() => {
      if (inView) {
        controls.start({ x: 0 });
      }
    }, [controls, inView]);
  return (
    <Box ref={ref} position="relative" width="100%" height={400} overflow="hidden">
    <motion.div
      initial={{ x: '-30vw' }}
      animate={controls}
      transition={{  duration: 1 }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(/mobile.png)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
      }}
    ></motion.div>
<Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          paddingInline: "8%",
        }}
      >        <Box sx={{
          width: '60%',
          mt: "100px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}>
          <Typography variant='h1' className='heading1' sx={{ fontSize: "56px", fontWeight: 600 }}>
            Know your <span style={{ color: "#2176B9" }}>Trading Objectives</span>
          </Typography>
          <Typography  className='heading1' color={"white"} >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.    </Typography>
    
    <Grid container display={"flex"} justifyContent={"space-between"} >
    <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} justifyContent={'center'} >
      <Box>
        <Typography variant="h6" style={{fontWeight:"800"}}>Currency:</Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={'center'} bgcolor={'primary.main'} p={1} borderRadius={5}>
      <Image src={Flag} alt="English Flag" width={24} height={24} />
            <Typography variant='h6'>EN-US</Typography>
            <KeyboardArrowDownIcon />

      </Box>

    </Grid>
    <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} justifyContent={'center'} >
      <Box>
        <Typography variant="h6" style={{fontWeight:"800"}}>Risk:</Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={'center'} bgcolor={'primary.main'} p={1} borderRadius={5}>
      <Image src={Flag} alt="English Flag" width={24} height={24} />
            <Typography variant='h6'>EN-US</Typography>
            <KeyboardArrowDownIcon />
      </Box>
    </Grid>
    <Grid item xs={4} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} justifyContent={'center'} >
      <Box>
        <Typography variant="h6" style={{fontWeight:"800"}}>Balance:</Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={'center'} bgcolor={'primary.main'} p={1} borderRadius={5}>
      <Image src={Flag} alt="English Flag" width={24} height={24} />
            <Typography variant='h6'>EN-US</Typography>
            <KeyboardArrowDownIcon />

      </Box>

    </Grid>
    </Grid>
        </Box>
      </Box>
      </Box>
  );
};

export default MobileSlides;
