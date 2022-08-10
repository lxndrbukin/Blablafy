import React from 'react';
import TopBarButton from './TopBarButton';
import buttons from './buttons.json';

const TopBarButtons = () => {
  const showButtons = () => {
    return buttons.map((button, idx) => {
      return (
        <TopBarButton
          key={idx}
          name={button.name}
          icon={button.icon}
          url={button.url}
        />
      );
    });
  };

  return <div className='top-bar_buttons'>{showButtons()}</div>;
};

export default TopBarButtons;
