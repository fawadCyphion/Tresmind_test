import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Grid, Box, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube'; 

const AnimatedGridItem = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ scale: 1, opacity: 1,transition: { duration: 0.5 } });
    } else {
      controls.start({ scale: 0, opacity: 0,transition: { duration: 0.5 } });
    }
  }, [controls, inView]);

  return (
      <motion.div ref={ref} initial={{ scale: 0, opacity: 0 }} animate={controls}>
        <Box display={"flex"} flexDirection={'column'} justifyContent={"center"} alignItems={"center"} gap={1}>
          <YouTubeIcon color="secondary" style={{ fontSize: 60 }} />
          <Typography variant="h5" textAlign={"center"}>WhaleFundr Challenge</Typography>
          <Typography variant="h6" fontSize={"16px"} textAlign={"center"}>
            An WhaleFundr Challenge is the first step of the Evaluation Process. You need to succeed here to advance into the Verification stage. Prove your trading skills and discipline in observing the Trading Objectives.
          </Typography>
        </Box>
      </motion.div>
    // </Grid>
  );
};


export default AnimatedGridItem;
