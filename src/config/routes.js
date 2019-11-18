import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
    HomeScreen,
    ProfileScreen,
    SignInScreen,
    SplashScreen
} from "../screens";

const APP_STACK = "App";
const AUTH_STACK = "Auth";

const SPLASH_SCREEN = "Splash";
const HOME_SCREEN = "Home";
const PROFILE_SCREEN = "Profile";
const SIGNIN_SCREEN = "Auth";

const AppStack = createStackNavigator({
    Home: HomeScreen,
    Profile: ProfileScreen
});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export { APP_STACK, AUTH_STACK, HOME_SCREEN, PROFILE_SCREEN, SIGNIN_SCREEN };

export default createAppContainer(
    createSwitchNavigator(
        {
            Splash: SplashScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: SPLASH_SCREEN
        }
    )
);
