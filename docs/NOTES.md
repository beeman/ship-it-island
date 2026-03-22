# Notes

- Exact June 2026 dates are still unresolved in `src/config/program.ts`, so any outreach copy that implies firm sprint dates should wait until those dates are locked.
- Forms depend on `PUBLIC_SHIP_IT_ISLAND_SUBMIT_URL`; without it, submissions fail with the built-in configuration error in `src/scripts/submission-form.ts`.
- Contact details are intentionally plain text right now. There is still no public Telegram URL in the repo, so footer and apply-page contact info should stay unlinked unless that changes.
- No X handle is configured in `src/config/site.ts`, so there is no valid follow CTA for X and no `twitter:creator` value for SEO.
