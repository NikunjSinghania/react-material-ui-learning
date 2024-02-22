import { Grid, Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";

const MainContainer = () => {
    return (
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{
            justifyContent : 'space-between',
            // width : '100% !important'
        }}>
            {Array.from(Array(20)).map((_, index) => (
                <Grid xs={3} sm={3} md={3} key={index} sx ={{ 
                    margin : '10px 1px'
                }} >
                    <Link to='/'>
                        <Card>
                                <CardMedia
                                    sx = {{
                                        height : '10vw'
                                    }}
                                    image='https://wallpapercave.com/wp/wp4305071.jpg'
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h3">
                                    GOT Season 8 Trailer
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">Game of Thrones
                                    </Typography>
                                </CardContent>
                          </Card>
                    </Link>
                          
                </Grid>
            ))}
        </Grid>
    )
}

export default MainContainer