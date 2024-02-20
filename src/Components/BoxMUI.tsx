import { Box } from "@mui/material"

const BoxMUI = () => {
    return (
        <>
            <Box component='section' sx={{
                height : '10vw',
                width : '10vw',
                bgcolor : 'warning.dark',
                color : 'primary',
                borderRadius : '20px',
                '&:hover' : {
                    bgcolor : 'red'
                }
            }}>

                Material UI
            </Box>
        </>
    )
}

export default BoxMUI