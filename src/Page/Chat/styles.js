import styled from 'styled-components/native';

export const Container = styled.View`
margin-top:20px;
height:100%;
`;
export const Header = styled.View`
height:80px;
width:100%;
background-color:#2ecc71;
flex-direction:row;
align-items:center;
padding:0px 10px;
`;
export const Profile = styled.Image`
    width:60px;
    height:60px;
    border-radius:40px;
`;

export const ContainerTitle = styled.View`
    font-size:30px;
    margin-left:10px;
`;
export const NameUser = styled.Text`
    font-size:25px;
`;
export const UltimaView = styled.Text`
    font-size:16px;
`;
export const Conversa = styled.ImageBackground`
flex:1;
flex-direction:row;
`;


export const ConversaText = styled.View`
    height: 40px;
    width:90%;
    position:absolute;
    bottom:35px;
    margin:0px 5%;
    flex-direction:row;align-items:center;
`;
export const ConversaInput = styled.TextInput`
padding:0px 15px;
flex:1;
border-radius:30px;
margin-right:10px;
height: 50px;
background-color:#fff;
`;