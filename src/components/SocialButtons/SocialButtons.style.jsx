import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const SocialsContainer = styled.div`
  display:flex;
  gap:10px;
`

export const StyledIcon = styled(IconButton)`
  background-color: #768fa6 !important;
  
  &:hover {
    background-color: #1ab4fc !important;
  }
  
  > svg {
    color: white;
  }
`