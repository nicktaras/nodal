import React from "react";
import styled from "styled-components";

class ProfileView extends React.Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    return (
      <Container>
        <Text>Profile View</Text>
      </Container>
    );
  }
}

export default ProfileView;

const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const Text = styled.Text``;