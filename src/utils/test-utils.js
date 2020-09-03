import React from 'react'
import renderer from 'react-test-renderer'
import { RecoilRoot } from 'recoil'

export const renderWrapper = (elements) => {
    return renderer.create(<RecoilRoot>{elements}</RecoilRoot>)
}