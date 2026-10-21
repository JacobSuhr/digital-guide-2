// styles/knapStyle.js
// Styling til de store knapper (bruges af komponenten StorKnap).
// Knapperne er mindst 60 px høje, så de er nemme at ramme.

import { StyleSheet } from "react-native";
import { Farver } from "./farver";

export const KnapStyle = StyleSheet.create({
  knap: {
    backgroundColor: Farver.moerkeblaa,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 14,
    minHeight: 60,
    justifyContent: "center",
  },
  knapSekundaer: {
    backgroundColor: Farver.kort,
    borderWidth: 2,
    borderColor: Farver.moerkeblaa,
  },
  knapTekst: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  knapTekstSekundaer: {
    color: Farver.moerkeblaa,
  },
});
