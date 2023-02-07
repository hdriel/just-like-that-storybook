import React from "react";
import { LogoSpinner } from "../LogoSpinner";
import logo from "../../../stories/assets/colors.svg";

export default {
  title: "Components/LogoSpinner",
  component: LogoSpinner,
  argTypes: {
    logoSrc: { control: "file", accept: ".png" },
    isSpinning: { control: "boolean" },
    opacity: { control: { type: "number", min: 0, max: 1, step: 0.1 } },
    size: { control: { type: "number", min: 10, max: 300, step: 15 } },
  },
};

const dummyProps = {
  logoSrc: logo,
  isSpinning: true,
  opacity: 1,
  size: "250px",
};

export const Default = (props) => {
  return <LogoSpinner {...dummyProps} {...props} />;
};

export const NoSpinning = (props) => {
  return <LogoSpinner {...dummyProps} {...props} isSpinning={false} />;
};

export const Opacity = (props) => {
  return <LogoSpinner {...dummyProps} {...props} opacity={0.5} />;
};

const Template = (args) => <LogoSpinner {...args} />;
export const Custom = Template.bind({});
Custom.args = {
  logoSrc: logo,
  isSpinning: true,
  opacity: 1,
  size: "250px",
};
