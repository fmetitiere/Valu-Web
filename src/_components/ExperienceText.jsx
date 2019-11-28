import React from 'react';
import styled from 'styled-components';

const ExpWrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-template-areas: "left right";
	margin-bottom: 1rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #ddd;
`;

const Company = styled.div`
	grid-area: left;
	font-weight: bold;
`;
const Time = styled.div`
	grid-area: right;
	text-align: right;
	font-size: .8rem;
	color: #68b7f0;
`;

const Skill = styled.div`font-weight: 400;`;

export default function ExperienceText({ show }) {
	return (
		<div>
			<ExpWrapper>
				<Company>
					Technisys<Skill>Senior User Interface Developer</Skill>
				</Company>
				<Time>2018 - Today</Time>
			</ExpWrapper>
			{show && (
				<div>
					<ExpWrapper>
						<Company>
							Association of Electronic Sports And Video Games of Argentina<Skill>Freelance Multimedia Designer</Skill>
						</Company>
						<Time>2018</Time>
					</ExpWrapper>
					<ExpWrapper>
						<Company>
							LOP Multimedia (Argentina)
							<Skill>Junior Frontend Developer</Skill>
						</Company>
						<Time>2016 - 2018</Time>
					</ExpWrapper>
					<ExpWrapper>
						<Company>
							Latinmanagers (Ecuador)
							<Skill>Web Multimedia Designer</Skill>
						</Company>
						<Time>2014 - 2016</Time>
					</ExpWrapper>
					<ExpWrapper>
						<Company>
							PARADIPLOMACIA.ORG
							<Skill>Freelance Graphic Designer</Skill>
						</Company>
						<Time>2014 - 2016</Time>
					</ExpWrapper>
				</div>
			)}
		</div>
	);
}
