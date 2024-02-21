import { Grid, Typography } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const MainContainer = () => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
            justifyContent : 'space-between'
        }}>
            {Array.from(Array(20)).map((_, index) => (
                <Grid xs={8} sm={3} md={2} key={index} sx ={{ 
                    margin : '20px'
                }} >
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
                </Grid>
            ))}
        </Grid>
    )
}

export default MainContainer