import React from 'react';
// import renderer from 'react-test-renderer';
const ReactTestRenderer = require('react-test-renderer')

import { isVisible } from './Eventsfilter';
const tree = ReactTestRenderer.create(<Input />).toJSON();


test('has 1 child', () => {
    const event = {
        
    }

    const filter = {
        "className": "",
        "myClassToggle": false,
        "parallels": {
            "1": true,
            "10": true,
            "11": true,
            "2": true,
            "3": true,
            "4": true,
            "5": true,
            "6": true,
            "7": true,
            "8": true,
            "9": true
        },
        "refreshItems": false,
        "value": "Прошедшие"
    }

    const

        expect(isVisible(
    ,
    ,
            Ученик,
            false)).toBe(1);
});