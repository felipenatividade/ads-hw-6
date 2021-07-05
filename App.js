import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/pages/HomeScreen';
import RegisterUser from './src/pages/RegisterUser';
import UpdateUser from './src/pages/UpdateUser';
import ViewUser from './src/pages/ViewUser';
import ViewAllUser from './src/pages/ViewAllUser';
import DeleteUser from './src/pages/DeleteUser';

import RegisterProduct from './src/pages/RegisterProduct';
import UpdateProduct from './src/pages/UpdateProduct';
import ViewProduct from './src/pages/ViewProduct';
import ViewAllProduct from './src/pages/ViewAllProduct';
import DeleteProduct from './src/pages/DeleteProduct';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Aplicação Hands Work 6',
            headerStyle: {
              backgroundColor: '#00AD98',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={{
            title: 'Cadastrar Usuário',
            headerStyle: {
              backgroundColor: '#384F62',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="UpdateUser"
          component={UpdateUser}
          options={{
            title: 'Atualizar Usuário',
            headerStyle: {
              backgroundColor: '#384F62',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ViewUser"
          component={ViewUser}
          options={{
            title: 'Visualizar Usuário',
            headerStyle: {
              backgroundColor: '#384F62',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ViewAllUser"
          component={ViewAllUser}
          options={{
            title: 'Visualizar Todos os Usuários',
            headerStyle: {
              backgroundColor: '#384F62',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="DeleteUser"
          component={DeleteUser}
          options={{
            title: 'Excluir Usuário',
            headerStyle: {
              backgroundColor: '#384F62',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="RegisterProduct"
          component={RegisterProduct}
          options={{
            title: 'Cadastrar Produto',
            headerStyle: {
              backgroundColor: '#2992C4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="UpdateProduct"
          component={UpdateProduct}
          options={{
            title: 'Atualizar Produto',
            headerStyle: {
              backgroundColor: '#2992C4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ViewProduct"
          component={ViewProduct}
          options={{
            title: 'Visualizar Produto',
            headerStyle: {
              backgroundColor: '#2992C4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ViewAllProduct"
          component={ViewAllProduct}
          options={{
            title: 'Visualizar Todos Produtos',
            headerStyle: {
              backgroundColor: '#2992C4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="DeleteProduct"
          component={DeleteProduct}
          options={{
            title: 'Deletar Produto',
            headerStyle: {
              backgroundColor: '#2992C4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;