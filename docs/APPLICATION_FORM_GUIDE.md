# Application Form Wiring Guide

This site already has the frontend form UX implemented.

What is missing is the submission backend.

The current frontend expects:

- a public submit URL in `PUBLIC_SHIP_IT_ISLAND_SUBMIT_URL`
- `POST` requests with a JSON body
- a JSON response with at least `ok: boolean`
- optional `message` and `redirectPath`

The relevant frontend files are:

- [`.env.example`](/.env.example)
- [`src/components/forms/ApplicationForm.astro`](/src/components/forms/ApplicationForm.astro)
- [`src/components/forms/WaitlistForm.astro`](/src/components/forms/WaitlistForm.astro)
- [`src/scripts/submission-form.ts`](/src/scripts/submission-form.ts)
- [`src/config/program.ts`](/src/config/program.ts)

## Recommended V1 Stack

Use this stack unless you have a strong reason not to:

- Astro static frontend
- Google Sheets as the review queue
- Google Apps Script as the form endpoint

Why this is the right fit for this repo:

- the site is static already
- no Astro server adapter is required
- manual review is the current operating model
- Sheets is enough for `applications` and `waitlist`
- Apps Script gives you a simple public JSON endpoint fast

## What The Frontend Sends

Every submission includes:

- `submittedAt`
- `sourcePath`
- `submissionType`

Waitlist submissions also include:

- `email`

Application submissions include all application fields from `programConfig.applicationSections`, currently:

- `activeUsers`
- `anythingElse`
- `canCommit`
- `caseStudyComfort`
- `cohortAvailability`
- `currentStage`
- `email`
- `focusArea`
- `heardAbout`
- `heardAboutOther`
- `openToFeedback`
- `primaryBlocker`
- `projectDescription`
- `projectLink`
- `projectName`
- `roomPreference`
- `socialProfile`
- `sprintGoal`
- `supportNeeded`
- `teamSize`
- `teamStrength`
- `telegramHandle`
- `yourName`
- `yourRole`

`projectLink` is optional and can be a public site, demo, deck, or video.

`heardAboutOther` is only sent when `heardAbout` is `Other (please specify)`.

`cohortAvailability` is a required select with these exact values:

- `Cohort 1 (June 2–16)`
- `Cohort 2 (June 21–July 5)`
- `Either cohort works`
- `Both — I want to do the full month`

`roomPreference` uses these exact values:

- `Early Bird — private room included ($2,000)`
- `Regular — shared room ($2,400)`
- `Regular — private room upgrade ($2,800)`

The frontend sends JSON like this:

```json
{
  "email": "founder@project.xyz",
  "projectName": "Example Project",
  "sourcePath": "/apply",
  "submissionType": "application",
  "submittedAt": "2026-03-12T10:00:00.000Z",
  "yourName": "Jane Founder"
}
```

## What The Backend Must Return

Minimum valid success response:

```json
{
  "ok": true
}
```

Recommended success responses:

Application:

```json
{
  "message": "Application received.",
  "ok": true,
  "redirectPath": "/thank-you"
}
```

Waitlist:

```json
{
  "message": "You are on the waitlist.",
  "ok": true
}
```

Failure response:

```json
{
  "message": "Something went wrong. Please try again.",
  "ok": false
}
```

## Recommended Google Sheet Setup

Create one spreadsheet with two tabs:

- `applications`
- `waitlist`

Recommended `applications` header row:

```text
submittedAt | submissionType | sourcePath | status | activeUsers | anythingElse | canCommit | caseStudyComfort | cohortAvailability | currentStage | email | focusArea | heardAbout | heardAboutOther | openToFeedback | primaryBlocker | projectDescription | projectLink | projectName | roomPreference | socialProfile | sprintGoal | supportNeeded | teamSize | teamStrength | telegramHandle | yourName | yourRole
```

Recommended `waitlist` header row:

```text
submittedAt | submissionType | sourcePath | status | email
```

Recommended initial `status` values:

- `waitlist_review` for applications
- `waitlist_new` for waitlist signups

## Google Apps Script Implementation

Create a new Apps Script attached to the spreadsheet or standalone.

Use a script like this:

```javascript
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID";

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function getSheet(name) {
  return SpreadsheetApp.openById(SHEET_ID).getSheetByName(name);
}

function appendRow(sheetName, headers, data) {
  const sheet = getSheet(sheetName);
  const row = headers.map((header) => data[header] ?? "");
  sheet.appendRow(row);
}

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents || "{}");
    const submissionType = payload.submissionType;

    if (submissionType === "application") {
      const headers = [
        "submittedAt",
        "submissionType",
        "sourcePath",
        "status",
        "activeUsers",
        "anythingElse",
        "canCommit",
        "caseStudyComfort",
        "cohortAvailability",
        "currentStage",
        "email",
        "focusArea",
        "heardAbout",
        "heardAboutOther",
        "openToFeedback",
        "primaryBlocker",
        "projectDescription",
        "projectLink",
        "projectName",
        "roomPreference",
        "socialProfile",
        "sprintGoal",
        "supportNeeded",
        "teamSize",
        "teamStrength",
        "telegramHandle",
        "yourName",
        "yourRole",
      ];

      appendRow("applications", headers, {
        ...payload,
        status: "waitlist_review",
      });

      return jsonResponse({
        message: "Application received.",
        ok: true,
        redirectPath: "/thank-you",
      });
    }

    if (submissionType === "waitlist") {
      const headers = [
        "submittedAt",
        "submissionType",
        "sourcePath",
        "status",
        "email",
      ];

      appendRow("waitlist", headers, {
        ...payload,
        status: "waitlist_new",
      });

      return jsonResponse({
        message: "You are on the waitlist.",
        ok: true,
      });
    }

    return jsonResponse({
      message: "Unsupported submission type.",
      ok: false,
    });
  } catch (error) {
    return jsonResponse({
      message: "Server error while processing submission.",
      ok: false,
    });
  }
}
```

## Apps Script Deploy Steps

1. Create the sheet and tabs.
2. Paste the script.
3. Set `SHEET_ID`.
4. Deploy as `Web app`.
5. Execute as `Me`.
6. Access should be `Anyone`.
7. Copy the deployment URL.

## Frontend Env Setup

Set this in your local `.env`:

```bash
PUBLIC_SHIP_IT_ISLAND_SITE_URL=https://ship-it-island.xyz
PUBLIC_SHIP_IT_ISLAND_SUBMIT_URL=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
```

Then restart the Astro dev server.

## How To Test It

Manual test checklist:

1. Submit the waitlist form with a valid email.
2. Confirm you see the inline success state.
3. Confirm a new row appears in the `waitlist` tab.
4. Submit the main application form with all required fields.
5. Confirm the browser redirects to `/thank-you`.
6. Confirm a new row appears in the `applications` tab.
7. Break the submit URL on purpose and verify the frontend shows an error without clearing the form.

## If You Want An Agent To Do It

Tell the agent this:

```text
Wire the existing Ship It Island forms to Google Sheets via Google Apps Script.

Constraints:
- Keep the site static. Do not add Astro SSR or a server adapter.
- Use the existing frontend contract in src/scripts/submission-form.ts.
- Use one Google Sheet with two tabs: applications and waitlist.
- Application submissions must append to applications with status=waitlist_review.
- Waitlist submissions must append to waitlist with status=waitlist_new.
- Return JSON with ok:boolean and message, plus redirectPath=/thank-you for application submits.
- Keep the frontend form field names aligned with the current site, including optional `heardAboutOther`.
- Add or update docs with setup steps and env configuration.

Deliverables:
- Apps Script code
- exact sheet headers
- env setup instructions
- manual test checklist
```

## If You Build It Manually

Do only this:

1. Create the spreadsheet and tabs.
2. Add the header rows exactly.
3. Deploy the Apps Script web app.
4. Set `PUBLIC_SHIP_IT_ISLAND_SUBMIT_URL`.
5. Run `npm run dev`.
6. Test both forms.

## Optional Alternatives

You can replace Apps Script later with:

- a Cloudflare Worker
- a Supabase Edge Function
- a small custom API

If you do that, keep the same contract:

- `POST` JSON in
- JSON out
- `ok` required
- optional `message`
- optional `redirectPath`

That way the frontend does not need to change.
