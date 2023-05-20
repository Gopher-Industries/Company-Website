import styled from "styled-components";

export const StyledCarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  img {
    max-height: 300px;
    object-fit: cover;
    margin-bottom: 16px;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    text-align: center;
  }
`;

// export const StyledArrow = styled.div`
//   display: block;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 40px;
//   height: 40px;
//   line-height: 40px;
//   text-align: center;
//   font-size: 24px;
//   font-weight: bold;
//   background-color: rgba(255, 255, 255, 0.7);
//   border-radius: 50%;
//   cursor: pointer;
//   z-index: 1;
//   &.slick-left {
//     left: 16px;
//   }
//   &.slick-right {
//     right: 16px;
//   }
// `;
