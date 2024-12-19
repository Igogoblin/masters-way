import Label from "./Label";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
  },
};

export const Default = (args: { text: string }) => <Label {...args} />;

Default.args = {
  text: "Example Label",
};
