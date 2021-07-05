import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Mytext from './components/Mytext';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { DatabaseConnection } from '../database/database-connection';

const db = DatabaseConnection.getConnection();

const ViewProduct = () => {
  let [inputProductId, setInputProductId] = useState('');
  let [productData, setProductData] = useState({});

  let searchProduct = () => {
    console.log(inputProductId);
    setProductData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_product where product_id = ?',
        [inputProductId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setProductData(results.rows.item(0));
          } else {
            alert('Product não encontrado !');
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mytext text="Filtro de Produco" />
          <Mytextinput
            placeholder="Entre com o Código do Produto"
            onChangeText={
              (inputProductId) => setInputProductId(inputProductId)
            }
            style={{ padding: 10 }}
          />
          <Mybutton title="Buscar Produto" customClick={searchProduct} />
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10
            }}>
            <Text>Código : {productData.product_id}</Text>
            <Text>Nome : {productData.product_name}</Text>
            <Text>Descrição : {productData.product_description}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewProduct;