/**
 * Client Reviews & Public Trust Engine
 * Official policy: Authentic reviews are verified through our Google Business Profile.
 * We do not fabricate review quotes, customer ratings, or reviewer identities.
 */

export const reviewsConfig = {
  googleBusinessProfileUrl: "https://share.google/QAhZ41vyEGjiVpxkp",
  googleMapsReviewUrl: "https://share.google/QAhZ41vyEGjiVpxkp",
  headline: "Verified Client Projects & Public Reviews",
  subheadline: "We hold ourselves to high engineering standards and transparent client partnerships. Read verified reviews on Google or explore our live client deliveries.",
  notice: "Public reviews are hosted directly on Google to ensure authentic, unedited feedback from real clients.",
  verifiedClientDeliveries: [
    {
      name: "Scalpel.in",
      domain: "scalpel.in",
      url: "https://www.scalpel.in/",
      category: "Doctor Appointment Platform",
      status: "Live Production"
    },
    {
      name: "Agriqen Seeds & Biotech",
      domain: "agriqen.com",
      url: "https://www.agriqen.com/",
      category: "Agriculture Business Website",
      status: "Live Production"
    },
    {
      name: "Sahyog Sagar",
      domain: "sahyogsagar.in",
      url: "https://www.sahyogsagar.in/",
      category: "Restaurant & Local SEO",
      status: "Live Production"
    },
    {
      name: "Law & Legal Bureau",
      domain: "lawandlegalbureau.com",
      url: "https://www.lawandlegalbureau.com/",
      category: "Legal Practice Platform",
      status: "Live Production"
    },
    {
      name: "YOG4YOU",
      domain: "yog4you.org",
      url: "https://www.yog4you.org/",
      category: "Yoga & Wellness Platform",
      status: "Live Production"
    },
    {
      name: "Dew Drops Tourism",
      domain: "dewdropstourism.in",
      url: "https://www.dewdropstourism.in/",
      category: "Travel & Tour Operator",
      status: "Live Production"
    }
  ]
};

export const reviewsData = reviewsConfig.verifiedClientDeliveries;
