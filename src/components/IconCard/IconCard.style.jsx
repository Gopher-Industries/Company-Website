import styled from "styled-components";
import Icon from "@mui/material/Icon";
import {Avatar} from "@mui/material";
import { motion } from "framer-motion"

const handleCardSize = size => {
    switch(size){
        case "large":
            return "100%";
        case "medium":
            return "50%";
        case "small":
            return "25%";
        default:
            return "100%";
    }
}

export const StyledIconNode = styled(Avatar)`
  border:1px dashed #1ab4fc;
  margin:0 auto;
  background-color: transparent !important;
`

export const CallToAction = styled.h4`
  font-weight: 500;
  line-height: 1.2;
  font-size: 1.5rem;
  font-family: "Raleway", sans-serif;
  margin:0 0 0.5rem 0;
`

export const Content = styled.p`
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  color: #444;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  margin:0;
`

export const StyledIcon = styled(Icon)`
  margin:0 auto;
  color:#1ab4fc;
`

export const Heading = styled.h3`
  font-size: 20px;
  color: #666;
  font-weight: 700;
  margin: 10px 0;
  font-family: "Raleway", sans-serif;
`



export const IconCardContainer = styled(motion.div)`
  display:flex;
  flex-direction: column;
  width: ${({ size }) => handleCardSize(size)};
  justify-content: center;
  color: #444;
  text-align: center;
  box-shadow: 0 0 30px rgb(214 215 216 / 60%);
  margin-bottom: 30px;
  padding:20px 0 30px 0;
`
