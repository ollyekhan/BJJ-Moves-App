import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Importing some more stuff
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import DiagramsScreen from './screens/DiagramsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';

// Screen names 
const diagramName = "Human Diagram";
const favoritesName = "Favorite Moves";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={diagramName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName === diagramName) {
                        iconName = focused ? 'accessibility' : 'accessibility-outline';
                    }
                    else if (routeName === favoritesName) {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }
                    else if (routeName === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveinactiveTintColor: 'gray',
                tabBarLabelStyle: { padding: 4, fontSize: 14, borderColor: 'white', borderWidth: 2},
                tabBarStyle: {height: 80, backgroundColor: 'black', borderColor: 'red', borderWidth: 3},
                tabBarItemStyle: {justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'green'},
            })}>
                <Tab.Screen name={diagramName} component={DiagramsScreen} options={{headerTitleAlign: 'center'}}/>
                <Tab.Screen name={favoritesName} component={FavoritesScreen} options={{headerTitleAlign: 'center'}}/>
                <Tab.Screen name={settingsName} component={SettingsScreen} options={{headerTitleAlign: 'center'}}/>

            </Tab.Navigator>
            <StatusBar style="auto" /> 
        </NavigationContainer>
        
    );
}