// screens/HomeScreen.js
// Forsiden.
// Ændringer efter brugertesten i iteration 1:
//  - Ny gul boks med "Vi beder aldrig om dine koder", fordi testpersonerne efterlyste noget der skaber tryghed
//  - "Ring mig op" var uklar (hvem ringer?), så knappen hedder nu "Få hjælp af en frivillig"
//    og beskeden forklarer hvem der ringer

import React from "react";
import { View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStyle as GS } from "../styles/GlobalStyle";
import StorKnap from "../components/StorKnap";

export default function HomeScreen({ navigation }) {
  // knappen viser kun en besked for nu. Begge testpersoner troede de fik fat i et menneske,
// så enten skal den kobles til noget rigtigt eller fjernes
  const kontaktFrivillig = () => {
    Alert.alert(
      "Hjælp fra en frivillig",
      "En frivillig IT-hjælper ringer dig op. Hjælperen spørger aldrig efter dine koder eller dit MitID.",
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView style={GS.skaerm} edges={["left", "right"]}>
      <View style={GS.indhold}>
        <Text style={GS.overskrift}>Hvad har du brug for hjælp til?</Text>

        <Text style={GS.broedtekst}>
          Digital Guide forklarer trin for trin, hvordan du bruger de apps og hjemmesider,
          du har brug for i hverdagen.
        </Text>

        {/* Tryghedsbesked - nyt i iteration 2 */}
        <View style={GS.infoBoks}>
          <Text style={GS.infoTekst}>
            🔒 Vi beder aldrig om dine koder, dit MitID eller dine kortoplysninger.
          </Text>
        </View>

        <StorKnap titel="Se guides" onPress={() => navigation.navigate("GuideList")} />
        <StorKnap titel="Få hjælp af en frivillig" sekundaer onPress={kontaktFrivillig} />
      </View>
    </SafeAreaView>
  );
}
