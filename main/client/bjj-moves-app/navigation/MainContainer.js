import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// Importing some more stuff
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import DiagramsScreen from './screens/DiagramsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import CommunityScreen from './screens/CommunityScreen';

// Screen names 
const diagramName = "Diagram";
const favoritesName = "Favorites";
const settingsName = "Settings";
const profileName = "Profile";
const communityName = "Community";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Tab.Navigator
            initialRouteName={diagramName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName === diagramName) {
                        iconName = focused ? 'body' : 'body-outline';
                    }
                    else if (routeName === favoritesName) {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }
                    else if (routeName === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    else if (routeName === profileName) {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    else if (routeName === communityName) {
                        iconName = focused ? 'people' : 'people-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {height: 70, backgroundColor: 'black', borderColor: 'red', borderWidth: 3},
                tabBarItemStyle: { borderWidth: 2, borderColor: 'green', paddingBottom: -10},
            })}>
                <Tab.Screen 
                    name={diagramName}
                    component={DiagramsScreen} 
                    options={{headerTitleAlign: 'center', tabBarLabel: ""}}
                />
                <Tab.Screen 
                    name={favoritesName}
                    component={FavoritesScreen}
                    options={{headerTitleAlign: 'center', tabBarLabel: ""}}
                />
                <Tab.Screen 
                    name={communityName} 
                    component={CommunityScreen}
                    options={{headerTitleAlign: 'center', tabBarLabel:""}} 
                />
                <Tab.Screen 
                    name={profileName}
                    component={ProfileScreen} 
                    options={{headerTitleAlign: 'center', tabBarLabel: ""}}
                />
                
                <Tab.Screen 
                    name={settingsName} 
                    component={SettingsScreen}
                    options={{headerTitleAlign: 'center', tabBarLabel:""}}
                />
                
            </Tab.Navigator>
            
        </NavigationContainer>
        
    );
}