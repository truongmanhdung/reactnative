import React from 'react';
import {
  ScrollView, View, Text, StyleSheet, TouchableOpacity, FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
const styles = StyleSheet.create({
  histoty: {
    padding: 20,
  },
  rowHistory: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  TextBlue: {
    color: 'blue',
    textTransform: 'capitalize',
  },
});

const fetchHistory = [
  {
    id: 1,
    keySearch: 'vala',
  },
  {
    id: 2,
    keySearch: 'vala',
  },
  {
    id: 3,
    keySearch: 'vala',
  },
];

function HistorySearch() {
  const renderHistory = ({ item }) => (
      <View style={styles.rowHistory}>
                <Text style={styles.TextBlue}>{item.keySearch}</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      console.log('xóa tát cả');
                    }}
                >
                   <Ionicons style={styles.TextBlue} name="close" size={16}/>
                </TouchableOpacity>
            </View>
  );
  return (
        <ScrollView style={styles.histoty}>
            <View style={styles.rowHistory}>
                <Text style={styles.textBlack}>Lịch sử tìm kiếm</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      console.log('xóa tát cả');
                    }}
                >
                    <Text style={styles.TextBlue} >Xóa tất cả</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                    data={fetchHistory} renderItem={renderHistory}
                    keyExtractor={(item) => item.id}
            />
        </ScrollView>
  );
}

export default HistorySearch;
