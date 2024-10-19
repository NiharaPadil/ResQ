import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="0_HomePage" options={{ headerShown: false }} />
        <Stack.Screen name="1_CamPermission" options={{ headerShown: false }} />
        <Stack.Screen name="2_CamView" options={{ headerShown: false }} />
        <Stack.Screen name="3_ReportForm" options={{ headerShown: false }} />
        <Stack.Screen name="4_ConfirmDisaster" options={{headerShown:false}}/>
        <Stack.Screen name="5_RequirementForm" options={{headerShown:false}}/>
        <Stack.Screen name="6_EditForm" options={{headerShown:false}}/>
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})