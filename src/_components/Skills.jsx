import React from 'react';
import SkillBar from 'react-skillbars';
import styled from 'styled-components';

function addMargin({addBottomMargin}){
	return(
		addBottomMargin ? "1rem 0 5rem;" : "1rem 0"
	)
}

const Wrapper = styled.div`
	margin: ${addMargin};
	.skillbar{
		max-width:85%;
	}
	.skillbar-bar {
		left: 8.5rem;
		background: ${(props) => props.theme.PrimaryColor};
	}
	.skillbar-title {
		span {
			background: rgba(0, 0, 0, 0);
			padding: 0 10px;
			color: #212529;
		}
	}
	.skillbar-title {
		width: 100%;
		background: transparent;
	}
	.skillbar {
		background: transparent;
	}
	.skillbar-percent {
		left: 9rem;
		font-size: .8rem;
		color: #ffffff;
	}
`;

const skills = [
	{ type: 'React JS', level: 50 },
	{ type: 'UI Components', level: 80 },
	{ type: 'Styled Components', level: 100 },
    { type: 'Javascript', level: 50 },
    { type: 'HTML', level: 100 },
    { type: 'CSS / SASS', level: 100 },
    { type: 'Adobe Illustrator', level: 100 },
    { type: 'Adobe Photoshop', level: 100 },
    { type: 'Adobe After Effects', level: 70 },
];


export default function Skills({...props}) {
	return (
		<Wrapper {...props}>
			<SkillBar skills={skills} height={28} />
		</Wrapper>
	);
}
