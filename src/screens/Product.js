import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import { addItemToCart, increaseItemQuantity } from "../actions/CartActions";

const Product = ({ route }) => {
  const { product, products } = route.params;

  let addProductToCart = (item) => {
    console.log("item", item);
    const prod = Object.assign({}, item, { quantity: 1 });
    let itemQty = prod.quantity;
    let productExists = false;
    let productIndex = -1;
    products.forEach((p, idx) => {
      if (prod.id === p.id) {
        productExists = true;
        productIndex = idx;
      }
    });
    if (productExists) {
      if (itemQty == undefined) {
        itemQty = 1;
      } else {
        itemQty = prod.quantity;
      }
      Alert.alert(
        null,
        `${prod.brand_name} is already in cart! Quantity increased by 1.`
      );
      increaseItemQuantity(productIndex, prod, (itemQty += 1));
    } else {
      addItemToCart(prod);
      Alert.alert(null, `${prod.brand_name} has been added to cart`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={{ width: Dimensions.get("window").width, height: 200 }}
      />
      <View style={styles.productView}>
        <Text style={styles.titleText}>{product.brand_name}</Text>
      </View>

      <Text style={styles.designerNameText}>{product.designer_name}</Text>

      <View style={styles.sectionHeaderView}>
        <Text style={styles.sectionHeaderText}>Description</Text>
      </View>
      <View>
        {product.description.map((c, index) => (
          <Text style={styles.sectionBodyText} key={index}>
            {index + 1 + " - " + c}
          </Text>
        ))}
      </View>

      <View style={styles.sectionHeaderView}>
        <Text style={styles.sectionHeaderText}>Instructions</Text>
      </View>
      <View>
        {product.instructions.map((ins, index) => (
          <Text style={styles.sectionBodyText} key={index}>
            {index + 1 + " - " + ins}
          </Text>
        ))}
      </View>

      <View style={{ padding: 15 }} />

      <Button
        title="Add to Cart"
        backgroundColor="#1F2D3D"
        large
        borderRadius={50}
        onPress={() => addProductToCart(product)}
      />

      <View style={{ padding: 15 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },

  productView: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 5,
  },

  titleText: {
    color: "#00234b",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
  },

  designerNameText: {
    color: "#C0CCDA",
    fontSize: 13,
    textAlign: "center",
    fontFamily: "Montserrat-Regular",
    paddingBottom: 20,
  },

  sectionHeaderView: {
    padding: 10,
    backgroundColor: "#f4f4f4",
  },
  sectionHeaderText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#a3a3a3",
    fontFamily: "Montserrat-Medium",
  },
  sectionBodyText: {
    color: "#00234b",
    padding: 10,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
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
})(Product);
