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

interface Lobby {
    players: string[];
    id: string;
}

export const Lobby = ({ route }: Props) => {
    const { params } = route;
    const navigate = useNavigation();
    const [lobby, setLobby] = useState<Lobby>();
    const [showToast, setShowToast] = useState<boolean>(false);

    

    useEffect(() => {
        socket.on(`lobby_${params?.adminName}`, (lobby: any) => {
            console.log(lobby)
            setLobby(lobby)
        })

        return () => {
            socket.off('lobby');
        };
    }, [])

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            handleBackPress
        );

        return () => backHandler.remove();
    }, [navigate]);

    const handleBackPress = () => {
        console.log("Usuário pressionou o botão de voltar");

        return false;
    };


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
                        <View key={player} style={{width: 60, height: 60, backgroundColor: 'gray'}} >
                            <Text>{player}</Text>
                        </View>
                    ))
                }
            </S.Container>
            
    )
}