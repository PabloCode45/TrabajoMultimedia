// import React, {useState} from 'react';
// import {Button, Text, TextInput, View} from 'react-native';

// export default function App () {
//   const [age, setAge] = useState(1);

//   const getFullName = (firstName, secondName) => {
//     return firstName + " " + secondName;

//   }

//   function messageAge() {
//     const message = "";
//     if (age < 18) {
//       return (<Text>
//         {age} años? Qué joven eres!
//       </Text>)
//     } else if (age >= 18 && age <= 20){
//   return (
//     <Text>
//     {age} años? Qué buena edad!
//     </Text>
//     )
//   } else {
//     return (
//       <Text>
//       {age} años? Qué viejo eres!
//       </Text>
//       )
//   }

//   }

//   const name = "Pablo"
  
//   return (
//     <View>
//       {/* <Text>Hola, soy {name}.</Text>  */}

//       <Text>Hola, Mi nombre es {getFullName("Pablo", "Aguilar")}!</Text>

//       {/* <Text>Hola, me llamo...</Text> */}

//       <TextInput
//         placeholder="Escribe aquí tu edad"
//         onChangeText={age => setAge(age)} />

//       <Text>{messageAge()}</Text>

//       <Button title="Finalizar"></Button>
//       <Text>Gracias por rellenar el formulario!</Text>
//       </View>

//   );


// }

// import React, { useState } from "react";
// import { View, Switch, Image, Text } from "react-native";

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   return (
//     <View>
//       <Switch
//         trackColor={{ false: "#767577", true: "green" }}
//         thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//       {isEnabled ? <Image style={{width: 50, height: 50}} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/> : <Text>Imagen no disponible</Text> }
//     </View>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { Text, Button, View, TextInput } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function miFuncionHomeScreen({ navigation}) {


//   const [enviar, setEnviar] = useState('');

//   return(
//     <View>
//       <Text>Home Screen</Text>
//       <Button title="Go to Details" onPress={() => navigation.navigate('Details',{userName : 'Pablo', pati : enviar})}/>
//       <TextInput
//          placeholder="Escribe aquí tu edad"
//          onChangeText={enviar => setEnviar(enviar)} />
//     </View>
//   )

// }

// function miFuncionDetailsScreen({ navigation, route }) {
//   const { userName } = route.params;
//   const { pati } = route.params;
  

//   return(
//     <View>
//       <Text>Details Screen</Text>
//       <Text>Hola {userName}</Text>
//       <Text>Tu edad es {pati}</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
//     </View>
//   )

// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={miFuncionHomeScreen}  />
//         <Stack.Screen name="Details" component={miFuncionDetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>


//   )

// }

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function HomeScreen() {
//   return (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//       let iconName;
//       if (route.name === 'Feed') {
//         iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//   } else if (route.name === 'Messages') {
//   iconName = focused ? 'paw' : 'paw-outline';
//   }
  
//   return <Ionicons name={iconName} size={size} color={color} />;
//   },
//   tabBarActiveTintColor: 'tomato',
//   tabBarInactiveTintColor: 'grey',
//   })}
//   >
//   <Tab.Screen name="Feed" component={FeedScreen} />
//   <Tab.Screen name="Messages" component={MessagesScreen} />
//   </Tab.Navigator>
//   );
//  }

//  function FeedScreen() {
//   return(
//     <View>
//       <Text>Estoy en feed</Text>
//     </View>

//   );


//  }

//  function MessagesScreen() {
//   return(
//     <View>
//       <Text>Estoy en mensajes</Text>
//     </View>

//   );


//  }

//  export default function App() {

//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="home"
//           component={HomeScreen}
//           options={{headerShown : false}}
//         />
//         {/* <Stack.Screen name="Profile" component={ProfileScreen}/>
//         <Stack.Screen name="Settings" component={SettingsScreen}/> */}
//       </Stack.Navigator>
//     </NavigationContainer>


//   );

//  }

// import React, { useState } from 'react';
// import { Text, View, FlatList, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icons from 'react-native-vector-icons/Feather';
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const personas  =  [
//                 {edad: '34', nombre: 'Antonio Morlanes', sexo: 'Varón'},
//                 {edad: '29', nombre: 'Margarita Fuentes', sexo: 'Mujer'},
//                 {edad: '47', nombre: 'Manuel Machado', sexo: 'Varón'},
//                 ];


// function HomeStack() {
//   return (

//     <Stack.Navigator>
//       <Stack.Screen name="home" component={HomeScreen} 
//       options={{
//         headerTitle : 'Listado de usuarios',
//         headerTintColor : '#FFFFFF',
//         headerStyle: {
//           backgroundColor : '#FF2D00',
//         }
          
//         }}/>
//       <Stack.Screen name="info" component={InformacionScreen} options={{
//         headerTitle : 'Información',
//         headerTintColor : '#FFFFFF',
//         headerStyle: {
//           backgroundColor : '#FF2D00',
//         }
          
//         }}/>
//       <Stack.Screen name="persona" component={PersonaScreen} options={{
//         headerTitle : 'Detalles de usuario',
//         headerTintColor : '#FFFFFF',
//         headerStyle: {
//           backgroundColor : '#FF2D00',
//         }
          
//         }}/>
//     </Stack.Navigator>
//   );
//  }

//  function HomeScreen({navigation}) {
//   return(
//     <View>
//       <FlatList 
//       data={personas}
//       renderItem =  {({ item  }) => (<TouchableOpacity onPress={() => navigation.navigate('persona', {user : item})}><Text>{item.nombre}</Text></TouchableOpacity>)}>
//       </FlatList>
//     </View>

//   );


//  }

//  function PersonaScreen({route}){
//    console.log(route);
//   const nombre = route.params.user.nombre;
//   const edad = route.params.user.edad;
//   const sexo = route.params.user.sexo;

//   return(
//     <View>
//       <Text>
//         Tu nombre es {nombre}.
//       </Text>
//       <Text>
//         Tu edad es {edad}.
//       </Text>
//       <Text>
//         Tu sexo es {sexo}.
//       </Text>
//     </View>


//   );


//  }

//  function InformacionScreen() {
//   return(
//     <View>
//       <Text>Estoy en informacion</Text>
//     </View>

//   );


//  }

//  export default function App() {

//   return(
//     <NavigationContainer>
//     <Tab.Navigator
//     screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
//               if (route.name === 'Listado') {
//                 iconName = focused ? 'link' : 'link-2';
//               } else if (route.name === 'Información') {
//                 iconName = focused ? 'message-circle' : 'message-square';
//               }
              
//               return <Icons name={iconName} size={size} color={color} />;
//             },
//             tabBarActiveTintColor: 'tomato',
//             tabBarInactiveTintColor: 'grey',
//           })}>
//     <Tab.Screen name="Listado" component={HomeStack} options={{headerShown : false}}/>
//     <Tab.Screen name="Información" component={InformacionScreen} />
//     </Tab.Navigator>
//     </NavigationContainer>


//   );

//  }

import React, { useState } from 'react';
import { Text, View, FlatList, Image, Button, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Feather';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const personas = [
  { id: 1, name: 'Antonio Morlanes', age: 34, sex: 'Varón' },
  { id: 2, name: 'Margarita Fuentes', age: 29, sex: 'Mujer' },
  { id: 4, name: 'Manuel Machado', age: 51, sex: 'Varón' },  
  { id: 6, name: 'Manuela Aparicia', age: 19, sex: 'Varón' },
  { id: 7, name: 'Manuel Lara', age: 20, sex: 'Varón' },
  { id: 9, name: 'Álvaro Andrade', age: 43, sex: 'Varón' },
  { id: 10, name: 'Ángel Andrade', age: 23, sex: 'Varón' },
  { id: 11, name: 'Araceli Castillo', age: 61, sex: 'Mujer' },
  { id: 12, name: 'Sara Sacristán', age: 49, sex: 'Mujer' },
  { id: 13, name: 'Esther Arroyo', age: 18, sex: 'Mujer' },
  { id: 14, name: 'Martina Danta', age: 45, sex: 'Mujer' },
  { id: 15, name: 'Julia Praena', age: 38, sex: 'Mujer' },
  { id: 16, name: 'Pedro Flecha', age: 53, sex: 'Varón' },
  { id: 17, name: 'Miguel Berral', age: 60, sex: 'Varón' },
  { id: 18, name: 'Lorena Aparicio', age: 53, sex: 'Mujer' },
  { id: 19, name: 'David Toral', age: 61, sex: 'Varón' },
  { id: 20, name: 'Daniel Cifuentes', age: 52, sex: 'Varón' },
  { id: 5, name: 'Cai Lun', age: 81, sex: 'Varón' }, ]


function HomeStack() {
  return (
    
    <Stack.Navigator>      
      <Stack.Screen name="Listado" component={InformacionScreen} options={{
        headerTitle : 'Listado',
        headerTintColor : 'black',
        headerStyle : {
          backgroundColor : '#DB8181',
        }
          
        }}/>
      <Stack.Screen name="persona" component={PersonaScreen} options={{
        headerTitle : 'Detalles de usuario',
        headerTintColor : 'black',
        headerStyle: {
          backgroundColor : '#DB8181',
        }
          
        }}/>
    </Stack.Navigator>
  );
 }

 function HistoriaScreen() {
  return(
    <View>
      <ScrollView>
        <Text>El Nokia 3310</Text>
        <Image style={{width: 300, height: 300}} source={{uri: 'https://m.media-amazon.com/images/I/81sQxjJBn1L._AC_SX679_.jpg'}}/>
        <Text style={{marginBottom:20}}>El Nokia 3310 es un teléfono móvil o GSM de dos bandas: GSM 900/1800. Fue lanzado en el primer trimestre del año 2000, reemplazando al popular Nokia 3210 de forma satisfactoria y rentable, siendo uno de los teléfonos más populares hasta ahora, con más de 100 millones de unidades vendidas. El terminal ha sido relanzado a la venta en el 2017 en una versión moderna, con pantalla a color, sistema Nokia Series 30+, conectividad 3G, cámara fotográfica 2Mpx y Bluetooth 3.0.</Text>

        <Text>El Sony Xperia Z1</Text>
        <Image style={{width: 300, height: 300}} source={{uri: 'https://m.media-amazon.com/images/I/61N4H1Iha5L._AC_SY879_.jpg'}}/>
        <Text style={{marginBottom:20}}>El Sony Xperia Z1 es un teléfono inteligente de gama alta, de la marca Sony. El Z1, conocido bajo el proyecto "Honami", fue revelado durante la conferencia de prensa en la IFA 2013 el 4 de septiembre de 2013. Lanzado el 15 de septiembre de 2013 en China, en el Reino Unido el 20 de septiembre de 2013, y en los demás mercados llegó en octubre de 2013. El 13 de enero de 2014, tuvo una versión modificada exclusiva para T-Mobile US, que por ende solo fue liberada en los Estados Unidos..</Text>

        <Text>El Nokia 8800</Text>
        <Image style={{width: 300, height: 300}} source={{uri: 'https://m.media-amazon.com/images/I/41NV56EX26L._AC_.jpg'}}/>
        <Text style={{marginBottom:20}}>El Nokia 8800 (pronunciado ochenta y ochocientos ) es un teléfono móvil de lujo producido por Nokia , basado en el sistema operativo Nokia Serie 40 . El 8800 cuenta con una carcasa de acero inoxidable con una pantalla resistente a los arañazos y tiene un peso de 134 gramos . Según Nokia, el "sofisticado mecanismo de deslizamiento del 8800 utiliza cojinetes de bolas de primera calidad fabricados por los fabricantes de cojinetes utilizados en coches de alto rendimiento".</Text>

        <Text>La Blackberry Bold</Text>
        <Image style={{width: 300, height: 300}} source={{uri: 'https://m.media-amazon.com/images/I/51k4e8OPJ5L._AC_SY450_.jpg'}}/>
        <Text style={{marginBottom:20}}>También conocido como Touch Bold, es parte de la serie de dispositivos Blackberry Bold 9000. Se presentó en agosto de 2011. Es el primero de la línea en ofrecer una pantalla táctil. También está equipado con BlackBerry OS 7. Tiene un procesador de 1.2 GHz y 768 MiB de memoria RAM. Tiene 8 GiB de memoria interna y una ranura microSD que soporta hasta 32 GiB. El compartimiento de su batería está recubierto de fibra de carbono.</Text>
      </ScrollView>


    </View>
    

  );


 }

 function PersonaScreen({route}){
   const {edad} = route.params;   
   const [nulo, setNulo] = useState(false);

   function renderizar ({item}) {
    setNulo(false)
    if (item.age==edad || item.age>=edad) {
      return (
      <Text>
        La persona {item.name} tiene {item.age} años.
      </Text>
      ) 
    } else {
      return (null,
        setNulo(true)
        
      )

    }

   }

   function check() {

    if(nulo==true) {
      return(
        <Text>No se han encontrado resultados.</Text>
      )

    }
     
   }

  return(
    <View>
      <FlatList 
      data={personas}
      renderItem =  {renderizar}>
      </FlatList>
      <Text>{check()}</Text>
    </View>


  );


 }

 function InformacionScreen({navigation}) {
   const [age, setAge] = useState(0);
  return(
    <View style={{margin:20,alignItems:'center'}}>

    <Text>Busca aquí tus usuarios por edad



    </Text>
    <Text style={{marginTop:40}}>Edad</Text>
    <TextInput style={{borderWidth:2, marginBottom:20}} placeholder="Escribe aquí tu edad" onChangeText={age => setAge(age)} />

    <Button title="Buscar" onPress={() => navigation.navigate('persona', {edad : age})}/>

    </View>

  );


 }

 export default function App() {

  return(
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Historia') {
                iconName = focused ? 'link' : 'link-2';
              } else if (route.name === 'Listado') {
                iconName = focused ? 'message-circle' : 'message-square';
              }
              
              return <Icons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#DB8181',
            tabBarInactiveTintColor: 'grey',
          })}>
    <Tab.Screen name="Historia" component={HistoriaScreen} options={{
        headerTitle : 'Historia',
        headerTintColor : 'black',
        headerStyle : {
          backgroundColor : '#DB8181',
        }
          
        }}/>
    <Tab.Screen name="Listado" component={HomeStack} options={{headerShown : false}}/>
    </Tab.Navigator>
    </NavigationContainer>

  );

 }