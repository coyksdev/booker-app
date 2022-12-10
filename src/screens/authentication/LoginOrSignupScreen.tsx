import React, {useCallback} from 'react';
import {Divider, HStack, VStack} from 'native-base';
import {Heading} from '../../components/typography/Heading';
import {BoldMessageIcon} from '../../utils/svgs';
import InputField from '../../components/InputField';
import InputPasswordField from '../../components/InputPasswordField';

import {Body} from '../../components/typography/Body';
import {SocialButton} from '../../components/buttons/SocialButton';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../components/buttons/Button';
import useAuthenticate from '../../hooks/useAuthenticate';
import useAuthenticationRoute from '../../hooks/useAuthenticationRoute';
import useAuthenticationNavigation from '../../hooks/useAuthenticationNavigation';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Invalid email')
      .required('Email is a required field'),
    password: yup.string().required('Password is a required field'),
  })
  .required();

type FormValues = {
  email: string;
  password: string;
};

const LoginOrSignupScreen = () => {
  const navigation = useAuthenticationNavigation();
  const route = useAuthenticationRoute('LoginOrSignup');

  const {hook, isLogin} = useAuthenticate({
    isLogin: route.params?.isLogin ?? false,
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const title = isLogin ? 'Login to you account' : 'Create your Account';

  const onSubmit = useCallback(
    async (data: FormValues) => {
      if (isLogin) {
        await hook.signInEmailPassword(data.email, data.password);
      } else {
        await hook.signUpEmailPassword(data.email, data.password, {
          allowedRoles: ['user', 'me'],
        });
      }
    },
    [hook, isLogin],
  );

  const onNavigateLoginOrSignup = useCallback(() => {
    if (isLogin) {
      navigation.replace('LoginOrSignup', {});
    } else {
      navigation.replace('LoginOrSignup', {
        isLogin: true,
      });
    }
  }, [isLogin, navigation]);

  const footer = (
    <Body alignSelf={'center'} type="bodyMediumRegular" color={'gray.500'}>
      {isLogin ? 'Don’t have an account?' : 'Already have an account?'} {''}
      <Body
        type="bodyMediumSemiBold"
        color={'primary.500'}
        onPress={onNavigateLoginOrSignup}>
        {isLogin ? 'Sign up' : 'Sign in'}
      </Body>
    </Body>
  );

  return (
    <VStack
      bgColor={'white'}
      flex={1}
      px={5}
      space={5}
      justifyContent={'center'}>
      <Heading type="h1">{title}</Heading>
      <Controller
        control={control}
        name="email"
        render={({field: {onChange}}) => {
          return (
            <InputField
              placeholder="Email"
              leftElement={iconColor => <BoldMessageIcon color={iconColor} />}
              errorText={errors.email?.message}
              onChange={onChange}
            />
          );
        }}
      />
      <Controller
        control={control}
        name="password"
        render={({field: {onChange}}) => {
          return (
            <InputPasswordField
              onChange={onChange}
              errorText={errors.password?.message}
            />
          );
        }}
      />
      <Button
        type="primary"
        title={isLogin ? 'Sign in' : 'Sign up'}
        isLoading={hook.isLoading}
        onPress={handleSubmit(onSubmit)}
      />
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
      {footer}
    </VStack>
  );
};

export default LoginOrSignupScreen;
