import React from 'react';
import { View, Text } from 'react-native';
import { Container, NameUser, Profile, Header, ContainerTitle, UltimaView, Conversa, ConversaInput, ConversaText } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Chat = () => {
  return (
    <Container>
      <Header>
        <Profile source={require('../../../assets/gabriela.jpg')} />
        <ContainerTitle>
          <NameUser>Gabriela Martins</NameUser>
          <UltimaView>Visto por ultimo as 0:45</UltimaView>
        </ContainerTitle>
      </Header>
      <Conversa source={require('../../../assets/backgroud.jpg')}>
        <ConversaText>
          <ConversaInput placeholder='Digite Sua Mensagem' placeholderTextColor="black" />
          <MaterialCommunityIcons name="send-circle" size={45} color="#2ecc71" />
        </ConversaText>
      </Conversa  >

    </Container>
  );
}

export default Chat;