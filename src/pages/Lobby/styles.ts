import styled from "styled-components/native";

export const Container = styled.View`
    padding: 0 20px;
    flex: 1;
`

export const Header = styled.View`
    height: 70px;
    width: 100%;
    background-color: #3A3A50;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    flex-direction: row;
`

export const ContainerId = styled.View`
    width: 100%;
    height: 235px;
    background-color: #3A3A50;
    border-radius: 10px;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 18px;
    margin-top: 40px;
    
`

export const Text = styled.Text`
    font-size: 16px;
    color: white;
`

export const ContainerWithId = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, .4);
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: #FFF;
`

export const Id = styled.Text`
    font-size: 24px;
    color: #FFF;
    font-weight: 700;
`

export const ShareContainer = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`

export const CopyButton = styled.TouchableOpacity`
    background-color: #DAAD3D;
    height: 56px;
    width: 76%;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`

export const ShareButton = styled.TouchableOpacity`
    background-color: #FFF;
    height: 56px;
    width: 18%;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`

export const ClipboardToast = styled.View`
    height: 60px;
    width: 100%;
    bottom: 50px;
    align-self: center;
    position: absolute;
    background-color: rgba(100,100,100, .4);
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`

export const PlayersContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
    width: 100%;
`

export const PlayerContainer = styled.View`
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    margin-bottom: 20px;
` 

export const PlayerIconContainer = styled.View`
    width: 80px;
    height: 80px;
    background-color: #3A3A50;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
` 

export const PlayerName = styled.Text`
    color: #3A3A50;
    font-weight: 700;
    font-size: 18px;
    margin-top: 5px;
` 

