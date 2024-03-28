import React, { useEffect, useState } from "react";
import 'react-native-get-random-values';
import * as S from './styles';
import { BackHandler, ScrollView, StatusBar, Text, TouchableOpacity, View, Share } from "react-native";
import * as Clipboard from 'expo-clipboard';
import io from 'socket.io-client';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { UserSliceState } from "../../slices/userStore";

const socket = io('http://192.168.15.129:3333', {
  transports: ["websocket"],
});

interface Props extends NativeStackScreenProps<RootStackParamList, 'Lobby'> {}

export interface Player {
    userID: string;
    name: string;
    admin: boolean;
}

export interface Lobby {
    players: Player[];
    id: string;
}

export const Lobby = ({ route }: Props) => {
    const { params } = route;
    const [lobby, setLobby] = useState<Lobby>();
    const navigate = useNavigation();
    const [showToast, setShowToast] = useState<boolean>(false);
    const [lobbyID, serLobbyID] = useState<string>(params?.lobbyID as string || params?.lobby?.id as string);
    const userNameInAllScreens = useSelector((state: UserSliceState) => state.name);

    useEffect(() => {
        if(!params?.create) {
            setLobby(params?.lobby)
        }
    }, [])

    useEffect(() => {
        if(params?.create) {
            socket.emit('createLobby', {
                lobbyID: lobbyID,
                name: userNameInAllScreens,
                userID: params?.userID,
                admin: true
            });
        }
        socket.on(`lobby_${lobbyID}`, (lobby: any) => {
            setLobby(lobby)
        })
    }, [socket.on])

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            handleBackPress
        );

        return () => backHandler.remove();
    }, [navigate]);

    const disconnectFromLobby = () => {
        socket.emit('disconnectFromLobby', {
            lobbyID: lobbyID,
            name: userNameInAllScreens,
            userID: params?.userID
        });
    }

    const handleBackPress = () => {
        disconnectFromLobby()
        return false;
    };

    const copyCode = async () => {
        await Clipboard.setStringAsync(lobbyID);
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false);
        }, 2000)
    }

    const onShare = async () => {
        try {
            await Share.share({
                message: `O id da sala é: ${lobbyID}`,
            });
        } catch (error: any) {
            console.error(error?.message)
        }
    }

    return (
        <>
            <S.Container>
                <S.ContainerId
                    style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 4.65,
                        elevation: 50,
                    }}
                >
                    <S.Text>O id do seu lobby é:</S.Text>
                    <S.ContainerWithId onPress={copyCode}>
                        <S.Id>{lobby?.id}</S.Id>
                    </S.ContainerWithId>
                    <S.ShareContainer>
                        <S.CopyButton onPress={copyCode}><Text style={{color: '#3A3A50', fontSize: 18, fontWeight: '700'}}>Copiar código</Text></S.CopyButton>
                        <S.ShareButton onPress={onShare}>
                            <Ionicons name="share-social-outline" color={'#3A3A50'} size={28} />
                        </S.ShareButton>
                    </S.ShareContainer>
                </S.ContainerId>
                {
                    showToast &&
                    <S.ClipboardToast>
                        <Text style={{color: 'white'}}>Copiado para a área de transferência.</Text>
                    </S.ClipboardToast>
                }
                <ScrollView showsVerticalScrollIndicator={false}>
                    <S.PlayersContainer>
                        {lobby?.players?.map(player => (
                            <S.PlayerContainer key={player?.userID}>
                                <S.PlayerIconContainer>
                                    <Ionicons size={42} color={'white'} name="person-outline" />
                                </S.PlayerIconContainer>
                                <S.PlayerName>{player?.name}</S.PlayerName>
                            </S.PlayerContainer>
                        ))}
                    </S.PlayersContainer>
                </ScrollView>
                {
                    lobby?.players.find(usuario => usuario.userID === params?.userID && usuario.admin === true) && (
                        <S.NextButton onPress={() => navigate.navigate('ChooseCharacters')}>
                            <S.NextButtonText>Próximo</S.NextButtonText>
                        </S.NextButton>
                    )
                }
            </S.Container>
        </>
    )
}