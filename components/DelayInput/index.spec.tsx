import {
  render,
  screen,
  RenderResult,
  fireEvent,
  act
} from '@testing-library/react'

import { DelayInput } from '.'

describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    jest.useFakeTimers()
    handleChange = jest.fn()

    renderResult = render(<DelayInput onChange={handleChange} />)
  })

  afterEach(() => {
    renderResult.unmount()
    jest.useFakeTimers()
  })

  it('should display input text 1second after onChange event occurs', async () => {
    const inputText = 'Test input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, {
      target: {
        value: inputText
      }
    })

    await act(() => {
      jest.runAllTimers()
    })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    expect(spanNode).toHaveTextContent(`入力したテキスト: ${inputText}`)
  })
})
