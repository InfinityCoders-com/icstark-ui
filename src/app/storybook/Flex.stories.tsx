import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '../../Flex/Flex';

const meta: Meta<typeof Flex> = {
  component: Flex,
  argTypes: {
    display: {
      options: ['flex', 'inline-flex'],
      control: 'radio'
    },
    flexDirection: {
      options: ['column', 'row', 'row-reverse', 'column-reverse'],
      control: 'radio'
    },
    flexWrap: {
      options: ['wrap', 'no-wrap', 'wrap-reverse'],
      control: 'radio'
    },
    flexFlow: {
      options: ['row wrap', 'row nowrap', 'column wrap', 'column nowrap'],
      control: 'radio'
    },
    justifyContent: {
      options: ['flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
      control: 'radio'
    },
    alignItems: {
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      control: 'radio'
    },
    alignContent: {
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'space-around', 'space-between'],
      control: 'radio'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Flex>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: 'Flex',
  render: (args) => {
    return (
      <Flex {...args} style={{ background: '#f0f0f0', padding: 10 }}>
        <div style={{ background: 'red', padding: 50, margin: 10 }}>1</div>
        <div style={{ background: 'red', padding: 50, margin: 10 }}>2</div>
        <div style={{ background: 'red', padding: 50, margin: 10 }}>3</div>
        <div style={{ background: 'red', padding: 50, margin: 10 }}>4</div>
        <div style={{ background: 'red', padding: 50, margin: 10 }}>5</div>
        <div style={{ background: 'red', padding: 50, margin: 10 }}>6</div>
        <div style={{ background: 'red', padding: 50, margin: 10 }}>7</div>
      </Flex>
    )
  },
  args: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start'
  }
};