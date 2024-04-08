import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import Person from '/public/person.png';
import Phone from '/public/phone.png';
import Tab from '/public/Tab.png';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useAnimation,motion } from 'framer-motion';
import { useEffect } from 'react';
const ViewInfo = () => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const controls = useAnimation();
  const [ref, inView] = useInView();
  
  const controlTwo = useAnimation();
  const [refTwo, inViewTwo] = useInView();
  
  const controlsThree = useAnimation();
  const [refThree, inViewThree] = useInView();

  
  useEffect(() => {
    if (inView) {
      controls.start({ x: 0 });
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView) {
      controlTwo.start({ x: 0 });
    }
  }, [controls, inViewTwo]);

  useEffect(() => {
    if (inViewThree) {
      controlsThree.start({ x: 0 });
    }
  }, [controlsThree, inViewThree]);
  return (
    <>
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: isMdUp ? 8 : 2,
    }}>
      <Grid container spacing={2} sx={{
        background: 'gray',
        borderRadius: 2,
      }}>
        <Grid item xs={12} md={6} sx={{
          position: 'relative',
          minHeight: 220,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'visible', 
        }}>
          <motion.div
            ref={ref}
            initial={{ x: '-100%' }}
            animate={controls}
            transition={{ duration: 1 }}
            style={{ 
              position: 'absolute', 
              top: '-130%', 
              left: 0, 
              right: 0, 
              height: 500, 
              width: '100%', 
              zIndex: 1,
            }}
          >
            <Image src={Person} alt="Person" layout="fill" objectFit="contain" />
            </motion.div>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2, 
        }}>
          <Typography variant="h4" sx={{ fontWeight: 800,  }}>
            Join the team of our <span style={{color: '#2176B9'}}>successful traders</span> 
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            If you are ready, accept our FTMO Challenge and become our FTMO Trader. You can even try the entire process completely free of charge.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button variant="contained" sx={{ borderRadius: '50px', px: 5, py: 1 }}>Learn More</Button>
            <Button variant="contained" sx={{ borderRadius: '50px', px: 5, py: 1, backgroundColor: 'black', border: '2px solid blue' }}>Free Trial</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>

    <Box sx={{
      display: 'flex',
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center',
      paddingInline: '8%',
      marginBlock: 50
    }}>
      <Grid container spacing={2} display={'flex'} alignItems={"flex-start"} style={{
        background: "gray",
        width: "100%",
        height: "300px",
        padding: 4,
        borderRadius: 20,
      }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" style={{ fontWeight: 800, marginTop: '-20px', position: 'relative', zIndex: 1 }}>Payout System</Typography>
          <Box>
            <Typography variant="p" style={{ fontSize: "15px" }} paragraph>
              The default payout ratio for all FTMO Traders is set to 80%, however, an 80% share is not where we draw the line.
            </Typography>
            <Typography variant="p" style={{ fontSize: "15px" }} paragraph>
              All FTMO Traders can request payout on-demand. The payout can be processed just after 14 days, but you also have the ability to choose your own Profit Split Day, which can be even changed up to three times. In conclusion, we make sure that you will always receive your withdrawal on your most convenient day.
            </Typography>
            <Typography variant="p" style={{ fontSize: "15px" }} paragraph>
              If you meet the conditions of our Scaling Plan, not only do we increase the balance of your FTMO Account by 25%, the payout ratio will also automatically change to a staggering 90 %!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ boxShadow: "none", overflow: 'visible', height: 'auto', position: 'relative', padding: '20px', marginBottom: '400px', background: "transparent" }}>
            <motion.div
              ref={refTwo}
              initial={{ x: '100%' }}
              animate={controls}
              transition={{ duration: 1 }} 
              style={{ position: 'absolute', marginTop: "-30%", top: 5, left: 0, right: 0, zIndex: 1, height: '500px', width: '100%' }}
            >
              <Image src={Phone} alt="Phone" layout="fill" objectFit="contain" />
            </motion.div>
          </Paper>
        </Grid>

      </Grid>

    </Box>

    
    <Box sx={{
      display: "flex",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      paddingInline: "8%",
      marginBlock: 50
    }}>
      <Grid container spacing={2} display={'flex'} alignItems={"flex-start"} style={{
        background: "gray",
        width: "100%",
        height: "200px",
        padding: 4,
        borderRadius: 20,
      }}>
     <Grid item xs={12} md={6}>
      <Paper style={{ boxShadow: "none", overflow: 'visible', height: 'auto', position: 'relative', padding: '20px', marginBottom: '400px', background: "transparent" }}>
        <motion.div
          ref={refThree}
          initial={{ x: '-100%' }}
          animate={controlsThree}
          transition={{ duration: 1 }}
          style={{ position: 'absolute', marginTop: "-42%", top: 5, left: 0, right: 0, zIndex: 1, height: '500px', width: '100%' }}
        >
          <Image src={Tab} alt="Tab" layout="fill" objectFit="contain" />
        </motion.div>
      </Paper>
    </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" style={{ fontWeight: 800, marginTop: '-20px', position: 'relative', zIndex: 1 }}>
            The most popular retail trading platforms
          </Typography>
          <Box>
            <Typography variant="p" style={{ fontSize: "15px" }} paragraph>
              We offer all our clients the best trading solution in the form of our MT4, MT5, DXtrade and cTrader accounts powered by data feed directly from our pool of prime liquidity providers. We do our best to simulate the real market conditions with super-raw spreads, very low commission and no markup to all demo trading accounts with virtual funds.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
</>
  )
}

export default ViewInfo