import React from "react";
import * as S from './styles';
import { Text } from "react-native";

export const Lobby = () => {
    return (
        <S.Container>
            <S.ContainerId>
                <S.Text>O id do seu lobby é:</S.Text>
                <S.ContainerWithId>
                    <S.Id>QZ12ez4L</S.Id>
                </S.ContainerWithId>
                <S.ShareContainer>
                    <S.CopyButton><Text>Copiar código</Text></S.CopyButton>
                    <S.ShareButton><Text>Share</Text></S.ShareButton>
                </S.ShareContainer>
            </S.ContainerId>
        </S.Container>
    )
}