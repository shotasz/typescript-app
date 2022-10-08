import { render, screen, RenderResult, fireEvent } from '@testing-library/react'

import { DelayInput } from '.'

describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    handleChange = jest.fn()

    renderResult = render(<DelayInput onChange={handleChange} />)
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('should display [入力中。。。] immediately after onChange event occurs', () => {
    const inputText = 'Test input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, {
      target: {
        value: inputText
      }
    })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    expect(spanNode).toHaveTextContent('入力中。。。')
  })
})
