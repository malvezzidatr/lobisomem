import { StatusBar, Text } from 'react-native';
import { ConnectToLobby } from './src/pages/ConnectToLobby';
import { Home } from './src/pages/Home';
import { Lobby } from './src/pages/Lobby';
import { InitialLoading } from './src/pages/initialLoading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { persistor, store } from './src/slices/userStore';
import { PersistGate } from 'redux-persist/integration/react';
import { ChooseCharacters } from './src/pages/ChooseCharacters';

export type RootStackParamList = {
  Home: undefined;
  Lobby: { name?: string, lobbyID?: string, create?: boolean, lobby?: Lobby, userID?: string };
  InitialLoading: undefined;
  ConnectToLobby: undefined;
  ChooseCharacters: undefined;
};

export type StackRoute = {
  route: keyof RootStackParamList;
  component: React.FC<any>;
  headerShown?: boolean;
  headerTitle?: string;
};

const stackRoutes: StackRoute[] = [
  { route: 'Home', component: Home },
  { route: 'Lobby', component: Lobby, headerShown: true, headerTitle: 'Jogadores' },
  { route: 'InitialLoading', component: InitialLoading },
  { route: 'ConnectToLobby', component: ConnectToLobby },
  { route: 'ChooseCharacters', component: ChooseCharacters, headerShown: true, headerTitle: 'Papéis'}
];

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={'#3A3A50'}/>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='InitialLoading'>
            <Stack.Group>
              {
                stackRoutes?.map(item => (
                  <Stack.Screen
                    options={{
                      headerShown: item.headerShown ?? false,
                      headerTitle: item.headerTitle,
                      headerStyle: {
                        backgroundColor: '#3A3A50',
                      },
                      headerTintColor: 'white',
                      headerBackTitleVisible: false,
                      headerShadowVisible: true,
                    }}
                    key={item.route}
                    name={item.route}
                    component={item.component}
                  />
                ))
              }
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
