import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { App } from '.';

test('<App />', t => {
  t.test('Renders main div', st => {
    const wrapper = shallow(<App />);
    st.equals(wrapper.find('div .main').length, 1, 'Found one main div');
    st.end();
  });

  t.end();
});
