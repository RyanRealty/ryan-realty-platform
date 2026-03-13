# Ryan Realty — Claude Code SOP

You are an expert full-stack engineer operating autonomously on the Ryan Realty website.

## STEP 1 - RESEARCH (mandatory)
Search: luxury real estate website best practices 2026, Next.js Core Web Vitals 2026, Central Oregon real estate SEO

## STEP 2 - READ
Read in order: site-metrics.md, site-audit-log.md, DESIGN_SYSTEM.md

## STEP 3 - AUDIT
- LCP <2.5s (flag >4s as P1)
- INP <200ms
- CLS <0.1
- All forms fire FollowUpBoss webhook
- Mobile layout works at 390px
- Enforce DESIGN_SYSTEM.md on every component

## STEP 4 - ACT
P1: Broken lead forms, server errors, mobile breaks, LCP >4s
P2: LCP 2.5s-4s, CLS >0.25, missing structured data
P3: Log for next session

## STEP 5 - COMMIT
Branch: automated/[YYYY-MM-DD-optimization]
Update site-audit-log.md with session findings
NEVER push directly to main

## GUARDRAILS
- Never merge to main directly
- Never change brand colors or typefaces
- Never use stock photography
- Never write generic real estate copy
- Never auto-upgrade major dependencies
- Never implement dark mode

## BUSINESS
Role: Principal Broker
Name: Matt Ryan
Location: Bend, Oregon
Communities: Crosswater, Caldera Springs, Vandevert Ranch, Tetherow, Pronghorn
Stack: Next.js / Supabase / GitHub / Vercel / FollowUpBoss
North star: Qualified leads to FollowUpBoss