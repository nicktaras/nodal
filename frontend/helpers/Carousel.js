import React from "react";
import styled from "styled-components";



const Carousel = props => (
  <Container>
    <Image source={props.image} />
    <Title>{props.title}</Title>
  </Container>
);

export default Carousel;

const Container = styled.View`
  background-color: white;
  border-radius: 14px;
  height: 280px;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 32px;
  width: 315px;
`;

const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 700;
  left: 10%;
  position: absolute;
  text-transform: uppercase;
  top: 10%;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
`