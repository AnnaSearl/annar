import * as React from 'react';
import './NavButton.less';

const NavButton = props => {
  return (
    <div
      className="anna-nav-button"
      onClick={() => {
        window.location.href = 'components';
      }}
    >
      {props.children}
    </div>
  );
};

export default NavButton;
