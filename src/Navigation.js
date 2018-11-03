import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Profile from './screens/Profile';
import List from './screens/List';

const Navigation = createStackNavigator({
  Home: Home,
  Profile: Profile,
  List: List
});

export default Navigation;
