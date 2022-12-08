import React, {useCallback, useState} from 'react';
import {BoldHideIcon, BoldLockIcon, BoldShowIcon} from '../utils/svgs';
import InputField from './InputField';

const InputPasswordField = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return (
    <InputField
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
    />
  );
};

export default InputPasswordField;
