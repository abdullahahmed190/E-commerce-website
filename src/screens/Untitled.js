import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function Untitled(props) {
  return (
    <Container>
      <ScrollAreaStack>
        <ScrollArea>
          <EntypoIcon
            name="code"
            style={{
              color: "rgba(128,128,128,1)",
              fontSize: 27,
              height: 30,
              width: 0,
              marginTop: 15,
              marginLeft: 126,
              flex: "0 0 auto"
            }}
          ></EntypoIcon>
        </ScrollArea>
        <TextInput placeholder="Prestige Store"></TextInput>
      </ScrollAreaStack>
      <Image src={require("../assets/images/prestigelogo.jpg")}></Image>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  top: 0px;
  width: 1294px;
  height: 57px;
  position: absolute;
  background-color: #E6E6E6;
  left: 18px;
  flex-direction: column;
  display: flex;
`;

const TextInput = styled.input`
  font-family: Impact;
  top: 15px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 23px;
  width: 144px;
  height: 27px;
  border: none;
  background: transparent;
`;

const ScrollAreaStack = styled.div`
  width: 1312px;
  height: 57px;
  margin-left: 18px;
  position: relative;
`;

const Image = styled.img`
  width: 112px;
  height: 100%;
  margin-top: 12px;
  margin-left: 18px;
  object-fit: contain;
`;

export default Untitled;
