import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import MyImageButton from './components/MyImageButton';
import { DatabaseConnection } from '../database/database-connection';

const db = DatabaseConnection.getConnection();

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user' AND name='table_product'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user AND table_product', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_product(product_id INTEGER PRIMARY KEY AUTOINCREMENT, product_name VARCHAR(20), product_description VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>

            <MyImageButton
              title="Registrar Usuário"
              btnColor='#384F62'
              btnIcon="user-plus"
              customClick={() => navigation.navigate('RegisterUser')}
            />

            <MyImageButton
              title="Atualizar Usuário"
              btnColor='#384F62'
              btnIcon="user-circle"
              customClick={() => navigation.navigate('UpdateUser')}
            />

            <MyImageButton
              title="Visualizar Usuário"
              btnColor='#384F62'
              btnIcon="user"
              customClick={() => navigation.navigate('ViewUser')}
            />
            <MyImageButton
              title="Visualizar Todos Usuários"
              btnColor='#384F62'
              btnIcon="users"
              customClick={() => navigation.navigate('ViewAllUser')}
            />
            <MyImageButton
              title="Excluir Usuário"
              btnColor='#384F62'
              btnIcon="user-times"
              customClick={() => navigation.navigate('DeleteUser')}
            />
            <MyImageButton
              title="Registrar Produto"
              btnColor='#2992C4'
              btnIcon="product-plus"
              customClick={() => navigation.navigate('RegisterProduct')}
            />
            <MyImageButton
              title="Atualizar Produto"
              btnColor='#2992C4'
              btnIcon="product-plus"
              customClick={() => navigation.navigate('UpdateProduct')}
            />
            <MyImageButton
              title="Visualizar Produto"
              btnColor='#2992C4'
              btnIcon="product-plus"
              customClick={() => navigation.navigate('ViewProduct')}
            />
            <MyImageButton
              title="Visualizar Todos Produtos"
              btnColor='#2992C4'
              btnIcon="products"
              customClick={() => navigation.navigate('ViewAllProduct')}
            />
            <MyImageButton
              title="Excluir Produto"
              btnColor='#2992C4'
              btnIcon="product-times"
              customClick={() => navigation.navigate('DeleteProduct')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;