import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Logo from '/public/logo.png';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterView = () => {
    const col1 = [
        "Evaluation Process",
        "Trading Objectives",
        "Why our FTMO Challenge?",
        "Testimonials",
        "Scaling Plan",
        "Terms & Conditions",
        "Careers",
        "Press Kit"
      ];
      
      const col2 = [
        "Calendar",
        "Shop",
        "FTMO Academy",
        "Premium Programme"
      ];
      
      const col3 = [
        "News Indicator",
        "Quick Trade Manager",
        "Equity Simulator",
        "Mentor App",
        "Trading Journal",
        "Statistical App",
        "Account Analysis",
        "Account MetriX"
      ];
        return (
            <>
    <Grid container spacing={5} sx={{background:"linear-gradient(142deg, rgb(18, 18, 18) -14.41%, rgb(33, 118, 185) 583.7%);"}} padding={16} mt={10}>
<Grid item xs={12} md={6} display={"flex"} flexDirection={"column"} justifyContent={'center'} >
    <Box  display={"flex"} flexDirection={"column"} justifyContent={'center'} gap={4}>
    <Typography variant='h6' textAlign={"start"}><Image src={Logo}></Image></Typography>
    <Typography variant='p' color={"white"}>Step into a world of profitable trading with us to discover the WhaleFundr difference. Turn your aspirations into your journey of a lifetime.</Typography>
    <Typography variant='h6' textAlign={"start"}>Contact Us</Typography>
    <Box  display={"flex"} justifyContent={'space-between'} width={300}>
        <YouTubeIcon color="primary"/>
    <Typography variant='p' color={"white"}>Noe_Rempel30@yahoo.com</Typography>
        
    </Box>

    <Box  display={"flex"} justifyContent={'space-between'} width={300}>
        <YouTubeIcon color="primary"/>
    <Typography variant='p' color={"white"}>275-437-1694

</Typography>
        
    </Box>
    </Box>
</Grid>
<Grid item xs={12} md={2} display={"flex"} flexDirection={"column"} justifyContent={'flex-start'} >
    <Typography variant='h6' mb={1}>About Us</Typography>
    {col1.map(elem => (
                    <Typography variant='p' color={"white"} key={elem}>{elem}</Typography>
                ))}

</Grid>
<Grid item xs={12} md={2} display={"flex"} flexDirection={"column"} justifyContent={'flex-start'} >
    <Typography variant='h6' mb={1}>Trading</Typography>
    {col2.map(elem => (
                    <Typography variant='p' color={"white"} key={elem}>{elem}</Typography>
                ))}

</Grid>
<Grid item xs={12} md={2} display={"flex"} flexDirection={"column"} justifyContent={'flex-start'} >
    <Typography variant='h6' mb={1}>Apps</Typography>
    {col3.map(elem => (
                    <Typography variant='p' color={"white"} key={elem}>{elem}</Typography>
                ))}

</Grid>
    </Grid>
    {/* <Grid container spacing={5} sx={{background:"#2176B9;width:100%"}} padding={2} > */}
    <Grid item xs={12}  sx={{background:"#2176B9;width:100%"}} display={"flex"} flexDirection={"column"} py={5}>
    <Box
  width={"80%"}
  display={"flex"}
  justifyContent={"space-around"}
  mx={"auto"}
  borderBottom={4}
  borderColor={"#150578"}
  pb={3}
  mb={1}
>
    <Typography variant='p' mb={1} color={"white"}>All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. FTMO only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. FTMO companies do not act as a broker and do not accept any deposits. The offered technical solution for the FTMO platforms and data feed is powered by liquidity providers.</Typography>
    <Box sx={{width:"80%"}}>
    <Typography variant='h6'  mb={1}>Contact Options</Typography>
    <Typography variant='h6' mb={1}>Privacy Policy</Typography>
    <Typography variant='h6' mb={1}>Cookies</Typography>
    </Box>
    </Box>
<Grid item xs={12}  sx={{width:"80%"}} mx={"auto"}>
    <Typography variant='p' color={"white"}>2023 © Copyright - FTMO.com Made with for trading</Typography>
</Grid>
</Grid>

    </>
    )
}

export default FooterView