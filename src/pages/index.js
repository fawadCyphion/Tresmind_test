import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@/components/table';
import ViewInfo from '@/views/info';
import { ViewTraders } from '@/views/traders';
import YoutubeCards from '@/views/youtubeCards';
import PhonesView from '@/views/phones';
import FooterView from '@/views/footer';
import HeroView from '@/views/hero';
import CustomButton from '@/components/button';
import AnimatedGridItem from '@/components/animationBox';
import MobileSlides from '@/views/mobileSlides';
import { Container } from '@mui/material';
export default function Home() {
  const rows = [
    { name: 'Symbol', value1: 'Bid Price', value2: 'Ask Price', value3: 'Spread', value4: 'Commissions', value5: 'Overall Costs' },
    { name: 'Trading Period', value1: 'unlimited', value2: 'unlimited', value3: 'unlimited', value4: 'unlimited', value5: 'unlimited' },
    { name: 'Symbol', value1: 'Bid Price', value2: 'Ask Price', value3: 'Spread', value4: 'Commissions', value5: 'Overall Costs' },
    { name: 'Trading Period', value1: 'unlimited', value2: 'unlimited', value3: 'unlimited', value4: 'unlimited', value5: 'unlimited' },
    { name: 'Symbol', value1: 'Bid Price', value2: 'Ask Price', value3: 'Spread', value4: 'Commissions', value5: 'Overall Costs' },
    { name: 'Trading Period', value1: 'unlimited', value2: 'unlimited', value3: 'unlimited', value4: 'unlimited', value5: 'unlimited' },
  ];
  
  return (
    <Box sx={{backgroundColor:"black"
}}>

<HeroView/>

<Container maxWidth="lg" sx={{ my: 4 }}> 
        <Box sx={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          py: 4, 
        }}>
          <ViewTraders />
        </Box>
      </Container>

<Box sx={{
gap:10,
marginBlock:10,
paddingInline:"4%",
paddingBlock:"5%",
width:"90%",
marginX:"auto",
borderRadius:10,
background: 'linear-gradient(270deg, #121212 100%, #2176B9 2%)'
}}>
  <Grid container display={'flex'} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={4}>
    <Grid item xs={12}><Typography variant="h3" sx={{fontWeight:800}} textAlign={"center"}>Evaluation Process</Typography></Grid>
    <Grid item xs={12}>
  <Grid container spacing={2} display={"flex"}>
  <Grid item xs={12} md={4} >
  <AnimatedGridItem />
  </Grid>
  <Grid item xs={12} md={4} >
  <AnimatedGridItem />
  </Grid>
  <Grid item xs={12} md={4} >
  <AnimatedGridItem />
  </Grid>


    </Grid>
  </Grid>
  </Grid>
</Box>

   <MobileSlides/>
<Box
  sx={{
    width: '100%',
    marginY:20,
    paddingInline:"8%"
  }}
>
<Grid container spacing={2} my={2}>
                <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="h5" style={{ color: "white" }}>Step: 1</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    <Typography variant="h5" style={{ color: "white" }}>WhaleFundr Challenge</Typography>
                </Grid>
            </Grid>
<Table rows={rows} />
</Box>
<Box sx={{
      my: "20%"
    }}>
<ViewInfo/>
    </Box>

    <Box
  sx={{
    width: '100%',
    marginY:20,
    paddingInline:"8%"

  }}
>
  <Grid container spacing={5}>
    <Grid item xs={12} display={"flex"} justifyContent={"space-around"} mb={2}>
    <CustomButton
  label="Forex"
  variant="contained"
  sx={{
    color: "white",
    backgroundColor: "#007bff", 
    paddingInline: "32px", 
    borderRadius: "25px",
    fontWeight: 800,
  }}
/>

<CustomButton
  label="Indices"
  variant="outlined"
  sx={{
    backgroundColor: "transparent",
    paddingInline: "32px",
    borderRadius: "25px",
    fontWeight: 800,
  }}
/>

<CustomButton
  label="Crypto"
  variant="outlined"
  sx={{
    backgroundColor: "transparent",
    paddingInline: "32px",
    borderRadius: "25px",
    fontWeight: 800,
  }}
/>

<CustomButton
  label="Commodities"
  variant="outlined"
  sx={{
    backgroundColor: "transparent",
    paddingInline: "32px",
    borderRadius: "25px",
    fontWeight: 800,
  }}
/>

<CustomButton
  label="Custom"
  variant="outlined"
  style={{
    backgroundColor: "transparent",
    paddingInline: "32px",
    borderRadius: "25px",
    fontWeight: 800,
  }}
/>
    </Grid>
  </Grid>
<Table rows={rows} h1={"Step: 1"} h2={"WhaleFundr Challenge"}/>
</Box>

<Box sx={{
gap:10,
marginBlock:20,
marginX:"auto",
paddingInline:"10%",
background: 'transparent'
}}>
  <PhonesView/>
</Box>


<Box sx={{
gap:10,
marginBlock:5,
width:"90%",
marginX:"auto",
borderRadius:10,
background: 'transparent'
}}>
 <YoutubeCards/>
</Box>



<FooterView/>
</Box>
  );
}
