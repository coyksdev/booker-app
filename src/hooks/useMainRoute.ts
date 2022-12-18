import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackParamList} from '../navigations/Main';

const useMainRoute = (key: keyof MainStackParamList) => {
  return useRoute<RouteProp<MainStackParamList, typeof key>>();
};

export default useMainRoute;
