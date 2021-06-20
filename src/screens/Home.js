import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { allProducts } from "./../store/data";

const Home = ({navigation, route}) => {

  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Products</Text>
      </View>
      <ScrollView>
        {allProducts.categories.map((p, index) => (
          <TouchableOpacity key={index}
            onPress={() => {
              navigation.navigate("ProductCategory", {
                category: p,
                products: p.products,
              })
            }}
            underlayColor="#fafafa"
          >
            <View>
              <Card>
                <Image
                  source={{ uri: p.feature_image }}
                  style={{ width: deviceWidth / 2.3, height: 100 }}
                />
              </Card>
              <View style={styles.catMetaView}>
                <Text style={styles.catNameText}>{p.name}</Text>
                <Text style={styles.tagLineText}>{p.tagline}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  cardContainerStyle: {
    width: 200,
  },

  cardWrapperStyle: {
    justifyContent: "center",
    alignItems: "center",
  },

  sectionHeader: {
    flexDirection: "row",
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 10,
    marginBottom: -5,
  },

  sectionHeaderText: {
    color: "#00234b",
    fontSize: 15,
    flex: 1,
    fontFamily: "Montserrat-Medium",
  },

  viewAllText: {
    color: "#2bbfed",
    fontSize: 15,
    textAlign: "right",
    fontFamily: "Montserrat-Medium",
  },

  catMetaView: {
    width: deviceWidth / 2,
    padding: 13,
  },

  catNameText: {
    fontSize: 13,
    fontWeight: "normal",
    fontFamily: "Montserrat-Regular",
  },

  subHeaderText: {
    fontSize: 11,
    fontWeight: "normal",
    fontFamily: "Montserrat-Regular",
    color: "#333",
  },

  tagLineText: {
    fontSize: 8,
    fontWeight: "normal",
    fontFamily: "Montserrat-Regular",
    color: "#2BBFED",
  },
});

export default Home;
