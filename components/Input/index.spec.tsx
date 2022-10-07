import {
  render,
  screen,
  RenderResult,
  fireEvent,
  getByRole
} from '@testing-library/react'
import { Input } from '.'

describe('Input', () => {
  let renderResult: RenderResult

  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />)
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('should reset when user clicks button', async () => {
    const inputText = 'Test input text'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement

    fireEvent.change(inputNode, {
      target: {
        value: inputText
      }
    })

    const buttonNode = screen.getByRole('button', {
      name: 'Reset'
    }) as HTMLButtonElement

    fireEvent.click(buttonNode)

    expect(inputNode).toHaveValue('')
  })
})
