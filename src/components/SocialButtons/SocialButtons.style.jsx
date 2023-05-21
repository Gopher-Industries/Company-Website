import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const SocialsContainer = styled.div`
  display:flex;
  gap:10px;

  @media (max-width: 767px){
    justify-content: center;
  }
`

export const StyledIcon = styled(IconButton)`
  background-color: #768fa6 !important;
  height:40px;
  
  &:hover {
    background-color: #1ab4fc !important;
  }
  
  > svg {
    color: white;
  }
  > a {
    height:24px;
    width:24px;
    
    > svg {
      color: white;
    }
  }
`
