import Box from '@mui/material/Box';
import { Navbar } from "@/components/navbar";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Logo1 from '/public/logo1.png';
import Logo2 from '/public/logo2.png';
import Logo3 from '/public/logo3.png';
import Logo4 from '/public/logo4.png';
import AnimatedBox from '@/components/motionBox';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const HeroView = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const logos = [Logo1, Logo2, Logo3, Logo4];

  const boxVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>    <Box
    sx={{
      backgroundImage: `url(/hero.png)`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: 960,
      paddingInline:"8%"
    }}
  >
    <Navbar />
    
 
  </Box>
  <Box
      sx={{
        paddingInline: "8%",
        position: "relative",
        top: -50
      }}
    >
      <Grid container spacing={2} display={"flex"} justifyContent={"space-around"}>
        {[...Array(4)].map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={boxVariants}
            >
              <Box sx={{ bgcolor: "#2B2323", borderRadius: 5, padding: 5, display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h4' sx={{ fontWeight: "800", color: "primary.main" }}>$180M+</Typography>
                <Typography variant='h5'>Paid out to FTMO Traders</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  <Box sx={{
  display:"flex",
  flexDirection:"column",
  gap:10,
  justifyContent:"center",
  alignItems:"center",
  paddingInline:"8%",
  marginBlock:10
  }}>
    <Box display={"flex"} >
    <Typography variant='h3' sx={{
        fontSize:"56px",
        fontWeight:900
        }} color={'white'}><span style={{color:"#2176B9"}} >WhaleFundr</span> is one of the most reliable firms in modern prop trading industry.</Typography>
    </Box>
  
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} gap={2}>
   
    <Box display={"flex"} justifyContent={"center"}>
      <Grid container spacing={2} justifyContent="center">
        {logos.map((logo, index) => (
          <Grid item xs={12} sm={6} md={3}  key={index}>
            <AnimatedBox imageSrc={logo} />
          </Grid>
        ))}
      </Grid>
    </Box>
   
    <Box display={"flex"} justifyContent={"center"}>
      <Grid container spacing={2} justifyContent="center">
        {logos.map((logo, index) => (
          <Grid item xs={12} sm={6} md={3}  key={index}>
          <AnimatedBox imageSrc={logo} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
  </Box>
  </>
  )
}

export default HeroView