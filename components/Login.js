import React from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'


const styles = StyleSheet.create({
    headerlogin: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 24,
        color: 'blue',
        fontWeight: "400",

    },
    form: {
        marginStart: 40,
        marginEnd: 40,

    },
    Input: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#D5D9DB',
        height: 60,
        paddingStart: 20,
    },
    ButtonForm: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#FACB1B',
        marginBottom: 20,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    textwhite: {
        textAlign: 'center',
        color: 'white',
        fontStyle: 'italic',
        fontSize: 20,
    },
    forgotpassword: {
        marginBottom: 20,
        textAlign: "center",
        fontStyle: 'italic',
        fontSize: 20,
        color: '#436EC3',
    },
    colorBlue: {
        color: '#436EC3',
        fontStyle: 'italic',
        fontSize: 16,

    },
    Signup: {
        textAlign: 'center',
        fontStyle: 'italic',
        fontSize: 16,
        marginBottom: 20,
    },
    loginBrown: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#BD8169',
        marginBottom: 5,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    loginPrimary: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#2B5CBC',
        marginBottom: 5,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    loginRed: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#FC2B2B',
        marginBottom: 5,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },



})
function Login(props) {
    return (
        <ScrollView>
            <Text style={styles.headerlogin}>Đăng nhập</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.Input}
                    placeholderTextColor={'#7F878E'}

                    placeholder="Tên đăng nhập" />
                <TextInput
                    style={styles.Input}
                    placeholderStyle={{ color: "red" }}
                    placeholder="Mật khẩu"
                    secureTextEntry={true}
                />
                <TouchableOpacity activeOpacity="0.8" style={styles.ButtonForm}>
                    <Text style={styles.textwhite}>Đăng nhập</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.forgotpassword}>Quên mật khẩu?</Text>
                    <Text style={styles.Signup}>Bạn chưa có tài khoản?
                        <Text style={styles.colorBlue}> Đăng kí</Text>
                    </Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity="0.8" style={styles.loginBrown}>
                        <Text style={styles.textwhite}>Đăng nhập bằng SSO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity="0.8" style={styles.loginPrimary}>
                        <Text style={styles.textwhite}>Đăng nhập bằng Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity="0.8" style={styles.loginRed}>
                        <Text style={styles.textwhite}>Đăng nhập bằng Gmail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )
}


export default Login

