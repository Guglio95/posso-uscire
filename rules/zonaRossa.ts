import {
  ABRUZZO,
  BASILICATA,
  CALABRIA,
  CAMPANIA,
  EMILIA_ROMAGNA,
  FRIULI_VENEZIA_GIULIA,
  LAZIO,
  LIGURIA,
  LOMBARDIA,
  MARCHE,
  MOLISE,
  PIEMONTE,
  PUGLIA,
  SARDEGNA,
  SICILIA,
  TOSCANA,
  TRENTINO_ALTO_ADIGE,
  TRENTO,
  UMBRIA,
  VALLE_D_AOSTA,
  VENETO,
} from "./Constants";

const zonaRossa = {
  name: {
    it: "🟥 Zona Rossa",
    en: "🟥 Red Zone",
  },
  details: [
    {
      it:
        "👭❗️ Sono vietati gli spostamenti verso le abitazioni private: non si possono trovare amici e parenti neanche nello stesso comune.",
      en:
        "👭❗️ It's prohibited to shift to private homes: you cannot travel to friends and relatives even in the same town.",
    },
    {
      it:
        "🧑‍🤝‍🧑 Nelle giornate del 3,4,5 Aprile è consentita la visita ad amici e parenti, una volta al giorno, senza cambiare regione, nel limite di 2 persone.",
      en:
        "🧑‍🤝‍🧑 On April 3, 4 and 5, you can shift to friends and relatives once a day, without changing region. Limit fixed to 2 people.",
    },
    {
      it:
        "🍣 Bar aperti per asporto fino alle 18. Ristoranti aperti per asporto fino alle 22. E' sempre consentito il servizio di consegna a domicilio.",
      en:
        "🍣 Bars open for takeaway until 6pm. Restaurants open for takeaway until 10pm. The home-delivery service is always allowed.",
    },
    {
      it:
        "🛍 Negozi e mercati chiusi ad esclusione di generi alimentari e prima necessità.",
      en:
        "🛍 All the shops and markets are closed except for groceries and convinence stores.",
    },
    {
      it: "🛏 Coprifuoco dalle 22.00 alle 05.00.",
      en: "🛏 Curfew from 10 PM to 5 AM.",
    },
    {
      it: "📝 Serve l'autocertificazione per qualsiasi spostamento.",
      en: "📝 Self-certification is needed to justify any shift.",
    },
  ],
  moreDetails: [
    {
      it:
        "🏚 Consentito sempre il rientro alla propria residenza, domicilio o abitazione. ✅ Puoi recarti nella seconda casa, anche se fuori regione se acquistata prima del 14/01/2021.",
      en:
        "🏚 Always allowed to return to one's residence, domicile or home. ✅ You can go to the second home, even if outside the region if purchased before 14/01/2021.",
    },
    {
      it: "⛪ Consentito l' accesso ai luoghi di culto e funzioni religiose.",
      en:
        "⛪ It is allowed to access places of worship and religious functions.",
    },
    {
      it:
        "🏃 Consentito svolgere attività sportiva (correre) esclusivamente all'aperto ed individualmente.",
      en:
        "🏃 It is allowed to carry out sports activities (running) exclusively outdoors and individually.",
    },
    {
      it:
        "🚶 Consentito svolgere attività motoria (camminare) in prossimità della propria abitazione, con mascherina.‍",
      en:
        "🚶 It is allowed to carry out motor activities (walking) near your home, with the mask.",
    },
    {
      it: "✅ Aperte edicole, tabaccai, farmacie e parafarmacie.",
      en:
        "✅ Newsstand, tobacconists, pharmacies, and parapharmacies are open.",
    },
    {
      it:
        "📚 Luoghi di cultura chiusi (musei compresi). Biblioteche aperte su prenotazione.",
      en:
        "📚 Culture-related places are closed. Libraries open by reservation.",
    },
  ],
};

export default [
  {
    ...zonaRossa,
    from: "2021/03/22 00:00:00",
    to: "2021/03/29 23:59:59",
    regions: [LAZIO],
    cities: [],
  },
  {
    ...zonaRossa,
    from: "2021/03/22 00:00:00",
    to: "2021/03/28 23:59:59",
    regions: [
      PIEMONTE,
      LOMBARDIA,
      VENETO,
      FRIULI_VENEZIA_GIULIA,
      EMILIA_ROMAGNA,
      MARCHE,
      PUGLIA,
      CAMPANIA,
    ],
    cities: [TRENTO],
  },
  {
    ...zonaRossa,
    from: "2021/03/29 00:00:00",
    to: "2021/04/02 23:59:59",
    regions: [
      PIEMONTE,
      LOMBARDIA,
      VENETO,
      FRIULI_VENEZIA_GIULIA,
      EMILIA_ROMAGNA,
      MARCHE,
      PUGLIA,
      CAMPANIA,
      CALABRIA,
      TOSCANA,
      VALLE_D_AOSTA,
    ],
    cities: [TRENTO],
  },
  {
    ...zonaRossa,
    from: "2021/04/0c3 00:00:00",
    to: "2021/04/05 23:59:59",
    regions: [
      SICILIA,
      PIEMONTE,
      MARCHE,
      TOSCANA,
      CAMPANIA,
      PUGLIA,
      VENETO,
      LOMBARDIA,
      EMILIA_ROMAGNA,
      TRENTINO_ALTO_ADIGE,
      SARDEGNA,
      MOLISE,
      CALABRIA,
      ABRUZZO,
      LAZIO,
      LIGURIA,
      FRIULI_VENEZIA_GIULIA,
      BASILICATA,
      UMBRIA,
      VALLE_D_AOSTA,
    ],
  },
];
