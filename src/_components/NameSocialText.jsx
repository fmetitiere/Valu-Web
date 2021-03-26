import React from "react";
import Styled from "styled-components";

import Icon from "../_components/Icon";

const Social = Styled.div`
	align-self: center;
	justify-self: center;
	width: 100%;
	text-align: center;
	padding: .2rem .3rem;
	border-radius: .3rem;
`;

const Social1 = Styled(Social)`
	grid-area: social1;
`;
const Social2 = Styled(Social)`
	grid-area: social2;
`;
const Social3 = Styled(Social)`
	grid-area: social3;
`;

export default function NameSocialText() {
  return (
    <>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.facebook.com/nano.metitiere"
      >
        <Social1>
          <Icon name="facebook" />
        </Social1>
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/nano.uideveloper/"
      >
        <Social2>
          <Icon name="insta" />
        </Social2>
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/fernando-metitiere/"
      >
        <Social3>
          <Icon name="linkedin" />
        </Social3>
      </a>

	  <a
        rel="noopener noreferrer"
        target="_blank"
        href="/CV-FernandoMetitiere.pdf"
      >
        <Social3>
          <Icon name="pdf" />
        </Social3>
      </a>
    </>
  );
}
