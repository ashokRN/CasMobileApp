import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Attenace from '../screens/AttenaceScreen/Attenace';

const AttenaceTab = createMaterialTopTabNavigator();

const AttenaceNavigation = () => {
    return (
        <AttenaceTab.Navigator initialRouteName={'day'}>
            <AttenaceTab.Screen name={'day'} component={Attenace} />
            <AttenaceTab.Screen name={'month'} component={Attenace} />
            <AttenaceTab.Screen name={'semester'} component={Attenace} />
        </AttenaceTab.Navigator>
    )
}

export default AttenaceNavigation
