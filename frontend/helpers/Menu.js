import React, {useState} from "react";
import styled from "styled-components";
import { 
  Animated, 
  Dimensions, 
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Button,
} from "react-native";
import { connect } from "react-redux";
import {
  useMoralis,
  useMoralisWeb3Api,
  useMoralisWeb3ApiCall,
} from "react-moralis";

function mapStateToProps(state) {
  return { action: state.action }
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU"
      })
  };
}

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight)
  };

  

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.top, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <StatusBar>
          <TouchableOpacity
            onPress={this.props.closeMenu}
          >
            <CloseView />
          </TouchableOpacity>
        </StatusBar>
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const StatusBar = styled.View`
  margin-top: 48px;
`;

const CloseView = styled.View`
  background: #000000;
  border-radius: 16px;
  height: 64px;
  position: absolute;
  right: 32px;
  width: 64px;
`
