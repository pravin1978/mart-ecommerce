// ============================================
// DIGIMART — CENTRAL CONTACT & SOCIAL CONFIG
// ============================================
// Single source of truth for every contact channel and
// social profile shown on the site. The floating widget,
// the footer "Contact Digimart" block and the Contact Us
// page all read from this one file, so a number is only
// ever edited in one place.
//
// HOW TO EDIT
//   1. Change the values under "CONTACT CHANNELS" below.
//   2. Save. Nothing else needs updating.
//
// IMPORTANT
//   - Use full international format, e.g. "+919511766236".
//     Link values (wa.me / tel:) are derived automatically
//     by stripping "+", spaces, brackets and hyphens, so the
//     displayed number and the link can never drift apart.
//   - Do NOT substitute one number for another. The WhatsApp
//     number and the call number are deliberately different.
//   - Social URLs stay EMPTY until the official pages exist.
//     Empty entries render as a non-clickable "Coming Soon"
//     item — never as a broken href="#" link.
//   - This file makes no claim that any channel is verified,
//     staffed or available 24/7.
// ============================================

// ---------- CONTACT CHANNELS (edit here) ----------
const DIGIMART_CONTACT = {
  // WhatsApp chat — used for the https://wa.me/ link.
  whatsappNumber: "+919511766236",

  // Direct call — used for the tel: link.
  callNumber: "+918888811211",

  // Support inbox — used for the mailto: link.
  supportEmail: "support@digimart.com",

  // Pre-filled WhatsApp message (URL-encoded automatically).
  whatsappMessage:
    "Hi Digimart, I would like to know more about your digital products.",

  // Pre-filled email subject (URL-encoded automatically).
  emailSubject: "Digimart Website Inquiry",

  // Pre-filled email body. Keep short and honest — this only
  // opens the visitor's own mail app; nothing is sent by the site.
  emailBody:
    "Hello Digimart team,\n\nI have a question about your digital products.\n\nThanks,",

  // ---------- SOCIAL PROFILES ----------
  // Leave a value as "" until the official page is created.
  // To enable one later, paste the full profile URL:
  //   facebook: "https://www.facebook.com/digimart"
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    x: ""
  }
};

// ---------- DERIVED LINK VALUES ----------
// Normalise a phone number to digits only for wa.me / tel: URIs.
function digimartNormalizePhone(value) {
  return String(value || "").replace(/[^\d]/g, "");
}

DIGIMART_CONTACT.links = {
  // Valid WhatsApp deep link: digits only, message URL-encoded.
  whatsapp:
    "https://wa.me/" +
    digimartNormalizePhone(DIGIMART_CONTACT.whatsappNumber) +
    "?text=" +
    encodeURIComponent(DIGIMART_CONTACT.whatsappMessage),

  // Standard telephone URI using the configured call number.
  tel: "tel:+" + digimartNormalizePhone(DIGIMART_CONTACT.callNumber),

  // Mail client link with pre-filled subject and body.
  mailto:
    "mailto:" +
    DIGIMART_CONTACT.supportEmail +
    "?subject=" +
    encodeURIComponent(DIGIMART_CONTACT.emailSubject) +
    "&body=" +
    encodeURIComponent(DIGIMART_CONTACT.emailBody)
};

// Expose on window so the classic (non-module) scripts used
// across this project can read it, mirroring how TESTIMONIALS
// is exposed by js/testimonials.js.
if (typeof window !== "undefined") {
  window.DIGIMART_CONTACT = DIGIMART_CONTACT;
  window.digimartNormalizePhone = digimartNormalizePhone;
}

// Node export guard for any local tooling / tests.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { DIGIMART_CONTACT, digimartNormalizePhone };
}
