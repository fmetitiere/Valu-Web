import React from "react";
import styled from "styled-components";


function changeBackground({ imgPath }) {
  return imgPath ? `background:url(${imgPath});` : "";
}

export const Item = styled.div`
  height: 400px;
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: top !important;
  ${changeBackground}
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 16rem;
  p{
    width:30%;
  }
`;

export const Info = styled.div`
  width: 1170px;
  margin: 0 auto;
`;

function BannerItem({ imgPath }) {
  return <Item imgPath={imgPath} />;
}

export default function Carrousel({ bannerData }) {
  return (
    <>
        {bannerData.map((element) => (
          <BannerItem imgPath={element.image} />
        ))}
    </>
  );
}
