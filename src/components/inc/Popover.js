// CustomPopover1.js
import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

const CustomPopover1 = ({ header, imageSrc, content}) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3" style={{ background: "#aac8cd" }}>{header}</Popover.Header>
      <Popover.Body>
        <img src={imageSrc} alt="" />
        {content}
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={popover}
    >
      <Button variant="secondary" style={{ background: "#156570" }}>LATEST UPDATES</Button>
    </OverlayTrigger>
  );
};

export default CustomPopover1;
