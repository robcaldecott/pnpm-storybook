import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Example } from "./Example";

export default {
  title: "Example",
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => (
  <Example {...args} />
);

export const Default = Template.bind({});

export const Styled = Template.bind({});
Styled.args = {
  sx: { m: 8 },
};
