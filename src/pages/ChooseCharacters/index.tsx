import React from "react";
import { StatusBar, TouchableOpacity, View, Text, Image } from "react-native";
import * as S from './styles';
import { useNavigation } from "@react-navigation/native";

export const ChooseCharacters = () => {
  return (
    <S.Container>
      <S.AllCharactersContainer>
        <S.CharacterContainer>
          <Image resizeMode="contain" source={require('../../assets/characters/aldeao.png')} />
          <S.ChatacterText>Aldeão</S.ChatacterText>
          <S.ChatacterAmount>2</S.ChatacterAmount>
        </S.CharacterContainer>
        <S.CharacterContainer>
          <Image resizeMode="contain" source={require('../../assets/characters/lobo.png')} />
          <S.ChatacterText>Aldeão</S.ChatacterText>
          <S.ChatacterAmount>2</S.ChatacterAmount>
        </S.CharacterContainer>
        <S.CharacterContainer>
          <Image resizeMode="contain" source={require('../../assets/characters/olho.png')} />
          <S.ChatacterText>Aldeão</S.ChatacterText>
          <S.ChatacterAmount>2</S.ChatacterAmount>
        </S.CharacterContainer>
      </S.AllCharactersContainer>
    </S.Container>
  )
}


/* 
  atribuir depois
  <a href="https://www.flaticon.com/br/icones-gratis/aldeao" title="aldeão ícones">Aldeão ícones criados por Iconic Panda - Flaticon</a>
  <a href="https://www.flaticon.com/br/icones-gratis/lobo" title="lobo ícones">Lobo ícones criados por Freepik - Flaticon</a>
  <a href="https://www.flaticon.com/br/icones-gratis/ui" title="ui ícones">Ui ícones criados por PixelX - Flaticon</a>
*/