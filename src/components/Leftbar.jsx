import { Container, makeStyles,Typography,Avatar,Divider,ImageListItem,ImageList,Link } from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup';


const useStyle=makeStyles((theme)=>({
  container:{
    paddingTop:theme.spacing(10),
    position:"sticky",
    top:"0",
  },
  title:{
    color: "#555",
    fontSize: "16px",
    fontWeight: 600
  },
  imageList:{
    left: "auto",
    right: "0%",
    transform: "translateX(0%)",
    top: "0%"
  },
  link:{
    color: "blue",
    fontSize: "16px",
    marginRight: "10px"
  }
}))
function Leftbar() {
  const classes=useStyle();
  return (
 
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>دوستان آنلاین</Typography>
      <AvatarGroup max={5} style={{marginBottom: "20px",overflow: "hidden"}}>
        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>گالری</Typography>
      <ImageList rowHeight={100} className={classes.imageList} cols={3}style={{marginBottom: "15px"}}>
    <ImageListItem >
      <img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600" alt="fall" className={classes.imageList}/>
    </ImageListItem>
    <ImageListItem >
      <img src="https://images.pexels.com/photos/45911/peacock-plumage-bird-peafowl-45911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fall" className={classes.imageList}/>
    </ImageListItem>
    <ImageListItem >
      <img src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fall" className={classes.imageList}/>
    </ImageListItem>
    <ImageListItem >
      <img src="https://images.pexels.com/photos/15239/flower-roses-red-roses-bloom.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fall" className={classes.imageList}/>
    </ImageListItem>
    <ImageListItem >
      <img src="https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fall" className={classes.imageList}/>
    </ImageListItem>
    <ImageListItem >
      <img src="https://images.pexels.com/photos/516541/pexels-photo-516541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fall" className={classes.imageList}/>
    </ImageListItem>
    </ImageList>
    <Typography className={classes.title} gutterBottom>دسته بندی ها</Typography>
    <Link component="button" href="" className={classes.link} variant="body2">ورزشی</Link>
    <Link component="button" href="" className={classes.link} variant="body2">هنری</Link>
    <Divider flexItem style={{marginBottom: "10px"}}/>
    <Link component="button" href="" className={classes.link} variant="body2">سیاسی</Link>
    <Link component="button" href="" className={classes.link} variant="body2">علمی</Link>

    </Container>
 

  );
}

export default Leftbar;