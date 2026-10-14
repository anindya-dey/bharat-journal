/**
 * Registry of every government scheme/programme referenced anywhere in the
 * journal, with an official link. Powers the /schemes index page and keeps
 * scheme names + URLs consistent across posts.
 */
export interface Scheme {
  id: string;
  name: string;
  url: string;
  ministry: string;
  themes: string[];
}

export const SCHEMES: Scheme[] = [
  { id: "pmjdy", name: "PM Jan Dhan Yojana", url: "https://www.pmjdy.gov.in/", ministry: "Finance", themes: ["money"] },
  { id: "upi", name: "UPI (NPCI)", url: "https://www.npci.org.in/what-we-do/upi", ministry: "NPCI / RBI", themes: ["money"] },
  { id: "aadhaar", name: "Aadhaar (UIDAI)", url: "https://uidai.gov.in/", ministry: "Electronics & IT", themes: ["money", "society"] },
  { id: "mgnrega", name: "MGNREGA", url: "https://nrega.nic.in/", ministry: "Rural Development", themes: ["society"] },
  { id: "saubhagya", name: "Saubhagya", url: "https://saubhagya.gov.in/", ministry: "Power", themes: ["energy"] },
  { id: "pmjay", name: "Ayushman Bharat (PM-JAY)", url: "https://pmjay.gov.in/", ministry: "Health & Family Welfare", themes: ["society"] },
  { id: "esanjeevani", name: "eSanjeevani", url: "https://esanjeevani.mohfw.gov.in/", ministry: "Health & Family Welfare", themes: ["society"] },
  { id: "diksha", name: "DIKSHA", url: "https://diksha.gov.in/", ministry: "Education", themes: ["connectivity"] },
  { id: "bhashini", name: "Bhashini", url: "https://bhashini.gov.in/", ministry: "Electronics & IT", themes: ["connectivity"] },
  { id: "cowin", name: "CoWIN", url: "https://www.cowin.gov.in/", ministry: "Health & Family Welfare", themes: ["society"] },
  { id: "bharatnet", name: "BharatNet", url: "https://www.bbnl.nic.in/", ministry: "Communications", themes: ["connectivity"] },
  { id: "digital-india", name: "Digital India", url: "https://www.digitalindia.gov.in/", ministry: "Electronics & IT", themes: ["connectivity"] },
  { id: "make-in-india", name: "Make in India", url: "https://www.makeinindia.com/", ministry: "Commerce & Industry", themes: ["economy"] },
  { id: "startup-india", name: "Startup India", url: "https://www.startupindia.gov.in/", ministry: "Commerce & Industry", themes: ["economy"] },
  { id: "swachh-bharat", name: "Swachh Bharat Mission", url: "https://swachhbharatmission.ddws.gov.in/", ministry: "Housing & Urban Affairs", themes: ["society"] },
  { id: "udan", name: "UDAN", url: "https://www.civilaviation.gov.in/", ministry: "Civil Aviation", themes: ["mobility"] },
  { id: "operation-flood", name: "Operation Flood", url: "https://www.nddb.coop/", ministry: "Dairy Development", themes: ["livelihoods"] },
  { id: "morth", name: "National Highways (MoRTH)", url: "https://morth.nic.in/", ministry: "Road Transport & Highways", themes: ["mobility"] },
  { id: "smart-cities", name: "Smart Cities Mission", url: "https://smartcities.gov.in/", ministry: "Housing & Urban Affairs", themes: ["mobility"] },
  { id: "jjm", name: "Jal Jeevan Mission", url: "https://jaljeevanmission.gov.in/", ministry: "Jal Shakti", themes: ["energy"] },
  { id: "ngm", name: "National Green Hydrogen Mission", url: "https://mnre.gov.in/", ministry: "New & Renewable Energy", themes: ["energy"] },
  { id: "nqm", name: "National Quantum Mission", url: "https://dst.gov.in/", ministry: "Science & Technology", themes: ["space"] },
  { id: "ism", name: "India Semiconductor Mission", url: "https://ism.gov.in/", ministry: "Electronics & IT", themes: ["technology"] },
  { id: "dfccil", name: "Dedicated Freight Corridors", url: "https://dfccil.com/", ministry: "Railways", themes: ["mobility"] },
  { id: "ncrtc", name: "Namo Bharat / RRTS", url: "https://www.ncrtc.in/", ministry: "Housing & Urban Affairs", themes: ["mobility"] },
  { id: "gati-shakti", name: "PM Gati Shakti", url: "https://pmgatishakti.gov.in/", ministry: "Commerce & Industry", themes: ["mobility"] },
];
