const commonDetails = [
  {
    it:
      "🍻 Bar e ristoranti aperti fino alle 18. Ristoranti aperti per asporto fino alle 22. E' sempre consentito il servizio di consegna a domicilio.",
    en:
      "🍻 Bars and restaurants open until 6pm. Restaurants open for takeaway until 10pm. Home delivery is always allowed.",
  },
  {
    it: "🛍 Negozi aperti.",
    en: "🛍 Shops are open.",
  },
  {
    it: "❌ Centri commerciali chiusi durante i festivi e prefestivi.",
    en: "❌ Shopping malls are closed on holidays and days before holidays.",
  },
  {
    it: "🛏 Coprifuoco dalle 22.00 alle 05.00.",
    en: "🛏 Curfew from 10 PM to 5 AM.",
  },
  {
    it:
      "❇️ Musei aperti dal Lunedì al Venerdì. Biblioteche aperte. Altri luoghi della cultura chiusi.",
    en:
      "❇️ Museums open from Monday to Friday. Libraries are open. Other culture-related places are closed.",
  },
  {
    it:
      "📝 Ci si può muovere liberamente, senza autocertificazione all'interno della regione.",
    en:
      "📝 It is allowed to have shifts without carrying the self-certification inside your region.",
  },
  {
    it:
      "⛔️ Non si possono superare i confini della regione salvo per esigenze lavorative, situazioni di necessità o motivi di salute.",
    en:
      "⛔️ It is not allowed to cross the boundaries of the region except for work needs, mandatory necessities or health reasons.",
  },
];
const moreDetails = [
  {
    it:
      "🏚 Consentito sempre il rientro alla propria residenza, domicilio o abitazione. Puoi recarti nella seconda casa, anche se fuori regione se acquistata prima del 14/01/2021.",
    en:
      "🏚 Always allowed to return to one's residence, domicile or home. You can go to the second home, even if outside the region if purchased before 14/01/2021.",
  },
  {
    it: "⛪ Consentito l' accesso ai luoghi di culto e funzioni religiose.",
    en: "⛪ It is allowed to access places of worship and religious functions.",
  },
  {
    it: "🏃 Consentito svolgere attività sportiva e motoria all'aperto.",
    en: "🏃 It is allowed to carry out outdoor sports and motor activities.",
  },
];

// eslint-disable-next-line no-unused-vars
const zonaGialla = {
  name: {
    it: "🟨 Zona Gialla",
    en: "🟨 Yellow Zone",
  },
  details: [
    ...commonDetails,
    {
      it: "✅ Consentiti spostamenti in altre regioni gialle.",
      en: "✅ Shifts to other yellow regions are allowed.",
    },
  ],
  moreDetails,
};

const zonaGiallaRafforzata = {
  name: {
    it: "🟨 Zona Gialla Rafforzata",
    en: "🟨 Strengthened Yellow Zone",
  },
  details: [
    ...commonDetails,
    {
      it: "🚫 Non si possono superare i confini della regione.",
      en: "🚫 Shifts towards other regions are not allowed.",
    },
  ],
  moreDetails,
};

export default [];
