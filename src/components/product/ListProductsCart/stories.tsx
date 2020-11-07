// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0'

import ListProductsCart, { ListProductCartsProps } from '.'

export default {
  title: 'product/Cart',
  component: ListProductsCart,
  args: {
    products: [
      {
        name: 'Product',
        image:
          'https://cdn.shopify.com/s/files/1/2060/6331/products/Vegan.png?v=1574882358',
        price: 'R$ 50,00'
      },
      {
        name: 'Product',
        image:
          'https://cdn.shopify.com/s/files/1/2060/6331/products/Vegan.png?v=1574882358',
        price: 'R$ 50,00'
      }
    ]
  }
} as Meta

export const Default: Story<ListProductCartsProps> = args => (
  <ListProductsCart {...args} />
)
