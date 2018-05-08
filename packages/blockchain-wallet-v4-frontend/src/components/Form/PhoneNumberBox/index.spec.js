import React from 'react'
import PhoneNumberBox from './index.js'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
jest.mock('blockchain-info-components', () => ({ Text: 'text' }))
jest.mock('react-intl-tel-input/dist/main.css', () => ({}))
jest.mock('react-intl-tel-input/dist/libphonenumber.js', () => ({}))
jest.mock('react-intl-tel-input', () => ({}))

describe('PhoneNumberBox', () => {
  it('renders correctly', () => {
    const component = shallow(<PhoneNumberBox countryCode={{data: 'US'}} />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
