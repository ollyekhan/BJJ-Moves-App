import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

function LoginAndRegistrationScreen({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
      }}>
      {isLogin ? (
        <>
          <Text>This is the login screen</Text>
          <Button title="Go to Registration" onPress={() => setIsLogin(false)} />
        </>
      ) : (
        <>
          <Text>This is the registration screen</Text>
          <Button title="Go to Login" onPress={() => setIsLogin(true)} />
        </>
      )}
      <Button title="Continue" onPress={() => navigation.replace('MainTabs')} />
    </View>
  );
}

export default LoginAndRegistrationScreen;