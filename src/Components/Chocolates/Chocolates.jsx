import React, { useEffect } from "react";
import styles from "./Chocolates.module.css";
import chocolatesdata from "../../data/chocolate.json"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import choclateImage from "../../Images/ChocolateImage.jpg"
import { Box, Grid } from "@mui/material";
import { useSnackbar } from "notistack";


const ChocolateCard =({chocolate,selectedChocolates,selectChocolate,removeChocolate})=>{
  return (
    <Card sx={{ maxWidth: "100%" }} key={chocolate.id} >
              <CardMedia
                component="img"
                alt="green iguana"
                height="90%"
                image={choclateImage}
              />
              <CardContent sx={{display:"flex", justifyContent:"space-between"}}>
                <Typography gutterBottom variant="h5" component="div">
                 {chocolate.name}
                </Typography>
               <Typography variant="h6" component="div" >
                  {chocolate.price} Rs
               </Typography>
              </CardContent>
              <CardActions>
                {
                 !selectedChocolates.includes(chocolate) ?  (<Button variant="contained" onClick={()=>selectChocolate(chocolate)} fullWidth>Select</Button>) :(   <Button variant="contained"  onClick={()=>removeChocolate(chocolate)} fullWidth>Remove</Button>)
                }
           
              </CardActions>
            </Card>
  )
}

const Chocolates = ({setSelectedChocolates,selectedChocolates,pack}) => {
  const { enqueueSnackbar } = useSnackbar();

  const selectChocolate =(chocolate)=>{
     if(selectedChocolates.length>(pack-1)){
      enqueueSnackbar(`You can select only ${pack}  Chocolates per Pack`,{variant:"warning"})
     }
     else{
          setSelectedChocolates((prevState)=>{
          return([...prevState,chocolate])
          })
     }
  }
  
  const removeChocolate =(chocolate)=>{
    let filtereddata = selectedChocolates.filter((ele)=>(ele.id !== chocolate.id))

    setSelectedChocolates(filtereddata)
  }

  return (
    <div className={styles.wrapper}>
      <h2>Please Select the Chocolates</h2>
      <Box className={styles.cardWrapper}   >

      
          <Grid container  spacing={2} rowGap={"10px"}>
            {
          chocolatesdata.map((ele)=>{
            return(
              <Grid item xs={12} sm={6} md={4} >
             
              <ChocolateCard selectedChocolates={selectedChocolates} chocolate={ele} selectChocolate={selectChocolate} removeChocolate={removeChocolate}/>
            </Grid>

            )
           
          })
        }
         </Grid>
      </Box>
    </div>
  );
};

export default Chocolates;
