import { Stack } from '@mui/material'
import Button from '@mui/material/Button'
const ButtonMUI = () => {
    return (
        <>
        <Stack spacing={1} direction={'row'} >
        <Button variant="text" color="primary">
            Button
            </Button>
                <Button variant="text" color="secondary">
                Button
            </Button>
            <Button href="https://google.com" variant="text" color="error">
            Button
            </Button>

            <Button variant="outlined" color="primary">
            Button
            </Button>
                <Button variant="outlined" color="secondary">
                Button
            </Button>
            <Button variant="outlined" color="error">
            Button
            </Button>

            <Button variant="contained" color="primary">
            Button
            </Button>
                <Button variant="contained" color="secondary">
                Button
            </Button>
            <Button size='small' variant="contained" color="error">
            Button
            </Button>
            <Button size='medium' variant="contained" color="warning">
            Button
            </Button>
            <Button size='large' variant="contained" color="primary">
            Button
            </Button>
        </Stack>
            
        </>
        
    )
}

export default ButtonMUI