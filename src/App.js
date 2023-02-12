import Navbar from "./components/Navbar";
import React from "react";
import { Grid,makeStyles } from "@material-ui/core";
import Rightbar from "./components/Rightbar"
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Create from "./components/Create";

const useStyle=makeStyles((theme)=>({
  [theme.breakpoints.down("xs")]:{
    display:"none"
  },
}));
function App() {
  const classes=useStyle();
  return (
  <div>
   <Navbar/> 

      <Grid container>
        <Grid item sm={2} xs={2}>
          <Rightbar/>
        </Grid>
      
      <Grid item sm={7} xs={10}>
        <Feed/>
      </Grid>
      <Grid item sm={3} className={classes.right}>
        <Leftbar/>
      </Grid>
      </Grid>

      <Create/>
  </div>
  );
}


export default App;
