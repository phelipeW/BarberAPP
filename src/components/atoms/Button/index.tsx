import React from "react";
import { Button, ButtonProps } from "react-native";

interface Props extends ButtonProps {
  title: string;
}

const CustomButton: React.FC<Props> = ({ title, ...rest }) => {
  return <Button title={title} {...rest} />;
};

export default CustomButton;
