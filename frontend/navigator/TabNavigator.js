import NodeView from "../views/NodeView";
import FeedView from "../views/FeedView";
import ProfileView from "../views/ProfileView";
import React from "react";
import BlueServerView from "../views/BlueServerView";
import RedServerView from "../views/RedServerView";
import YellowServerView from "../views/YellowServerView";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons"

const activeColor = "#4775f2";
const inactiveColor = "#000000";

const FeedStack = createStackNavigator({
  Feed: FeedView
});

FeedStack.navigationOptions = {
  tabBarLabel: "Feed",
};

const NodeStack = createStackNavigator({
  Node: NodeView,
  RedServer: RedServerView,
  YellowServer: YellowServerView,
  BlueServer: BlueServerView,
},
{
  mode: "modal"
}
);

NodeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "RedServer") {
    tabBarVisible = false;
  }

  if (routeName == "YellowServer") {
    tabBarVisible = false;
  }

    if (routeName == "BlueServer") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Node",
  };
};

const ProfileStack = createStackNavigator({
  Profile: ProfileView
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
};

const TabNavigator = createBottomTabNavigator({
  FeedStack,
  NodeStack,
  ProfileStack
},
{
  tabBarOptions: {
    activeTintColor: activeColor,
    inactiveTintColor: inactiveColor,
    style: {
      borderRadius: 16,
      bottom: 34,
      height: 64,
      left: 32,
      position: "absolute",
      right: 32
    }
  }
}
);

  export default TabNavigator;