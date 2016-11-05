import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { App } from '.';

test('<App />', t => {
  const wrapper = shallow(<App />);
  t.is(wrapper.find('div .main').length, 1, 'Found one main div');
});
