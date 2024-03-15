import React, { useEffect, useState } from "react";
import * as S from './styles';
import { BackHandler, Text, View } from "react-native";
import * as Clipboard from 'expo-clipboard';
import io from 'socket.io-client';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { useNavigation } from "@react-navigation/native";

const socket = io('http://192.168.15.129:3333', {
  transports: ["websocket"],
});

interface Props extends NativeStackScreenProps<RootStackParamList, 'Lobby'> {}

interface Player {
    id: string;
    name: string
}

export interface Lobby {
    players: Player[];
    id: string;
}

export const Lobby = ({ route }: Props) => {
    const { params } = route;
    const navigate = useNavigation();
    const [lobby, setLobby] = useState<Lobby>();
    const [showToast, setShowToast] = useState<boolean>(false);

    useEffect(() => {
        if(!params?.create) {
            setLobby(params?.lobby)
        }
    }, [])

    useEffect(() => {
        if(params?.create) {
            socket.emit('createLobby', { lobbyID: params?.lobbyID, name: 'Caio' });
        }
        socket.on(`lobby_${params?.lobbyID}`, (lobby: any) => {
            setLobby(lobby)
        })
    }, [socket.on])

    const copyCode = async () => {
        await Clipboard.setStringAsync(lobby?.id ?? '');
        setShowToast(true)
        console.log(lobby)
        setTimeout(() => {
            setShowToast(false);
        }, 2000)
    }

    return (
            <S.Container>
                <S.ContainerId>
                    <S.Text>O id do seu lobby é:</S.Text>
                    <S.ContainerWithId onPress={copyCode}>
                        <S.Id>{lobby?.id}</S.Id>
                    </S.ContainerWithId>
                    <S.ShareContainer>
                        <S.CopyButton onPress={copyCode}><Text>Copiar código</Text></S.CopyButton>
                        <S.ShareButton><Text>Share</Text></S.ShareButton>
                    </S.ShareContainer>
                </S.ContainerId>
                {
                    showToast &&
                    <S.ClipboardToast>
                        <Text style={{color: 'white'}}>Copiado para a área de transferência.</Text>
                    </S.ClipboardToast>
                }
                {
                    lobby?.players?.map(player => (
                        <View key={player?.name} style={{width: 60, height: 60, backgroundColor: 'gray'}} >
                            <Text>{player?.name}</Text>
                        </View>
                    ))
                }
            </S.Container>
            
    )
}