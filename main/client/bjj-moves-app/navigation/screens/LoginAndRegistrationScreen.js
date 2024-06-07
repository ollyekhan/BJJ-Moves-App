import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

function LoginScreen({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#e8ecf4'}}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Image source={require('../moves-photos/bjjLogo.png')} style={styles.headerImg} alt="BJJ Logo"/>
          <Text style={styles.title}>Sign in to BJJ Moves</Text>
          <Text style={styles.subtitle}>Get access to your moves, share your progress, and connect with others</Text>
        </View>

        <View style={styles.form}>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              style={styles.inputControl}
              placeholder='john.doe@example.com'
              placeholderTextColor="#6b7280"
              value={form.email}
              onChangeText={email => setForm({ ...form, email })}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.inputControl}
              placeholder='********'
              placeholderTextColor="#6b7280"
              value={form.password}
              onChangeText={password => setForm({ ...form, password })}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity 
              onPress = {() => {
                // handle onPress}
                navigation.replace('MainTabs');
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{marginTop: 'auto'}}
            onPress= {() => {
                // handle onPress
                navigation.navigate('Registration');
              }
            }>
            <Text style={styles.formFooter}>
              Don't have an account? <Text style={{textDecorationLine: 'underline'}}>Sign up!</Text>
            </Text>
          </TouchableOpacity>

        </View>


      </View>
    </View>
  );
}

function RegistrationScreen({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#e8ecf4'}}>
      <View style={styles.container}>

        <Text style={styles.titleRegister}>Create an account</Text>
        <Text style={styles.subtitleRegister}>Please enter your details</Text>

        <View style={styles.form}>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Your email</Text>
            <TextInput
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              style={styles.inputControl}
              placeholder='Enter your email'
              placeholderTextColor="#6b7280"
              value={form.email}
              onChangeText={email => setForm({ ...form, email })}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.inputControl}
              placeholder='Enter your password'
              placeholderTextColor="#6b7280"
              value={form.password}
              onChangeText={password => setForm({ ...form, password })}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Repeat password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.inputControlRegister}
              placeholder='Repeat your password'
              placeholderTextColor="#6b7280"
              value={form.repeatPassword}
              onChangeText={repeatPassword => setForm({ ...form, repeatPassword })}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity 
              onPress = {() => {
                // handle onPress}
                // Implement registration logic here
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{marginTop: 'auto'}}
            onPress= {() => {
                navigation.navigate('Login');
              }
            }>
            <Text style={styles.formFooter}>
              Already have an account? <Text style={{textDecorationLine: 'underline'}}>Login</Text>
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
}
export { LoginScreen, RegistrationScreen };

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e1e1e',
    marginBottom: 6,
    textAlign: 'center',
  },
  titleRegister: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e1e1e',
    marginBottom: 6,
    textAlign: 'center',
    marginTop: 100,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#929292',
    marginBottom: 2,
    textAlign: 'center',
  },
  subtitleRegister: {
    fontSize: 13,
    fontWeight: '500',
    color: '#929292',
    marginBottom: 2,
    textAlign: 'center',
    marginBottom: 30,
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 22,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '500',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.2,

  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    backgroundColor: '#f3f4f6',
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#222'
  },
  inputControlRegister: {
    backgroundColor: '#f3f4f6',
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#075eec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#075eec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  }
});