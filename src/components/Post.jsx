import { Button, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyle=makeStyles((theme)=>({
    card:{
        marginBottom:theme.spacing(5),
    },
    media:{
        height:"350px",
        [theme.breakpoints.down("sm")]:{
            height:"150px"
        }
    }
}))
function Post() {
  const classes=useStyle();
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia className={classes.media}
            image="https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            title="پست اول"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">این اولین پست است</Typography>
                <Typography variant="body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt dolorum eius? </Typography>
            </CardContent>
            <CardActionArea>
                <Button size="small" color="primary">بیشتر بخوانید</Button>
                <Button size="small" color="primary">اشتراک گذاری</Button>
            </CardActionArea>
        </CardActionArea>
    </Card>
  );
}

export default Post;