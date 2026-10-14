# Research and redesign notes

Source: https://www.lemuslandscaping.ca/ and its publicly reachable pages. Reviewed 14 October 2026 using public page content, live HTML, HTTP headers and sitemaps.

## Page inventory

| Original page | Findings | New destination |
| --- | --- | --- |
| / | Hamilton-based landscaping; three services; incorporated in 2018; communication and detail; project photos; contact form | Home, story, services, projects and contact |
| /aboutus | Company introduction; three named customer reviews; Google link; project photography | Story and reviews |
| /services | Grounds maintenance, landscape construction, snow removal; two before/after pairs; process/gallery photos; contact form | Three expandable service cards and expandable project gallery |
| /cotact | Monday-Friday, 8 a.m.-5 p.m.; phone; email; contact form | Contact |
| /book-online | Sitemap-listed Wix Bookings page; 'Nothing to book right now. Check back soon.' | Expandable booking availability link; empty-booking fallback page |

The Wix page sitemap lists these five pages. No blog, product catalogue, newsletter, employment form, payment form or working appointment service was found in the reachable page set.

## Business and branding

Lemus Landscaping Contractors Inc. provides grounds maintenance, landscape construction and snow removal from Hamilton, Ontario. The primary likely audience is local property owners seeking outdoor improvements and recurring upkeep; the existing site does not explicitly define residential versus commercial coverage or a wider service area, so the redesign does not claim either.

The original positioning centres on excellent communication, customer satisfaction, hard work, passion for detail and professional service. Its tone is personal, practical and friendly. The green script logo with an evergreen tree is retained. Existing images feature real lawns, planted gardens, patios, walkways, fencing, poolside work, equipment and snow removal vehicles. The new design gives those assets more space and consistent crops.

Chosen direction: forest green (#193B2C), warm cream (#F6F5EE), fresh leaf (#D7E8A8), with Georgia-style serif headings and a clean system sans-serif body. This is a confident, garden-oriented look without downloaded font dependencies. Alternative directions, if the owner prefers them: cream/olive/stone for a softer garden feel; charcoal/sage/white for a construction-led look.

Verified public information: (905) 902-7076; tonylemus.socialmedia@gmail.com; Hamilton, Ontario; incorporated in 2018; Monday-Friday, 8 a.m.-5 p.m. No street address, insurance credential, licence claim, certification, review count, star rating, price or service guarantee is invented.

## Form audit

| Field | Type | Requirement / original placeholder |
| --- | --- | --- |
| Name | Text | Required; max 100; Enter your name |
| Email | Email | Required; max 250; Enter your email |
| Subject | Text | Optional; Enter the subject |
| Message | Textarea | Optional; Enter your message here... |

The same visible form appears on Home, Services and Contact, with component IDs comp-lnchg64e, comp-lohxw9ve and comp-loisung9. All display a Send button and a 'Thanks for your message!' confirmation. There are no phone, dropdown, checkbox, upload or scheduling fields in those forms.

The public form tags have no action attribute. They belong to Wix-managed form components, rather than a standalone PHP or generic third-party endpoint. Delivery is managed by the Wix application; owner notification settings cannot be determined from public source. No submission was attempted. The contact email alone does not prove the original form's recipient. See START_HERE_ADMIN.md for the honest email-draft fallback and reconnection steps.

## External links

- Google: https://g.co/kgs/JdqiyX resolves to a Google result for Lemus Landscaping Contractors Inc.; automated requests encountered Google's bot challenge. Retained from the original site; normal-browser verification is still needed.
- Facebook: https://www.facebook.com/lemuslandscapingcontractors retained from original source; a logged-out/live social-page check was not available.
- Booking: https://www.lemuslandscaping.ca/book-online is reachable, but offers no bookable service. Preserved as an availability check rather than a primary Book Now action.
- Phone/email links are built from the verified public details.

## UX findings and changes

The original homepage's main introduction says it is a full-service Hamilton landscaping company but gives little emotional or practical differentiation. Project photographs are a strength, yet the source uses inconsistent sizes, dated filenames as alt text, and substantial gallery scaffolding. Services have names and imagery with little explanatory copy. Reviews are on a separate page and useful evidence is easy to miss. The Contact URL is misspelled /cotact, the booking page is empty, and the visible footer is dated 2023. The supplied redesign combines relevant content into one guided flow, strengthens the hero and enquiry action, places the company's customer feedback closer to the project examples, and makes phone/email contact prominent.

Mobile defects were not visually observed: live browser access was unavailable. Source includes a mobile viewport and Wix responsive infrastructure, so it would be inaccurate to claim it is categorically non-responsive. The rebuild includes a 760px collapsible-menu breakpoint, stacked service/review/contact sections, a single-column form on mobile, fluid typography, 44px+ interactive targets, responsive image boxes, keyboard focus styles, an Escape-close menu, a skip link and reduced-motion support.

Scrolling uses smooth anchor navigation and sticky-header offsets. It does not force full-screen scroll snapping, which could prevent reading tall content on phones. Native details/summary controls provide keyboard-accessible expansion without a framework. Project images open at larger size in a new tab. Images are local and most are lazy-loaded; hero imagery is loaded immediately.

## Hosting and verification

Confirmed Wix Website Builder generator, x-wix-request-id header, static.wixstatic.com / parastorage assets and Wix-generated sitemap. Cloudflare appears in the delivery headers; that is not evidence of an administrator-managed Cloudflare hosting account. Exact plan, domain registrar and administrator settings remain unknown.

Existing Wix Editor import is unsupported, while the current Wix Headless static-upload route is documented. The handover accommodates both routes explicitly. See the official references in the administrator guide. No existing-site publication or DNS change was made.

Validation: JavaScript syntax; all local image/style/script references; unique section anchors; original form labels, requirements and placeholders; original URL and sitemap coverage; and visual inspection of the tall desktop render. Browser interactivity, device layout, real mail delivery and account-specific Wix integrations still require administrator testing.
