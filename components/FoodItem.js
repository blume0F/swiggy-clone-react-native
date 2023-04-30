import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import MenuComponent from "./MenuComponent";

const FoodItem = ({ item }) => {
  const data = [item];
  const [selected, setSelected] = useState(["Recommended"]);

  const handleItemSelected = (item) => {
    const itemSelected = selected.find((e) => e === item);
    if (itemSelected) setSelected(selected.filter((sel) => sel !== item));
    else setSelected([...selected, item]);
  };

  return (
    <View>
      {data.map((item, index) => (
        <>
          <Pressable
            onPress={() => handleItemSelected(item.name)}
            key={index}
            style={{
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.name} {(item.items.length)}
            </Text>
            <AntDesign name="down" size={24} color="black" />
          </Pressable>

          {selected.includes(item.name)
            ? item.items.map((food, index) => (
                <MenuComponent food={food} key={index} />
              ))
            : null}
        </>
      ))}
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({});
