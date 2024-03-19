import React, { useEffect, useState } from "react";
import * as S from './styles';
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { UserSliceState, setName } from "../../slices/userStore";
import Ionicons from '@expo/vector-icons/Ionicons';

export const InitialLoading = () => {
    const navigate = useNavigation();
    const [userName, setUserName] = useState<string>('');

    const dispatch = useDispatch();
    // const user = useSelector((state: UserSliceState) => state);

    useEffect(() => {
        setTimeout(() => {
            // if(!user.name) {
            //     dispatch(setName('Ola'))
            // }
            // navigate.navigate('Home');
        }, 4000)
    }, [])

    return (
        <S.Container>
            <Image
                style={{
                    height: 150,
                    width: 150
                }}
                source={require('../../assets/wolf-20fps.gif')}
            />
            <Modal transparent animationType="slide" presentationStyle="overFullScreen">
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                    <View style={{ width: '100%', height: '60%', backgroundColor: '#FFF', borderRadius: 24, paddingHorizontal: 30}}>
                        <View style={{paddingVertical: 20, borderBottomColor: '#ececec', borderBottomWidth: 2, borderStyle: 'solid', marginBottom: 40}}>
                            <Text style={{fontSize: 24, fontWeight: '700'}}>Auuuuuu!</Text>
                            <Text style={{fontSize: 14, fontWeight: '700', color: '#adadad'}}>Aldeão sem nome no pedaço!</Text>
                        </View>
                        <TextInput
                            placeholder="Insira seu nome"
                            style={{
                                borderColor: '#3A3A50',
                                borderRadius: 8,
                                borderWidth: 2,
                                height: 45,
                                paddingLeft: 14
                            }}
                            value={userName}
                            onChange={e => setUserName(e.nativeEvent.text)}
                        />
                        <TouchableOpacity style={{width: '100%', height: 60, backgroundColor: '#3A3A50', borderRadius: 8, position: 'absolute', bottom: 0, marginLeft: 30, marginBottom: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{color: '#FFF', fontSize: 20, fontWeight: '700'}}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </S.Container>
    )
}