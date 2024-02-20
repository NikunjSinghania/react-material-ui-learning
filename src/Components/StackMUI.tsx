import { ListItem, Stack } from "@mui/material"

const StackMUI = () => {



    return (
        <>
            <Stack sx={{
                display : 'flex',
                flexDirection : 'row'
            }}>
                {
                    Array.from(Array(6)).map(e => {
                        return (
                            <ListItem sx={{
                                width : '100px',
                                bgcolor : 'red',
                                margin : '5px',
                                display : 'flex',
                                alignItems : 'center',
                                justifyContent : 'center'
                            }}>1</ListItem>
                        )
                    })
                }
                
                
                

            </Stack>
        </>
    )
}

export default StackMUI