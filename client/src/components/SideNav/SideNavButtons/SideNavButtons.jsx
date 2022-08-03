import React from 'react';
import SideNavButton from './SideNavButton';
import buttons from './buttons.json';

const SideNavButtons = () => {
  const showButtons = () => {
    return buttons.map((button, idx) => {
      return (
        <SideNavButton
          key={idx}
          name={button.name}
          icon={button.icon}
          url={button.url}
        />
      );
    });
  };

  return <div className='side-nav_buttons'>{showButtons()}</div>;
};

export default SideNavButtons;
