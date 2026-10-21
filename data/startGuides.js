// data/startGuides.js
// Startindhold til databasen. Bruges KUN første gang appen åbnes, hvor Firebase er tom -
// derefter hentes alle guides fra Firebase (se GuideListScreen).
// De tre sidste guides er nye i iteration 2 og kommer fra det testpersonerne efterlyste.

const guideListe = [
  {
    id: 'guide1',
    title: 'Log ind med MitID',
    category: 'Offentlige tjenester',
    minutes: 3,
    intro: 'MitID bruges til at bevise, hvem du er, når du logger ind på fx borger.dk eller din bank.',
    steps: [
      'Åbn den side eller app, du vil logge ind på, og tryk på "Log ind".',
      'Vælg MitID, og skriv dit bruger-ID.',
      'Åbn MitID-appen på din telefon.',
      'Tjek at tallet i appen er det samme som på skærmen.',
      'Træk i den blå knap i MitID-appen for at godkende.',
    ],
  },
  {
    id: 'guide2',
    title: 'Læs din digitale post',
    category: 'Offentlige tjenester',
    minutes: 4,
    intro: 'Breve fra kommunen, Udbetaling Danmark og sygehuset kommer i din digitale postkasse.',
    steps: [
      'Åbn appen Digital Post, eller gå ind på borger.dk.',
      'Log ind med MitID.',
      'Tryk på "Indbakke" for at se dine breve.',
      'Tryk på et brev for at åbne det.',
      'Tryk på ikonet med printeren, hvis du vil gemme eller printe brevet.',
    ],
  },
  {
    id: 'guide3',
    title: 'Bestil tid hos lægen',
    category: 'Sundhed',
    minutes: 5,
    intro: 'De fleste læger tager imod tidsbestilling online i stedet for telefonisk.',
    steps: [
      'Åbn sundhed.dk eller din læges egen app.',
      'Log ind med MitID.',
      'Vælg "Tidsbestilling".',
      'Vælg en dag og et tidspunkt, der passer dig.',
      'Skriv kort hvad henvendelsen drejer sig om, og tryk "Bekræft".',
    ],
  },
  {
    id: 'guide4',
    title: 'Betal en regning i mobilbanken',
    category: 'Økonomi',
    minutes: 4,
    intro: 'Regninger fra din digitale post kan betales direkte i bankens app.',
    steps: [
      'Åbn din banks app og log ind.',
      'Vælg "Betal regning" eller "Ny betaling".',
      'Indtast betalingslinjen (+71 og kreditornummer) fra regningen.',
      'Tjek beløb og dato en ekstra gang.',
      'Godkend betalingen med MitID.',
    ],
  },
  {
    id: 'guide5',
    title: 'Køb billet til bussen',
    category: 'Transport',
    minutes: 3,
    intro: 'Med DOT Billetter kan du købe en billet, inden bussen kommer.',
    steps: [
      'Åbn appen DOT Billetter.',
      'Vælg hvor du står, og hvor du skal hen.',
      'Vælg antal zoner eller lad appen foreslå det.',
      'Betal med kort eller MobilePay.',
      'Vis billetten på skærmen til chaufføren.',
    ],
  },
  {
    id: 'guide6',
    title: 'Send penge med MobilePay',
    category: 'Økonomi',
    minutes: 2,
    intro: 'MobilePay bruges til at sende penge til familie, venner og små butikker.',
    steps: [
      'Åbn MobilePay.',
      'Tryk på "Send".',
      'Skriv modtagerens telefonnummer, eller vælg fra kontakter.',
      'Skriv beløbet og en kort besked.',
      'Træk i knappen for at sende, og tjek at der står "Sendt".',
    ],
  },
  {
    id: 'guide7',
    title: 'Se dine prøvesvar',
    category: 'Sundhed',
    minutes: 3,
    intro: 'Svar på blodprøver og andre prøver kan ses på sundhed.dk, ofte før lægen ringer.',
    steps: [
      'Gå ind på sundhed.dk, eller åbn appen MinSundhed.',
      'Log ind med MitID.',
      'Tryk på "Prøvesvar" (kan også hedde "Laboratoriesvar").',
      'Tryk på den dato, prøven blev taget.',
      'Er du i tvivl om hvad svaret betyder, så ring til din læge.',
    ],
  },
  {
    id: 'guide8',
    title: 'Forny en recept',
    category: 'Sundhed',
    minutes: 3,
    intro: 'Mange læger lader dig forny din faste medicin online.',
    steps: [
      'Gå ind på sundhed.dk eller din læges egen app.',
      'Log ind med MitID.',
      'Tryk på "Receptfornyelse".',
      'Sæt flueben ved den medicin, du skal have fornyet.',
      'Tryk "Send". Lægen giver besked, når recepten er klar på apoteket.',
    ],
  },
  {
    id: 'guide9',
    title: 'Betal parkering med EasyPark',
    category: 'Transport',
    minutes: 4,
    intro: 'Mange steder kan man ikke længere betale parkering i en automat, men kun med en app.',
    steps: [
      'Åbn appen EasyPark.',
      'Tjek at nummerpladen øverst er din bil.',
      'Tryk på kortet der hvor du holder, eller skriv zonenummeret fra skiltet.',
      'Drej på hjulet for at vælge hvor længe du vil holde.',
      'Tryk "Start parkering". Husk at stoppe den, når du kører.',
    ],
  },
];

// Firebase laver lister med tal-nøgler om til arrays, så vi gemmer det som et objekt
// med guidens id som nøgle, fx { guide1: {...}, guide2: {...} }
const startGuides = {};
guideListe.forEach((g) => {
  startGuides[g.id] = g;
});

export default startGuides;
