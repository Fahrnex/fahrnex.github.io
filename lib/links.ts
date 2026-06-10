// Central place for all outbound links to the real Fahrnex platform.
// Using a referral query param so these act as trackable backlinks.
const BASE = "https://www.fahrnex.de"
const REF = "?ref=landing"

export const fahrnexLinks = {
  home: `${BASE}/${REF}`,
  signup: `${BASE}/register/${REF}`,
  login: `${BASE}/login${REF}`,
  demo: `${BASE}/demo-booking/${REF}`,
  contact: `${BASE}/contact/${REF}`,
  features: `${BASE}/features/${REF}`,
  pricing: `${BASE}/pricing/${REF}`,
  vinDecoder: `${BASE}/vin-decoder/${REF}`,
  fuelPrices: `${BASE}/tools/live-fuel-prices-germany/${REF}`,
  blog: `${BASE}/blog/${REF}`,
  about: `${BASE}/about/${REF}`,
  imprint: `${BASE}/impressum/${REF}`,
  privacy: `${BASE}/privacy/${REF}`,
  security: `${BASE}/security/${REF}`,
  terms: `${BASE}/terms/${REF}`,
} as const

// Props to spread on every outbound anchor: opens in a new tab and stays
// followable so it counts as a real backlink.
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener",
} as const
