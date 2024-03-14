import { ConnectToLobby } from './src/pages/ConnectToLobby';
import { Home } from './src/pages/Home';
import { Lobby } from './src/pages/Lobby';
import { InitialLoading } from './src/pages/initialLoading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Lobby: { adminName: string };
  InitialLoading: undefined;
  ConnectToLobby: undefined;
};

export type StackRoute = {
  route: keyof RootStackParamList;
  component: React.FC<any>;
};

const stackRoutes: StackRoute[] = [
  { route: 'Home', component: Home },
  { route: 'Lobby', component: Lobby },
  { route: 'InitialLoading', component: InitialLoading },
  { route: 'ConnectToLobby', component: ConnectToLobby },
];

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='InitialLoading' screenOptions={{headerShown: false}}>
        <Stack.Group>
          {
            stackRoutes?.map(item => (
              <Stack.Screen key={item.route} name={item.route} component={item.component} />
            ))
          }
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
