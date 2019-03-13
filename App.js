import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/components/home';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
          backgroundColor: 'orange',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);