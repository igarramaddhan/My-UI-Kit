import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Profile from './screens/Profile';

const Navigation = createStackNavigator({
  Home: Home,
  Profile: Profile
});

export default Navigation;
