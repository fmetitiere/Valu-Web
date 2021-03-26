import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const IconWrapper = styled.div`
  div {
    display: flex;
    justify-content: center;
  }
  svg {
    width: 2rem;
    height: auto;
    fill: ${(props) => props.theme.IconColor};
  }
`;



export default function Icon({ name }) {
  switch (name) {
    case "facebook":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/icons/facebook.svg" />
        </IconWrapper>
      );
    case "insta":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/icons/instagram.svg" />
        </IconWrapper>
      );
    case "linkedin":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/icons/linkedin.svg" />
        </IconWrapper>
      );
    case "pdf":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/icons/formar.svg" />
        </IconWrapper>
      );
      case "left":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/icons/flecha-izquierda.svg" />
        </IconWrapper>
      );
    case "iconExample":
      return (
        <IconWrapper>
          <ReactSVG src="_assets/icons/logo.svg" />
        </IconWrapper>
      );
    default:
      return (
        <IconWrapper>
          <ReactSVG src="_assets/icons/logo.svg" />
        </IconWrapper>
      );
  }
}
