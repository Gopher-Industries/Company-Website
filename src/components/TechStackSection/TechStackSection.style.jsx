import styled from "styled-components";

export const HomeLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap:80px;
  align-items: center;
  
  > img {
    width:150px;
    height:150px;
    aspect-ratio: 1 / 1;
    transition: all ease 0.3s;
  }
  
  > img:hover {
    scale:1.25;
  }
`
