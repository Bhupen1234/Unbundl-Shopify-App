import React, { useEffect, useState } from "react";
import styles from "./CustomPack.module.css";
import Chip from "@mui/joy/Chip";
import ChipDelete from '@mui/joy/ChipDelete';
import Button from '@mui/material/Button';
import { useSnackbar } from "notistack";


const CustomPack = ({ selectedChocolates ,setSelectedChocolates}) => {

    const [totalPackPrice, setTotalPackPrice] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0)
    const [packQty,setPackQty] = useState(1)

    const { enqueueSnackbar } = useSnackbar();

    const removeChocolate =(chocolate)=>{
        let filtereddata = selectedChocolates.filter((ele)=>(ele.id !== chocolate.id))
    
        setSelectedChocolates(filtereddata)
      }

    const updateTotalPackPrice =(selectedChoclates)=>{
       let sum=0;
       selectedChoclates.forEach((ele)=>{
           sum+=ele.price
       })

        setTotalPackPrice(sum)
    }
    const decreasePackQty =()=>{
        if(packQty>1){
            setPackQty((prevState)=> prevState-1)
        }
    }

     const increasePackQty =()=>{

        if(selectedChocolates.length>1){
            setPackQty((prevState)=>prevState+1)
        }
        else{
            enqueueSnackbar("Please select atleast 2 Chocolates",{variant:"warning"})
        }
       
        
     }

     useEffect(()=>{
       setTotalPrice(packQty*totalPackPrice)
     },[packQty])

    useEffect(()=>{
     updateTotalPackPrice(selectedChocolates)
    },[selectedChocolates])
  return (
    <div className={styles.wrapper}>
      <h2>Custom Pack of Chocolates</h2>
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
      <h3>Total Price:{totalPrice}  Rs </h3>
      </div>
      </div>
    </div>
  );
};

export default CustomPack;
