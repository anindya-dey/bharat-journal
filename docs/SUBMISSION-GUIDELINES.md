# Submission Guidelines

This document is deliberately kept **out of the website**. The site records
India's progress and proposals; it does not present itself as a submission
channel. This file is the internal reference for how an idea could be taken to
government, if and when that is ever appropriate.

## Principles

- **Respond to open consultations first.** A comment on an open ministry
  consultation is read; a cold submission usually is not. Watch for draft
  policies (for example a draft National Tourism Policy) and comment there.
- **Match the channel to the idea.** Different ideas belong to different
  bodies:
  - Tourism and culture → Ministry of Tourism; MyGov tourism campaigns.
  - Payments and fintech → RBI / NPCI consultation windows.
  - City infrastructure → state urban development departments and municipal
    corporations.
  - Technology, AI, semiconductors → MeitY and the relevant mission.
  - Space → ISRO / IN-SPACe.
  - Energy and climate → Ministry of New & Renewable Energy / MoEFCC.
  - Water → Ministry of Jal Shakti.
  - Education / health → the respective ministry.
- **CPGRAMS for a trackable reference.** The Centralized Public Grievance
  Redress and Monitoring System issues registration numbers that can be
  followed up.
- **RTI as follow-up.** If a submission goes unanswered, a Right to Information
  application asking what action was taken is inexpensive and must be answered.
- **Archive everything.** Keep the platform, date, reference number, and an
  archived copy of what was sent. Redact personal details (phone, address,
  Aadhaar-linked information) from anything published.

## Tracking a submission

- **Use `docs/SUBMISSION-TRACKER.md`** for the channel, date, and reference
  number — never in the site's frontmatter or content.
- **Flip the public `status` field to `"proposed"`** on the idea's `.mdx`
  file once it has actually been formally submitted through an official
  channel (a consultation comment, CPGRAMS, a written submission to a
  ministry desk). This is the one piece of submission reality that belongs
  on the public site: it tells a reader "this moved from an idea on a blog
  to something a ministry has in hand" without publishing *how*, *where*, or
  any reference number.
- Leave `origin: "my-proposal"` unchanged — `status` and `origin` are
  independent; `proposed` only describes how far the idea has travelled,
  not who originated it.
- If a ministry or the government independently starts a matching
  programme (the way Mission Sudarshan Chakra, the Safran engine deal, and
  others already have), that is a separate, stronger signal — update
  `origin` to `"government-initiative"` and `status` to `"in-progress"`
  instead, with the real programme cited in the article.

## What not to do

- Do not publish submission records, reference numbers, or personal details on
  the site.
- Do not present the site as an official channel or imply endorsement.
- Verify portal URLs and current consultation windows **at filing time** —
  government portals reorganise often; never cache or hard-code them into the
  site.

## Notes

- This file is a reference only. Any decision to engage with a government
  process is separate from the published journal.
- If a guideline here conflicts with a specific portal's own instructions,
  follow the portal's instructions.
