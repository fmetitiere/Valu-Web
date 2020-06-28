import React from 'react';

import { P } from '../Layout/';

export default function BiographyText({ show }) {
	return (
		<div>
			<P>
				Born in Buenos Aires (Argentina), Nano began his studies in 2012 at the "First Da Vinci Multimedia
				School" in <strong>"Multimedia Design"</strong>. After two years of studies, he travels to Ecuador to specialize in 
			</P>
			{show && (
				<P>
					
				<strong>"Soy Copywriter y UX Writer "</strong> Me dedido a aplicar el poder de las palabras en diferentes 
				objetivos y circunstancias. <br /> Estudié la carrera de Técnica Universitaria en
				 <strong>Marketing y Publicidad Digital </strong>en la Universidad Siglo 21. 
				 Comencé en 2017 realizando proyectos de lanzamiento de un sitio web, creación de contenidos, 
				 diseño de post para redes sociales y consultorías para emprendedores en Instagram. 
				 Trabajé en organizaciones a beneficio de Unicef y como voluntaria en proyectos de ayuda a la comunidad 
				 creando el copywriting de herramientas digitales que permiten enviar donaciones durante la pandemia.
				 Actualmente continùo capacitándome para estar al tanto de las ultimas actualizaciones y tendencias en mi carrera.
{' '}
					
				</P>
			)}
		</div>
	);
}
