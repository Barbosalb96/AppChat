import React from 'react';
import { View } from 'react-native';
import { Container, Banner ,TouchBtn,TitleTouch} from './styles';

const Screen = ({navigation}) => {
  return (
    <Container>
      <Banner  resizeMode="contain" source={require('../../../assets/Banner4.png')} />
      <TouchBtn onPress={()=> navigation.navigate('SingIn')}>
        <TitleTouch>Next</TitleTouch>
      </TouchBtn>
    </Container>
  );
}

export default Screen;