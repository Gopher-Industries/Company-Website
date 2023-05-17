import { Menu, Clear } from "@mui/icons-material"
import { Button } from "@mui/material"

const HamburgerButton = (props) => {
    return(
        <Button onClick={() => {
            props.toggleFunction(!props.showMenu)
}
        } id="HamburgerButton" startIcon={props.showMenu ?  <Clear sx={{
            width : "70px",
            height : "40px"
            
        }}/> : <Menu sx={{
            color : `${props.$barsolid ? "black" : "white"}`,
            width : "70px",
            height : "40px"
        }} />} sx={{
            position : "absolute",
            left : 0,
            top : 0
        }}/>
    )
}

export default HamburgerButton