import React from "react";
import ProductCategory from "../screens/ProductCategory";
import Product from "../screens/Product";
import Cart from "../screens/Cart";
import CheckOut from "../screens/CheckOut";
import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableHighlight, View } from 'react-native';
import CartBadge from './../components/CartBadge';

export const homeOptions = ({ navigation }) => {
  return {
    headerTitle: "Shopping Cart",
    headerStyle: {
      backgroundColor: "#1F2D3D",
      elevation: 0,
    },
    headerTitleStyle: {
      color: "#fafafa",
      fontSize: 16,
      fontFamily: "Montserrat-Medium",
    },
    headerRight: () => (
      <TouchableHighlight
        onPress={() => navigation.navigate("Cart")}
        style={{ paddingRight: 7 }}
      >
        <CartBadge />
      </TouchableHighlight>
    ),
  };
};

export const productCategoryOptions = ({ navigation }) => {
  return {
    headerTitle: "Categories",
    headerStyle: {
      backgroundColor: "#f6f6f6",
    },
    headerTitleStyle: {
      color: "#00234b",
      fontSize: 16,
      fontFamily: "Montserrat-Medium",
    },
    headerRight: () => (
      <View style={{ flexDirection: "row", paddingRight: 15 }}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Cart")}
          style={{ paddingRight: 7 }}
        >
          <CartBadge />
        </TouchableHighlight>
      </View>
    ),
  };
};

export const productOptions = ({ navigation, route }) => {
  const params = route.params || {};
  return {
    headerTitle: params.product.brand_name,
    headerStyle: {
      backgroundColor: "#f6f6f6",
    },
    headerTitleStyle: {
      color: "#00234b",
      fontSize: 16,
      fontFamily: "Montserrat-Medium",
    },
    headerRight: () => (
      <View style={{ flexDirection: "row", paddingRight: 15 }}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Cart", { clearCart: false })}
          style={{ paddingRight: 7 }}
        >
          <CartBadge />
        </TouchableHighlight>
      </View>
    ),
  };
};

export const checkoutOptions = ({ navigation }) => {
  return {
    headerTitle: "Check Out",
    headerStyle: {
      backgroundColor: "#F6F6F6",
      elevation: 0,
    },
    headerTitleStyle: {
      color: "#00234B",
      fontSize: 16,
      fontFamily: "Montserrat-Medium",
    },
  };
};