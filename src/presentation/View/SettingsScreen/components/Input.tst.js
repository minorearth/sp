// // import React from 'react';
// // // import renderer from 'react-test-renderer';
// // const ReactTestRenderer = require('react-test-renderer')


// // import {Input} from './Input';
// // const tree = ReactTestRenderer.create(<Input />).toJSON();


// // test('has 1 child', () => {
// //   expect(tree.children.length).toBe(1);
// // });
// import * as React from 'react'


// import {Input} from './Input';
// import {render, screen, fireEvent} from '@testing-library/react-native'

// test('examples of some things', async () => {
//   const expectedUsername = 'Ada Lovelace'

//   render(<Input name=''  setUserName={jest.fn()}  width="100"/>)

//   fireEvent.changeText(screen.getByTestId('input'), expectedUsername)
//   const usernameOutput = await screen.findByTestId('input')
//   // const smth = getByTestId('input')
  
//   // Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
//   expect(usernameOutput).toHaveProp("value", expectedUsername)
//   screen.debug()

//   // expect(screen.toJSON()).toMatchSnapshot()
// })


