import React from "react";
import styled, { keyframes } from "styled-components";

const Ellipsis = styled.div`
  isplay: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;
const Div = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: silver;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;
const ellipsis1 = keyframes`
0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const ellipsis2 = keyframes`
0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;
const ellipsis3 = keyframes`
0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const Div1 = styled(Div)`
  left: 8px;
  animation: ${ellipsis1} 0.6s infinite;
`;
const Div2 = styled(Div)`
  left: 8px;
  animation: ${ellipsis2} 0.6s infinite;
`;
const Div3 = styled(Div)`
  left: 32px;
  animation: ${ellipsis2} 0.6s infinite;
`;
const Div4 = styled(Div)`
  left: 56px;
  animation: ${ellipsis3} 0.6s infinite;
`;

const Loader = () => {
  return (
    <Ellipsis>
      <Div1></Div1>
      <Div2></Div2>
      <Div3></Div3>
      <Div4></Div4>
    </Ellipsis>
  );
};

export default Loader;
