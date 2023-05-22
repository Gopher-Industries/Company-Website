import styled from "styled-components";

export const spanTag = styled.span`
  
`

export const time = styled.time`
`

export const p = styled.p`
`

export const StudentTimeline_Item_Title = styled.p`
  font-weight: bold;
`

export const a = styled.a`
`

export const circle = styled.span`
`


export const StudentTimeline_Item_Content = styled.div`
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

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
  
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
    
    @media (max-width: 768px) {
      display: none;
    }
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

    @media (max-width: 768px) {
      left: unset;
      top: unset;
      text-align: center;
      border-radius: 5px;
      width:100%;
      position: relative;
    }
  }

  > time {
    color: #777;
    font-size: 12px;

    @media (max-width: 768px) {
      padding-top:10px;
      margin: 0 auto;
    }
    
  }

  > p {
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0;

    @media (max-width: 768px) {
      margin: 5px 0;
    }
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
    background-color: #3FB8AF;
    border: 3px solid #3FB8AF;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 10px);
    right: -50px;
    width: 20px;
    height: 20px;
    z-index: 100;

    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const StudentTimeline_Item = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  margin: 10px 0;
  width: 46.5%;

  @media (max-width: 768px) {
    z-index:9998;
    padding-right:0;
    width:100%;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 30px;

    @media (max-width: 768px) {
      padding-left: 0;
      justify-content: center;
    }
    
    
    > .StudentTimeline_Item_Content {
      align-items: flex-start;
      text-align: left;

      @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
      }
      
      &::after {
        box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
        right: auto;
        left: -7.5px;

        @media (max-width: 768px) {
          display:none;
        }
      }
      
      > .spanTag {
        left: auto;
        right: 5px;

        @media (max-width: 768px) {
          left: unset;
          right: unset;
          text-align: center;
          border-radius: 5px;
          width:100%;
          position: relative;
        }

      }
      
      > .circle {
        right: auto;
        left: -50px;
        
        @media (max-width: 768px) {
          display:none;
        }
      }
      
    }
  }
`





