import React from 'react';
import { mount } from 'enzyme';
import Space from '..';

describe('Space', () => {
  it('should render width empty children', () => {
    const wrapper = mount(<Space />);

    expect(wrapper.instance()).toBe(null);
    // expect(ss(1, 4)).toBe(5);
  });
});
