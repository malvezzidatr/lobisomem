import { useNavigation } from "@react-navigation/native";
import 'react-native-get-random-values';
import React, { useEffect, useState } from "react";
import { Button, TextInput, View } from "react-native";
import { io } from "socket.io-client";
import { Lobby } from "../Lobby";
import { v4 as uuidv4 } from 'uuid';


const socket = io('http://192.168.15.129:3333', {
  transports: ["websocket"],
});

export const ConnectToLobby = () => {
    const navigate = useNavigation();
    const [userName, setUserName] = useState<string>('');
    const [lobbyID, setLobbyID] = useState<string>('');
    const [userID, setUserID] = useState<string>(uuidv4());

    const connect = () => {
        socket.emit('connectToLobby', {
            name: userName,
            userID,
            lobbyID
        })
    }

    useEffect(() => {
        socket.on(userID, (lobby: Lobby) => {
            if(lobby) {
                navigate.navigate('Lobby', { lobby, name: userName, userID });
            }
        })
    }, [socket.on])

    return (
        <View style={{ flex: 1, marginTop: 150 }}>
            <TextInput
                style={{ width: '100%', height: 50, backgroundColor: 'gray'}}
                value={userName}
                onChange={(e) => setUserName(e.nativeEvent.text)}
            />
            <TextInput
                style={{ width: '100%', height: 50, backgroundColor: 'gray', marginTop: 30}}
                value={lobbyID}
                onChange={(e) => setLobbyID(e.nativeEvent.text)}
            />
            <Button onPress={connect} title="entrar no lobby" />
        </View>
    )
}