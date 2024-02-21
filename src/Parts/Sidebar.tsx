import { Box, Drawer, IconButton,Button, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';


import { useSelector } from "react-redux";
import { User, Terms , SidePanel, SidePanelCurrent } from '../DEFINITIONS'
import { log } from "console";
import { USERS_REDUCER } from "../Redux/REDUCERS";
import { useEffect, useState } from "react";
const Item = () => {
    return (
        <Button sx={{
            width : '250px',
            display : 'flex',
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'flex-start',
        
        }}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon fontSize='medium'></MenuIcon>
            </IconButton>
            <Typography>
                Item 1
            </Typography>
        </Button>
    )
}

const Sidebar = () => {

    const Panel = useSelector((state : {Side_Panel : SidePanelCurrent , USERS_REDUCER : User})  => state.Side_Panel) as SidePanelCurrent
    const [open, setOpen] = useState(true)

    useEffect(() => {
        console.log(Panel);
        
        setOpen(Panel as unknown as boolean)
    }, [Panel])
    
    

    return (
        <>
        
            <Drawer 
                variant='permanent'
                anchor="left"
                sx= {{
                    '& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper' : {
                      
                        width : open == true ? '250px' : '50px',
                        transitionProperty : 'width',
                        transitionDuration : '0.5s',
                        position : 'relative'
                    }
                }}
                
            >
                <Item />
                <Divider variant="middle" component="span" ></Divider>
                <Item />
                <Divider variant="middle" component="span" ></Divider>
                <Item />
                <Divider variant="middle" component="span" ></Divider>
                <Item />
                <Divider variant="middle" component="span" ></Divider>
                <Item />
                <Divider variant="middle" component="span" ></Divider>
                <Item />
                <Divider variant="middle" component="span" ></Divider>
                
            </Drawer>
        </>
    )
}

export default Sidebar