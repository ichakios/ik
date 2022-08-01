import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NotificationBanner from "./NotificationBanner";

export default {
  title: "ReactComponentLibrary/NotificationBanner",
  component: NotificationBanner,
} as ComponentMeta<typeof NotificationBanner>;

const Template: ComponentStory<typeof NotificationBanner> = () => <NotificationBanner />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {};
