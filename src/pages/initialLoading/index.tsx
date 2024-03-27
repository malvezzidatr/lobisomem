import React, { useEffect, useLayoutEffect, useState } from "react";
import * as S from './styles';
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { UserSliceState, setName } from "../../slices/userStore";

export const InitialLoading = () => {
    const navigate = useNavigation();
    const [userName, setUserName] = useState<string>('');
    const [showUserNameModal, setShowUserNameModal] = useState<boolean>(false);

    const dispatch = useDispatch();
    const userNameInAllScreens = useSelector((state: UserSliceState) => state.name);

    const defineUserName = () => {
        dispatch(setName(userName));
        navigate.navigate('Home');
    }

    useLayoutEffect(() => {
        if(userNameInAllScreens) {
            setShowUserNameModal(false);
            navigate.navigate('Home');
        } else {
            setShowUserNameModal(true);
        }
    }, [defineUserName])

    return (
        <S.Container>
            <Image
                style={{
                    height: 150,
                    width: 150
                }}
                source={require('../../assets/wolf-20fps.gif')}
            />
            <Modal visible={showUserNameModal} transparent animationType="slide">
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
                    <View style={{ width: '100%', height: '60%', backgroundColor: '#FFF', borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingHorizontal: 30}}>
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
                        <TouchableOpacity onPress={defineUserName} style={{width: '100%', height: 60, backgroundColor: '#3A3A50', borderRadius: 8, position: 'absolute', bottom: 0, marginLeft: 30, marginBottom: 40, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{color: '#FFF', fontSize: 20, fontWeight: '700'}}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </S.Container>
    )
}