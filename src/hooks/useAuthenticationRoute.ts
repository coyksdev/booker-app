import {RouteProp, useRoute} from '@react-navigation/native';
import {AuthenticationStackParamList} from '../navigations/Authentication';

const useAuthenticationRoute = (key: keyof AuthenticationStackParamList) => {
  return useRoute<RouteProp<AuthenticationStackParamList, typeof key>>();
};

export default useAuthenticationRoute;
