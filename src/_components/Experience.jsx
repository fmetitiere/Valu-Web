import React from 'react';
import SkillBar from 'react-skillbars';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 1rem 0;
    .skillbar-bar {
        left: 5rem;
        background: linear-gradient(to right,rgba(96,124,234,1) 0%,rgba(105,186,241,1) 100%);
    }
	.skillbar-title {
		span {
			background: rgba(0, 0, 0, 0);
            padding: 0 10px;
            color: #212529;
		}
    }
    .skillbar-title {
        width: 0rem;
    }
    .skillbar {
        background: transparent;
    }
    .skillbar-percent {
        left: 5.5rem;
        font-size: .8rem;
        color: #ffffff;
    }
`;

const skills = [ { type: 'Java', level: 100 }, { type: 'Javascript', level: 75 } ];

export default function Experiece() {
	return (
		<Wrapper>
			<SkillBar skills={skills} height={28} />
		</Wrapper>
	);
}
