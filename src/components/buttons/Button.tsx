import React from 'react';
import {Button as NBButton, IButtonProps as NBIButtonProps} from 'native-base';
import {Body} from '../typography/Body';

interface IButtonProps extends NBIButtonProps {
  type: 'primary';
  title: string;
}

const Button = (props: IButtonProps) => {
  let buttonStyle: NBIButtonProps | undefined;

  if (props.type === 'primary') {
    buttonStyle = {
      ...props,
      backgroundColor: 'primary.500',
      _text: {
        color: 'white',
      },
    };
  }

  return (
    <NBButton {...buttonStyle} alignSelf={'stretch'} borderRadius={'3xl'}>
      <Body color={buttonStyle?._text?.color} type="bodyLargeBold">
        {props.title}
      </Body>
    </NBButton>
  );
};

export default Button;
