import React from 'react'
import Arrows from '../Arrows/Arrows'
import {renderWrapper} from '../../../../utils/test-utils'

describe('Arrows', () => {
    test('snapshot renders', () => {
        const component = renderWrapper(<Arrows />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})