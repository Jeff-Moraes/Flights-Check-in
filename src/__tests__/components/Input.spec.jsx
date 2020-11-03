import React from 'react'
import Input from '../../components/Input';
import { render } from '@testing-library/react';

describe('Input component', () => {

  it('Should be able to render an input', () => {
    const { getByLabelText} = render(<Input name="lastName" label="Last Name" />)

    expect(getByLabelText('Last Name')).toBeTruthy();
  })
});