import styled from 'styled-components/native';

export const Container = styled.View`
background-color:#fff;
flex:1;
justify-content:center;
align-items:center;
  
`;

export const ImagaBanner = styled.Image`
  width:30%;
  height:30%;
  margin-bottom:10px;
  `;
export const Input = styled.TextInput`
border:1px solid #bbc0c4;
border-radius:4px;
color:#bbc0c4;
width:90%;
margin-bottom:10px;
padding:10px 5px;
  
`;
export const BtnLogin = styled.TouchableOpacity`
    background-color:#3DC71B;
    width:40%;
    height:50px;
    border-radius:4px;
    margin-top:30px;
    justify-content:center;
`;

export const TextLogin = styled.Text`
  text-align:center;
  color:#fff;
  font-weight:bold;
  font-size:20px;
`;
