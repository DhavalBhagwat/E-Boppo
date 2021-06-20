import ProductCategory from "../screens/ProductCategory";
import Product from "../screens/Product";
import Cart from "../screens/Cart";
import CheckOut from "../screens/CheckOut";
import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";

let screens = [
  {
    name: "Home",
    title: null,
    path: "",
    screen: Home,
  },
  {
    name: "ProductCategory",
    title: null,
    path: "",
    screen: ProductCategory,
  },
  {
    name: "Product",
    title: null,
    path: "",
    screen: Product,
  },
  {
    name: "Cart",
    title: null,
    path: "",
    screen: Cart,
  },
  {
    name: "CheckOut",
    title: null,
    path: "",
    screen: CheckOut,
  },
];

export const MainNavigation = createStackNavigator({
  screens,
  home: "Home",
});
