import React from 'react'
import Tile from './Tile'
import {renderWrapper} from '../../../utils/test-utils'

describe('Tile', () => {
    test('snapshot renders', () => {
        const component = renderWrapper(<Tile />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})