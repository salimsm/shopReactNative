import React from 'react';
import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';

const App = () => {
  const arr = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6'];
  return (
    <SafeAreaView style={{backgroundColor:'grey',flexWrap:'wrap'}}>
      {/* <Button title='press' onPress={()=>{}}/> */}

      <FlatList numColumns={2} data={arr} renderItem={({item}) => <Card item={item} />} />
    </SafeAreaView>
  );
};

const Card = ({item}: any) => {
  return (
    <View
      style={{
        padding: 4,
        marginHorizontal: 4,
        marginVertical: 5,

        backgroundColor: 'orange',

        height:100,
        width:120


      }}>
      <Text>product : {item}</Text>
      <Text>price: {item}</Text>
    </View>
  );
};

export default App;
