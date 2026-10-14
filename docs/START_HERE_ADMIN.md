# Lemus Landscaping - website handover

Prepared 14 October 2026. This package is for approval and administrator installation. The existing business website has not been changed.

This GitHub repository places website files at the repository root. References below to website/ describe the separately supplied handover ZIP.

## What is included

- `website/`: complete buildless HTML, CSS, JavaScript, favicon, logo and local project photographs.
- `Lemus_Wix_Headless_Upload.zip`: just the website files, with index.html at the ZIP root, for a supported static upload.
- `RESEARCH_AND_CONTENT_MAP.md`: findings, original fields, booking status, content mapping and verification limits.
- `WIX_EDITOR_REBUILD_GUIDE.md`: route for staying in the existing Wix Editor site.

No Node installation, build command, PHP, database or paid fonts are required. Open website/index.html to inspect it locally. The desktop layout, responsive styles and interactions are in the supplied source. Approval previews are supplied separately and carry a watermark; the website source does not.

## Hosting decision - read this first

The current site uses Wix Website Builder, Wix assets and a Wix-generated sitemap. It is not an ordinary FTP/PHP website. The existing Wix Editor site does not support importing this entire replacement site as raw HTML.

There are two supported routes:

1. Keep the existing Wix Editor site: rebuild the design using the editor, using the enclosed guide and assets. Keep or recreate the native Wix contact form and its automations. This preserves the existing Wix dashboard workflow.
2. Keep Wix as the provider but use Wix Headless: Wix now supports static HTML/CSS/JS uploads at https://www.wix.com/headless/drop. The supplied inner ZIP is suitable static output and is below the documented 20 MB asset limit. This creates a Headless project; it is not an in-place import into the old Wix Editor site. The administrator must confirm the account, plan, custom domain connection, form integration and redirects before switching the domain.

Official references checked on 14 October 2026:
- https://support.wix.com/en/article/request-importing-a-site-created-outside-of-wix
- https://support.wix.com/en/article/wix-headless-uploading-a-static-site
- https://dev.wix.com/docs/go-headless/wix-managed-headless/other-frameworks/your-own-frontend/upload-a-static-site

Alternatively, website/ works on conventional static hosting. Upload its CONTENTS to the web root, preserving filenames and assets/. Use the host's HTTPS and redirect settings. Do not upload this entire documentation package as the web root. No PHP server endpoint is included or required for the email-draft fallback.

## Contact form - connection is still required for direct submission

Original fields: Name (required, maximum 100 characters), Email (required, maximum 250 characters), Subject (optional), Message (optional). Original visible labels and placeholders are preserved. Three copies of the same original form have been consolidated into one contact section.

The original forms are managed by Wix JavaScript and Wix Forms. There is no reusable HTML form action. Notification recipients and automations cannot be verified from public HTML. The publicly listed email is tonylemus.socialmedia@gmail.com; confirm the intended notification recipient with the owner.

The portable site uses a clearly labelled email-draft fallback. Pressing Send opens the visitor's email app with the four fields, and the visitor must send that email. This is NOT a background submission and does NOT preserve Wix Inbox/submission-table storage. If the email app does not open, the site directs visitors to the visible email link or phone number. Do not market the fallback as a connected Wix form.

For direct delivery:
- Wix Editor: use the native Wix form and notifications, as described in the Wix guide.
- Headless/static: supply a tested HTTPS JSON endpoint in website/config.js. It must accept POST {name,email,subject,message} and return 2xx JSON {success:true} only after accepting the enquiry. The supplied script handles validation, pending state, a 15-second timeout, network failures and confirmed success. Endpoint implementation and credentials are outside this portable bundle because they depend on the owner's hosting/form account.
- Keep private credentials on the server. Validate input, configure permitted origins and abuse controls in the chosen service. Confirm delivery with an authorized test enquiry before making direct submissions live.

## Booking

The original https://www.lemuslandscaping.ca/book-online returns a live page saying there is nothing to book. No service, appointment selector, checkout or booking fields were available. The redesign includes an expandable booking availability link, without promising a bookable appointment.

The supplied /book-online/ fallback preserves that empty-booking status after a static migration. When the owner activates real bookings, update the availability link to the working Wix Bookings URL for the correct project. Do not leave a link pointing to an old project or invent an appointment endpoint. If rebuilding within the original Wix site, keep the original booking page.

## Existing URLs

Configure permanent redirects using the chosen host's rules:
- /aboutus -> /#about
- /services -> /#services
- /cotact -> /#contact (the old URL has this spelling)

Basic directory redirect pages are supplied as a fallback. Configure real HTTP 301 redirects where possible and verify whether the host resolves directory/index.html paths. Keep /book-online accessible until a working booking replacement is connected.

## Administrator launch check

Review the design with the owner, confirm contact information and service descriptions, and ensure they have rights to the reused logo and photographs. Keep a backup of the existing site and its forms/automations. Publish on a test URL, check at phone/tablet/desktop widths, test the menu and expandable content with keyboard and touch, confirm each photo loads, and test the chosen form integration. Check phone/email, Facebook, Google and booking links in an ordinary browser. Google may show a bot challenge; its redirect resolves to the business listing. Only then connect the approved custom domain and redirects. Preserve existing domain email DNS records when changing website hosting.

## Verification limits

Source syntax and asset/anchor coverage were checked. The client preview is a full-height desktop HTML render, not a live browser capture. It uses print-renderer adjustments and is representative; exact browser spacing may differ. Interactive browser and physical-device QA were unavailable in this session. No real enquiry was sent, and no owner's Wix account settings were accessed. Direct Wix form delivery remains unconnected until the administrator implements one of the routes above.
