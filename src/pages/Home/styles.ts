import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
    flex: 11;
    align-items: 'center';
    justify-content: 'space-around';
    padding: 0 32px;
`

export const ContainerTitle = styled.View`
    position: 'relative';
    flex-direction: 'row';
    align-items: 'center';
    flex: 5;
`

export const Moon = styled.Image`
    position: 'absolute';
    right: -8;
    z-index: 1;
`

export const WolfTitle = styled.Image`
    height: 50px;
`

export const Title = styled.Text`
    font-size: 56px;
    color: white;
`

export const MenuContainer = styled.View`
    width: '100%';
    flex: 6;
`

export const NemGameButton = styled.TouchableOpacity`
    flex-direction: 'row';
    align-items: 'center';
    justify-content: 'center';
    background-color: '#3A3A50';
    width: '100%';
    height: 60px;
    border-radius: 10px
`

export const LobbyButton = styled.TouchableOpacity`
    flex-direction: 'row';
    align-items: 'center';
    justify-content: 'center';
    background-color: '#FFF';
    width: '100%';
    height: 60px;
    border-radius: 10px;
    margin-top: 22px;
`