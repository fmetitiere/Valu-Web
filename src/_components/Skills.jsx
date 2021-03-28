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
	{ type: 'Adobe Suit', level: 70 },
    { type: 'Adobe XD', level: 60 },
    { type: 'Figma', level: 60 },
    { type: 'Redacción SEO', level: 80 },
    { type: 'Wordpress', level: 50 },
	{ type: 'HTML', level: 50 },
    { type: 'Google Analytics', level: 60 },
    { type: 'Google Ads', level: 50 },
	];


export default function Skills({...props}) {
	return (
		<Wrapper {...props}>
			<SkillBar skills={skills} height={28} />
		</Wrapper>
	);
}
