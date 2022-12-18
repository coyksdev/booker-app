import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '../navigations/Main';

const useMainNavigation = () => {
  return useNavigation<StackNavigationProp<MainStackParamList>>();
};

export default useMainNavigation;
