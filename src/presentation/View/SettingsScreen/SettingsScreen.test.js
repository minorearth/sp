import { Provider } from 'react-redux';
import store from '../../redux/store';
import * as React from 'react'
import { SettingsScreen } from './SettingsScreen';
import { render, screen, fireEvent } from '@testing-library/react-native'

test('examples of some things', async () => {
    const expectedUsername = 'Ada Lovelace'
    render(<Provider store={store}><SettingsScreen /></Provider>)
    fireEvent.changeText(screen.getAllByTestId('userName')[0], expectedUsername)
    const usernameOutput = await screen.getAllByTestId('userName')[0]
    console.log(usernameOutput)
    //   screen.debug()
    // Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
    expect(usernameOutput).toHaveProp("value", expectedUsername)
    // expect(screen.toJSON()).toMatchSnapshot()
})


