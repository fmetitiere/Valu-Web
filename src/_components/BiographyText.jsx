import React from 'react';

import { P } from '../Layout/';

export default function BiographyText({ show }) {
	return (
		<div>
			<P>
			<strong>"Soy UX Writer y Content Creator "</strong> Me gusta diseñar con palabras la comunicación entre las personas y los entornos digitales, así como también ofrecer contenidos de valor que beneficie a las marcas y sus usuarios <br /> Estudié la carrera de Técnica Universitaria en 
				  <strong> Marketing y Publicidad Digital </strong>en la Universidad Siglo 21. 
			</P>
			{show && (
				<P>
							
				 Comencé en 2017 realizando proyectos de lanzamiento de un sitio web, <strong>creación de contenidos, 
				 diseño de post para redes sociales y consultorías para emprendedores en Instagram.</strong> 
				 Trabajé en organizaciones a beneficio de Unicef y como voluntaria en proyectos de ayuda a la comunidad.Actualmente trabajo de forma independiente en diferentes proyetos de <strong>UX Writing y generación de contenidos </strong>para Argentina, España y Ecuador.
{' '}
					
				</P>
			)}
		</div>
	);
}
