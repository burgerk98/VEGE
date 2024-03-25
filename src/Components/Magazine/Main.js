import React from "react";
import HoverImg from "./HoverImg";
import "./Main.css";
import SideScroll from "./SideScroll";

const Main = () => {
  return (
    <div id="mainContainer">
      <div id="mainHeader">
        <h1>
          봄 시즌의 시작을 <br />
          VEGE와 함께하세요!
        </h1>
      </div>
      <SideScroll />
      <div id="mainSymbol">
        <h1>뭐넣징</h1>
      </div>
      <div id="mainLogo">
        <h1>VEGE</h1>
        <p>
          안녕하세요!
          <br />
          <br />
          VEGE는 여러분의 건강을 책임져 줄 농산물 쇼핑몰입니다!
          <br />
          <br />
          다양한 농가와 직접 연결되어있어 더 저렴하고, 안전한 먹거리를 즐길 수
          있는 VEGE!
          <br />
          <br />
          신선한 하루 되시길 바랍니다!
        </p>
      </div>
      <HoverImg />
      <div id="mainCook">
        <h1>뭐 넣고싶어잉</h1>
      </div>
    </div>
  );
};

export default Main;
