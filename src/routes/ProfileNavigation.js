import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Profile from '../screens/ProfileScreen/Profile';
import UpdateProfile from '../screens/ProfileScreen/UpdataProfile';


const ProfileStack = createStackNavigator();

const ProfileNavigation = () => {
    return (
        <ProfileStack.Navigator initialRouteName="profileScreen">
            <ProfileStack.Screen name="profileScreen" component={Profile} />
            <ProfileStack.Screen name="editProfileScreen" component={UpdateProfile} />
        </ProfileStack.Navigator>
    )
}

export default ProfileNavigation
