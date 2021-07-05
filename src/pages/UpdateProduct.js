import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';

import Mytext from './components/Mytext';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { DatabaseConnection } from '../database/database-connection';

const db = DatabaseConnection.getConnection();

const UpdateProduct = ({ navigation }) => {
  let [inputProductId, setInputProductId] = useState('');
  let [productName, setProductName] = useState('');
  let [productDescription, setProductDescription] = useState('');

  let updateAllStates = (name, descriction) => {
    setProductName(name);
    setProductDescription(descriction);
  };

  let searchProduct = () => {
    console.log(inputProductId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_product where product_id = ?',
        [inputProductId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(
              res.product_name,
              res.product_description,
            );
          } else {
            alert('Produto não encontrado!');
            updateAllStates('', '', '');
          }
        }
      );
    });
  };
  let updateProduct = () => {
    console.log(inputProductId, productName, productDescription);

    if (!inputProductId) {
      alert('Por Favor informe o Código!');
      return;
    }
    if (!productName) {
      alert('Por favor informe o Nome !');
      return;
    }
    if (!productDescription) {
      alert('Por Favor informe a Descrição !');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_product set product_name=?, product_description=? where product_id=?',
        [productName, productDescription, inputProductId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Produto atualizado com sucesso !!',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Erro ao atualizar o produto');
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
              <Mytext text="Filtro de Produto" />
              <Mytextinput
                placeholder="Entre com o Código do Produto"
                style={{ padding: 10 }}
                onChangeText={
                  (inputProductId) => setInputProductId(inputProductId)
                }
              />
              <Mybutton
                title="Buscar Produto"
                customClick={searchProduct}
              />
              <Mytextinput
                placeholder="Entre com o Nome"
                value={productName}
                style={{ padding: 10 }}
                onChangeText={
                  (productName) => setProductName(productName)
                }
              />
              <Mytextinput
                value={productDescription}
                placeholder="Entre com a Descrição"
                onChangeText={
                  (productDescription) => setProductDescription(productDescription)
                }
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{ textAlignVertical: 'top', padding: 10 }}
              />
              <Mybutton
                title="Atualizar Produto"
                customClick={updateProduct}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateProduct;