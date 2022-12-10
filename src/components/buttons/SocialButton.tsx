import React from 'react';

import {IButtonProps, IconButton, Button as NBButton} from 'native-base';
import {FacebookIcon, GoogleIcon} from '../../utils/svgs';
import {Body} from '../typography/Body';

type SocialIconButtonType =
  | {
      type: 'icon-button';
      icon: 'facebook' | 'google';
    }
  | {
      type: 'button';
      icon: 'facebook' | 'google';
      title: string;
    };

type ISocialButtonProps = IButtonProps & {
  type: SocialIconButtonType;
};

export function SocialButton(props: ISocialButtonProps) {
  let icon: JSX.Element | Array<JSX.Element>;

  // assign icon
  if (props.type.icon === 'facebook') {
    icon = <FacebookIcon />;
  } else {
    icon = <GoogleIcon />;
  }

  // return button based on the type
  if (props.type.type === 'icon-button') {
    return (
      <IconButton
        borderRadius={'lg'}
        icon={icon}
        borderWidth={1}
        borderColor={'gray.200'}
      />
    );
  } else {
    return (
      <NBButton
        {...props}
        leftIcon={icon ?? undefined}
        borderWidth={1}
        borderRadius={'xl'}
        alignSelf={'stretch'}
        borderColor={'gray.200'}
        variant={'solid'}
        bgColor={'white'}>
        <Body type="bodyLargeSemiBold">Login with Facebook</Body>
      </NBButton>
    );
  }
}
