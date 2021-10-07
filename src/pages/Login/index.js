import React from 'react';
import {StyleSheet, View, Text, KeyboardAvoidingView} from 'react-native';
import {ILLogin} from '../../asset';
import {ButtonCustom} from '../../components';
import FormInput from '../../components/FormInput';

const Login = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.illustration}>
        <ILLogin />
      </View>
      <FormInput
        label="Email APU"
        placeholder={'Alamat Email APU'}
        keyboard="email-address"
        marginBottom={16}
      />
      <FormInput
        label="Password"
        placeholder="Password"
        keyboard="default"
        password
      />
      <Text style={styles.hint}>
        Harap menghubungi admin apabila lupa password
      </Text>
      <ButtonCustom title="Login" onPress={() => alert('Button pressed')} />
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  keyboardAvoiding: {
    // flex: 1,
    // padding: 12,
    // backgroundColor: 'red',
  },
  container: {
    paddingTop: 44,
    paddingHorizontal: 27,
  },
  illustration: {
    marginBottom: 28,
  },
  hint: {
    fontFamily: 'Nunito-Regular',
    color: '#B2ACAC',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
    marginBottom: 36,
  },
});
