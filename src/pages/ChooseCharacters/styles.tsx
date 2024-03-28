import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`

export const AllCharactersContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`

export const CharacterContainer = styled.View`
  padding: 26px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
  border: 1px #3A3A50 solid;
  border-radius: 4px;
`

export const ChatacterText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
  color: #3A3A50;
`

export const ChatacterAmount = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-top: 6px;
  color: #3A3A50;
`