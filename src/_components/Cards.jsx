import React, {useState} from 'react';
import classnames from 'classnames';

import { Card, Button, H3 } from '../Layout/';

export default function Cards({ component, children, show, title }) {
	const Component = component;

	const [ open, setOpen ] = useState(false);

	return (
		<Card>
      <H3 noMarginTop left>
				{title}
			</H3>
			<Component show={open}>{children}</Component>
			<Button className={classnames({ show })} onClick={() => setOpen(!open)}>
				{open ? `Show -` :  `Show +`}
			</Button>
		</Card>
	);
}
