import React, {useState} from 'react';
import Scaffold from '../components/Scaffold';
import {Box, Divider, HStack, Pressable, Text, View, ZStack} from 'native-base';
import useMainRoute from '../hooks/useMainRoute';
import Appbar from '../components/Appbar';
import Carousel from 'react-native-reanimated-carousel';
import {Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Heading} from '../components/typography/Heading';
import {Body} from '../components/typography/Body';
import {
  BoldCallIcon,
  BoldChatIcon,
  BoldDiscoveryIcon,
  BoldLocationIcon,
  BoldSendIcon,
} from '../utils/svgs';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Card from '../components/Card';
import useShops from '../hooks/useShops';
import Link from '../components/Link';
import SeeMore from '../components/SeeMore';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const ShopScreen = () => {
  const route = useMainRoute('Shop');

  const {data} = useShops({
    where: {
      id: {
        _eq: route.params?.shopId as string,
      },
    },
  });

  const shop = data?.[0];
  const progressValue = useSharedValue<number>(0);
  const [selectedChip, setSelectedChip] = useState(0);

  return (
    <Scaffold>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ZStack>
          <Carousel
            width={SCREEN_WIDTH}
            height={SCREEN_WIDTH * (9 / 16)}
            data={shop?.featuredImages ?? []}
            onProgressChange={(_, absoluteProgress) =>
              (progressValue.value = absoluteProgress)
            }
            renderItem={({item}) => (
              <FastImage
                key={item.image}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  aspectRatio: 16 / 9,
                }}
                source={{
                  uri: item.image,
                }}
                resizeMode={'cover'}
              />
            )}
          />
          <Appbar hasBackButton top={0} />
          <HStack flex={1} bottom={0} alignSelf={'center'}>
            {shop?.featuredImages.map((_, index) => {
              return (
                <PaginationItem
                  backgroundColor={'#FB9400'}
                  animValue={progressValue}
                  index={index}
                  key={index}
                  isRotate={false}
                  length={shop.featuredImages.length}
                />
              );
            })}
          </HStack>
        </ZStack>
        <View flex={1} px={5} py={2}>
          <Heading type="h3">{shop?.name}</Heading>
          <HStack space={2} py={2}>
            <BoldLocationIcon
              height={20}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                marginTop: 3,
              }}
            />
            <Body type="bodyLargeMedium">{shop?.address}</Body>
          </HStack>
          <HStack justifyContent={'space-between'} py={2}>
            <Link icon={<BoldDiscoveryIcon />} title="Website" />
            <Link icon={<BoldChatIcon />} title="Message" />
            <Link icon={<BoldCallIcon />} title="Call" />
            <Link icon={<BoldLocationIcon />} title="Direction" />
            <Link icon={<BoldSendIcon />} title="Share" />
          </HStack>
          <Divider mt={5} mb={2} />
          <HStack
            py={3}
            justifyContent={'space-between'}
            alignItems={'baseline'}>
            <Heading type="h5">Our Specialists</Heading>
            <Body type="bodyLargeBold" color={'primary.500'}>
              See all
            </Body>
          </HStack>
          <HStack py={2}>
            <FlatList
              data={shop?.specialists}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <Card
                    key={item.id}
                    alignItems={'center'}
                    p={2}
                    mx={1}
                    space={1}>
                    {item.profileImage ? (
                      <FastImage
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                          borderRadius: 30,
                          height: 90,
                          width: 90,
                          aspectRatio: 1,
                          padding: 10,
                        }}
                        source={{
                          uri: item.profileImage,
                        }}
                      />
                    ) : undefined}
                    <Body type="bodyMediumBold">{item.firstName}</Body>
                    <Body type="bodySmallMedium">{item.position}</Body>
                  </Card>
                );
              }}
            />
          </HStack>
          <ChipView
            selectedIndex={selectedChip}
            onSelect={setSelectedChip}
            item={[
              {
                title: 'About us',
                body: <AboutUs description={shop?.description} />,
              },
              {
                title: 'Services',
                body: <Text>Services</Text>,
              },
              {
                title: 'Package',
                body: <Text>Package</Text>,
              },
              {
                title: 'Gallery',
                body: <Text>Gallery</Text>,
              },
              {
                title: 'Review',
                body: <Text>Review</Text>,
              },
            ]}
          />
        </View>
      </ScrollView>
    </Scaffold>
  );
};

interface IChipViewItem {
  title: string;
  body?: JSX.Element;
}

interface IChipViewProps {
  item: IChipViewItem[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const ChipView = (props: IChipViewProps) => {
  const {item, selectedIndex, onSelect} = props;

  return (
    <View flex={1} py={2}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={item}
        renderItem={({item: i, index}) => {
          const containerConfig = {
            ...(selectedIndex === index
              ? {
                  bgColor: 'primary.500',
                }
              : {
                  bgColor: 'white',
                  borderWidth: 1,
                  borderColor: 'primary.500',
                }),
          };

          const textConfig = {
            ...(selectedIndex === index
              ? {
                  color: 'white',
                }
              : {
                  color: 'primary.500',
                }),
          };

          return (
            <Pressable onPress={() => onSelect(index)}>
              <Box {...containerConfig} p={1} px={5} rounded={'full'} mx={2}>
                <Body {...textConfig} type="bodyLargeSemiBold">
                  {i.title}
                </Body>
              </Box>
            </Pressable>
          );
        }}
      />
      <View px={2}>{item[selectedIndex].body}</View>
    </View>
  );
};

interface IAboutUsProps {
  description?: string;
}

const AboutUs = (props: IAboutUsProps) => {
  const {description} = props;
  return (
    <View>{description ? <SeeMore text={description} /> : undefined}</View>
  );
};

const PaginationItem: React.FC<{
  index: number;
  backgroundColor: string;
  length: number;
  animValue: Animated.SharedValue<number>;
  isRotate?: boolean;
}> = props => {
  const {animValue, index, length, backgroundColor, isRotate} = props;

  const width = 10;
  const animatedWidth = useAnimatedStyle(() => {
    let dotWidth = withTiming(Math.round(animValue.value) === index ? 30 : 10);
    if (index === 0 && Math.round(animValue.value) > length - 1) {
      dotWidth = 30;
    }
    return {
      width: dotWidth,
    };
  });

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);

  return (
    <Animated.View
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: 'white',
          width,
          height: width,
          borderRadius: 50,
          overflow: 'hidden',
          marginHorizontal: 2,
          marginBottom: 5,
          transform: [
            {
              rotateZ: isRotate ? '90deg' : '0deg',
            },
          ],
        },
        animatedWidth,
      ]}>
      <Animated.View
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </Animated.View>
  );
};

export default ShopScreen;
