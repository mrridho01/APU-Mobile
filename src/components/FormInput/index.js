import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ILEyeClose, ILEyeOpen} from '../../asset';

const FormInput = ({label, password, placeholder, keyboard, marginBottom}) => {
  const [text, setText] = useState(null);
  const [secure, setSecure] = useState(true);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.wrapper(marginBottom)}>
        <View style={styles.inputWrapper}>
          <TextInput
            underlineColorAndroid="transparent"
            secureTextEntry={secure}
            placeholder={placeholder}
            placeholderTextColor={'#B2ADAD'}
            returnKeyType="done"
            value={text}
            style={styles.text}
            keyboardType={keyboard}
            onChangeText={value => setText(value)}
          />
        </View>
        {password ? (
          <TouchableWithoutFeedback onPress={() => setSecure(!secure)}>
            {secure ? <ILEyeOpen /> : <ILEyeClose />}
          </TouchableWithoutFeedback>
        ) : null}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 18,
    color: '#004871',
    marginBottom: 7,
  },
  wrapper: marginBottom => ({
    marginBottom: marginBottom,
    paddingHorizontal: 8,
    borderColor: '#248CC2',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  inputWrapper: {
    flex: 1,
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#565656',
  },
});
