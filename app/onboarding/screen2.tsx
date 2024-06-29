import React from 'react';
import {View,Text,Button,StyleSheet,Image,Pressable} from 'react-native'
import { useRouter } from 'expo-router';
import DotIndicator from '@/components/dotindicator';

import logo from '../../assets/images/image20.png';

const SplashScreen2=()=>{
  const router=useRouter();

  const handleSkip = () => {
    router.replace('/onboarding/screen2'); 
  };

  return (
    <View style={styles.container}>
       <Pressable onPress={handleSkip} style={styles.skipButton}>
        <Text style={styles.btext} >Skip</Text>
      </Pressable>
      <Image source={logo} style={styles.Image} ></Image>
      <Text style={styles.title}>Stay Informed and Prepared</Text>
      <Text style={styles.text}>Receive real-time alerts and updates during disasters. Connect with local resources and volunteers. Together, we can ensure safety and resilience.</Text>
      <DotIndicator currentIndex={1} />
      <Pressable onPress={() => router.push('../auth/UserLogin')} style={styles.button}>
        <Text style={{ color: 'white' ,fontSize:17,}}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    marginLeft: 15,
    marginRight: 15,
  },
  Image: {
    width: 400,
    height: 350,
    marginBottom: 40,
  },
  btext:{
    color: '#A53821',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipButton: {
    position: 'absolute',
    top: 70, 
    right: 20, 
    padding: 10,
  },
    button: {
      width: 80,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5,
      backgroundColor: '#A53821',
      position: 'absolute',
      bottom: 50, 
  }
});

export default SplashScreen2;