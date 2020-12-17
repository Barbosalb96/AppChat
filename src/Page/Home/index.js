import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  Container, Chat, TitleView,
  Title, Profile, ProfileImage, ProfileName,
  ProfileDescription, Status, Header,
  Conversa, ImageUser, NameUser, Mensage, Check

} from './styles';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Home = ({ navigation }) => {

  const Exit = () => {
    navigation.navigate('SingIn')
  }
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={Exit}>
          <Ionicons name="exit" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="chat" size={30} color="#fff" />
        </TouchableOpacity>
      </Header>
      <Profile>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ProfileImage
            resizeMode='cover'
            source={require('../../../assets/Profile.jpg')} />
          <TitleView>
            <ProfileName>Lucas Barbosa</ProfileName>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ProfileDescription>Brazil</ProfileDescription>

              <EvilIcons name="location" size={24} color="black" />
            </View>
          </TitleView>
        </View>
        <Status />
      </Profile>
      <Chat>
        <Title>Conversas</Title>
        <Conversa>
          <ImageUser source={require('../../../assets/gabriela.jpg')} />
          <View>
            <NameUser>Gabriela Martins</NameUser>
            <Mensage>Boa Noite :), Gostou de me ver jogando? </Mensage>
          </View>
          <Check />
        </Conversa>

        <Conversa>
          <ImageUser source={require('../../../assets/Megan.jpg')} />
          <View>
            <NameUser>Megan Fox</NameUser>
            <Mensage>we will still see each other</Mensage>
          </View>
          <Check />
        </Conversa>

        <Conversa>
          <ImageUser source={require('../../../assets/taylor.jpg')} />
          <View>
            <NameUser>Taylor Swift <Ionicons name="heart" size={15} color="red" /> </NameUser>
            <Mensage>hi love, I miss you</Mensage>
          </View>
          <Check />
        </Conversa>
      </Chat>
    </Container>
  );
}

export default Home;