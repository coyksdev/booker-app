import React, {useCallback, useState} from 'react';
import {BoldHideIcon, BoldLockIcon, BoldShowIcon} from '../utils/svgs';
import InputField from './InputField';

interface IInputPasswordField {
  errorText?: string;
  onChange: (...event: any[]) => void;
}

const InputPasswordField = (props: IInputPasswordField) => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return (
    <InputField
      onChange={props.onChange}
      type={isShow ? 'text' : 'password'}
      placeholder="Password"
      leftElement={iconColor => {
        return <BoldLockIcon color={iconColor} />;
      }}
      rightElement={iconColor => {
        return isShow ? (
          <BoldHideIcon color={iconColor} onPress={toggleShow} />
        ) : (
          <BoldShowIcon color={iconColor} onPress={toggleShow} />
        );
      }}
      errorText={props.errorText}
    />
  );
};

export default InputPasswordField;
