import React from 'react';
import {Divider, HStack, VStack} from 'native-base';

import {Heading} from '../../components/typography/Heading';
import {Body} from '../../components/typography/Body';
import Button from '../../components/buttons/Button';
import useAuthenticationNavigation from '../../hooks/useAuthenticationNavigation';
import {LoginSignupImageIcon} from '../../utils/svgs';
import {SocialButton} from '../../components/buttons/SocialButton';

const LoginSignupScreen = () => {
  const navigation = useAuthenticationNavigation();

  const goToSignupScreen = (isLogin: boolean) => {
    navigation.push('LoginOrSignup', {
      isLogin,
    });
  };

  return (
    <VStack bgColor={'white'} justifyContent={'center'} flex={1} px={10}>
      <VStack alignItems={'center'} space={5}>
        <LoginSignupImageIcon />
        <Heading type="h1">Let's you in</Heading>
        <SocialButton
          type={{
            type: 'button',
            icon: 'facebook',
            title: 'Login with Facebook',
          }}
        />
        <SocialButton
          type={{
            type: 'button',
            icon: 'google',
            title: 'Login with Google',
          }}
        />
        <HStack alignItems={'center'}>
          <Divider w={'45%'} />
          <Body type="bodyXLargeSemiBold" mx={5}>
            or
          </Body>
          <Divider w={'45%'} />
        </HStack>
        <Button
          type="primary"
          title="Sign in with password"
          onPress={() => goToSignupScreen(true)}
        />
        <Body type="bodyMediumRegular" color={'gray.500'}>
          Don’t have an account?{' '}
          <Body
            type="bodyMediumSemiBold"
            color={'primary.500'}
            onPress={() => goToSignupScreen(false)}>
            Sign up
          </Body>
        </Body>
      </VStack>
    </VStack>
  );
};

export default LoginSignupScreen;
