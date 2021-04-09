import React, {useContext} from 'react';
import Image from 'react-native';
import {NavigationContaine} from '@react-navigation/native';
import {createStackNavigatot} from '@react-navigation/stack';
import {createDrawerNaviagtor} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {UserContext} from '~/Context/User';
import SearchBar from '~/Components/SearchBar';
import Loading from '~/Components/Loading';

import Login from '~Screens/Login';
import PasswordReset from '~/Screens/PasswordReset';
import Signup from '~/Screens/Signup';

import MyFeed from '~/Screens/MyFeed';
import Feeds from '~/Screens/Feeds';
import FeedListOnly from '~/Screens/FeedListOnly';
import Upload from '~/Screens/Upload';
import Notification from '~/Screens/Notification';
import Profile from '~/Screens/Profile';
import CustomDrawer from '~/Screens/Drawer';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const LoginNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="PasswordReset" component={PasswordReset} />
        </Stack.Navigator>
    );
};

const MyFeedTab = () => {
    return (
        <Stak.Navigator>
            <Stack.Screen
                name="MyFeed"
                component={MyFeed}
                option={{title: 'SNS App'}}
            />
        </Stak.Navigator>
    );
};

const FeedTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Feeds"
                component={Feeds}
                option={{
                    header:() => <SearchBar />,
                }}
            />
            <Stack.Screen
                name="FeedListOnly"
                component={FeedListOnly}
                option={{
                    headerBackTitleVisible: false,
                    title: '둘러보기',
                    headerTintColor: '#292929',
                }}
            />
        </Stack.Navigator>
    );
};

const UploadTab = () => {
    return (
        <Stak.Navigator>
            <Stack.Screen
                name="Upload"
                component={Upload}
                option={{title: '사진 업로드'}}
            />
        </Stak.Navigator>
    );
};

const ProfifleTab = () => {
    return (
        <Stak.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
                option={{title: 'Profile'}}
            />
        </Stak.Navigator>
    );
};

const MainTabs = () => {
    return (
        <BottomTab.Navigator
            tabBarOptions={{showLabel: false}}>
            <BottomTab.Screen
                name="MyFeed"
                component={MyFeedTeb}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Image
                            source={
                                focused
                                    ? require('~/Assets/Images/Tabs/ic_home.png')
                                    : require('~/Assets/Images/Tabs/ic_home_outline.png')
                            }
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Feeds"
                component={FeedsTeb}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Image
                            source={
                                focused
                                    ? require('~/Assets/Images/Tabs/ic_search.png')
                                    : require('~/Assets/Images/Tabs/ic_search_outline.png')
                            }
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Upload"
                component={UploadTeb}
                options={{
                    tabBarLabel: 'Third',
                    tabBarIcon: ({color, focused}) => (
                        <Image
                            source={
                                focused
                                    ? require('~/Assets/Images/Tabs/ic_add.png')
                                    : require('~/Assets/Images/Tabs/ic_add_outline.png')
                            }
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Image
                            source={
                                focused
                                    ? require('~/Assets/Images/Tabs/ic_favorite.png')
                                    : require('~/Assets/Images/Tabs/ic_favorite_outline.png')
                            }
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileTeb}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <Image
                            source={
                                focused
                                    ? require('~/Assets/Images/Tabs/ic_profile.png')
                                    : require('~/Assets/Images/Tabs/ic_profile_outline.png')
                            }
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <Drawer.Navigator
            drawerPosition="right"
            drawerType="slide"
            drawerContent={(Props) => <CustomDrawer props={props} />}
        >
            <Drawer.Screen name="MainTabs" compnent={MainTabs} />
        </Drawer.Navigator>
    );
};

export default () => {
    const {isLoading, userInfo} = useContext<IUseContext>(UserContext);
    
    if (isLoading === false) {
        return <Loading />;
    }
    
    return (
        <NavigationContainer>
            {userInfo ? <MainNavigator /> : <LoginNavigator />}
        </NavigationContainer>
    );
};
