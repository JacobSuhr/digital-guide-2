// styles/guideStyle.js
// Styling til listen over guides og til selve guiden (trinene).

import { StyleSheet } from "react-native";
import { Farver } from "./farver";

export const GuideStyle = StyleSheet.create({
  // ---------- Kort i listen ----------
  kort: {
    backgroundColor: Farver.kort,
    borderWidth: 1,
    borderColor: Farver.kant,
    borderRadius: 10,
    padding: 18,
    marginBottom: 12,
  },
  kortTitel: {
    fontSize: 20,
    fontWeight: "600",
    color: Farver.moerkeblaa,
    marginBottom: 4,
  },
  kortUnder: {
    fontSize: 17, // var 16 og lysegrå før
    color: Farver.graa,
  },
  gennemfoert: {
    fontSize: 17,
    fontWeight: "600",
    color: Farver.groen,
    marginTop: 6,
  },
  antalTekst: {
    fontSize: 16,
    color: Farver.graa,
    marginBottom: 12,
  },

  // ---------- Trin i en guide ----------
  trinRaekke: {
    flexDirection: "row",
    marginBottom: 18,
  },
  trinNummer: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Farver.moerkeblaa,
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 38,
    marginRight: 14,
  },
  trinTekst: {
    flex: 1,
    fontSize: 19,
    lineHeight: 27,
    color: Farver.tekst,
  },
});
