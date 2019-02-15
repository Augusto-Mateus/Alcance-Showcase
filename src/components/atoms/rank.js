import React, { Component } from "react";
import styled from "styled-components";

import Ranked from "../particles/ranked";

const rankeds = [0, 1, 2, 1];

const Main = styled.div`
  background-color: #f4d8dc;
  border-radius: 50px;
  height: 500px;
  padding: 13px;
  overflow-y: hidden;
  width: 500px;
`;

// const slider = () => {
//   let isDown = false;
//   let startX;
//   let scrollLeft;

//   slider.addEventListener("mousedown", e => {
//     isDown = true;
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
//   });
//   slider.addEventListener("mouseleave", () => {
//     isDown = false;
//   });
//   slider.addEventListener("mouseup", () => {
//     isDown = false;
//   });
//   slider.addEventListener("mousemove", e => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 3; //scroll-fast
//     slider.scrollLeft = scrollLeft - walk;
//     console.log(walk);
//   });
// };

class Rank extends Component {
  render() {
    return (
      <Main>
        {rankeds.map(ranked => {
          return <Ranked key={Math.random()} img={ranked} />;
        })}
      </Main>
    );
  }
}

export default Rank;
