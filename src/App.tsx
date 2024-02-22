import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Parts/Navbar";
import Sidebar from "./Parts/Sidebar";
// import { Provider } from "react-redux";
// import store from "./Redux/STORE";
import MainContainer from "./Parts/MainContainer";
import { Grid } from "@mui/material";
import { User, Terms , SidePanel, SidePanelCurrent } from './DEFINITIONS'
import { useSelector } from "react-redux";


function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = React.useState<User>();
  const [maxw, setMaxw] = useState('')
  const Panel = useSelector((state : {Side_Panel : SidePanelCurrent , USERS_REDUCER : User})  => state.Side_Panel) as SidePanelCurrent
    const [open, setOpen] = useState(true)

    useEffect(() => {
        console.log(Panel);
        if(Panel) {
          setMaxw('15vw')
        }else setMaxw('50px')
        setOpen(Panel as unknown as boolean)
    }, [Panel])
    
  return (
    <>
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "95vw",
          }}
        >
          <Navbar />
        </div>
        
          <Grid
            container
            columns={{ xs: 12, sm: 12, md: 12 }}
            sx={{
              display : 'flex',
              justifyContent: "space-between",
              width: "95vw !important",
            }}
          >
            <Grid
              xs={open == true ? 2 : 0.4}
              sm={open == true ? 2 : 0.4}
              md={open == true ? 2 : 0.4}
              sx={{
                transitionProperty : 'max-width',
                transitionDuration : '0.5s',
              }}
            >
              <Sidebar />
            </Grid>
            <Grid
              xs={open == true ? 10 : 11}
              sm={open == true ? 10 : 11}
              md={open == true ? 10 : 11}
              sx={{
                transitionProperty : 'max-width',
                        transitionDuration : '0.5s',
              }}
            >
              <MainContainer />
            </Grid>
          </Grid>
    </>
  );
}

export default App;
