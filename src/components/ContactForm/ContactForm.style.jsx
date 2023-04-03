import styled from "styled-components";

const handleRowItems = items => {
    return (100 / items) + "%";
}

export const ContactFormContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  font-family: "Open Sans", sans-serif;
  box-shadow: 5px 5px 24px -1px #5e5e5e;
`

export const Row = styled.div`
  display:flex;
  gap:10px;
  margin-bottom:1rem;
  justify-content: space-around;

  > * {
    width: ${({ items }) => handleRowItems(items)};
  }
`
export const ContactFormLeft = styled.div`
  width:100%;
  padding:30px 30px 30px 30px;
`

export const ContactFormRight = styled.div`
  background: linear-gradient(205deg,rgba(63,184,175,1) 0%,rgba(20,157,215,1) 100%);
  width:40%;
  box-sizing: border-box;
  padding:30px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  color:white;
  
  > div:first-child {
    margin-bottom:20px;
    font-size:20px;
    padding:0;
    font-weight: bold;
  }
`

export const FormTitle = styled.div`
  font-weight:bold;
  color:rgb(10,30,56)
`

export const ContactColItem = styled.div`
  display:flex;
  flex-direction: row;
  padding-top:5px;
  padding-bottom:15px;
`

export const ColItemIcon = styled.div`
  padding-right:10px;
`

export const ColItemText = styled.div`
    
`

export const FormStatus = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.$type === "success" ? "#2ecc71" : "#e74c3c"};
  padding:10px 30px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color:${props => props.$type === "success" ? "#2ecc71" : "#e74c3c"};
`
