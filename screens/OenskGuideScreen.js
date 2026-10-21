// screens/OenskGuideScreen.js
// NY SKÆRM i iteration 2: "Ønsk en guide"
// Begge testpersoner nævnte opgaver der manglede (fx prøvesvar, parkering, regninger).
// I stedet for at vi gætter på hvad der skal laves guides til, kan brugeren selv skrive det ind.
// Ønsket gemmes i Firebase med push(), ligesom "Tilføj bil" i øvelse 05.

import React, { useState } from "react";
import { Text, TextInput, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ref, push } from "firebase/database";
import { rtdb } from "../database/firebase";
import { GlobalStyle as GS } from "../styles/GlobalStyle";
import StorKnap from "../components/StorKnap";

export default function OenskGuideScreen() {
  const [oenske, setOenske] = useState("");
  // TODO: Kasper (kommunen) sagde at appen skal være helt anonym pga. GDPR
// så navnefeltet skal nok fjernes i næste version
  const [navn, setNavn] = useState("");

  const sendOenske = async () => {
    // simpel validering - feltet må ikke være tomt
    if (!oenske.trim()) {
      Alert.alert("Du mangler at skrive, hvad du vil have hjælp til.");
      return;
    }

    try {
      await push(ref(rtdb, "Oensker"), {
        oenske: oenske.trim(),
        navn: navn.trim() || "Ikke oplyst",
        dato: new Date().toISOString(),
      });
      Alert.alert("Tak!", "Dit ønske er sendt. Vi laver nye guides ud fra det, folk skriver.");
      setOenske("");
      setNavn("");
    } catch (e) {
      Alert.alert("Noget gik galt", e?.message || "Prøv igen.");
    }
  };

  return (
    <SafeAreaView style={GS.skaerm} edges={["left", "right"]}>
      <ScrollView contentContainerStyle={GS.indhold}>
        <Text style={GS.overskrift}>Mangler du en guide?</Text>
        <Text style={GS.broedtekst}>
          Skriv hvad du gerne vil have hjælp til, så laver vi en guide til det.
        </Text>

        <Text style={GS.etiket}>Hvad vil du have hjælp til?</Text>
        <TextInput
          style={[GS.input, { minHeight: 100, textAlignVertical: "top" }]}
          placeholder="Fx at se mine prøvesvar"
          value={oenske}
          onChangeText={setOenske}
          multiline
        />

        <Text style={GS.etiket}>Dit fornavn (behøver du ikke)</Text>
        <TextInput
          style={GS.input}
          placeholder="Fornavn"
          value={navn}
          onChangeText={setNavn}
        />

        <StorKnap titel="Send ønske" onPress={sendOenske} />
      </ScrollView>
    </SafeAreaView>
  );
}
