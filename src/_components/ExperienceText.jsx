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
	color: ${props => props.theme.PrimaryColor};
`;

const Skill = styled.div`font-weight: 400;`;

export default function ExperienceText({ show }) {
	return (
		<div>
			<ExpWrapper>
				<Company>
					1MIB<Skill>UX Writer /Content Creator</Skill>
				</Company>
				<Time>Actualmente</Time>
			</ExpWrapper>
			{show && (
				<div>
					<ExpWrapper>
						<Company>
							BTCJ<Skill>Redactora de artículos</Skill>
						</Company>
						<Time>Actualmente</Time>
					</ExpWrapper>
					<ExpWrapper>
						<Company>
							Instituto Modelo Proyecto 2000
							<Skill>Content Creator</Skill>
						</Company>
						<Time>2018 - Actualmente</Time>
					</ExpWrapper>
					<ExpWrapper>
						<Company>
							Genwords<Skill>Content Marketing</Skill>
						</Company>
						<Time>2021</Time>
					</ExpWrapper>
					<ExpWrapper>
						<Company>
							Comunidad de Programadores
							<Skill>Copywriter / UX Writer</Skill>
						</Company>
						<Time>2020</Time>
					</ExpWrapper>				
					<ExpWrapper>
						<Company>
							Danzar Por La Paz
							<Skill>Diseño de Artes Digitales</Skill>
						</Company>
						<Time>2017 - 2019</Time>
					</ExpWrapper>
					<ExpWrapper>
				<Company>
					Bhodi Meditación<Skill>Asistente de Social Media</Skill>
				</Company>
				<Time>2018</Time>
			</ExpWrapper>
				</div>
			)}
		</div>
	);
}
