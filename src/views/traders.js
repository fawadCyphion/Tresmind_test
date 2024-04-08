import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const ViewTraders = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);
  return (
    <Grid container display={"flex"} justifyContent={"space-between"} alignItems={'center'} spacing={5}>
    <Grid item xs={12} md={6}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ width: "100%", position: 'relative' }}
      >
    <Grid container display={"flex"} justifyContent={"space-around"} height={"100%"} width={"100%"} gap={2}>
    <Grid item xs={12} sm={6} md={4} lg={3.5} sx={{
          bgcolor: "#2B2323",
          borderRadius: 5,
          overflow: "hidden"
        }}>
  <Box>     
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }} 
        style={{ width: "100%", height: "350px", position: 'relative' }}
      >
        <Box sx={{
          backgroundImage: `url(./trader1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: "100%", 
          height: "350px",
          position: 'absolute', 
          paddingX: 4
        }}>
          <Grid container spacing={2} display={"flex"} justifyContent={"space-between"} alignItems={"flex-end"} 
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              p: 2,
            }}>
            <Grid item xs={6}>
              <Typography variant='h6' fontSize={"15px"} color={'white'}>Trader</Typography>
              <Typography variant='h6' color={'white'}>Name</Typography>
            </Grid>
            <Grid item xs={6} textAlign={"end"}>
              <YouTubeIcon color="secondary" />
            </Grid>
          </Grid>
        </Box> 
      </motion.div>
      <Box display={"flex"} flexDirection={"column"} paddingBlock={2}>
        <Typography textAlign={"center"} color={"white"}>Profit Split</Typography>    
        <Typography textAlign={"center"} variant='h6' color={"#2176B9"} sx={{fontWeight:900}}>$76,000</Typography>    
      </Box>
    </Box>     
    </Grid>
    <Grid item xs={12}  sm={3.5}  sx={{
      bgcolor: "#2B2323",
      borderRadius: 5,
      overflow: "hidden"
    }}>
  <Box>     
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }} 
        style={{ width: "100%", height: "350px", position: 'relative' }}
      >
        <Box sx={{
          backgroundImage: `url(./trader2.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: "100%", 
          height: "350px",
          position: 'absolute', 
          paddingX: 4
        }}>
          <Grid container spacing={2} display={"flex"} justifyContent={"space-between"} alignItems={"flex-end"} 
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              p: 2,
            }}>
            <Grid item xs={6}>
              <Typography variant='h6' fontSize={"15px"} color={'white'}>Trader</Typography>
              <Typography variant='h6' color={'white'}>Name</Typography>
            </Grid>
            <Grid item xs={6} textAlign={"end"}>
              <YouTubeIcon color="secondary" />
            </Grid>
          </Grid>
        </Box> 
      </motion.div>
      <Box display={"flex"} flexDirection={"column"} paddingBlock={2}>
        <Typography textAlign={"center"} color={"white"}>Profit Split</Typography>    
        <Typography textAlign={"center"} variant='h6' color={"#2176B9"} sx={{fontWeight:900}}>$76,000</Typography>    
      </Box>
    </Box>     
    </Grid>
    <Grid item xs={12}  sm={3.5}  sx={{
      bgcolor: "#2B2323",
      borderRadius: 5,
      overflow: "hidden"
    }}>
  <Box>     
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }} 
        style={{ width: "100%", height: "350px", position: 'relative' }}
      >
        <Box sx={{
          backgroundImage: `url(./trader3.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: "100%", 
          height: "350px",
          position: 'absolute', 
          paddingX: 4
        }}>
          <Grid container spacing={2} display={"flex"} justifyContent={"space-between"} alignItems={"flex-end"} 
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              p: 2,
            }}>
            <Grid item xs={6}>
              <Typography variant='h6' fontSize={"15px"} color={'white'}>Trader</Typography>
              <Typography variant='h6' color={'white'}>Name</Typography>
            </Grid>
            <Grid item xs={6} textAlign={"end"}>
              <YouTubeIcon color="secondary" />
            </Grid>
          </Grid>
        </Box> 
      </motion.div>
      <Box display={"flex"} flexDirection={"column"} paddingBlock={2}>
        <Typography textAlign={"center"} color={"white"}>Profit Split</Typography>    
        <Typography textAlign={"center"} variant='h6' color={"#2176B9"} sx={{fontWeight:900}}>$76,000</Typography>    
      </Box>
    </Box>     
    </Grid>
  </Grid>
  </motion.div>
  </Grid>
  <Grid item xs={12} md={6} display={"flex"} flexDirection={"column"} gap={2} >
    <Typography variant='h3' sx={{
        fontSize:"56px",
        fontWeight:900
        }} color={'white'}>Trade for<span style={{color:"#2176B9"}} > Modern Prop Trading</span> Firm.</Typography>
    <Typography variant='p' sx={{
        }} color={'white'}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover</Typography>
    <Typography variant='p' sx={{
        }} color={'white'}>Upon successful completion of the Evaluation Process, you are offered to trade on an WhaleFundr Account with a balance of up to 200,000 USD. Your journey to get there might be challenging, but our educational applications, Account Analysis and Performance Coaches are here to help you on the endeavour to financial independence.</Typography>
    </Grid>
  </Grid>
  )
}
