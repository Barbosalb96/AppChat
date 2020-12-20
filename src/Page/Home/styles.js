import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color:#fff;
`;


export const Profile = styled.View`
flex-direction:row;
width:100%;
padding:10px;
height: 90px;
background-color:#2ecc71;
align-items:center;
justify-content:space-between;
`;
export const TitleView = styled.View`
    margin-left:10px;
`;

export const Header = styled.View`
  height:90px;
  width:100%;
  align-items:center;
  flex-direction:row;
  justify-content:space-between;
  background-color:#2ecc71;
  padding-top:19px;
  padding-left:10px;
  padding-right:10px;
`;
export const ProfileImage = styled.Image`
width:80px;
height:80px;
border-radius:90px;
`;

export const ProfileName = styled.Text`
font-size:20px;
`;
export const ProfileDescription = styled.Text`

`;

export const Status = styled.View`
width:15px;
height: 15px;
background-color:greenyellow;
border-radius:50px;

`;

export const Chat = styled.View`
height: 100%;
`;

export const Title = styled.Text`
  font-weight:bold;
  font-size:20px;
  padding:5px;
`;


export const Conversa = styled.TouchableOpacity`
flex-direction:row;
padding:8px 0px;
margin:10px 0px;
border-bottom-width:1px;
border-color:#bdc3c7;
align-items:center;

`;
export const ImageUser = styled.Image`
  width:60px;
  height: 60px;
  border-radius:40px;
  margin-right:10px;

`;

export const NameUser = styled.Text`
margin-bottom:10px;
font-size:17px;
font-weight:bold;
`;

export const Mensage = styled.Text`
font-size:15px;
`;

export const Check = styled.View`
width:10px;
height: 10px;
background-color:red;
border-radius:50px;
position:absolute;
left:95%;
`;