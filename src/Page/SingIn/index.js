import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Container, ImagaBanner, Input, BtnLogin, TextLogin } from './styles';

const SingIn = ({ navigation }) => {

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('');
  const [Error, setError] = useState('')
  const Logar = () => {

    if (Email === 'lucas@gmail.com' && Password === '123456') {
      navigation.navigate('Home')
    } else {
      setError('Verifique sua Senha ou Email')
      setTimeout(() => {
        setError('');
      }, 5000);
    }

  }


  return (
    <Container>
      <ImagaBanner source={require('../../../assets/Banner.png')} />
      <Input value={Email} onChangeText={(Text => setEmail(Text))} placeholder='Email' keyboardType='email-address' />
      <Input value={Password} secureTextEntry={true} onChangeText={(pass) => setPassword(pass)} placeholder='Password' keyboardType='visible-password' autoCorrect={false} />
      <BtnLogin onPress={Logar}>
        <TextLogin>Entrar</TextLogin>
      </BtnLogin>

      <Text>{Error}</Text>

    </Container>
  );
}

export default SingIn;