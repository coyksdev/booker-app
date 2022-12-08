import React from 'react';
import {Divider, HStack, VStack} from 'native-base';
import {Heading} from '../../components/typography/Heading';
import {BoldMessageIcon} from '../../utils/svgs';
import InputField from '../../components/InputField';
import InputPasswordField from '../../components/InputPasswordField';
import Button from '../../components/typography/Button';
import {Body} from '../../components/typography/Body';
import {SocialButton} from '../../components/buttons/SocialButton';

const SignupScreen = () => {
  return (
    <VStack
      bgColor={'white'}
      flex={1}
      px={5}
      space={5}
      justifyContent={'center'}>
      <Heading type="h1">Create your Account</Heading>
      <InputField
        placeholder="Email"
        leftElement={iconColor => <BoldMessageIcon color={iconColor} />}
      />
      <InputPasswordField />
      <Button title="Sign up" type="primary" />
      <HStack alignItems={'center'} alignSelf={'center'}>
        <Divider w={'25%'} />
        <Body type="bodyXLargeSemiBold" mx={5}>
          or continue with
        </Body>
        <Divider w={'25%'} />
      </HStack>
      <HStack alignSelf={'center'} space={3}>
        <SocialButton
          type={{
            type: 'icon-button',
            icon: 'facebook',
          }}
        />
        <SocialButton
          type={{
            type: 'icon-button',
            icon: 'google',
          }}
        />
      </HStack>
    </VStack>
  );
};

export default SignupScreen;
