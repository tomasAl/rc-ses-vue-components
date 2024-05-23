import Button from "../../../../components/common/buttons/Button/Button.vue";

export default {
  title: "components/common/buttons/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: {
        options: [
          "primary",
          "secondary",
          "success",
          "info",
          "warning",
          "error",
        ],
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
    content: {
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" content="click me"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  color: "error",
  loading: true,
};
