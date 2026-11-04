# Open Point

*An electricity fault management game by James Procter. © 2026 James Procter.*

A browser game about running an electricity distribution network: 4 primary substations, 13 feeders, 37 street substations, a solar farm and two wind farms. The offshore wind farm (F12) and the onshore wind farm at Northfield (F13) each have their own feeder and breaker at Joulebury Primary: their output follows the wind, and the turbines shut down in gusts over 56 mph. You've just taken over the control desk on **Isle of Ohm** from Mags Whitley, who is retiring after 38 years. Your job is to keep the lights on in Port Ampere and the towns of Ohmsford, Joulebury, Voltcombe and Faraday Head.

## How to play

Open `index.html` in any modern browser. Nothing needs installing.

- **Locate** faults using fault passage indicators (the flags on each substation).
- **Isolate** the faulty cable by opening the switches at both ends.
- **Restore** customers by closing breakers and normally open points to back-feed from neighbouring feeders, without overloading them.
- **Repair** the damage and return the network to normal running.
- **The desk:** an alarm list under the header (click an alarm to jump to it, then acknowledge it), a timeline of the next four hours under the diagram with deadlines marked, an optional pause 10 minutes before each deadline, right-click (or press and hold) orders on the diagram, a minimap when zoomed in, and a bottom-sheet panel on phones. Press Esc for the pause menu, F for full screen and Shift + 1–5 for the side panel tabs. The weather sits in the header: click it for the forecast. News headlines scroll along a ticker under the alarm list, with public confidence beside them: click the ticker to open the newsroom and answer the press.
- **Quality of life:** the shift on screen saves itself and carries on after a reload ("Continue shift" on the title screen); ⏭ or N skips to the next event; hover anything on the diagram for a quick summary; the game asks before you switch off 500+ customers, the hospital, the airport or the docks; plan a switching schedule and send it as one, with each step waiting for the last; drag a team onto the diagram to send them, reorder their jobs, or follow their van on the map; filter and search the control log; separate volumes for alarms, effects and storm wind; search finds cables, feeders and teams; Tab, Enter, [ ] and O/C work the diagram from the keyboard; copy or save an image of your result at the end of a shift.
- **Incidents board:** every live fault, damaged site and piece of work in one list, with customers off by area. Each area says what has put its customers off and which team, if any, is on it. Give each area an estimated restoration time (ETR) and update it as the job changes. Customers who know when power is coming back ring less, meeting an ETR builds public confidence, and missing one costs it.
- **Field teams:** a standard shift has:
  - 2 senior authorised persons (SAPs) for 11 kV switching, circuit breakers and earthing
  - 2 jointers who do LV switching, cable testing, LV jointing and HV jointing, and 2 who do the same without HV jointing
  - 2 overhead teams for HV and LV overhead line work
  - 2 rapid responders, who are first on site to assess damage, patrol lines and read fault flags, and who can do LV switching but no jointing or overhead work

  A tree team cuts trees off lines, and on planned-work and career shifts a planned team does the maintenance and work requests. Contractors bring jointers and overhead linesmen but can't switch.
- **Kinds of work:** every job is one of LV switching (LV fuses and link boxes), HV switching (switches and circuit breakers), LV jointing, HV jointing, LV overhead or HV overhead, and only a team authorised for that kind can take it. The Incidents board groups faults and work by the kind of work each needs next. Some country substations have overhead LV ways, which need an overhead team rather than a jointer.
- **Fault location:** the test van gives the distance to an underground fault, give or take a little. Pinpoint it first (an extra half hour), or dig at the estimate and risk a second hole.
- **Seized switches:** an old manual switch sometimes won't move. Send a crew to free it (about an hour), or switch round it.
- **Crews check with control:** a crew sent to close a switch holds off if a new fault has tripped since the order, or if another team has started work on that cable.
- **Welfare van:** for long power cuts, send the van with hot drinks, food, phone charging and checks on vulnerable customers. It heads home when the power is back.
- **Safety documents:** before a crew repairs or maintains a cable, earth it at both ends and issue a permit to work. Afterwards, cancel the permit and remove the earths before switching it back on. Switching power onto an earthed cable causes a flashover. You can turn this off in Settings, and the training shift leaves it out.

Incidents include:

- cable faults, digger strikes and copper theft
- named storms and floods
- heatwaves
- cars hitting poles
- flickering lights that warn of a failing cable
- festival days
- low-voltage street faults: blown fuses, fuses that keep blowing, and broken neutrals
- repeated trips from a cable failing intermittently, which gets worse each time until you find and test it
- broken conductors that fall clear without tripping anything, so customers go off with no alarm and the wire may still be live
- a primary transformer failing, taking every circuit from that substation with it until it's back in service

Some days also bring events that add load or raise the stakes: a match at the stadium, the ferry on shore power, school exams, a minister's visit, or a customer on home oxygen whose backup only lasts so long.

You score on customer interruptions (CI) and customer minutes lost (CML).

There is a guided training shift, four story shifts, a free play mode where you pick the incident and the size of your team, and a network editor for building your own.

**Low-voltage network:** each street substation feeds two to four LV ways, each through its own fuse, and some ways end at a link box shared with a neighbouring substation. Open a substation and switch between its **11 kV** and **Low voltage** views to see its switches, or its LV ways and link boxes.

- **Blown fuse:** some of a substation's customers are off while the rest are on. Send a crew to re-fuse. If it blows again straight away, the street cable has a fault and LV jointers need to repair it.
- **Fuse that keeps blowing:** it holds for a while, then blows again, worse each time. Fit an auto-reclosing fuse to restore supply and pinpoint the fault, then repair it with the street still live.
- **Broken neutral:** customers report shocks from taps and lights flaring. Make the street safe within the hour by taking its fuse out, then repair the neutral.
- **Backfeeding:** when a substation is off at 11 kV, close a link box to feed one of its streets from a neighbour, if the neighbour's transformer has room. Open it again before the substation's own supply returns: tie two different primaries together and the link box fuses blow.

**Mobile generators:** two are kept at the generator depot west of Port Ampere. Hire one for a substation that's cut off (£2,000 plus £250 an hour). It drives there by road, connects to the low-voltage board in 20 minutes, and feeds as many streets as it can carry (about 500 customers). A big substation can need two, or one plus a backfeed. Each heads home on its own once mains supply returns.

Press enquiries pause the clock and pop up on screen, so you can promise a restoration time or give a holding statement.

## Career

Run the island week by week through the seasons, Monday to Friday. Each shift starts at 07:00 (or 19:00 for a night shift) with the network healthy, and trouble develops as the day goes on.

- **Auto-reclose.** Overhead circuits close themselves again after a fault: two shots, then lockout. Passing faults become short interruptions, which don't count towards CI or CML. Pole-mounted reclosers and auto-sectionalisers on the lines limit how many customers go off. Put AR out before crews work near live lines.
- **Work requests.** Tree cutters, jointers and maintenance crews ask for cables to be switched out during the shift. Switch them out without anyone losing power and hand them over to earn a credit; ignore them and the team stands down at a cost.
- **Seasonal weather.** Now and then: hot days and thunderstorms in summer, wind warnings in autumn and winter, thunderstorms in spring, and snow in winter, which slows every journey and repair. Weather shows on the map, with a badge in the corner.
- **Random events.** Every shift brings a mix of surprises: breaker trips that clear on reclose, cable faults, copper theft (more likely at night), digger strikes in the daytime, street faults and lightning strikes.

Drag the map with the mouse or one finger to move around it, and pinch or scroll to zoom.

- **Budget.** Every shift has a budget. Crew time, overtime, contractors, welfare visits, materials and the regulator's fines for customer minutes lost all come out of it.
- **Rewards.** Stars earn a bonus and experience. Experience promotes you from Trainee engineer up to Control engineer, and the shifts get harder as you rise.
- **Upgrades.** Spend your savings on remote control for substations, putting overhead lines underground, auto-reclosers, remote fault flags, extra field teams and rapid responders, a second depot at Joulebury, and backup generators for critical sites.
- **Planned work.** Switch a cable out for maintenance without anyone losing power, then return to normal running.
- **People.** Arrange welfare visits for vulnerable customers. Crews must rest after 12 hours. You can call in contractors.
- **Story.** Messages from Mags, the mayor, the finance director and the Weather Desk.
- **Handovers.** Some shifts start mid-incident: the outgoing engineer hands over the desk with things as they stand.
- **Your network.** Every cable and line has a condition that wears down over time. Worn ones fail and seize more often; faults wear them further. The asset register lists them worst first.
- **Capital budget.** Each year (16 weeks) brings £60,000 to replace worn cables, refurbish lines and reinforce busy circuits. Up to £15,000 carries over; the rest lapses.
- **New connections and load growth.** Developers ask to connect housing, car chargers, business units and heat pumps. They pay towards it, but every connection adds load, and demand grows a little every shift.

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
- `art/` holds the optional hand-drawn art pack for the Isle of Ohm. See [art/ART-GUIDE.md](art/ART-GUIDE.md).
