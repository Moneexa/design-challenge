import React from 'react';
import { render, screen } from '@testing-library/react';
import DropDown from './DropDown';
import ThemeContainer from './index'

const items={}
test('renders learn react link', () => {
  render(
    <ThemeContainer theme="dark">
      <DropDown detailedMenu={true} items={items} />;

  </ThemeContainer>)
 
});


