import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SemesterFee from '../screens/FeesScreen/SemesterFee';


const FeesTab = createMaterialTopTabNavigator();

const AttenaceNavigation = () => {
    return (
        <FeesTab.Navigator initialRouteName={'semester'}>
            <FeesTab.Screen name={'semester'} component={SemesterFee} />
            <FeesTab.Screen name={'exam'} component={SemesterFee} />
        </FeesTab.Navigator>
    )
}

export default AttenaceNavigation
