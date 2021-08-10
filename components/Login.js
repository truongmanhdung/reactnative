import React, { useEffect, useState } from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';



const users = [
    {
        id: 1,
        name: 'dung123',
        pass: 'dung123',
    },
    {
        id: 2,
        name: 'dung74545',
        pass: 'dung123aas',
    },
    {
        id: 3,
        name: 'dungadssad',
        pass: 'dung123dsa',
    },

];

function Login() {
    const [eyePass, setEyePass] = useState(true);
    const [userPass, setUserPass] = useState('');
    const [userName, setUserName] = useState('');
    const [messageName, setMessageName] = useState('');
    const [messagePass, setMessagePass] = useState('');
    const [borderColorName, setBorderColorName] = useState('#D5D9DB');
    const [borderColorPass, setBorderColorPass] = useState('#D5D9DB');
    const showPass = () => {
        setEyePass(!eyePass);
    };
    useEffect(() => {

    }, [userName])
    const onchangeUserName = (text) => {
        if (text.length > 0) {
            setMessageName("");
            setBorderColorName('#D5D9DB');
        }
        setUserName(text)
    }
    const onchangePassword = (text) => {
        if (text.length > 0) {
            setMessagePass("");
            setBorderColorPass('#D5D9DB');
        }
        setUserPass(text)

    }
    const callMessageName = () => {
        if (userName.length < 1) {
            setBorderColorName('red');
            setMessageName("Đây là trường bắt buộc");
        } else {
            setMessageName("");
        }
    }
    const callMessagePass = () => {
        if (userPass.length < 1) {
            setBorderColorPass('red');
            setMessagePass("Đây là trường bắt buộc");
        } else {
            setMessagePass("");
        }
    }

    const onSubmit = () => {

    };

    const validate = (text, type) => {
        alph = /^[a-zA-Z]+$/
        if (type === "username") {
            if (alph.test(text)) {

            } else {
                Alert.alert("không được viết có dấu")
            }
        } else if (type === "password") {

        }
    }

    const styles = StyleSheet.create({
        headerlogin: {
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 20,
            fontSize: 24,
            color: 'blue',
            fontWeight: '400',

        },
        form: {
            marginStart: 40,
            marginEnd: 40,

        },
        Input1: {
            marginTop: 20,
            borderWidth: 1,
            borderColor: borderColorName,
            height: 40,
            paddingStart: 35,
        },
        Input2: {
            marginTop: 20,
            borderWidth: 1,
            borderColor: borderColorPass,
            height: 40,
            paddingStart: 35,
        },
        ButtonForm: {
            marginTop: 20,
            padding: 8,
            backgroundColor: '#FACB1B',
            marginBottom: 20,
            borderRadius: 8,
            shadowColor: '#000',
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
            fontSize: 16,
        },
        forgotpassword: {
            marginBottom: 10,
            textAlign: 'center',
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
            marginBottom: 10,
        },
        loginBrown: {
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
            padding: 8,
            backgroundColor: '#BD8169',
            marginBottom: 5,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },
        loginPrimary: {
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
            padding: 8,
            backgroundColor: '#2B5CBC',
            marginBottom: 5,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,


        },
        loginRed: {
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
            padding: 8,
            backgroundColor: '#FC2B2B',
            marginBottom: 5,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },
        positionname: {
            position: 'absolute',
            left: 10,
            bottom: 8,
        },
        positioneye: {
            position: 'absolute',
            right: 10,
            bottom: 8,

        },
        positionbuttom: {
            color: "white",
        },
        textMessage: {
            color: "red",
            marginTop: 10,
            marginBottom: 0,
        }


    });
    return (
        <ScrollView keyboardDismissMode="interactive">
            <Text style={styles.headerlogin}>Đăng nhập</Text>
            <View style={styles.form}>
                <KeyboardAvoidingView keyboardVerticalOffset={100} behavior="position">
                    <TextInput
                        returnKeyType="next"
                        autoFocus={true}
                        style={styles.Input1}
                        placeholderTextColor={borderColorName}
                        placeholder="Tên đăng nhập *"
                        onBlur={callMessageName}
                        onChangeText={(text) => validate(text, "username")}
                    />
                    <Ionicons style={styles.positionname} name="user" size={24} />
                </KeyboardAvoidingView>
                <Text style={styles.textMessage}>{messageName}</Text>
                <KeyboardAvoidingView keyboardVerticalOffset={100} behavior="position">
                    <TextInput
                        style={styles.Input2}
                        placeholderTextColor={borderColorPass}
                        placeholderStyle={{ color: 'red' }}
                        placeholder="Mật khẩu *"
                        secureTextEntry={eyePass}
                        onBlur={() => validate}
                        onChangeText={onchangePassword}
                    />
                    <Ionicons style={styles.positionname} name="lock" size={24} />
                    <Ionicons style={styles.positioneye} onPress={showPass} name={eyePass === true ? 'eye' : 'eye-slash'} size={24} />
                </KeyboardAvoidingView>
                <Text style={styles.textMessage}>{messagePass}</Text>
                <TouchableOpacity activeOpacity="0.8" onPress={onSubmit} style={styles.ButtonForm}>
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
                    <TouchableOpacity activeOpacity="0.8" style={styles.loginPrimary} >
                        <Ionicons style={styles.positionbuttom} name="facebook-square" size={24} />
                        <Text style={styles.textwhite}>Đăng nhập bằng Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity="0.8" style={styles.loginRed}>
                        <Ionicons style={styles.positionbuttom} name="google" size={24} />
                        <Text style={styles.textwhite}>Đăng nhập bằng Gmail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}


export default Login;