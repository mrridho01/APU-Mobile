import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {ILLogin} from '../../asset';
import {ButtonCustom} from '../../components';
import FormInput from '../../components/FormInput';

const Login = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.illustration}>
        <Image source={ILLogin} style={styles.logo} />
      </View>
      <FormInput
        label="Email APU"
        placeholder="Alamat Email APU"
        keyboard="email-address"
        autoCapitalize="none"
        marginBottom={16}
      />
      <FormInput
        label="Password"
        placeholder="Password"
        keyboard="default"
        autoCapitalize="none"
        password
      />
      <Text style={styles.hint}>
        Harap menghubungi admin apabila lupa password
      </Text>
      <ButtonCustom
        title="Login"
        onPress={() => navigation.replace('MainApp')}
      />
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 27,
    backgroundColor: '#003EA7',
  },
  illustration: {
    marginBottom: 28,
    alignItems: 'center',
  },
  hint: {
    fontFamily: 'Lato-Regular',
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
    marginBottom: 36,
  },
  logo: {
    width: 122,
    height: 128,
  },
});
