import styled from "styled-components";

export const HomeLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 80px;
  row-gap: 0;

  > img {
    width:12%;
    height:auto;
    aspect-ratio: 1 / 1;
    transition: all ease 0.3s;
  }

  > img:hover {
    scale:1.25;
  }
`
