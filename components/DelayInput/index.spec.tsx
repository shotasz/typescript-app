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

  it('should call onChange 1second after event occurs', async () => {
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

    expect(handleChange).toHaveBeenCalled()
  })
})
