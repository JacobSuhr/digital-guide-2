// screens/GuideDetailScreen.js
// Den enkelte guide trin for trin.
// Ændringer i iteration 2:
//  - Tip-boks øverst om at skifte app. Det største problem i første test var,
//    at brugeren skal skifte mellem guiden og fx MitID-appen og er bange for at "miste" guiden.
//  - "Jeg er færdig" hed noget uklart, nu hedder knappen "Luk guide"
//  - Når guiden lukkes, gemmes det i Firebase, så listen kan vise et flueben

import React from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ref, set } from "firebase/database";
import { rtdb } from "../database/firebase";
import { GlobalStyle as GS } from "../styles/GlobalStyle";
import { GuideStyle } from "../styles/guideStyle";
import StorKnap from "../components/StorKnap";

export default function GuideDetailScreen({ route, navigation }) {
  // guiden sendes med fra listen
  const { guide } = route.params;

  const lukGuide = async () => {
    try {
   
      // gemmes bare som true vi behøver ikke vide hvornår, kun AT den er lavet
// OBS: gemmes ikke per bruger, så alle der bruger appen ser de samme flueben (ok til prototypen)
      await set(ref(rtdb, `Gennemfoert/${guide.id}`), true);
      navigation.navigate("GuideList");
    } catch (e) {
      Alert.alert("Noget gik galt", e?.message || "Prøv igen.");
    }
  };

  return (
    <SafeAreaView style={GS.skaerm} edges={["left", "right"]}>
      <ScrollView contentContainerStyle={GS.indhold}>
        <Text style={GS.overskrift}>{guide.title}</Text>
        <Text style={GS.broedtekst}>{guide.intro}</Text>
        {/* testen viste at det ikke var nok - se rapporten. Næste gang skal det løses på en anden måde */}
        <View style={GS.infoBoks}>
          <Text style={GS.infoTekst}>
            💡 Når du skifter til en anden app, er guiden her stadig. Du kommer tilbage ved at
            åbne Digital Guide igen, og så står du det samme sted.
          </Text>
        </View>

        {/* Trinnene laves med map() ligesom før */}
        {guide.steps.map((trin, index) => (
          <View key={index} style={GuideStyle.trinRaekke}>
            <Text style={GuideStyle.trinNummer}>{index + 1}</Text>
            <Text style={GuideStyle.trinTekst}>{trin}</Text>
          </View>
        ))}

        <StorKnap titel="Luk guide" onPress={lukGuide} />
        <StorKnap titel="Tilbage til forsiden" sekundaer onPress={() => navigation.navigate("Home")} />
      </ScrollView>
    </SafeAreaView>
  );
}
