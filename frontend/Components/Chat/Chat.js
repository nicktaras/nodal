import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated, Dimensions } from "react-native";
import { Button, Paragraph, Dialog, Portal, Provider, ActivityIndicator } from "react-native-paper";
import { useMoralis } from "react-moralis";
import { Ionicons } from "@expo/vector-icons";
import { useWalletConnect } from "../../WalletConnect";

const {width, height} = Dimensions.get('screen');
const Background = ['#EEEEEE', '#EEEEEE', '#EEEEEE', '#EEEEEE', '#EEEEEE',];
const Screen = [
  {
    "Title": "Connect Your Wallet",
    "Feature": "",
    "Image": "https://Image.flaticon.com/icons/png/256/3571/3571572.png"
  },
  {
    "Title": "Find Your Community",
    "Feature": "",
    "Image": "https://cdn-icons.flaticon.com/png/512/4531/premium/4531344.png?token=exp=1643687952~hmac=c177bea16bbada4577fc46e5131fba33"
  },
  {
    "Title": "Chat with Token Holders",
    "Feature": "",
    "Image": "https://cdn-icons-png.flaticon.com/512/4127/4127787.png"
  },
  {
    "Title": "Discover Projects",
    "Feature": "",
    "Image": "https://cdn-icons-png.flaticon.com/512/4935/4935359.png"
  },
  {
    "Title": "Welcome to Nodal",
    "Feature": "",
    "Image": "https://i.imgur.com/z19GTez.jpg"
  }
]

const chatScreen = ({ navigation }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const inputRange = Screen.map((_, i) => i * width);
  const backgroundColor = scrollX.interpolate({
    inputRange,
    outputRange: Background,
  })

const connector = useWalletConnect();

const {
    authenticate,
    authError,
    isAuthenticating,
    isAuthenticated,
} = useMoralis();


  const [ setVisible ] = React.useState(false);

  const handleCryptoLoginFake = () => {
    navigation.replace("DrawerNavigationRoutes");
  }

  const handleCryptoLogin = () => {
    authenticate({ connector })
      .then(() => {
        if (authError) {
          setErrortext(authError.message);
          setVisible(true);
        } else {
          if (isAuthenticated) {
            navigation.replace("DrawerNavigationRoutes");
          }
        }
      })
      .catch(() => {});
  };

  return (
    <Provider>
        <Animated.View
          style={[StyleSheet.absoluteFillObject, {
            backgroundColor
          }]}
        />

        <TouchableOpacity
          style={Format.buttonFormat}
          activeOpacity={0.5}
          onPress={handleCryptoLoginFake}
        >
          <Ionicons
            color="#FFFFFF"
            name="lock-open"
            size={32}
            style={{ marginTop: 14 }}
          />
        </TouchableOpacity>
    </Provider>
  );
};

export default chatScreen;

const Format = StyleSheet.create({
  buttonFormat: {
    alignItems: "center",
    backgroundColor: "#5C26FF",
    borderRadius: 16,
    height: 64,
    marginBottom: 130,
    marginLeft: 64,
    marginRight: 64,
  },
});
