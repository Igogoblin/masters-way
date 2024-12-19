import { Meta, Story } from "@storybook/react"; // Правильные типы для Storybook
import NavigationCard, { NavigationCardProps } from "./NavigationCard"; // Убедитесь, что NavigationCardProps экспортируется

export default {
  title: "Components/NavigationCard",
  component: NavigationCard,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

// const Template: Story<NavigationCardProps> = (args: any) => (
//   <NavigationCard {...args}></NavigationCard>
// );

// export const Default = Template.bind({});
// Default.args = {
//   image: "/mercury.jpg",
//   label: "Mercury",
//   onClick: () => alert("Card clicked!"),
// };
