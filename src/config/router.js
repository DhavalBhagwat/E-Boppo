import React from "react";
import ProductCategory from "../screens/ProductCategory";
import Product from "../screens/Product";
import Cart from "../screens/Cart";
import CheckOut from "../screens/CheckOut";
import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { checkoutOptions, homeOptions, productCategoryOptions, productOptions } from "../screens/screenOptions";

const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: true }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={homeOptions}
      />
      <Stack.Screen
        name="ProductCategory"
        component={ProductCategory}
        options={productCategoryOptions}
        initialParams={{ user: "me" }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={productOptions}
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
        options={checkoutOptions}
        initialParams={{ user: "me" }}
      />
    </Stack.Navigator>
  );
};
