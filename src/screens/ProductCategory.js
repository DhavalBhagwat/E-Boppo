import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from "react-native";
import { connect } from "react-redux";
import GridView from "react-native-super-grid";
import { Button } from "react-native-elements";
import { addItemToCart, increaseItemQuantity } from "../actions/CartActions";

const ProductCategory = ({route, navigation}) => {

  const { category, products } = route.params;

  let addProductToCart = (item) => {
    console.log("item", item);
    const product = Object.assign({}, item, { quantity: 1 });
    let itemQty = product.quantity;
    let productExists = false;
    let productIndex = -1;
    products.forEach((p, idx) => {
      if (product.id === p.id) {
        productExists = true;
        productIndex = idx;
      }
    });
    if (productExists) {
      if (itemQty == undefined) {
        itemQty = 1;
      } else {
        itemQty = product.quantity;
      }
      Alert.alert(
        null,
        `${product.brand_name} is already in cart! Quantity increased by 1.`
      );
      increaseItemQuantity(productIndex, product, (itemQty += 1));
    } else {
      addItemToCart(product);
      Alert.alert(null, `${product.brand_name} has been added to cart`);
    }
  };

  return (
    <View style={{ backgroundColor: "#FCFCFC", flex: 1 }}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{category.name}</Text>
      </View>

      <GridView
        itemDimension={130}
        items={products}
        spacing={50}
        renderItem={(item) => (
          <View style={styles.productView}>
            <TouchableHighlight
              onPress={() =>
                navigation.navigate("Product", { product: item })
              }
            >
              <View>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 150, height: 150 }}
                />
                <View>
                  <Text style={styles.brandNameText}>{item.brand_name}</Text>
                  <Text style={styles.manNameText}>
                    {item.manufacturer_name}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.previousPriceText}>
                      ${item.previous_price}
                    </Text>
                    <Text style={styles.priceText}>${item.price}</Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
            <View style={{ marginLeft: -15, marginTop: 10 }}>
              <Button
                title="Add to Cart"
                backgroundColor="#1F2D3D"
                small
                borderRadius={50}
                onPress={() => {
                  addProductToCart(item);
                }}
              />
            </View>
          </View>
        )}
      />
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        <View style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Cart</Text>
          <Text style={styles.footerButtonSmallText}>
            {products.length} items in your cart
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: "#FFC82C",
    padding: 10,
  },

  sectionHeaderText: {
    fontWeight: "bold",
    color: "#00234b",
    fontFamily: "Montserrat-Medium",
  },

  emphasisText: {
    fontWeight: "bold",
    color: "#00234b",
    fontFamily: "Montserrat-Medium",
  },

  guaranteeText: {
    fontWeight: "normal",
    color: "#8492A6",
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
  },

  guaranteeView: {
    backgroundColor: "#F9FAFC",
    padding: 10,
  },

  productView: {
    paddingLeft: 5,
  },

  comingSoonText: {
    color: "#13CE66",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    fontWeight: "bold",
  },

  brandNameText: {
    fontWeight: "normal",
    color: "#00234B",
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
  },

  manNameText: {
    fontWeight: "normal",
    color: "#8492A6",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
  },

  previousPriceText: {
    fontWeight: "normal",
    color: "#8492A6",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },

  priceText: {
    fontWeight: "bold",
    color: "#2BBFED",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    paddingLeft: 5,
  },

  deliveryText: {
    fontWeight: "normal",
    color: "#FF4949",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
  },

  footerButton: {
    backgroundColor: "#1F2D3D",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },

  footerButtonText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    color: "#fafafa",
  },

  footerButtonSmallText: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    color: "#fafafa",
  },
});

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    total: state.products.total,
  };
};

export default connect(mapStateToProps, {
  increaseItemQuantity,
  addItemToCart,
})(ProductCategory);
