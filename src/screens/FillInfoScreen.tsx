import React, {useCallback, useMemo} from 'react';
import {VStack, ZStack, Select, IconButton, Image} from 'native-base';
import {useNhostClient, useUserData} from '@nhost/react';
import {BoldEditSquareIcon} from '../utils/svgs';
import {Heading} from '../components/typography/Heading';
import InputField from '../components/InputField';
import {Controller, useForm} from 'react-hook-form';
import Button from '../components/buttons/Button';
import useImagePicker from '../hooks/useImagePicker';
import {useMutation} from '@apollo/client';
import {UpdateUserDocument} from '../__generated__/resolvers-types';
import FormData from 'form-data';
import {SafeAreaView} from 'react-native-safe-area-context';

interface FormFields {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
}

const FillInfoScreen = () => {
  const nhost = useNhostClient();
  const userData = useUserData();

  const {asset, pickImage} = useImagePicker();
  const [updateUser, {}] = useMutation(UpdateUserDocument);

  const {
    control,
    handleSubmit,
    getValues,
    formState: {isSubmitting},
  } = useForm<FormFields>();

  const onSubmit = useCallback(
    async (data: FormFields) => {
      let avatarId: string | undefined;

      if (asset?.uri) {
        const fd = new FormData();
        fd.append('file', {
          uri: asset.uri,
          name: asset.fileName,
          type: asset.type,
        });

        const {fileMetadata} = await nhost.storage.upload({formData: fd});
        avatarId = fileMetadata?.id;
      }

      updateUser({
        variables: {
          id: userData?.id,
          input: {
            metadata: {
              ...data,
              avatarId,
            },
          },
        },
      });
    },
    [
      asset?.fileName,
      asset?.type,
      asset?.uri,
      nhost.storage,
      updateUser,
      userData?.id,
    ],
  );

  const ProfileImageContainer = useMemo(() => {
    let src: string | undefined;

    if (asset?.uri) {
      src = asset?.uri;
    } else if (userData?.metadata?.avatar) {
      src = userData?.metadata.avatar as string;
    } else {
      src = userData?.avatarUrl;
    }

    return (
      <Image
        borderWidth={2}
        borderRadius={'full'}
        borderColor={'gray.200'}
        src={src}
        alt={''}
        h={'100'}
        w={'100'}
        resizeMode="cover"
      />
    );
  }, [asset?.uri, userData?.avatarUrl, userData?.metadata?.avatar]);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <VStack flex={1} p={5} bgColor={'white'} space={3}>
        <Heading type="h4">Fill Your Profile</Heading>
        <ZStack mt={5} mb={5} h={100} w={100} alignSelf={'center'}>
          {ProfileImageContainer}
          <IconButton
            p={0}
            right={-5}
            bottom={0}
            icon={<BoldEditSquareIcon />}
            onPress={pickImage}
          />
        </ZStack>
        <Controller
          control={control}
          name="firstName"
          render={({field: {onChange}}) => {
            return <InputField placeholder="First Name" onChange={onChange} />;
          }}
        />
        <Controller
          control={control}
          name="lastName"
          render={({field: {onChange}}) => {
            return <InputField placeholder="Last Name" onChange={onChange} />;
          }}
        />
        <Controller
          control={control}
          name="phoneNumber"
          render={({field: {onChange}}) => {
            return (
              <InputField
                placeholder="Phone Number"
                keyboardType="phone-pad"
                onChange={onChange}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="gender"
          render={({field: {onChange}}) => {
            return (
              <Select
                borderWidth={0}
                bgColor={'gray.100'}
                placeholder="Gender"
                selectedValue={getValues().gender}
                onValueChange={onChange}>
                <Select.Item label="Male" value="male" />
                <Select.Item label="Female" value="female" />
              </Select>
            );
          }}
        />
        <Button
          title="Continue"
          type="primary"
          isLoading={isSubmitting}
          onPress={handleSubmit(onSubmit)}
        />
      </VStack>
    </SafeAreaView>
  );
};

export default FillInfoScreen;
