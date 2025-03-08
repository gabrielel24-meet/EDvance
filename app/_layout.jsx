import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { Link } from 'expo-router'
import {Tabs, Redirect} from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import {icons} from '../Images/icon'

// const TabIcon = ({icon, color, name, focused}) => {
//   return (
//     <View>
//       <Image
//         source={icon}
//         resizeMode="contain"
//         tintColor = {color}
//         className = "w-6 h-6"
//       />s
//     </View>
//   )
// }


const _layout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name='index'
          options={{
            title: 'Home',
            headerShown: true,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name='Register'
          options={{
            title: 'Register',
            headerShown: true,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>

    </>
  )
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start', // Align items to the top
//     backgroundColor: 'ightblue'
//   },

//   Title: {
//     fontSize: 40,
//     marginTop: 20,
//   },

 
//   TextInput: {
//     height: 50,
//     width: 300,
//     marginTop: 10,
//     borderColor: 'gray',
//     borderWidth: 2,
//     borderRadius: 7,
//     paddingHorizontal: 15,
//     backgroundColor: '#f9f9f9',
//   },

//   InputMargin:{
//     marginTop: 10
//   },

//   Link:{
//     marginTop: 20,
//     borderColor: 'gray',
//     borderWidth: 2,
//     borderRadius: 7,
//     paddingHorizontal: 15,
//     backgroundColor: '#f9f9f9',
//   }
// })

export default _layout