import * as React from 'react';

// Importing some more stuff
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import DiagramsScreen from './screens/DiagramsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';

// Screen names 
const diagramName = "Diagrams";
const favoritesName = "Favorites";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={diagramName} component={DiagramsScreen} />
                <Tab.Screen name={favoritesName} component={FavoritesScreen} />
                <Tab.Screen name={settingsName} component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}