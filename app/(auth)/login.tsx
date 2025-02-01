import { router } from "expo-router"
import type React from "react"
import { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native"

interface SignInForm {
  email: string
  password: string
}

export const SignInScreen: React.FC = () => {
  const [form, setForm] = useState<SignInForm>({
    email: "",
    password: "",
  })

  const handleSignIn = () => {
    // Handle sign in logic here
    console.log("Sign in with:", form)
  }

  const handlePasskeySignIn = () => {
    // Handle passkey sign in logic here
    router.push('/(tabs)')
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardView}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Sign in</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
              placeholder="example@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
              placeholder="••••••••"
              secureTextEntry
              autoComplete="password"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignIn} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePasskeySignIn} style={styles.passkeyButton}>
            <Text style={styles.passkeyText}>Sign in with passkey</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD54F",
  },
  keyboardView: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 24,
    marginBottom: -100
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 32,
    color: "#000000",
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FFD54F",
    borderRadius: 30,
    padding: 16,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "600",
  },
  passkeyButton: {
    marginTop: 24,
    alignItems: "center",
  },
  passkeyText: {
    color: "#000000",
    fontSize: 16,
  },
})

export default SignInScreen

