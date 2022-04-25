import React, { useState } from 'react';
import { View, Switch, StyleSheet ,Text } from 'react-native';

const ToggleButton = ({label}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text> {label}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#841584' }}
        thumbColor={isEnabled ? '#841584' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : "row",
    alignItems: 'center',
    justifyContent: 'center',
    margin : 2 
  },
});

export default ToggleButton;
