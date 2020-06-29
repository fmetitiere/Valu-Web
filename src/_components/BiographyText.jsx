import React from 'react';

import { P } from '../Layout/';

export default function BiographyText({ show }) {
	return (
		<div>
			<P>
			<strong>"Soy Copywriter y UX Writer "</strong> Me dedico a aplicar el poder de las palabras en diferentes 
				objetivos y circunstancias. <br /> Estudié la carrera de Técnica Universitaria en 
				  <strong> Marketing y Publicidad Digital </strong>en la Universidad Siglo 21. 
			</P>
			{show && (
				<P>
							
				 Comencé en 2017 realizando proyectos de lanzamiento de un sitio web, <strong>creación de contenidos, 
				 diseño de post para redes sociales y consultorías para emprendedores en Instagram.</strong> 
				 Trabajé en organizaciones a beneficio de Unicef y como voluntaria en proyectos de ayuda a la comunidad 
				 creando el <strong>copywriting</strong> de herramientas digitales que permiten enviar donaciones durante la pandemia.
				 Actualmente continúo capacitándome para estar al tanto de las ultimas actualizaciones y tendencias en mi carrera.
{' '}
					
				</P>
			)}
		</div>
	);
}
