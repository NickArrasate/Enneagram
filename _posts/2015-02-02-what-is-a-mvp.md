---
layout: post
title:  What is an MVP??
subtitle:  Avoid unnecessary struggle by focusing on the M in M.V.P.
masthead:
  img_path: /img/what-is-mvp.jpg
  pat_path: null
  overlay: false
author: dave
date: 2015-02-02 15:36:37
categories:
- news
tags:
- MVP
- Shipping
- Startups
- Product
permalink: /blog/what-is-a-mvp.html
elsewhere:
  name: Slideshare
  url: https://www.slideshare.net/david_e_worth/what-even-is-a-mvp-for-bowtie-springboard
comments: false
share: true
published: false

---

What follows is a translation of the talk I gave ⋈ [BowTie](https://bowtie.io)'s [Springboard*](https://springboard.bowtied.io) event into a blog-post. It's a fast and loose translation that follows the talk kinda closely with additions where I feel fit. It is not a transcript but should follow the spirit of the talk well. You can find the my slides here: [**View Slides**](https://www.slideshare.net/david_e_worth/what-even-is-a-mvp-for-bowtie-springboard) / [**Download PDF**](https://springboard.bowtied.io/slides/Bowtie-Springboard-Presentation-David-Worth.pdf).

A live stream of the event was recorded to [YouTube](https://www.youtube.com/watch?v=wYPIYfhhvUo "A-100 Live Feed")_. The audio is not the best, but it is mostly decipherable…_ I start at ~3:10.

##### _*[Springboard](https://springboard.bowtied.io) was a "Ship-a-thon" with the main goal of getting teams of folks together to build something new and cool on the Bowtie.io platform. Teams were of varying sizes, experience levels, and time available. In order to help steer their thinking about their projects we decided to have me talk about focusing on a real MVP and delivering as quickly as possible._
<br><br>

### What is an MVP?

We at BowTie.io are basically asking everyone here to build something new and crazy for Springboard. We realize you have very different time tables. You've got some time off and can spend 20 hours per day building something new. Others of you have day jobs, kids, family, and 30 minutes a day. But... both groups of people have to think about something called an "MVP".

Who knows what MVP stands for? (all hands raise...)

Everyone does! (For those playing along at home who don't it stands for "Minimum Viable Product" e.g. the smallest thing you can launch and have it be a complete and meaningful thing.)

<br><br>

### Here's how I start a new project.

"Include ALL the things in my MVP". _This is a terrible idea._

**Focus. Focus hard. On your MVP.**

<pre>MVP
M.V.P.
(M).V.P.
-> (M.) <- V. P.</pre>

Yeah! That! The "Minimum" in MVP.

Focus on your "Minimum". Just like in rock climbing, you can't climb anything without getting your first foot or hand hold. But it's funny how, once you do, getting to the next position is much easier.

It's worth discussing the "Economics of an MVP", and we are definitely not going to get into academic economic theory but... there is a scarce resource here: _Hint: it's you_ (e.g. your time, your money, your customer's ability to pay for your time, etc.) This is particularly complicated. If you are a technical founder then you basically have to worry about your runway. If you are a non-technical founder it is even worse: You have to worry about your runway _and_ how expensive a consultancy you hire to help make your dream a reality is per-day or week.

What is a minimum in that case? You have a product idea: A website that make custom t-shirts, or a custom reservation systems built on a payment capture system. You know what your product is. But we rarely ask the question "What is the _least_ it can be?" And we should.

For example, I am very good at punting on design. I don't do design work at all. I basically put Bootstrap onto sites as hard as I can and wait for a creative team to make me look good. My job is to "build something that works" and with the creative side of the house we can make something that is good. That is generally _my_ minimum - it works when I click the button and then money flows magically into a bank account (this is false). How do **you** decide what stays and what goes?

<br><br>

### The power of "No."

"No" is a very potent word. It is actually very empowering. I have told everyone who has hired me in the last few years that it is one of my favorite words. This is not to be pretentious or a pain in the ass. If you say "No" and leave the conversation then you are being just that. If you say "no, and here's why" or "no, that's really hard and you need something simpler, let's find that" then you are being much more constructive. It's not "no, because I don't want to" but rather when someone says "I want to build the next Facebook" the answer is "well, they've already built Facebook, what is your differentiator? Let's focus on that."

To focus on that differentiator here is some anecdata to help:

*   **The long-standing "Native Mobile Application vs. Responsive Mobile Web Application" debate.** Many many customers want a native applications for both iOS and Android out of the gate. As a sales-engineer I know that means two separate projects to manage with essentially orthogonal code-bases. A single responsive web application, taking advantage of HTML tooling such as location-services, native storage, etc. allows a startup to at least get market validation _then_ build the big, complicated, native applications they want, and more importantly, now users want.

*   **In a similar vein, we once helped a Fortune-50 with a number of constraints...** They needed a "kiosk" experience in physical locations running a web application, against which the authentication mechanism was a magnetic card reader. We punted for a long time on the authentication and made the application work with a browser and mouse first, then made it responsive and work on a table, then wired up authentication to a "kiosk" (e.g. a bezel with a card-reader). It didn't matter at all how well authentication worked if there was no working application behind it. The responsiveness of the layout also did not matter if the application did not work. So we three phases of deployment, each its own MVP for a different context.

*   **What's My Tip** - [What's My Tip](//whatsmytip.bowtied.io) - this is a project I built before I met the BowTie.io team. The motivation was simple - rapid feedback for service-folks in restaurants. The original idea came from a physical device based around an alarm-clock with a big red LED display starting at say 20% and two buttons labeled 'up' and 'down'. When your server does something good you can push up to increase their tip and when they do badly you can push down to decrease their tip in plain view so they know and you know. This application was a very simple version of that idea built around a fundamental MVP - two buttons and a display, and it had to run on your cell-phone. So I built exactly that. It hand longer-term, non-MVP goals, of gathering location-based anonymous metrics and analytics, and reporting those to business-owners. But.. as it stands it is an MVP. It works. Today. On your phone. And you can show it to servers. It's not very good and nobody has ever used it in the real world. At least it shipped so I could figure that out.

<br><br>

### Khaanbaan!!!!

So the real question, and point of this post is, how do we really build these things. You probably already have some techniques for doing so, but there might be other techniques to help you. I actually use [Kanban](https://en.wikipedia.org/wiki/Kanban) at home and for lots of new projects because it is so lightweight. It uses sticky-notes, a wall, and a marker. It is very popular in "Agile teams" because of its simplicity and how easily a project's status can be tracked using it without burdening those doing the work. It's so simple in fact that an important detail can be easily over-looked: Tasks must be prioritized, and they are simply by their vertical location in a column. Put the most important ones at the top and the least important ones at the bottom. Move them through columns (sometimes called "swim-lanes") of "to-do", "in-progress", and "done" in those same priorities.

The process for building your initial Kanban board is really simple. Take all of the features of your application, put them on sticky notes, and put them on a table. Actually, make it easier first. Put them in a text editor so you can type quickly before you write by hand (probably slowly if you want them to be legible by everyone), _then_ put them on stickies, _then_ put them on the wall.

Put them on the wall in order, top to bottom, in order of importance. Be willing to bargain and argue with your team at this phase. Dig deep into why something is "important" or "unimportant" when doing so. This is the real point in your project where consensus around what you are _actually_ building is built. Once everything is on the board, talk through what things are necessary, and argue about what that means. Once you agree... draw a line under the last _necessary_ thing. _THAT_ is your MVP. You win at MVPs.

<br><br>

### Implement.

Once you have defined your MVP in terms of concrete, tangible tasks, simply walk down the list and implement in order. Ship them in order. Get them into the world quickly. SHIP!

Be pragmatic and be ruthless. If you finish your MVP well before you need to be done then, and only then, you can add non-MVP features. You can finally call Uber to have kittens delivered your house.

What tools does your team use to focus your MVP and organize work to be completed?

Thanks for reading this. If you enjoyed it, [follow me on Twitter](https://twitter.com/david_e_worth), and be sure to check out the ⋈ [BowTie MVP](https://bowtie.io/#signup).
