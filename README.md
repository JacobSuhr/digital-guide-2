# Digital Guide

En mobilapp i React Native, der forklarer ældre brugere trin for trin, hvordan de bruger de digitale tjenester, de møder i hverdagen (MitID, Digital Post, lægen, mobilbank osv.).

Udviklet til obligatorisk opgave 1 og 2 i Innovation og ny teknologi, HA(it.), CBS.
Kodet af Jacob Manniche Suhr (individuel opgave).

**Demovideo iteration 2:** [INDSÆT LINK]
Demovideo iteration 1: https://youtube.com/shorts/zOVdeivcsgA?feature=share

## Hvad er nyt i iteration 2

Efter feedback fra øvelsestimen (30. sept.):
- Data gemmes og hentes nu i **Firebase Realtime Database** (guides, gennemførte guides og ønsker til nye guides)
- Der er lavet **komponenter** (`components/StorKnap.js` og `components/GuideKort.js`)
- **Stylingen er delt op** i flere filer i mappen `styles/` (farver, fælles, knapper, guides)

Efter brugertesten i iteration 1:
- Ny skærm: **Ønsk en guide** (ny fane i bunden)
- **Søgefelt** i stedet for knappen "Vis kun de hurtige"
- Tryghedsbesked på forsiden og tip om at skifte app i guiderne
- Knapperne "Ring mig op" og "Jeg er færdig" er omdøbt
- Mørkere grå tekst, så underteksterne er nemmere at læse
- Tre nye guides: prøvesvar, receptfornyelse og EasyPark

## Struktur

```
App.js                  tab-navigation + stack-navigation
database/firebase.js    Firebase opsætning
data/startGuides.js     startindhold, bruges kun første gang når databasen er tom
screens/                HomeScreen, GuideListScreen, GuideDetailScreen, OenskGuideScreen (ny)
components/             StorKnap, GuideKort
styles/                 farver, GlobalStyle, knapStyle, guideStyle
```

## Sådan kører du appen

```bash
npm install
npx expo install firebase @react-navigation/bottom-tabs @expo/vector-icons
npx expo start
```

Scan QR-koden med Expo Go.

### Firebase

Appen kræver et Firebase-projekt med en Realtime Database (Belgium, test mode).
Indsæt din egen `firebaseConfig` og database-URL i `database/firebase.js`.
Første gang appen åbnes, lægges startguides automatisk op i databasen under `Guides`.

Databasen har tre "mapper":
- `Guides` – alle guides
- `Gennemfoert` – hvilke guides brugeren har lukket (giver flueben i listen)
- `Oensker` – ønsker sendt fra skærmen "Ønsk en guide"
