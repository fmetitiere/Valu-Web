import React, { useState } from "react";
import classnames from "classnames";

import { Card, Button, H3 } from "../Layout/";

export default function Cards({ component, show, title }) {
  const Component = component;

  const [open, setOpen] = useState(false);

  return (
    <Card>
      <H3 noMarginTop left>
        {title}
      </H3>
      <Component show={open}></Component>
      <Button secondary={open} className={classnames({ show })} onClick={() => setOpen(!open)}>
        {open ? `Show -` : `Show +`}
      </Button>
    </Card>
  );
}
