import React, { useContext } from "react";
import Loading from "../Components/screens/LoadingScreen/Loading";
import Login from "../Components/screens/Auth/Login";
import Signup from "../Components/screens/Auth/Signup";
import Home from "../Components/screens/HomeScreen/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { GlobalContext } from "../services/GlobalContext";

const Stack = createStackNavigator();

const Routes = () => {
  const [globalState, setGlobalState] = useContext(GlobalContext);
  const { Auth } = globalState;

  return (
    <React.Fragment>
      {Auth ? (
        <Stack.Navigator initialRouteName="home"  >
          <Stack.Screen
            name="home"
            component={Home}
            options={{ title: 'CAS' }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="loading">
          <Stack.Screen
            name="loading"
            component={Loading}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </React.Fragment>
  );
};
export default Routes;
