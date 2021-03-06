import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import CreatedBy from "./assets/Components/createdBy";
import Stats from "./assets/Components/stats";
import DisplayInstruction from "./assets/Components/displayInstruction";

const navItems = [
  { text: "Statistics", Link: "aaa" },
  { text: "How to care?", Link: "aaa" },
  { text: "I have corona. What do now?", Link: "aaa" },
];

export default function App() {
  const [collapseStat, setCollapseStat] = useState(false);
  const [Router, setRouter] = useState("INSTRUCTION");
  const ChangeRouter = () => {
    setRouter("HOMEPAGE");
  };
  const ToggleState = () => {
    setCollapseStat(!collapseStat);
  };
  return (
    <ScrollView style={styles.container}>
      {Router == "HOMEPAGE" ? (
        <Image style={styles.header} source={require("./assets/header.svg")} />
      ) : (
        <Text></Text>
      )}
      {Router == "HOMEPAGE" ? (
        <View style={styles.bottom}>
          <Text style={styles.h1}>Covid</Text>
          <View style={styles.navItemBox}>
            {navItems.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    item.text == "Statistics"
                      ? setCollapseStat(!collapseStat)
                      : "";
                    item.text == "How to care?" ? setRouter("INSTRUCTION") : "";
                  }}
                  key={item.text}
                  style={styles.navItem}
                >
                  <Text style={styles.navItemText}>{item.text}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ) : (
        <Text></Text>
      )}

      {collapseStat ? <Stats ToggleFun={ToggleState}></Stats> : <Text></Text>}
      {Router == "INSTRUCTION" ? (
        <DisplayInstruction ToggleFun={ChangeRouter}></DisplayInstruction>
      ) : (
        <Text></Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    overflow: "hidden",
    height: "110vh",
  },
  h1: {
    fontSize: "31px",
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
    color: "#707070",
  },
  header: {
    width: "100%",
    height: 300,
  },
  bottom: {
    marginTop: 25,
    height: "100%",
    maxHeight: 450,
    width: "100%",
    backgroundColor: "#F9F9F9",
  },
  navItemBox: { marginTop: 25 },
  navItem: {
    backgroundColor: "#FFFFFF",
    marginBottom: 30,
    width: "90vw",
    padding: 28,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
    shadowColor: "#00000080",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  navItemText: {
    fontSize: 22,
  },
});
