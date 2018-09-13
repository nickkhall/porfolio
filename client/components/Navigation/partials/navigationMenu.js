import React from 'react';

const NavigationMenu = () => {
  const items = [
    {
      label: 'Projects',
      link: null
    },
    {
      label: 'About',
      link: null
    },
    {
      label: 'Contact',
      link: null
    }
  ];

  const navItems = items.map(item => (
    <li key={item.label} className="navigation-item">
      <h2 className="title">{ item.label }</h2>
    </li>
  ));

  return (
    <ul className="navigation-menu">
      { navItems }
    </ul>
  );
};

export default NavigationMenu;
