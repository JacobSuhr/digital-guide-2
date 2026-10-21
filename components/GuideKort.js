// components/GuideKort.js
// Ét kort i listen over guides. Viser titel, kategori, tid
// og et flueben hvis brugeren har gennemført guiden før (hentes fra Firebase).

import React from "react";
import { Pressable, Text } from "react-native";
import { GuideStyle } from "../styles/guideStyle";

export default function GuideKort({ guide, erGennemfoert, onPress }) {
  return (
    <Pressable style={GuideStyle.kort} onPress={onPress}>
      <Text style={GuideStyle.kortTitel}>{guide.title}</Text>
      <Text style={GuideStyle.kortUnder}>
        {guide.category} · ca. {guide.minutes} min.
      </Text>
      {erGennemfoert && <Text style={GuideStyle.gennemfoert}>✓ Du har prøvet den før</Text>}
    </Pressable>
  );
}
