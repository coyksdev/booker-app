import React from 'react';
import {ITextProps, Text} from 'native-base';

interface IProps extends ITextProps {
  type:
    | 'bodyXLargeBold'
    | 'bodyXLargeSemiBold'
    | 'bodyXLargeMedium'
    | 'bodyXLargeRegular'
    | 'bodyLargeBold'
    | 'bodyLargeSemiBold'
    | 'bodyLargeMedium'
    | 'bodyLargeRegular'
    | 'bodyMediumBold'
    | 'bodyMediumSemiBold'
    | 'bodyMediumMedium'
    | 'bodyMediumRegular'
    | 'bodySmallBold'
    | 'bodySmallSemiBold'
    | 'bodySmallMedium'
    | 'bodySmallRegular'
    | 'bodyXSmallBold'
    | 'bodyXSmallSemiBold'
    | 'bodyXSmallMedium'
    | 'bodyXSmallRegular';
}

export function Body(props: IProps) {
  switch (props.type) {
    case 'bodyXLargeBold':
      props = {
        ...props,
        fontSize: 'lg',
        fontWeight: 'bold',
      };
      break;

    case 'bodyXLargeSemiBold':
      props = {
        ...props,
        fontSize: 'lg',
        fontWeight: 'semibold',
      };
      break;

    case 'bodyXLargeMedium':
      props = {
        ...props,
        fontSize: 'lg',
        fontWeight: 'medium',
      };
      break;

    case 'bodyXLargeRegular':
      props = {
        ...props,
        fontSize: 'lg',
        fontWeight: 'normal',
      };
      break;

    case 'bodyLargeBold':
      props = {
        ...props,
        fontSize: 'md',
        fontWeight: 'bold',
      };
      break;

    case 'bodyLargeSemiBold':
      props = {
        ...props,
        fontSize: 'md',
        fontWeight: 'semibold',
      };
      break;

    case 'bodyLargeMedium':
      props = {
        ...props,
        fontSize: 'md',
        fontWeight: 'medium',
      };
      break;

    case 'bodyLargeRegular':
      props = {
        ...props,
        fontSize: 'md',
        fontWeight: 'normal',
      };
      break;

    case 'bodyMediumBold':
      props = {
        ...props,
        fontSize: 'sm',
        fontWeight: 'bold',
      };
      break;

    case 'bodyMediumSemiBold':
      props = {
        ...props,
        fontSize: 'sm',
        fontWeight: 'semibold',
      };
      break;

    case 'bodyMediumMedium':
      props = {
        ...props,
        fontSize: 'sm',
        fontWeight: 'medium',
      };
      break;

    case 'bodyMediumRegular':
      props = {
        ...props,
        fontSize: 'sm',
        fontWeight: 'normal',
      };
      break;

    case 'bodySmallBold':
      props = {
        ...props,
        fontSize: 'xs',
        fontWeight: 'bold',
      };
      break;

    case 'bodySmallSemiBold':
      props = {
        ...props,
        fontSize: 'xs',
        fontWeight: 'semibold',
      };
      break;

    case 'bodySmallMedium':
      props = {
        ...props,
        fontSize: 'xs',
        fontWeight: 'medium',
      };
      break;

    case 'bodySmallRegular':
      props = {
        ...props,
        fontSize: 'xs',
        fontWeight: 'normal',
      };
      break;

    case 'bodyXSmallBold':
      props = {
        ...props,
        fontSize: '2xs',
        fontWeight: 'bold',
      };
      break;

    case 'bodyXSmallSemiBold':
      props = {
        ...props,
        fontSize: '2xs',
        fontWeight: 'semibold',
      };
      break;

    case 'bodyXSmallMedium':
      props = {
        ...props,
        fontSize: '2xs',
        fontWeight: 'medium',
      };
      break;

    case 'bodyXSmallRegular':
      props = {
        ...props,
        fontSize: '2xs',
        fontWeight: 'normal',
      };
      break;
  }

  return <Text {...props}>{props.children}</Text>;
}
