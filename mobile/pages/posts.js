import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import CPosts from './CadastrarPost';
import Postagens from './postagens';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            barStyle={{ backgroundColor: '#3b2fa3' }}
        >
            <Tab.Screen
                name="Feed"
                component={Postagens}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="meh" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Publicar"
                component={CPosts}
                options={{
                    tabBarLabel: 'Publicar',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
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