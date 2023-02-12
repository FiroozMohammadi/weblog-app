import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { AppBar, InputBase, makeStyles, Toolbar, Typography,alpha,Badge,Avatar } from "@material-ui/core";
import { useState } from "react";


const useStyle=makeStyles((theme)=>({
  toolbar:{
    display: "flex",
    justifyContent: "space-between"
  },
  logoLg:{
    display:"none",
    [theme.breakpoints.up("sm")]:{
      display:"block"
    }
  },
  logoSm:{
    display:"block",
    [theme.breakpoints.up("sm")]:{
      display:"none"
    }
  },
  search:{
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    [theme.breakpoints.down("xs")]:{
      display:(props)=>(props.open? "flex" : "none"),
      with: "50%"
    } 
  },
  inpute:{
    color: "white",
    marginRight: theme.spacing(1),
    width: "100%",
  },
  cancel:{
    [theme.breakpoints.up("sm")]:{
      display:"none"
    }
  },
  searchButton:{
    marginLeft: theme.spacing(2),
    display:"none",
    [theme.breakpoints.down("xs")]:{
      display:"block"
    }, 
  },
  icon:{
    alignItems:"center",
    display:(props)=>(props.open? "none" : "flex")

  },
  badge:{
    marginLeft: theme.spacing(2)
  }
}));
function Navbar() {
  const [open,setOpen]=useState(false);
   const classes=useStyle({open});
  return (
  <AppBar>
    <Toolbar className={classes.toolbar}>
      <Typography variant="h6" className={classes.logoLg}>
        وبلاگ من
      </Typography>
      <Typography variant="h6" className={classes.logoSm}>
        وبلاگ 
      </Typography>
    <div className={classes.search}>
      <Search />
      <InputBase placeholder="جستجو ..." className={classes.inpute}/>
      <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
    </div>
    <div className={classes.icon}>
      <Search className={classes.searchButton} onClick={()=>setOpen(true)}/>
    <Badge color="secondary" badgeContent={10} className={classes.badge}>
      <Mail/>
    </Badge>
    <Badge color="secondary" badgeContent={19} className={classes.badge}>
      <Notifications/>
    </Badge>
    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600" />

    </div>
    </Toolbar>
  </AppBar>
  );
}

export default Navbar;