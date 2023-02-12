import { makeStyles,Container } from "@material-ui/core";
import Post from "./Post";

const useStyle=makeStyles((theme)=>({
  container:{
    paddingTop:theme.spacing(10)
  }
}))
function Feed() {
  const classes=useStyle();

  return (
    <Container className={classes.container}>
      <Post/>
      <Post/>
    </Container>
  );
}

export default Feed;