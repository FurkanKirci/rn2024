import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Aora!</Text>
      <StatusBar style='auto'></StatusBar>
      <Link href="/profile" style={{color:"blue"}}>Profile Page</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})