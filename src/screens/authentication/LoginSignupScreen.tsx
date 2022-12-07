import React from 'react';
import {
  Button as NBButton,
  Divider,
  HStack,
  IButtonProps,
  VStack,
} from 'native-base';

import LoginSignupImageIcon from '../../../assets/icons/svgs/login-signup-image-icon.svg';
import FacebookIcon from '../../../assets/icons/svgs/facebook-icon.svg';
import GoogleIcon from '../../../assets/icons/svgs/google-icon.svg';

import {Heading} from '../../components/typography/Heading';
import {Body} from '../../components/typography/Body';
import Button from '../../components/typography/Button';

const LoginSignupScreen = () => {
  return (
    <VStack bgColor={'white'} justifyContent={'center'} flex={1} px={10}>
      <VStack alignItems={'center'} space={5}>
        <LoginSignupImageIcon />
        <Heading type="h1">Let's you in</Heading>
        <SocialButton type="facebook" title="Login with Facebook" />
        <SocialButton type="google" title="Login with Google" />
        <HStack alignItems={'center'}>
          <Divider w={'45%'} />
          <Body type="bodyXLargeSemiBold" mx={5}>
            or
          </Body>
          <Divider w={'45%'} />
        </HStack>
        <Button type="primary" title="Sign in with password" />
        <Body type="bodyMediumRegular" color={'gray.500'}>
          Don’t have an account?{' '}
          <Body type="bodyMediumSemiBold" color={'primary.500'}>
            Sign up
          </Body>
        </Body>
      </VStack>
    </VStack>
  );
};

interface ISocialButtonProps extends IButtonProps {
  type: 'facebook' | 'google';
  title: string;
}

function SocialButton(props: ISocialButtonProps) {
  let icon: JSX.Element | Array<JSX.Element>;

  if (props.type === 'facebook') {
    icon = <FacebookIcon />;
  } else {
    icon = <GoogleIcon />;
  }

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

export default LoginSignupScreen;
