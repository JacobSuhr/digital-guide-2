// screens/GuideListScreen.js
// Listen over guides.
// Nyt i iteration 2:
//  - Guides hentes fra Firebase Realtime Database i stedet for en fil i koden
//  - Knappen "Vis kun de hurtige" er fjernet (den forvirrede testpersonerne)
//    og erstattet af et søgefelt
//  - Guides man har prøvet før får et flueben (gemt i Firebase)

import React, { useEffect, useState } from "react";
import { Text, TextInput, FlatList, ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ref, onValue, set } from "firebase/database";
import { rtdb } from "../database/firebase";
import startGuides from "../data/startGuides";
import { GlobalStyle as GS } from "../styles/GlobalStyle";
import { GuideStyle } from "../styles/guideStyle";
import GuideKort from "../components/GuideKort";

export default function GuideListScreen({ navigation }) {
  const [guides, setGuides] = useState(null); // null = vi venter stadig på data
  const [gennemfoerte, setGennemfoerte] = useState({});
  const [soegning, setSoegning] = useState("");

  // Lyt på "Guides" i databasen. onValue kører igen hver gang data ændres.
  useEffect(() => {
    const guidesRef = ref(rtdb, "Guides");
    const unsubscribe = onValue(guidesRef, (snap) => {
      const data = snap.val();
      if (!data) {
        // Første gang appen køres er databasen tom.
        // Så lægger vi startguides op, og så kører onValue igen af sig selv.
        // det her tog mig lidt tid at forstå: set() trigger onValue igen,
// så vi behøver ikke selv kalde setGuides her
        set(guidesRef, startGuides);
        return;
      }
      setGuides(Object.values(data));
    });
    // uden den her bliver lytteren ved med at køre, selvom man har forladt skærmen
    return unsubscribe; // fjern lytteren når skærmen lukkes
  }, []);

  // Hent hvilke guides brugeren har gennemført
  useEffect(() => {
    const unsubscribe = onValue(ref(rtdb, "Gennemfoert"), (snap) => {
      setGennemfoerte(snap.val() || {});
    });
    return unsubscribe;
  }, []);

  if (guides === null) {
    return (
      <SafeAreaView style={GS.skaerm}>
        <View style={GS.center}>
          <ActivityIndicator size="large" />
          <Text style={GS.broedtekst}>Henter guides...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Søgning: vi tjekker både titel og kategori, og ignorerer store/små bogstaver
  // toLowerCase så "mitid" også finder "MitID" ældre skriver ikke nødvendigvis med stort
  const tekst = soegning.trim().toLowerCase();
  const synligeGuides = guides.filter(
    (g) =>
      g.title.toLowerCase().includes(tekst) ||
      g.category.toLowerCase().includes(tekst)
  );

  return (
    <SafeAreaView style={GS.skaerm} edges={["left", "right"]}>
      <View style={[GS.indhold, { flex: 1 }]}>
        <TextInput
          style={GS.input}
          placeholder="Søg, fx MitID eller læge"
          value={soegning}
          onChangeText={setSoegning}
        />

        <Text style={GuideStyle.antalTekst}>
          {synligeGuides.length === 0
            ? "Ingen guides passer. Prøv et andet ord, eller ønsk en guide i fanen nederst."
            : `Viser ${synligeGuides.length} guides`}
        </Text>

        <FlatList
          data={synligeGuides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GuideKort
              guide={item}
              erGennemfoert={!!gennemfoerte[item.id]}
              onPress={() => navigation.navigate("GuideDetail", { guide: item })}
            />
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      </View>
    </SafeAreaView>
  );
}
