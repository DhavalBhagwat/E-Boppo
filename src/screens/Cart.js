import React, { Component, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  ScrollView,
  Alert,
} from "react-native";
import { connect, useStore } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../actions/CartActions";

const EmptyCart = () => (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    }}
  >
    <View style={{ flexDirection: "column" }}>
      <View>
        <Icon size={150} color="#1F2D3D" name="shopping-cart" />
      </View>
      <View style={{ padding: 10 }}>
        <Text style={styles.checkoutButtonSmallText}>Your cart is empty</Text>
      </View>
    </View>
  </View>
);

const Cart = (props) => {

  let { products, total } = props;
  let [loading, setLoading] = useState(false);

  let confirmDelete = (index, item) => {
    return Alert.alert(
      "Confirm",
      `Are you sure you want to remove ${item.brand_name} from the cart?`,
      [
        { text: "No" },
        {
          text: "Yes",
          onPress: () => removeItemFromCart(index, item),
        },
      ]
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#2bbfed" />;
  }
  if (products.length > 0) {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.checkOutContainer}>
          <View>
            <Text style={styles.checkoutButtonSmallText}>
              Cart Total:{" "}
              <Text style={styles.totalText}>${total}</Text>
            </Text>
          </View>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("CheckOut");
            }}
          >
            <View style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>CheckOut</Text>
            </View>
          </TouchableHighlight>
        </View>
        <ScrollView>
          <FlatList
            data={products}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => (
              <View style={styles.itemContainer}>
                <View style={{ flexDirection: "row" }}>
                  <View>
                    <Image
                      source={{ uri: item.image }}
                      style={{ width: 60, height: 60 }}
                    />
                  </View>
                  <View style={styles.nameContainer}>
                    <Text style={styles.brandNameText}>{item.brand_name}</Text>
                    <Text style={styles.designerNameText}>
                      {item.designer_name}
                    </Text>
                    <Text style={styles.priceText}>${item.price}</Text>
                  </View>
                </View>
                <View style={styles.actionButtonsContainer}>
                  <View style={styles.actionButtons}>
                    <TouchableHighlight
                      style={styles.actionButtonItem}
                      onPress={() =>
                        increaseItemQuantity(
                          index,
                          item,
                          (quantity = item.quantity + 1)
                        )
                      }
                    >
                      <Icon name="plus" color="#2bbfed" size={18} />
                    </TouchableHighlight>
                    <View style={styles.qtyView}>
                      <Text style={styles.itemQtyText}>{item.quantity}</Text>
                    </View>
                    {item.quantity > 1 ? (
                      <TouchableHighlight
                        style={styles.actionButtonItem}
                        onPress={() => {
                          decreaseItemQuantity(
                            index,
                            item,
                            (quantity = item.quantity - 1)
                          );
                        }}
                      >
                        <Icon name="minus" color="#FF4949" size={18} />
                      </TouchableHighlight>
                    ) : null}
                    <TouchableHighlight
                      style={styles.actionButtonItem}
                      onPress={() => confirmDelete(index, item)}
                    >
                      <Icon name="trash" color="#FF4949" size={20} />
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
  return <EmptyCart />;
};

const styles = StyleSheet.create({
  checkOutContainer: {
    padding: 10,
    backgroundColor: "#FFF",
    borderBottomColor: "#E0E6ED",
    borderBottomWidth: 1,
    marginBottom: 7,
  },

  itemContainer: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#FFF",
    marginBottom: 7,
    justifyContent: "space-between",
  },

  nameContainer: {
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },

  brandNameText: {
    fontWeight: "normal",
    color: "#00234B",
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
  },

  designerNameText: {
    fontWeight: "normal",
    color: "#8492A6",
    fontSize: 11,
    fontFamily: "Montserrat-Regular",
    paddingBottom: 5,
  },

  actionButtonsContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },

  actionButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },

  actionButtonItem: {
    margin: 10,
  },

  qtyView: {
    backgroundColor: "#3C4858",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderColor: "#3C4858",
    borderWidth: 1,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginRight: 12,
    marginLeft: 12,
  },

  itemQtyText: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
  },

  priceText: {
    fontWeight: "normal",
    color: "#13CE66",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    paddingLeft: 5,
  },

  checkoutButtonText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    color: "#FAFAFA",
  },

  checkoutButtonSmallText: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    color: "#00234B",
  },

  checkoutButton: {
    backgroundColor: "#1F2D3D",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
  },

  totalText: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    color: "#FF4949",
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
  decreaseItemQuantity,
  removeItemFromCart,
})(Cart);
