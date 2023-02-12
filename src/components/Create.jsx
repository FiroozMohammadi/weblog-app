import { makeStyles,Snackbar,FormLabel,Tooltip,Fab,Radio, Modal,FormControlLabel, Container,RadioGroup, TextField, MenuItem, Button, Select, InputLabel, FormControl, } from "@material-ui/core";
import {Add} from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from '@material-ui/lab/Alert';

const useStyle=makeStyles((theme)=>({
mybutton:{
    position:"fixed",
    bottom:"10px",
    right: "10px"
    },
    container:{
        height: 550,
        width: 500,
        backgroundColor: "white",
        top: 0,
        left: 0,
        bottom:0,
        right: 0,
        margin: "auto",
        position: "absolute",
        [theme.breakpoints.down("sm")]:{
            height: "110vw",
            width: "100vh",
          
        }
    },
    form:{
      padding: theme.spacing(2)
    },
    item:{
      marginBottom: theme.spacing(4)
    },
    select:{
      width: "100%"
    },
    label:{
      display: "block",
      width: "95%",
      transformOrigin: "top right"
    }
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};
function Create() {
  const classes=useStyle();
    const [open,setOpen]=useState(false);
    const [openAlert,setOpenAlert]=useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenAlert(false);
    };
  return (
  <>
     <Tooltip title="افزودن پست" aria-label="add" onClick={()=>setOpen(true)}>
        <Fab color="primary" className={classes.mybutton}>
        <Add />
    </Fab>
    </Tooltip>
    <Modal open={open}>
        <Container className={classes.container}>
           <form className={classes.form}>
            <div className={classes.item}>
                <TextField id="standard-basic" placeholder="عنوان" style={{width: "100%"}}/>
            </div>
            <div className={classes.item}>
            <InputLabel htmlFor="filled-age-native-simple" className={classes.label}>پیام شما</InputLabel>
                <TextField  id="standard-multiline-static"
                    multiline
                    rows={4}
                    defaultValue="داستان تان را بنویسید..." 
                    style={{width: "100%"}}
                    />
            </div>
          <div className={classes.item}>
         <FormControl className={classes.select}>
          <InputLabel htmlFor="filled-age-native-simple" className={classes.label}>انتخاب</InputLabel>
            <Select>
                <MenuItem value="public">عمومی</MenuItem>
                    <MenuItem value="private">خصوصی</MenuItem>
                    <MenuItem value="friend">برای دوستان</MenuItem>
            </Select>
         </FormControl>
          </div>
          <div className={classes.item}>
        <RadioGroup className={classes.item}>
        <FormLabel component="legend">دسترسی کامنت گذاری</FormLabel>
            <FormControlLabel value="everybody" control={<Radio size="small" />} label="برای همه" />
            <FormControlLabel value="friend" control={<Radio  size="small"/>} label="برای دوستان" />
            <FormControlLabel value="order" control={<Radio  size="small"/>} label="سفارشی" />
            <FormControlLabel value="nobody" control={<Radio  size="small"/>} label="هیچکس" />

        </RadioGroup>
          </div>
          <div className={classes.item}>
            <Button variant="outlined" color="primary" style={{marginLeft:"10px"}} onClick={()=>setOpenAlert(true)}>ارسال</Button>
             <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>انصراف</Button>
          </div>
           </form>
        </Container>
    </Modal>
    <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical: 'bottom',horizontal:'center'}} >
      <Alert onClose={handleClose} severity="success" >
        <div style={{margin: '10px'}}>
          اطلاعات به موفقیت ارسال شد!
        </div>
      </Alert>
    </Snackbar>
  </>
  );
}

export default Create;