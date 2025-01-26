import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import Notes from "./components/Notes/NotesScreen";
import AddNote from "./components/Notes/AddNote";
import ViewNote from "./components/Notes/ViewNote";
import CameraFunction from './components/Camera/CameraFunction';
import VideoScreen from './components/Camera/Video';

function HomeScreen({ navigation }) {  
  return (
   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     <TouchableOpacity
       style={{
         width: "80%",
         padding: 5,
         borderColor: "red",
         borderWidth: 1,
         borderRadius: 15,
         marginVertical: 10
       }}
     >
       <Text
         style={{ textAlign: "center", color: "red" }}
         onPress={() =>
           navigation.navigate("NotesScreen")
         }
       >
         Notes
       </Text>
     </TouchableOpacity>
     <TouchableOpacity
       style={{
         width: "80%",
         padding: 5,
         borderColor: "red",
         borderWidth: 1,
         borderRadius: 15,
         marginVertical: 10
       }}
     >
       <Text
         style={{ textAlign: "center", color: "red" }}
         onPress={() =>
           navigation.navigate("Camera")
         }
       >
         Camera
       </Text>
     </TouchableOpacity>
     <TouchableOpacity
       style={{
         width: "80%",
         padding: 5,
         borderColor: "red",
         borderWidth: 1,
         borderRadius: 15,
         marginVertical: 10
       }}
     >
       <Text
         style={{ textAlign: "center", color: "red" }}
         onPress={() =>
           navigation.navigate("Video")
         }
       >
         Video
       </Text>
     </TouchableOpacity>
   </View>
 );
}

const Stack = createNativeStackNavigator();

function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="NotesScreen" component={Notes} />
       <Stack.Screen name="AddNote" component={AddNote}/>
       <Stack.Screen name="ViewNote" component={ViewNote}/>
       <Stack.Screen name="Camera" component={CameraFunction}/>
       <Stack.Screen name="Video" component={VideoScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
 );
}

export default App;



