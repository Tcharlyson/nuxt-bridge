import { Meta, Story } from '@storybook/vue'
import Button, { ButtonProps } from '@/components/Button.vue'

export default {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {},
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {
      args,
    }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Storybook test',
}
