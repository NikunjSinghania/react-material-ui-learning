import React , {useState} from 'react';

import { Box, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { PropsWithChildren, useEffect } from 'react';
import { User, Terms, SidePanel, SidePanelCurrent } from '../DEFINITIONS'
import { LOGIN, LOGOUT, SIDE_PANEL } from '../Redux/ACTIONS'
const Login : React.FC<{value:User}> = ({value}) => {
  
  return (
    <>
      {
        value.isLoggedIn && <Button variant='outlined' color="inherit" sx={{
          borderRadius : '20px'
        }}></Button>
      }
    </>
  )
}

const Navbar = () => {
  const Panel = useSelector((state : {Side_Panel : SidePanelCurrent , USERS_REDUCER : User})  => state.Side_Panel) as SidePanelCurrent
    const [open, setOpen] = useState(true)

    useEffect(() => {
        console.log(Panel);
        
        setOpen(Panel as unknown as boolean)
    }, [Panel])
  const user = useSelector(state => state) as User;
  const dispatch = useDispatch()
  // console.log(User)
    const [inputValue, setInputValue] = useState<string>('')

    return (
        <AppBar position="static" 
                color='primary'
      sx={{
        borderRadius : '10px',
        width : "100%",
        margin: '20px'
      }}
      >
        
        <Toolbar sx={{
            
        display : "flex",
        justifyContent : 'space-between'
        }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => dispatch(SIDE_PANEL(!open))}
          >
            <MenuIcon fontSize='medium'></MenuIcon>
          </IconButton>

          <Box sx={{
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center'
          }}>
          <Input placeholder="Placeholder"
            color='secondary'
          sx= {{
            color : 'white',
            width : '20vw'
          }} 
          value={inputValue}
          onChange={(e) => {setInputValue(e.target.value)}}
          />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SearchIcon></SearchIcon>
          </IconButton>
          
          </Box>
          

          <Login value={user} />
          
        </Toolbar>
      </AppBar>
    )
}

export default Navbar