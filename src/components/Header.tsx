import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../styles/colors";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import usrImg from "../assets/56571038.jpg";
import fonts from "../styles/fonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header: React.FC = () => {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");

      setUserName(user || "");
    }

    loadStorageUserName();
  }, [userName]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Image source={usrImg} style={styles.image} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
});
