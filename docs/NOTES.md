# Notes

- June / July 2026 dates are now locked in `src/config/program.ts` as Cohort 1 on June 2–16, 2026 and Cohort 2 on June 21–July 5, 2026.
- Forms depend on `PUBLIC_SHIP_IT_ISLAND_SUBMIT_URL`; without it, submissions fail with the built-in configuration error in `src/scripts/submission-form.ts`.
- Contact details are `contact@ship-it-island.xyz` and `@kellquan`, and Telegram links are enabled from `src/config/site.ts`.
- No X handle is configured in `src/config/site.ts`, so there is no valid follow CTA for X and no `twitter:creator` value for SEO.
