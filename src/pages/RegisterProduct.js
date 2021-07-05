import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { DatabaseConnection } from '../database/database-connection';

const db = DatabaseConnection.getConnection();

const RegisterProduct = ({ navigation }) => {
  let [productName, setProductName] = useState('');
  let [productDescription, setProductDescription] = useState('');

  let register_product = () => {
    console.log(productName, productDescription);

    if (!productName) {
      alert('Por favor preencha o nome');
      return;
    }
    if (!productDescription) {
      alert('Por favor preencha a descrição');
      return;
    }
  
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_product (productName, productDescription) VALUES (?,?)',
        [productName, productDescription],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Produto Registrado com Sucesso !!!',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Erro ao tentar Registrar o Produto !!!');
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: 'space-between' }}>
              <Mytextinput
                placeholder="Entre com o Nome"
                onChangeText={
                  (productName) => setProductName(productName)
                }
                style={{ padding: 10 }}
              />
              <Mytextinput
                placeholder="Entre com a Descrição"
                onChangeText={
                  (productDescription) => setProductDescription(productDescription)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton title="Salvar" customClick={register_product} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterProduct;