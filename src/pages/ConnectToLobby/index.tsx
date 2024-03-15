import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button, TextInput, View } from "react-native";
import { io } from "socket.io-client";
import { generateLobby } from "../../utils";

const socket = io('http://192.168.15.129:3333', {
  transports: ["websocket"],
});

export const ConnectToLobby = () => {
    const navigate = useNavigation();
    const [userName, setUserName] = useState<string>('');
    const [lobbyID, setLobbyID] = useState<string>('');
    const [userID, setUserID] = useState<string>(generateLobby());

    const connect = () => {
        socket.emit('connectToLobby', {
            name: userName,
            userID,
            lobbyID
        })
    }

    useEffect(() => {
        socket.on(userID, (lobby: any) => {
            if(lobby) {
                navigate.navigate('Lobby', { lobby });
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