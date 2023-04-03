import styled from "styled-components";

export const spanTag = styled.span`
  
`

export const time = styled.time`
`

export const p = styled.p`
`

export const a = styled.a`
`

export const circle = styled.span`
`


export const CompanyTimeline_Item_Content = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  padding: 15px;
  max-width: 100%;
  width: 700px;
  text-align: right;
  
  &::after {
    content: ' ';
    background-color: #fff;
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    transform: rotate(45deg);
    right: -7.5px;
    top: calc(50% - 7.5px);
    width: 15px;
    height: 15px;
  }
  
  > .spanTag {
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 5px;
    position: absolute;
    letter-spacing: 1px;
    top: 5px;
    left: 5px;
    text-transform: capitalize;
  }

  > time {
    color: #777;
    font-size: 12px;
  }

  > p {
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0;
  }

  > .styled-link {
    color: #333;
    text-decoration: none;
    font-size: 14px;
    
    &::after {
      content: '▶' ;
      font-size: 12px;
    }
  }
  
  > .circle {
    background-color: #1ab4fc;
    border: 3px solid #1ab4fc;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 10px);
    right: -50px;
    width: 20px;
    height: 20px;
    z-index: 100;
  }
`

export const CompanyTimeline_Item = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  margin: 10px 0;
  width: 46.5%;
  
  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 30px;
    
    > .CompanyTimeline_Item_Content {
      align-items: flex-start;
      text-align: left;
      
      &::after {
        box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
        right: auto;
        left: -7.5px;
      }
      
      > .spanTag {
        left: auto;
        right: 5px;
      }
      
      > .circle {
        right: auto;
        left: -50px;
      }
      
    }
  }
`





