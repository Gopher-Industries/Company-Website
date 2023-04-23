import styled from "styled-components";

export const AboutUsContainer = styled.div`
  max-width:1140px;
  width:100%;
  margin-top:40px;
  margin-bottom:40px;
`

export const AboutUsRow = styled.div`
  display:flex;
  justify-content: space-around;
  gap:30px;
  align-items: center;
  
  > * {
    width:50%;
    max-width:50%;
  }
`

export const AboutUsItem = styled.div`
  padding:0 40px 10px 40px;  

  > p {
    text-align: left;
    color: #666;
    font-family: "Open Sans", sans-serif;
  }
  
  > video {
    height:290px;
  }
`
