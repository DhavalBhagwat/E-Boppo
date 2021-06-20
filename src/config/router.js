import React from 'react';
import ProductCategory from "../screens/ProductCategory";
import Product from "../screens/Product";
import Cart from "../screens/Cart";
import CheckOut from "../screens/CheckOut";
import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: "Home" }}
      />
      <Stack.Screen
        name="ProductCategory"
        component={ProductCategory}
        initialParams={{ user: "me" }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        initialParams={{ user: "me" }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        initialParams={{ user: "me" }}
      />
      <Stack.Screen
        name="CheckOut"
        component={CheckOut}
        initialParams={{ user: "me" }}
      />
    </Stack.Navigator>
  );
};
