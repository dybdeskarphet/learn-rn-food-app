import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultDetailsScreen from "./src/screens/ResultDetailsScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultDetails: ResultDetailsScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Food",
    },
  }
);

export default createAppContainer(navigator)