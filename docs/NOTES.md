# Notes

- Exact June 2026 dates are still unresolved in `src/config/program.ts`, so any outreach copy that implies firm sprint dates should wait until those dates are locked.
- Forms depend on `PUBLIC_SHIP_IT_ISLAND_SUBMIT_URL`; without it, submissions fail with the built-in configuration error in `src/scripts/submission-form.ts`.
- No public Telegram URL exists in the repo right now. The site collects applicant Telegram handles, but there is nothing safe to link from the thank-you page or footer.
- No X handle is configured in `src/config/site.ts`, so there is no valid follow CTA for X and no `twitter:creator` value for SEO.
- The `heardAbout` field now has an `Other` option, but there is no follow-up free-text field for visitors who pick it.
