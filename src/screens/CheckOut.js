import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { clearCartContent } from "../actions/CartActions";

const CheckOut = (props) => {

  let { products, total } = props;
  let [paymentLoading, setPaymentLoading] = useState(false);
  let [loading, setLoading] = useState(false);
  let [name, setName] = useState("John Doe");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");

  let placeOrder = () => {
    return null;
  };

  let validateForm = () => {
    if (address.length == 0 || phone.length == 0) {
      Alert.alert(
        null,
        "Please ensure all fields in delivery details section are filled"
      );
    } else {
      placeOrder();
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#2bbfed" />;
  }
  return (
    <ScrollView>
      {products.map((p) => (
        <View style={styles.itemContainer} key={p.id}>
          <View style={styles.nameContainer}>
            <Text style={styles.brandNameText}>{p.brand_name}</Text>
            <Text style={styles.manNameText}>{p.designer_name}</Text>
          </View>
          <View>
            <Text style={styles.priceText}>N{p.price}</Text>
          </View>
          <View>
            <Text style={styles.itemQtyText}>{p.quantity}</Text>
          </View>
          <View>
            <Text style={styles.priceText}>
              Item total: ${p.quantity * p.price}
            </Text>
          </View>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalPriceText}>
          <Text style={styles.totalText}>Total:</Text> ${total}
        </Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <View style={styles.sectionHeaderView}>
          <Text style={styles.sectionHeaderText}>Delivery details</Text>
        </View>
        <View style={styles.deliverToView}>
          <Text style={styles.deliverToText}>{`Deliver to ${name}`}</Text>
        </View>
        <View>
          <View style={styles.formField}>
            <Text style={styles.formLabelStyle}>Phone</Text>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Phone"
              value={phone}
              onChangeText={(phone) => setPhone(phone)}
            />
          </View>
        </View>
        <View style={styles.formField}>
          <Text style={styles.formLabelStyle}>Street Address</Text>
          <TextInput
            underlineColorAndroid="transparent"
            multiLine
            numberOfLines={2}
            placeholder="Address Line"
            value={address}
            onChangeText={(address) => setAddress(address)}
          />
        </View>
      </View>
      {paymentLoading ? (
        <ActivityIndicator size="large" color="#00234B" />
      ) : (
        <TouchableHighlight onPress={() => validateForm()}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Place Order</Text>
          </View>
        </TouchableHighlight>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  sectionHeaderView: {
    padding: 10,
    backgroundColor: "#f9f9f9",
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
    fontSize: 13,
    fontFamily: "Montserrat-Medium",
  },

  manNameText: {
    fontWeight: "normal",
    color: "#8492A6",
    fontSize: 9,
    fontFamily: "Montserrat-Regular",
    paddingBottom: 5,
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
    color: "#3C4858",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
  },

  priceText: {
    fontWeight: "normal",
    color: "#13CE66",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
    paddingLeft: 5,
  },

  totalContainer: {
    marginTop: -7,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "#00234B",
  },

  totalText: {
    fontWeight: "bold",
    color: "#FAFAFA",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
  },

  totalPriceText: {
    fontWeight: "bold",
    color: "#2BBFED",
    fontSize: 13,
    fontFamily: "Montserrat-Regular",
  },

  formField: {
    backgroundColor: "#FCFCFC",
    borderColor: "#F1F1F1",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 7,
    margin: 5,
  },

  formLabelStyle: {
    fontSize: 12,
    color: "#2bbfed",
    fontFamily: "Montserrat-Regular",
  },

  deliverToView: {
    padding: 3,
    backgroundColor: "#1F2D3D",
    marginBottom: 7,
  },

  deliverToText: {
    fontSize: 10,
    fontFamily: "Montserrat-Regular",
    color: "#FFF",
  },

  buttonView: {
    backgroundColor: "#2bbfed",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    color: "#fafafa",
  },

  InactivebuttonView: {
    backgroundColor: "#cccccc",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  InactivebuttonText: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    color: "#a3a3a3",
  },
});

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    total: state.products.total,
  };
};

export default connect(mapStateToProps, { clearCartContent })(CheckOut);
