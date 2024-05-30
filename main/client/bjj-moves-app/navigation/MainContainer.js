import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// Importing some more stuff
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import DiagramsScreen from './screens/DiagramsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import CommunityScreen from './screens/CommunityScreen';

// Anatomy List Screens
import HeadMoveList from './anatomy-based-screens/HeadMoveList';
import NeckMoveList from './anatomy-based-screens/NeckMoveList';
import ArmsMoveList from './anatomy-based-screens/ArmsMoveList';
import LegsMoveList from './anatomy-based-screens/LegsMoveList';

// Screen names 
const diagramName = "Diagram";
const favoritesName = "Favorites";
const settingsName = "Settings";
const profileName = "Profile";
const communityName = "Community";

// Anatomy List Screen names
const headMoveListName = "Head Move List";
const neckMoveListName = "Neck Move List";
const armsMoveListName = "Arms Move List";
const legsMoveListName = "Legs Move List";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
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
                tabBarItemStyle: { borderWidth: 2, borderColor: 'green'},
            })}>
                <Tab.Screen 
                    name={diagramName}
                    component={StackNavigator} 
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
    )
}

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={diagramName} component={DiagramsScreen} options={{ headerShown: false }}/>
            <Stack.Screen name={headMoveListName} component={HeadMoveList} />
            <Stack.Screen name={neckMoveListName} component={NeckMoveList} />
            <Stack.Screen name={armsMoveListName} component={ArmsMoveList} />
            <Stack.Screen name={legsMoveListName} component={LegsMoveList} />
        </Stack.Navigator>
    );
}

function MainContainer() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <TabNavigator/>
        </NavigationContainer>
    );
}

export default MainContainer;