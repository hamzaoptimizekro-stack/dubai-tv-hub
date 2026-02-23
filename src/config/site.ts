// Central site configuration - update these values when connecting a custom domain
export const SITE_URL = "https://usedtvdubai.ae";

export const CONTACT = {
  phone: "+971557349696",
  phoneDisplay: "+971 55 734 9696",
  whatsapp: "https://wa.me/971557349696",
  email: "hassanbrothers96@gmail.com",
  address: "Al Musalla Rd - Deira - Dubai - United Arab Emirates",
  addressShort: "Al Musalla Rd, Deira, Dubai",
  owner: "Hassan Jamil",
  ownerTitle: "Running 12 Businesses in Used Home Appliance Niche for 7+ Years in Dubai",
  hours: "Saturday to Thursday, 9:00 AM to 9:00 PM",
  hoursShort: "Sat-Thu 9AM-9PM",
};

export const EMIRATES = [
  "Dubai", "Sharjah", "Ajman", "Abu Dhabi", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain",
] as const;

export const SERVICE_LOCATIONS = [
  { slug: "sharjah", name: "Sharjah", areas: ["Al Majaz", "Al Nahda", "Al Taawun", "Muwaileh", "University City", "Al Khan", "Al Qasimia", "Industrial Area"] },
  { slug: "ajman", name: "Ajman", areas: ["Al Rashidiya", "Al Nuaimiya", "Ajman Downtown", "Emirates City", "Al Jurf", "Al Rawda", "Al Mowaihat"] },
  { slug: "abu-dhabi", name: "Abu Dhabi", areas: ["Khalifa City", "Al Reem Island", "Musaffah", "Al Shamkha", "Yas Island", "Mohammed Bin Zayed City", "Al Khalidiyah"] },
  { slug: "ras-al-khaimah", name: "Ras Al Khaimah", areas: ["Al Nakheel", "Al Hamra", "Khuzam", "Al Dhait", "Julphar", "Al Jazeera", "Ras Al Khaimah City"] },
  { slug: "fujairah", name: "Fujairah", areas: ["Fujairah City", "Dibba Al Fujairah", "Kalba", "Al Faseel", "Merashid", "Sakamkam"] },
  { slug: "umm-al-quwain", name: "Umm Al Quwain", areas: ["UAQ City", "Al Salamah", "Al Raas", "Old Town", "Al Aahad", "Falaj Al Mualla"] },
];
