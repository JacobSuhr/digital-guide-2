# Digital Guide

En mobilapp i React Native, der forklarer ældre brugere trin for trin, hvordan de bruger de digitale tjenester, de møder i hverdagen (MitID, Digital Post, lægen, mobilbank osv.).

Udviklet til obligatorisk opgave 1 og 2 i Innovation og ny teknologi, HA(it.), CBS.
Kodet af Jacob Manniche Suhr (individuel opgave).

**Demovideo iteration 2:** https://youtube.com/shorts/VBOAM8M91xY
Demovideo iteration 1: https://youtube.com/shorts/zOVdeivcsgA?feature=share


## Sådan kører du appen

```bash
npm install
npx expo install firebase @react-navigation/bottom-tabs @expo/vector-icons
npx expo start
```

Scan QR-koden med Expo Go.

### Firebase

Appen er sat op til mit eget Firebase-projekt (Realtime Database), så den kan køres direkte med `npx expo start`.
Første gang appen åbnes, lægges startguides automatisk op i databasen under `Guides`.

Databasen har tre "mapper":
- `Guides` – alle guides
- `Gennemfoert` – hvilke guides brugeren har lukket (giver flueben i listen)
- `Oensker` – ønsker sendt fra skærmen "Ønsk en guide"
