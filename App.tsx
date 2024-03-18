import { Text } from 'react-native';
import { ConnectToLobby } from './src/pages/ConnectToLobby';
import { Home } from './src/pages/Home';
import { Lobby } from './src/pages/Lobby';
import { InitialLoading } from './src/pages/initialLoading';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

export type RootStackParamList = {
  Home: undefined;
  Lobby: { name?: string, lobbyID?: string, create?: boolean, lobby?: Lobby, userID?: string };
  InitialLoading: undefined;
  ConnectToLobby: undefined;
};

export type StackRoute = {
  route: keyof RootStackParamList;
  component: React.FC<any>;
  headerShown?: boolean;
};

const stackRoutes: StackRoute[] = [
  { route: 'Home', component: Home },
  { route: 'Lobby', component: Lobby, headerShown: true },
  { route: 'InitialLoading', component: InitialLoading },
  { route: 'ConnectToLobby', component: ConnectToLobby },
];

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='InitialLoading'>
        <Stack.Group>
          {
            stackRoutes?.map(item => (
              <Stack.Screen
                options={{
                  headerShown: false,
                  headerStyle: {
                    backgroundColor: '#3A3A50',
                  },
                  headerTintColor: 'white',
                  headerBackTitleVisible: false
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
  );
}
