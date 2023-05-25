import React from 'react';
// import renderer from 'react-test-renderer';
const ReactTestRenderer = require('react-test-renderer')

import {Input} from './Input';
const tree = ReactTestRenderer.create(<Input />).toJSON();


test('has 1 child', () => {
  expect(tree.children.length).toBe(1);
});