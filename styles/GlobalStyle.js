// styles/GlobalStyle.js
// Fælles styling som alle skærme bruger (baggrund, overskrifter, brødtekst, inputfelter).
// Styling til knapper og guides ligger i hver sin fil, så filerne ikke bliver alt for lange.

import { StyleSheet } from "react-native";
import { Farver } from "./farver";

export const GlobalStyle = StyleSheet.create({
  skaerm: {
    flex: 1,
    backgroundColor: Farver.baggrund,
  },
  indhold: {
    padding: 20,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overskrift: {
    fontSize: 28,
    fontWeight: "700",
    color: Farver.moerkeblaa,
    marginBottom: 8,
  },
  broedtekst: {
    fontSize: 18,
    lineHeight: 26,
    color: Farver.graa,
    marginBottom: 24,
  },
  etiket: {
    fontSize: 18,
    fontWeight: "600",
    color: Farver.tekst,
    marginBottom: 6,
  },
  input: {
    borderWidth: 2,
    borderColor: Farver.kant,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 18,
    backgroundColor: Farver.kort,
    marginBottom: 16,
  },
  // Gul boks med tryghedsbesked og tips
  infoBoks: {
    backgroundColor: Farver.gul,
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  infoTekst: {
    fontSize: 17,
    lineHeight: 24,
    color: Farver.tekst,
  },
});
