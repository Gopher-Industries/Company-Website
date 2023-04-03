import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky; top: 0;
  height:70px;
  width:100vw;
  padding:10px 0;
  display:flex;
  align-content: center;
  justify-content: center;
  box-sizing: border-box;
  z-index:9999;
  transition:all 0.3s ease;
`

export const InnerHeader = styled.div`
  max-width:1140px;
  width:1140px;
  display:flex;
  justify-content:space-between;
  align-items: center;
`

export const Logo = styled.img`
  height:44px;
`
