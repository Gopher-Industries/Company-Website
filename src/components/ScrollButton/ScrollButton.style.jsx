import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const Container = styled.div`
   position: fixed;
   left: 30px;
   bottom: 80px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
`

export const StyledIcon = styled(IconButton)`
  background-color: #1ab4fc !important;
  border-radius: 5px !important;
  
  &:hover {
    background-color: #768fa6 !important;
  }
  
  > svg {
    color: white;
  }
`
