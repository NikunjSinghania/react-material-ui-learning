import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
const GridMUI = () => {
    return (
        <>
        <Box sx={{
            flexGrow : 1
        }}>
        <Grid container spacing={0}>
            <Box sx={{
                width : '100px',
                height : '100px'
            }}>Box 1</Box>
            <Box sx={{
                width : '100px',
                height : '100px'
            }}>Box 2</Box>
            <Box sx={{
                width : '100px',
                height : '100px'
            }}>Box 3</Box>
            <Box sx={{
                width : '100px',
                height : '100px'
            }}>Box 4</Box>
            <Box sx={{
                width : '100px',
                height : '100px'
            }}>Box 5</Box>
        </Grid>
        </Box>
        
        </>
    )
}

export default GridMUI