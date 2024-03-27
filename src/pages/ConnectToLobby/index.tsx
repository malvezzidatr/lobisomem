import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import 'react-native-get-random-values';
import { Button, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { io } from "socket.io-client";
import { Lobby } from "../Lobby";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
import { UserSliceState } from "../../slices/userStore";
import * as S from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

const socket = io('http://192.168.15.129:3333', {
  transports: ["websocket"],
});

export const ConnectToLobby = () => {
    const navigate = useNavigation();
    const [lobbyID, setLobbyID] = useState<string>('');
    const userID = uuidv4()
    const userNameInAllScreens = useSelector((state: UserSliceState) => state.name);

    const connect = () => {
        socket.emit('connectToLobby', {
            name: userNameInAllScreens,
            userID,
            lobbyID
        })
    }

    useEffect(() => {
        socket.on(userID, (lobby: Lobby) => {
            if(lobby) {
                navigate.navigate('Lobby', { lobby, name: userNameInAllScreens, userID });
            }
        })
    }, [socket.on])

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'#3A3A50'}/>
            <S.Header>
                <TouchableOpacity onPress={() => {
                    navigate.goBack();
                }}>
                    <Ionicons name="chevron-back-outline" color={'#FFF'} size={28} />
                </TouchableOpacity>
                <Text style={{color: 'white', fontSize: 16}}>Conectar a uma sala</Text>
                <Ionicons style={{opacity: 0}} name="information-circle-outline" color={'#FFF'} size={28} />
            </S.Header>
            <View style={{height: 4, width: '100%', backgroundColor: '#cecece', opacity: .55}}/>

            <TextInput
                style={{ width: '100%', height: 50, backgroundColor: 'gray', marginTop: 30}}
                value={lobbyID}
                onChange={(e) => setLobbyID(e.nativeEvent.text)}
            />
            <Button onPress={connect} title="entrar no lobby" />
        </View>
    )
}