import { useTheme } from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: 'blue'},
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
});

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-12133hdh2311',
    title: 'Fourth Item',
  },
];

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

export default function PlanScreen({navigation}) {
  const { colors } = useTheme();
  const [selectedId, setSelectedId] = useState(null);
  const onButtonPress = (item) => {
    setSelectedId(item.id);
    navigation.navigate('Details', {
      itemId: item.id,
      itemTitle: item.title,
    });
  };
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';

    return (
      <Item
        item={item}
        onPress={() => onButtonPress(item)}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>PlanScreen!</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
}
