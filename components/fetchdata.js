// import { url } from 'getenv';
// import React, { useState, useEffect } from 'react'
// import { SafeAreaView, View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
// import { FlatList } from 'react-native-gesture-handler';
// import img from '../assets/favicon.png';
// import img2 from '../assets/icon.png';
// import img3 from '../assets/1.jpg';
// import img4 from '../assets/92c952.png';
// function Fetchdata(props) {

//     const [data, setData] = useState([]);
//     const [isLoading, setisLoading] = useState(true);
//     const styles = StyleSheet.create({
//         container: {

//         },
//         list: {

//         },
//         item: {

//         }
//     })
//     useEffect(() => {
//         getlistData();
//     }, [])
//     const api = [
//         {
//             id: 1,
//             image: img,
//             title: 'oke',
//         },
//         {
//             id: 2,
//             image: img2,
//             title: 'oke2',
//         },
//         {
//             id: 3,
//             image: img3,
//             title: 'oke3',
//         },
//         {
//             id: 4,
//             image: img4,
//             title: 'oke4',
//         },

//     ]
//     const getlistData = () => {

//         fetch(api).then((response) => response.json()).then((responseData) => {
//             setData(responseData);
//         }).catch((error) => {
//             console.error(error);
//         }).finally(() => {
//             setisLoading(false);
//         })
//     }
//     const renderItem = ({ item, index }) => {
//         return (
//             <View style={styles.item}>
//                 <Text>{item.title}</Text>
//                 <Image
//                     source={img}
//                     resizeMode="contain"
//                 />
//             </View>
//         )
//     }
//     return (
//         <SafeAreaView style={styles.container}>
//             {isLoading ? <ActivityIndicator /> : (
//                 <FlatList
//                     data={data}
//                     style={styles.list}
//                     renderItem={renderItem}
//                     keyExtractor={item => item.id}
//                 />
//             )}

//         </SafeAreaView>
//     )

// }


// export default Fetchdata

