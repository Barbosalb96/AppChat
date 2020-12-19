import React from 'react';
import { View, Text } from 'react-native';
import { Container, NameUser, Profile, Header, ContainerTitle, UltimaView } from './styles';

const Chat = () => {
  return (
    <Container>
      <Header>
        <Profile source={require('../../../assets/gabriela.jpg')} />
        <ContainerTitle>
        <NameUser>Gabriela Martins</NameUser>
        <UltimaView>10:45</UltimaView>

        </ContainerTitle>
      </Header>
    </Container>
  );
}

export default Chat;