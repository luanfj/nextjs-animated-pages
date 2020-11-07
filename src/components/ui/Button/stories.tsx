// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0'

import Button from '.'

export default {
  title: 'ui/Button',
  component: Button,
  args: {
    children: 'Adicionar ao carrinho'
  }
} as Meta

export const primary: Story = args => <Button {...args} />

primary.args = {
  variant: 'primary'
}

export const empty: Story = args => <Button {...args} />

empty.args = {
  variant: 'empty'
}
