import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Phone2 from '/public/phone2.png';
import { styled } from '@mui/system';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Image from 'next/image';

const PhonesView = () => {

    const BackgroundTextTypography = styled(Typography)({
        position: 'relative',
        '&:before': {
          content: '"01."',
          position: 'absolute',
          right: 0,
          top: 0,
          color: '#2176B9',
          opacity: 0.4,
          fontSize: '14rem',
          fontWeight: '900',
          zIndex: -1,
          textAlign: 'right', 
        }
      });
      const controls = useAnimation();
      const [ref, inView] = useInView();
    
      useEffect(() => {
        if (inView) {
          controls.start({ x: 0 });
        }
      }, [controls, inView]);
  return (
    <Grid container spacing={2} style={{background:"#2B2323"}} display={"flex"} justifyContent={"center"} alignItems={"center"} borderRadius={25} padding={8}>
        <Grid item xs={12} md={6}>
        <BackgroundTextTypography variant='h3' sx={{
        fontSize: "56px",
        fontWeight: 900,
        color: 'white',
        zIndex:1
      }}>We are more than just a<span style={{ color: "#2176B9" }}> Modern Prop Trading Firm</span>
      </BackgroundTextTypography>
      
        <Typography variant='h6' my={4}>Find out how you can benefit with FTMO.</Typography>
        <Typography variant='h5' sx={{
            fontWeight:900
        }} color={'white'}>Benefit from our custom trading apps
        </Typography>
        
        <Typography variant='h6' my={4}>We’ve developed several apps for our traders. Some of them will help you with discipline, while others can assist with journaling or analysing the markets.</Typography>
        <Box sx={{ width: '100%', display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Box sx={{ flexShrink: 0 }}>
        <Button sx={{ color: "white", backgroundColor: "primary.main", px: 4, borderRadius: 5, fontWeight: 800 }}>
        Learn More
        </Button>
      </Box>

      <Box sx={{ width: '80%', ml: 2 }}> 
        <LinearProgress variant="determinate" value={20} style={{height:"12px",borderRadius:15}}/>
      </Box>
    </Box>
      
        </Grid>
        <Grid item xs={12} md={6} ref={ref}>
      <motion.div
        initial={{ x: '-20vw' }} 
        animate={controls}
        transition={{ duration: 1 }} 
      >
        <Image src={Phone2} alt="Phone" layout="responsive" />
      </motion.div>
    </Grid>
    </Grid>
  )
}

export default PhonesView