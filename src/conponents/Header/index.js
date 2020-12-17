import React from 'react';
import { View } from 'react-native';
import { Container, Back, Chat } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const Header = (props) => {

    const Exit = () => {
         props.navigation.navigate('SingIn');
    }

    return (
        <Container>
            <Back onPress={Exit}>
                <Ionicons name="exit" size={30} color="#fff" />
            </Back>
            <Chat>
                <Entypo name="chat" size={30} color="#fff" />
            </Chat>
        </Container>
    );
}

export default Header;