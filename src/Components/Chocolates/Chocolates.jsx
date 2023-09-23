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
import { Grid } from "@mui/material";
import { useSnackbar } from "notistack";

const Chocolates = ({setSelectedChocolates,selectedChocolates}) => {
  const { enqueueSnackbar } = useSnackbar();

  const selectChocolate =(chocolate)=>{
     if(selectedChocolates.length>7){
      enqueueSnackbar("You can select only 8 Chocolates per Pack",{variant:"warning"})
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
  useEffect(()=>{
   console.log(selectedChocolates)
  },[selectedChocolates])
  return (
    <div className={styles.wrapper}>
      <h2>Please Select the Chocolates</h2>
      <div className={styles.cardWrapper}>

        
          <Grid container spacing={2}>
            {
          chocolatesdata.map((ele)=>{
            return(
              <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 250 }} key={ele.id}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="90%"
                image={choclateImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {ele.name}
                </Typography>
               <Typography variant="h6" component="div" >
                  {ele.price} Rs
               </Typography>
              </CardContent>
              <CardActions>
                {
                 !selectedChocolates.includes(ele) ?  (<Button variant="contained" onClick={()=>selectChocolate(ele)}>Select</Button>) :(   <Button variant="contained"  onClick={()=>removeChocolate(ele)}>Remove</Button>)
                }
           
              </CardActions>
            </Card>
            </Grid>

            )
           
          })
        }
         </Grid>
      </div>
    </div>
  );
};

export default Chocolates;
