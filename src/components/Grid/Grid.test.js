import React from 'react';
import Grid from './'
import { shuffleTileContent } from './Grid-utils'
import { renderWrapper } from '../../utils/test-utils';

describe('Grid', () => {
    test('snapshot renders', () => {
        const component = renderWrapper(<Grid />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})

describe('Grid', () => {
    describe('shuffleTileContent', () => {
        it('should return an object', () => {
            expect(shuffleTileContent()).not.toBe(null)
        })
    })
})