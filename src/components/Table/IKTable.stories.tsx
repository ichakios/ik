import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IKTable from "./IKTable";

export default {
  title: "ReactComponentLibrary/IKTable",
  component: IKTable,
} as ComponentMeta<typeof IKTable>;

const Template: ComponentStory<typeof IKTable> = (args) => <IKTable {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};