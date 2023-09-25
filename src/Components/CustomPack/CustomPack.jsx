import React, { useEffect, useState } from "react";
import styles from "./CustomPack.module.css";
import Chip from "@mui/joy/Chip";
import ChipDelete from '@mui/joy/ChipDelete';
import Button from '@mui/material/Button';
import { useSnackbar } from "notistack";
import { Box } from "@mui/material";



const SelectedChocolatePills = ({selectedChocolates,setSelectedChocolates}) => {
  const removeChocolate =(chocolate)=>{
    let filtereddata = selectedChocolates.filter((ele)=>(ele.id !== chocolate.id))

    setSelectedChocolates(filtereddata)
  }
  return (
    <div className={styles.selectedChoclates}>
     
        {selectedChocolates.map((ele) => {
          return (
            <span key={ele.id}>
              <Chip size="lg" variant="solid" color="primary" endDecorator={<ChipDelete onDelete={() => removeChocolate(ele) } />}> 
                {ele.name}
              </Chip>
            </span>
          );
        })}
   
    </div>
  )
}



const CustomPack = ({ selectedChocolates ,setSelectedChocolates,pack}) => {

    const [totalPackPrice, setTotalPackPrice] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0)
    const [packQty,setPackQty] = useState(1)

    const { enqueueSnackbar } = useSnackbar();

  
  
    const updateTotalPackPrice =(selectedChoclates)=>{
       let sum=0;
       selectedChoclates.forEach((ele)=>{
           sum+=ele.price
       })

        setTotalPackPrice(sum)
      
    }

    //decrase the qty of pack
    const decreasePackQty =()=>{
        if(packQty>1){
            setPackQty((prevState)=> prevState-1)
        }
    }
    
    //decrase the qty of pack
     const increasePackQty =()=>{

        if(selectedChocolates.length>(pack-1)){
            setPackQty((prevState)=>prevState+1)
        }
        else{
            enqueueSnackbar(`Please select ${pack} Chocolates`,{variant:"warning"})
        }
       
        
     }


     
     const handleCheckOut =()=>{
      alert(`Please confirm your order for ₹ ${totalPrice}`)
      window.location.reload()
     }

     useEffect(()=>{
       setTotalPrice(packQty*totalPackPrice)
     },[packQty,totalPackPrice])

    useEffect(()=>{
      if(selectedChocolates.length<(pack-1)){
         setPackQty(1)
         setTotalPrice(0)

      }
     updateTotalPackPrice(selectedChocolates)
    },[selectedChocolates])
  return (
    <Box className={styles.wrapper}>
      <h2>Custom Pack of Chocolates</h2>
      
        <SelectedChocolatePills selectedChocolates={selectedChocolates} setSelectedChocolates={setSelectedChocolates}/>
     
      <div className={styles.totalContainer}>
      <div className={styles.packPrice}>
      <h3>Pack Price: {totalPackPrice} Rs </h3>
      </div>
      <hr />
      <div className={styles.totalPackPrice}>
        <h4>Pack Quantity</h4>
       <div className={styles.btns}>
       <Button variant="contained" onClick={()=>decreasePackQty()}>-</Button>
       <h4>{packQty}</h4>
       <Button variant="contained"  onClick={()=>increasePackQty()}>+</Button>
       </div>
       
      {selectedChocolates.length===pack &&  
      (<>
      <hr />
      <h3>Total Price:{totalPrice}  Rs </h3>
      <div className="checkOut">
      <Button variant="contained" onClick={()=>handleCheckOut()}>Checkout</Button>
      </div>
      </>
      
      )
      }
     
      </div>
      
      </div>
    </Box>
  );
};

export default CustomPack;
