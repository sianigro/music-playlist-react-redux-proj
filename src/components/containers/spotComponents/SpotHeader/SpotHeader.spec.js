// import { expect } from 'chai';
// import { shallow } from 'enzyme';
// import React from 'react';

// import SpotHeader from './index';

// describe('SpotHeader', () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<SpotHeader />);
//   });

//   it('SpotHeader should render', () => {
//     expect(wrapper).to.have.length(1);
//   });

//   it('SpotHeader should render both TrackSearch and UserDetails', () => {
//     const wrapper = shallow(<SpotHeader />);
//     expect(wrapper.children()).to.have.length(2);
//   });
// });

// export default SpotHeader;

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import Header from './index';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('Header should render', () => {
    expect(wrapper).to.have.length(1);
  });

  it('Header should render both TrackSearch and UserDetails', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.children()).to.have.length(2);
  });
});
