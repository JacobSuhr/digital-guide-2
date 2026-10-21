// components/StorKnap.js
// Genbrugelig knap. Før lå den samme Pressable-kode kopieret ind på alle skærme,
// nu bruger vi bare <StorKnap titel="..." onPress={...} />
// sekundaer = hvid knap med blå kant i stedet for blå knap.

import React from "react";
import { Pressable, Text } from "react-native";
import { KnapStyle } from "../styles/knapStyle";
// lavet som komponent efter feedback fra øvelsestimen - før var der kopieret
// den samme Pressable ind på alle skærme
export default function StorKnap({ titel, onPress, sekundaer = false }) {
  return (
    <Pressable
      style={[KnapStyle.knap, sekundaer && KnapStyle.knapSekundaer]}
      onPress={onPress}
    >
      <Text style={[KnapStyle.knapTekst, sekundaer && KnapStyle.knapTekstSekundaer]}>
        {titel}
      </Text>
    </Pressable>
  );
}
