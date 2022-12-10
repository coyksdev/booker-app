import {useState} from 'react';
import {Asset, launchImageLibrary} from 'react-native-image-picker';

const useImagePicker = () => {
  const [asset, setAsset] = useState<Asset | undefined>();
  const [error, setError] = useState<string | undefined>();

  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });

    if (result.didCancel === true) {
      return;
    }

    if (result.errorMessage) {
      setError(result.errorMessage);
    }

    setAsset(result.assets?.[0]);
  };

  return {
    asset,
    error,
    pickImage,
  };
};

export default useImagePicker;
