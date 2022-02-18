import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { 
  TouchableOpacity,
  View,
  Pressable,
  StyleSheet,
  Image,
  FlatList, } from "react-native";
import Chat from "../Components/Chat/Chat"

class RedServerView extends React.Component {
  static navigationOptions = {
    headerShown: false
  }; 

  render() {
    return (
      <Container>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{
            position: "absolute",
            left: 30,
            top: 48
          }}
        >
          <CloseView />
        </TouchableOpacity>
        <Text>My Server</Text>
        <View
          component={Chat}/>
      </Container>
    );
  }
};

export default RedServerView;

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text`
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  right: 32px;
  position: absolute;
  text-transform: uppercase;
  top: 112px;
`;

const CloseView = styled.View`
  background: #000000;
  border-radius: 16px;
  height: 64px;
  width: 64px;
`;