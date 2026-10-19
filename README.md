# Open Point

*An electricity fault management game by James Procter. © 2026 James Procter.*

A browser game about running an electricity distribution network. You've just taken over the control desk on **Megawatt Island** from Mags Whitley, who is retiring after 38 years. Your job is to keep the lights on in Port Ampere and the towns of Ohmsford, Joulebury, Voltcombe and Faraday Head.

## How to play

Open `index.html` in any modern browser. Nothing needs installing.

- **Locate** faults using fault passage indicators (the flags on each substation).
- **Isolate** the faulty cable by opening the switches at both ends.
- **Restore** customers by closing breakers and normally open points to back-feed from neighbouring feeders, without overloading them.
- **Repair** the damage and return the network to normal running.
- **Incidents board:** every live fault, damaged site and piece of work in one list, with customers off by area. Give each area an estimated restoration time (ETR) and update it as the job changes. Customers who know when power is coming back ring less, meeting an ETR builds public confidence, and missing one costs it.
- **Field teams:** reactive crews take the faults, assessors patrol lines and read fault flags, a tree team cuts trees off lines before a crew can repair them, and on planned-work and career shifts a planned team does the maintenance and work requests.
- **Welfare van:** for long power cuts, send the van with hot drinks, food, phone charging and checks on vulnerable customers. It heads home when the power is back.
- **Safety documents:** before a crew repairs or maintains a cable, earth it at both ends and issue a permit to work. Afterwards, cancel the permit and remove the earths before switching it back on. Switching power onto an earthed cable causes a flashover. You can turn this off in Settings, and the training shift leaves it out.

Incidents include:

- cable faults, digger strikes and copper theft
- named storms and floods
- heatwaves
- cars hitting poles
- flickering lights that warn of a failing cable
- festival days
- low-voltage street faults

You score on customer interruptions (CI) and customer minutes lost (CML).

There is a guided training shift, four story shifts, a free play mode where you pick the incident and the size of your team, and a network editor for building your own.

**Mobile generators:** two are kept at the generator depot west of Port Ampere. Hire one for a substation that's cut off (up to 500 customers, £2,000 plus £250 an hour). It drives there by road, connects in 20 minutes, and heads home on its own once mains supply returns.

Press enquiries pause the clock and pop up on screen, so you can promise a restoration time or give a holding statement.

## Career

Run the island week by week through the seasons, Monday to Friday. Each shift starts at 07:00 (or 19:00 for a night shift) with the network healthy, and trouble develops as the day goes on.

- **Work requests.** Tree cutters, jointers and maintenance crews ask for cables to be switched out during the shift. Switch them out without anyone losing power and hand them over to earn a credit; ignore them and the team stands down at a cost.
- **Seasonal weather.** Now and then: hot days and thunderstorms in summer, wind warnings in autumn and winter, thunderstorms in spring, and snow in winter, which slows every journey and repair. Weather shows on the map, with a badge in the corner.
- **Random events.** Every shift brings a mix of surprises: breaker trips that clear on reclose, cable faults, copper theft (more likely at night), digger strikes in the daytime, street faults and lightning strikes.

Drag the map with the mouse or one finger to move around it, and pinch or scroll to zoom.

- **Budget.** Every shift has a budget. Crew time, overtime, contractors, welfare visits, materials and the regulator's fines for customer minutes lost all come out of it.
- **Rewards.** Stars earn a bonus and experience. Experience promotes you from Trainee engineer up to Control engineer, and the shifts get harder as you rise.
- **Upgrades.** Spend your savings on remote control for substations, putting overhead lines underground, auto-reclosers, remote fault flags, extra crews and assessors, a second depot at Joulebury, and backup generators for critical sites.
- **Planned work.** Switch a cable out for maintenance without anyone losing power, then return to normal running.
- **People.** Arrange welfare visits for vulnerable customers. Crews must rest after 12 hours. You can call in contractors.
- **Story.** Messages from Mags, the mayor, the finance director and the Met Office.

## Replay value

- **Daily challenge.** The same shift for everyone each day, with a result you can copy and share.
- **Best scores** and **achievements**.
- **Replay.** Watch any finished shift back.
- **Save code.** Copy your progress to another device.

## Help for new players

- **Training shift:** Mags walks you through your first fault step by step.
- **Plain English:** a setting that swaps the jargon for everyday words. Hover any underlined term for an explanation.
- **Previews:** hover a switch to see who comes back on, who goes off, and whether anything would trip.
- **Hints:** three levels, from a nudge to the exact next move.
- **Undo** your last order, and a **debrief** after each shift with a timeline, an expert comparison and a tip.
- **Difficulty levels:** Trainee, Engineer and Control engineer.
- **Zoom and pan**, substation search, keyboard shortcuts, sound, large text and colour-blind-friendly colours.

## Copyright

© 2026 James Procter. All rights reserved. You're welcome to play Open Point, but its code, graphics, text and design may not be copied, modified, republished or reused without written permission. See [LICENSE](LICENSE).

## Files

- `index.html` is the standalone game.
- `open-point.html` is the same game without the page header, used to publish it as a Claude artifact.
- `art/` holds the optional hand-drawn art pack for Megawatt Island. See [art/ART-GUIDE.md](art/ART-GUIDE.md).
