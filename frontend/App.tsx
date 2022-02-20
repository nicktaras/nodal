import React from "react";
import { useMoralis } from "react-moralis";
import { useWalletConnect } from "./WalletConnect";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CryptoAuth from "./Components/CryptoAuth";
//import RecentTransactions from "./Components/RecentTransactions/RecentTransactions";
import Assets from "./Components/Assets/Assets";
import Chat from "./Components/Chat/Chat";
import ethScreen from "./Components/Chat/Eth";
import peopleScreen from "./Components/Chat/People";
import bufficornScreen from "./Components/Chat/Bufficorn";
import TabOneScreen from "./Components/Chat/Webview"
import Admit from "./Components/Chat/Admit";
import Test from "./Components/Chat/Test";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header";
import NFTAssets from "./Components/NFT/NFTAssets";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCreditCard,
  faCoins,
  faUser,
  faPaperPlane,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

import Moralis from "moralis/types";

LogBox.ignoreAllLogs();

// const Activecolor =
function Home(): JSX.Element {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#315399"
      // inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Assets"
        options={{
          tabBarLabel: "Assets",
          tabBarIcon: ({ color, focused }) => {
            return <FontAwesomeIcon icon={faCoins} color={"#5C26FF"} size={20} />;
          },
        }}
        component={Assets}
      />
      <Tab.Screen
        name="Admit"
        options={{
          tabBarLabel: "Admit",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faPaperPlane} color={"#5C26FF"} size={20} />
          ),
        }}
        component={Admit}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faUser} color={"#5C26FF"} size={20} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

function enterEth(): JSX.Element {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#315399"
      // inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Eth"
        options={{
          tabBarLabel: "Eth",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faPaperPlane} color={"#5C26FF"} size={20} />
          ),
        }}
        component={ethScreen}
      />
    </Tab.Navigator>
  );
}

function enterPeople(): JSX.Element {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#315399"
      // inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="PEOPLE"
        options={{
          tabBarLabel: "PEOPLE",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faPaperPlane} color={"#5C26FF"} size={20} />
          ),
        }}
        component={peopleScreen}
      />
    </Tab.Navigator>
  );
}

function enterBufficorn(): JSX.Element {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor="#315399"
      // inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Buff"
        options={{
          tabBarLabel: "Buff",
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faPaperPlane} color={"#5C26FF"} size={20} />
          ),
        }}
        component={bufficornScreen}
      />
    </Tab.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function App(): JSX.Element {
  const connector = useWalletConnect();
  const {
    authenticate,
    authError,
    isAuthenticating,
    isAuthenticated,
    logout,
    Moralis,
  } = useMoralis();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={CryptoAuth}
          options={{ headerShown: false }}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={Home}
          // Hiding header for Navigation Drawer
          options={{ headerTitle: (props) => <Header /> }}
        />
        <Stack.Screen
          name="ethServer"
          component={enterEth}
          // Hiding header for Navigation Drawer
          options={{ headerTitle: (props) => <Header /> }}
        />
        <Stack.Screen
          name="peopleServer"
          component={enterPeople}
          // Hiding header for Navigation Drawer
          options={{ headerTitle: (props) => <Header /> }}
        />
        <Stack.Screen
          name="bufficornServer"
          component={enterBufficorn}
          // Hiding header for Navigation Drawer
          options={{ headerTitle: (props) => <Header /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
