import Box from '@mui/material/Box';
import { Navbar } from "@/components/navbar";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import HeroImage from '/public/hero.png';
import Logo1 from '/public/logo1.png';
import Logo2 from '/public/logo2.png';
import Logo3 from '/public/logo3.png';
import Logo4 from '/public/logo4.png';
import CustomButton from '@/components/button';
import AnimatedBox from '@/components/motionBox';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation,motion } from 'framer-motion';
const HeroView = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
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

  const logos = [Logo1, Logo2, Logo3, Logo4];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>    <Box
    sx={{
      backgroundImage: `url(./hero.png)`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: 960,
      paddingInline:"8%"
    }}
  >
    <Navbar />
    
    <Box sx={{
      width: '60%',
    mt:"150px",
    display:"flex",
    flexDirection:"column",
    gap:2
    }}>
      <Typography variant='h6' color={"#2176B9"}>SINCE 2021</Typography>
      <Typography variant='h1' className='heading1' sx={{
        fontSize:"56px",
        fontWeight:600
        }} color={"white"}>WE ARE LOOKING FOR PROFITABLE TRADERS</Typography>
      <Typography  className='heading1' color={"white"} >Unleash your inner whale and trade up to $500,000 in a trading environment where you can earn real gains.</Typography>
      
      <Box display={"flex"} justifyContent={"space-between"} width={300}>
  <CustomButton variant='contained' style={{borderRadius:"50px", fontSize:10,paddingInline:40,paddingBlock:10}} label={"Learn More"}/>
  <CustomButton
  label="Free Trial"
  variant="contained"
  style={{ borderRadius: "50px", fontSize: "10px", paddingInline: "40px", paddingBlock: "10px", backgroundColor: "black", border: "blue 2px solid" }}
/>      </Box>
  
      <Box display={"flex"} justifyContent={"space-between"} width={660}>
      <Box display="flex" gap={2}>
      <Box style={{ borderRadius: '50%', overflow: 'hidden', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image src="/trader1.png" alt="User" width={110} height={110}  objectFit="cover" />
  </Box>   
  <Box style={{ borderRadius: '50%', overflow: 'hidden', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image src="/trader2.png" alt="User" width={110} height={110}  objectFit="cover" />
  </Box>   
  <Box style={{ borderRadius: '50%', overflow: 'hidden', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image src="/trader3.png" alt="User" width={110} height={110}  objectFit="cover" />
  </Box>   
  <Box style={{ borderRadius: '50%', overflow: 'hidden', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image src="/trader1.png" alt="User" width={110} height={110}  objectFit="cover" />
  </Box>   
      </Box>
      <Box >
      <Typography  className='heading1'  sx={{
        fontSize:"26px",
        fontWeight:600
        }} color={"white"}>15 Million+</Typography>
      <Typography  sx={{
        fontSize:"20px",
        }} color={"white"}>Be part of growing community</Typography>
  
      </Box>
      </Box>
    </Box>
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
   
    <Box display={"flex"} justifyContent={"center"} width={"100%"}>
      <Grid container spacing={2} justifyContent="center">
        {logos.map((logo, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} display="flex" justifyContent="center">
            <AnimatedBox imageSrc={logo} />
          </Grid>
        ))}
      </Grid>
    </Box>


   
    <Box display={"flex"} justifyContent={"center"} width={"100%"}>
      <Grid container spacing={2} justifyContent="center">
        {logos.map((logo, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} display="flex" justifyContent="center">
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