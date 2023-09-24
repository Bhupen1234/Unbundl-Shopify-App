import { Grid } from '@mui/material';
import Chocolates from './Components/Chocolates/Chocolates';
import logo from './logo.svg';
import CustomPack from './Components/CustomPack/CustomPack';
import styles from "./App.module.css"
import { useState } from 'react';
import Header from './Components/Header/Header';


function App() {
  const [selectedChocolates, setSelectedChocolates] = useState([])
   
  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
      
     <Grid container spacing={2}>
      <Grid item sm={12} md={8}>
      <Chocolates setSelectedChocolates={setSelectedChocolates} selectedChocolates={selectedChocolates} pack={8}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
      <CustomPack selectedChocolates={selectedChocolates} setSelectedChocolates={setSelectedChocolates} pack={8}/>
      </Grid>
    
     </Grid>

    
      
    </div>
    </>
  );
}

export default App;
