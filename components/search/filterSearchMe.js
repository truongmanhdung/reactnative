import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text } from "react-native";

var featchDataList = [
    {
        id: 1,
        ma: 115,
        des: "Lỗi Vala không thể kết nối được",
    },
    {
        id: 2,
        ma: 11155,
        des: "Học react native",
    },
    {
        id: 3,
        ma: 11586,
        des: "Hãy yêu bản thân của mình",
    },
    {
        id: 4,
        ma: 1113,
        des: "Chúng ta sẽ không bao giờ bỏ cuộc",
    },
    {
        id: 5,
        ma: 116,
        des: "Hãy luôn luôn ở bêm chúng tôi",
    },
    {
        id: 6,
        ma: 116,
        des: "Tôi sẽ luôn ở bên bạn",
    },
]

function FilterSearch(props) {
    const { keySearch } = props;
    const styles = StyleSheet.create({
        Container: {
            padding: 20,
        },
        searchId: {
            color: "#3161BE",
            textTransform: 'capitalize'
        },
        searchText: {
            lineHeight: 20,
            textAlign: "justify"
        },
        SearchItem: {
            padding: 20,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#B0B0B0",
            borderRadius: 16,
        }
    })

    // useEffect(() => {
    //     featchDataList = featchDataList.filter(Isue => Isue.des.trim().toLowerCase().includes(keySearch.trim().toLowerCase()));
    // }, [keySearch])

    const renderIsue = featchDataList.map((featchData, index) => (
        <View style={styles.SearchItem} key={index}>
            <Text style={styles.searchText}><Text style={styles.searchId}>#{featchData.id}</Text> {featchData.des}</Text>
        </View>
    ))

    return (
        <ScrollView style={styles.Container}>
            {renderIsue}
        </ScrollView>
    );
}

export default FilterSearch;
