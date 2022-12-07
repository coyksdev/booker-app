import React from 'react';
import {ITextProps, Text} from 'native-base';

interface IProps extends ITextProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading(props: IProps) {
  switch (props.type) {
    case 'h1':
      props = {
        ...props,
        fontSize: '5xl',
        fontWeight: 'bold',
      };
      break;

    case 'h2':
      props = {
        ...props,
        fontSize: '4xl',
        fontWeight: 'bold',
      };
      break;

    case 'h3':
      props = {
        ...props,
        fontSize: '3xl',
        fontWeight: 'bold',
      };
      break;

    case 'h4':
      props = {
        ...props,
        fontSize: '2xl',
        fontWeight: 'bold',
      };
      break;

    case 'h5':
      props = {
        ...props,
        fontSize: 'xl',
        fontWeight: 'bold',
      };
      break;

    case 'h6':
      props = {
        ...props,
        fontSize: 'lg',
        fontWeight: 'bold',
      };
      break;
  }

  return <Text {...props}>{props.children}</Text>;
}
