import { MouseEvent, useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'

import { action } from '@storybook/addon-actions'

export default {
  title: 'StyledButton',
  component: StyledButton
} as ComponentMeta<typeof StyledButton>

const incrementAction = action('increment')

export const Primary = (props: any) => {
  const [count, setCount] = useState(0)
  const onClick = (e: MouseEvent) => {
    incrementAction(e, count)
    setCount((c) => c + 1)
  }

  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Count: {count}
    </StyledButton>
  )
}
export const Success = (props: any) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  )
}
export const Transparent = (props: any) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  )
}
