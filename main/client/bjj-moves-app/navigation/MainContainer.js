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

// Description Screens
import { RearNakedChokeDescription, TriangleChokeDescription, GuillotineChokeDescription } from './anatomy-descriptions/NeckMoveDescriptions';
import { FulcrumCrankDescription, SmotherChokeDescription } from './anatomy-descriptions/HeadMoveDescriptions';
import { AmericanaDescription, KimuraDescription, ArmBarDescription } from './anatomy-descriptions/ArmMoveDescriptions';
import { StraightAnkleDescription, ToeHoldDescription, HeelHookDescription } from './anatomy-descriptions/LegMoveDescriptions';

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
            <Stack.Screen name="RearNakedChokeDescription" component={RearNakedChokeDescription} options={{title: 'Rear Naked'}}/>
            <Stack.Screen name="TriangleChokeDescription" component={TriangleChokeDescription} options={{title: 'Triangle'}}/>
            <Stack.Screen name="GuillotineChokeDescription" component={GuillotineChokeDescription} options={{title: 'Guillotine'}}/>
            <Stack.Screen name="FulcrumCrankDescription" component={FulcrumCrankDescription} options={{title: 'Fulcrum Crank'}}/>
            <Stack.Screen name="SmotherChokeDescription" component={SmotherChokeDescription} options={{title: 'Smother'}}/>
            <Stack.Screen name="AmericanaDescription" component={AmericanaDescription} options={{title: 'Americana'}}/>
            <Stack.Screen name="KimuraDescription" component={KimuraDescription} options={{title: 'Kimura'}}/>
            <Stack.Screen name="ArmBarDescription" component={ArmBarDescription} options={{title: 'Arm Bar'}}/>
            <Stack.Screen name="StraightAnkleDescription" component={StraightAnkleDescription} options={{title: 'Straight Ankle Lock'}}/>
            <Stack.Screen name="ToeHoldDescription" component={ToeHoldDescription} options={{title: 'Toe Hold'}}/>
            <Stack.Screen name="HeelHookDescription" component={HeelHookDescription} options={{title: 'Heel Hook'}}/>
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