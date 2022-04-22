import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const InputField = ({placeholder, value, onChangeText, secureTextEntry ,isEditable}) => {
    return <TextInput 
                style={styles.inputStyle} 
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={secureTextEntry}                 
                placeholder= {placeholder}
                value={value}
                onChangeText={onChangeText}
                editable={isEditable}
            />

}

    const styles = StyleSheet.create({
        inputStyle: {
          borderColor: "black",
          borderWidth: 1,
          fontSize: 18,
          height: 40,
          margin:5,
          paddingLeft:5
        } 
      });

export default InputField 