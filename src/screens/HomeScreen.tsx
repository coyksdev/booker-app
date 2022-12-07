import React from 'react';
import {
  Box,
  Divider,
  FlatList,
  HStack,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import HeaderLogo from '../../assets/icons/svgs/header_logo.svg';
import BookMarkIcon from '../../assets/icons/svgs/bookmark.svg';
import NotificationIcon from '../../assets/icons/svgs/notification.svg';
import SearchIcon from '../../assets/icons/svgs/light-search.svg';
import FilterIcon from '../../assets/icons/svgs/light-filter.svg';
import useServiceCategories from '../hooks/useServiceCategories';
import {SvgUri} from 'react-native-svg';
import {Body} from '../components/typography/Body';
import {Heading} from '../components/typography/Heading';
import useShops from '../hooks/useShops';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  const height = useBottomTabBarHeight();

  return (
    <VStack px={5} py={3}>
      {/* header */}
      <Box>
        <HStack space={3} alignItems={'center'}>
          <HeaderLogo />
          <Text fontSize={'2xl'} fontWeight={'bold'}>
            Casca
          </Text>
          <Spacer />
          <NotificationIcon />
          <BookMarkIcon />
        </HStack>
      </Box>
      <Text fontSize={'3xl'} fontWeight={'bold'} my={5}>
        Morning, Gerald 👋
      </Text>
      {/* search bar */}
      <Box>
        <Input
          placeholder="Search"
          borderRadius={10}
          bgColor={'gray.100'}
          InputLeftElement={
            <Box ml={3}>
              <SearchIcon />
            </Box>
          }
          InputRightElement={
            <Box mr={3}>
              <FilterIcon />
            </Box>
          }
        />
      </Box>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: height,
        }}>
        {/* Service Categories */}
        <ServiceCategoriesSection />
        {/* Nearby Shops */}
        <NearbyShops />
      </ScrollView>
    </VStack>
  );
};

function ServiceCategoriesSection() {
  const {data} = useServiceCategories();

  return (
    <VStack mt={5}>
      <FlatList
        data={data}
        horizontal={true}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}
        ItemSeparatorComponent={() => <Box w={3} />}
        renderItem={({item}) => {
          return (
            <VStack alignItems={'center'} space={3}>
              <Box
                w={16}
                h={16}
                bgColor={'primary.100'}
                rounded={'full'}
                justifyContent={'center'}
                alignItems={'center'}>
                <SvgUri uri={item.icon} />
              </Box>
              <Body type="bodyLargeBold">{item.name}</Body>
            </VStack>
          );
        }}
      />
      <Divider my={5} />
    </VStack>
  );
}

function NearbyShops() {
  const {data} = useShops();

  return (
    <VStack space={5}>
      <HStack alignItems={'baseline'} justifyContent={'space-between'}>
        <Heading type="h5">Nearby your Location</Heading>
        <Body type="bodyLargeBold" color={'primary.500'}>
          See all
        </Body>
      </HStack>
      {data.map(item => {
        return (
          <VStack key={item.id} bgColor={'white'} rounded={'lg'}>
            <HStack space={3} p={3}>
              <Image
                rounded={'lg'}
                h={70}
                w={70}
                alt={item.name}
                src={item.logo}
              />
              <VStack flex={1}>
                <Heading type="h6">{item.name}</Heading>
                <Body type="bodyMediumMedium" numberOfLines={2}>
                  {item.address}
                </Body>
              </VStack>
              <BookMarkIcon />
            </HStack>
          </VStack>
        );
      })}
    </VStack>
  );
}

export default HomeScreen;
