import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {AuthenticationStackParamList} from '../navigations/Authentication';

const useAuthenticationNavigation = () => {
  return useNavigation<StackNavigationProp<AuthenticationStackParamList>>();
};

export default useAuthenticationNavigation;
