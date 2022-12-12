import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, AntDesign, Octicons, FontAwesome } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import CPosts from './CadastrarPost';
import Postagens from './postagens';
import Profile from './profile'

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12, color: "#fff" }}
            barStyle={{ backgroundColor: '#3b2fa3'}}
        >
            <Tab.Screen
                name="Feed"
                component={Postagens}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Octicons name="feed-discussion" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Publicar"
                component={CPosts}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <MyTabs />
        </NavigationContainer>
    );
}