import { Grid } from '@mui/material';
import Chocolates from './Components/Chocolates/Chocolates';
import logo from './logo.svg';
import CustomPack from './Components/CustomPack/CustomPack';
import styles from "./App.module.css"
import { useState } from 'react';


function App() {
  const [selectedChocolates, setSelectedChocolates] = useState([])
   
  return (
    <div className={styles.wrapper}>
     <Grid container spacing={2}>
      <Grid item sm={12} md={8}>
      <Chocolates setSelectedChocolates={setSelectedChocolates} selectedChocolates={selectedChocolates}/>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
      <CustomPack selectedChocolates={selectedChocolates} setSelectedChocolates={setSelectedChocolates}/>
      </Grid>
    
     </Grid>

    
      
    </div>
  );
}

export default App;
