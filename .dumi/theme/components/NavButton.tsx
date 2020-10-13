import * as React from 'react';
import './NavButton.less';

const NavButton = props => {
  const { to, base } = props;
  const handleClick = () => {
    if (to?.includes('http')) {
      window.open(to);
      return;
    }
    window.location.href = base === '/' ? to : base + to;
  };
  return (
    <div className="anna-nav-button" onClick={handleClick}>
      {props.children}
    </div>
  );
};

export default NavButton;
