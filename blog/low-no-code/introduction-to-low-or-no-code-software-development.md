---
title: Introduction to 'Low | No Code Software Development'
description: Industry status, tools, ecosystem in the Low/No Code software development
date: 2021-06-19
slug: intro-to-low-no-code-software-development
authors: arunatebel
tags: [lowcode, nocode]
hide_table_of_contents: false
---

# Humans like to automate things.

Computing goes back to the age where our early ancestors used  [Abacus](https://en.wikipedia.org/wiki/Abacus) for calculations. Since then, the concepts like calculation, computation, data gathering, data processing have been evolved to a great extent. These concepts have played a vital role in the daily life of humans for a long time. As we evolved to be an intelligent race, there was one critically important skill which helped us to distinguish from other animals. That was the capability of **finding ways to automate things**.
<!--truncate-->
![robot-automation.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1622099899689/9_cOZxkOX.jpeg)

Humans were always good at building tools to ease their daily recurring tasks. They figured out how to combine those tools to build complex systems. Then they figured out how to use those systems to automate the recurring parts of their life. They built  [clocks run by water](https://en.wikipedia.org/wiki/Water_clock)  to keep track of time. They built wind powered spinning mills. It is the fundamental human nature to improve their tools to do more work for them; automatically, faster and better.

# What does this mean for software

Similar to the other tools, software also tend to follow the same pattern since they are written and used by humans ( [well, 99% of the time](https://singularityhub.com/2020/08/02/this-ai-could-bring-us-computers-that-can-write-software/) ). Back in the early days developers wrote programs using  low level languages like  [Assembly](https://en.wikipedia.org/wiki/Assembly_language) . When things got complicated, we built programming languages which are more closer to humans than machines. Then we recognized the common patterns and created reusable libraries of code which could be shared with other developers. This might have been a huge breakthrough at that time! But is that all? No. We realized that the languages are for people who learn coding. For people who actually build software we created software development frameworks, abstracting out languages!

If you are a software developer, you know quite well that we did not stop at frameworks either. We desired more and more comfort when developing software. As a result, component libraries, (game) engines, CRMs, IDEs (intelligent enough to generate code for us), UI kits, website builders were built. So do you see the pattern we saw earlier with our ancestors here too? Yes, we are in an endless journey of finding ways to stay lazy and focus more on solving actual complex problems using software. As far as I see, this is smart and sensible. Software developers should not just code. They should think, design, invent and solve problems.

# So, where are we headed with software now?


>
"The future of coding is no coding at all" - Chris Wanstrath, CEO at GitHub.

Programming languages, frameworks, tools (and this entire ecosystem) we have been using to write software has evolved quite a lot over the past few decades. But the requirements or the problems we try to solve are not getting any simpler. They get too complex every day. Now, we are in the stage where we stop ***building software*** and start ***building software which builds software***.

The motivation behind this is to prevent developers from wasting time writing low level repetitive functionality over and over again for every software project they encounter. Instead, let the machines do those boring stuff and make them more focused on new inventions, designing stuff, solving complexities, improving usability and finding answers to the real world problems. That is how software developers mature over the time. Let the machines build the *not so intelligent* parts of the software. We, developers should get involved only when the things get interesting!

*Building software which builds software* can be approached primarily in two ways.

- Create intelligent programs/systems/robots which can write software. - This is where we tackle the problem with concepts like AI and machine learning.
- Invent a way for non-programmers to build software.

![artificial-intelligence-2167835_640.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1622100157578/1xhbQNnlH.jpeg)

Out of the above two approaches, the domain experts are making promising progress towards the first approach. See [DEEPCODER: LEARNING TO WRITE PROGRAMS](https://openreview.net/pdf?id=ByldLrqlx). But it seems a bit far from being achieved in the near future. Also, it will cost a painful amount of money for the industry to adopt such a technology.

So let's take a look at where the industry is heading with regards to the second approach.

# Software development for non programmers

How do non programmers see software? To us humans, a software is something which does one or more of the below. Software will,

- accept data as inputs and will output useful information
- transform/process/organize our data and convert them into useful information
- store our data so that we can use them later
- let us speed up, automate and streamline the tasks we perform daily
- allow us to connect with the outer world
- allow use to predict things

Even though the above list can be exhaustive, we see that most software share some common patterns. Looking from the top, a software can be seen as a set of black boxes interconnected with each other to provide a required functionality. If we unwrap one of these boxes, we will see another set of tiny black boxes whose duty is to make their parent box function. If we repeatedly keep unwrapping them, until we hit the bottom where the hardware lives, we get to see a ***network of interconnected black boxes***. Each of these black boxes are meant to perform a well defined task.

While it is the software developer's responsibility to build these black boxes, there is no reason to prevent non programmers from using those black boxes to build software. Let's see why.

If you went through the software engineering 101, you must be well familiar with concepts like *reusable code*, *abstraction*, *encapsulation*, *interfaces*, *layered architecture*, *component based development* and what not. If you think carefully, all of these concepts drive us to write the black boxes we saw above. If we go further, you might have heard your tech lead, architect or the senior engineer repeatedly asking you,

- "refactor this code so it can be reused ..."
- "move this function to a module and make it accept parameters ..."
- "lets wrap it in a component, then the other team may find it easy to customize ..."
- "why don't we build and publish a library out of this ..."
- "can you implement this feature in a generic way, we have another set of clients coming in asking for the same feature, *but with some minor changes* ..."

The motivation behind all these statements is to make our software built out of a set of black boxes. We end up building high level building blocks (abstraction). We start to see the common patterns and try to apply them to solve multiple problems (interfaces). We need to cater many clients at once. So, Instead of redoing and reinventing, we start to reuse and share (components/libraries). We hide the complexity and make things understandable to humans (encapsulation). We organize those black boxes in a way that we can explain it to a 5 year old (layered architecture).

During the past few decades, we have done well with the above concepts. Now the programmers are highly skilled so that they can build complex systems within weeks or days using the highly advanced black boxes. But why should we let only the developers use them. Can't we further **improve** (wrap, abstract-out, simplify, generalize) those boxes so that non technical people can also start using them. Why can't we let our marketing manager, HR admin, accountant, sales team, business analyst or the inventory manager use these black boxes and ask them to build the software by their own?

Even though this might sound new, you might also have thought the same when developing software. Like below.

>
Why can't I further improve my code and make my components reusable so that eventually my project manager can get this software built by his own?

You are not alone.

It is actually happening! The software industry has taken this seriously. There are quite a few ***no code software development platforms*** which have been emerged during the past few years. Market research is being carried out to measure the sustainability of such platforms. The results look promising. Giants in silicon valley have made acquisitions. The *no code software development movement* has begun.

# No code software development

As discussed above, there is an emerging discipline called  [no-code software development](https://en.wikipedia.org/wiki/No-code_development_platform) where non programmers build software to solve their problems. These platforms primarily target (as of now) building business and data driven software. Following are some key characteristics of such platforms.

- Users are provided with a UI to define what their software should look like
    - Drag and drop blocks/components to define views(screens)
    - Connect those blocks with lines to define the flow
- Users define their data
    - They define how their data is structured (technically, databases or documents)
    - They define how their data is stored (tables)
    - They define how their data is related to each other (relationships)
- Users define how their UIs interact with their data
    - They connect their UI with their data
    - They define any transformations/conversions which should happen when data is shown in UI
    - They define how the UI manipulates their data (For eg: CRUD operations)
- Users connect their apps to the outer world
    - They connect their apps to other software systems through APIs by setting up the urls and parameters.
    - They define ways to trigger side effects by actions (send an email, create an event in the calendar etc.)
    - They control the access to their data. Platform provides graphical ways to define authentication and authorization

![games-2801332_1280.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1622100251777/y13uy6_T_.jpeg)

In a traditional software development environment, all of the above are implemented by a dedicated, skilled programmer. But by black boxing them, we allow non programmers to just drag and drop them to define their software. Major distinction here is, the programmers teach software *what to do* and *how to do* it both. But, with no code platforms non programmers can just tell software *what to do* and they get it done. The *how to do* part is already taught to those black boxes by a developer. Due to this nature, no code software development is considered a **declarative approach** to build software.


>
No code is meant to help accelerate the development cycle by bypassing traditional IT development constraints of time, money, and scarce software development and human capital resources to allow teams to align their business strategy with a rapid development process.

In most of the no code software development platforms there is a,

- UI to drag and drop components/blocks which contains logic to perform a task
- A graphical way to interconnect them (by drawing lines etc.)
- A declarative way to define actions, dependencies, validations etc.
- A way to graphically organize and manipulate their data
- A set of built in components which can be used off the shelf to quickly add a set of functionality at once.

# What the industry has to offer with regards to no code software development

There are a set of well known no code software development platforms. Below are some commonly heard names.

## Paid/Fremium/Free Trials

-  [Microsoft PowerApps](https://powerapps.microsoft.com/en-us/)
-  [Oracle Visual Builder](https://docs.oracle.com/en/cloud/paas/app-builder-cloud/)
-  [Google AppSheet](https://www.appsheet.com/)
-  [BettyBlocks](https://www.bettyblocks.com/)
-  [Codebots](https://codebots.com/)
-  [Airtable](https://airtable.com/)
-  [Nocode.tech](https://www.nocode.tech/)
-  [Webflow](https://webflow.com/)
-  [Adalo](https://www.adalo.com/)

## Free/Opensource

-  [convertigo](https://www.convertigo.com/)
-  [Joget](https://www.joget.org/)
-  [Budibase](https://www.budibase.com/)

Even though this domain is competitive, there is enough room for startups to think about no code platforms as the starting point of their journey. We still have enough areas to improve; mainly with regards to open source. With the adequate creativity and imagination, the sky is the limit. We can chose a problem and think of a way to creatively address it through a no code platform.

>
We’re moving into a world where people who understand the business situation the best or those who interact with customers the most will be building the product themselves,” says Emmanuel Straschnov, co-founder of no-code platform Bubble.

It should be apparent that no code platforms do not target eliminating coded software 100%. That is not even possible at all. The focus is to reduce the complexity, cost, time, effort and also lower the intellectual capacity bounds to build software. It might be foolish to say that we can fully get rid of developers and automate the process of building software, because as I said earlier, the problems in the real world are too complex, vague and fuzzy. Building blocks will never work in such cases.

Due to the above reasons, there are also low code platforms, where programmers get involved to cater the specific requirements which cannot (or too complex to) be implemented in no code platforms. Most no code platforms provide a way to attach code into no code solutions to solve this problem. Therefore, they can also be categorized as low code platforms.

# Research

If you are further interested, there are a few researches carried out by Gartner and Forreseter about no code software development. Most of the papers are paid versions.

-  [Gartner Magic Quadrant for Enterprise Low-Code Application Platforms](https://www.gartner.com/en/documents/3956079/magic-quadrant-for-enterprise-low-code-application-platf)
-  [Microsoft Is About To Shake Up Low-Code Platforms](https://reprints.forrester.com/#/assets/2/108/RES158837/reports)


>
The demand for software far exceeds the supply of coders. No code development platforms are empowering the citizen developer to take innovation, software development and app development into their own hands as every business becomes a software business. - BettyBlocks

There are a few white papers, articles and tutorials written by the industry experts.

-  [Whitepaper - The Ultimate Guide To No-Code](https://www2.bettyblocks.com/hubfs/08-08_A4_Whitepaper_UltimateGuideToNoCode.pdf?utm_campaign=%5BWhitepaper%5D%20The%20Ultimate%20Guide%20to%20No-Code&utm_medium=email&_hsmi=75442697&_hsenc=p2ANqtz--nxnf5LhDXCyQM46vzaqJVFmBuLfUmXdXAqvEmHeWseYaQND5dXxjAMfgkJ4MjDJDPEh2Vtkcb5Dv9H4IarTwhvdmZ8Q&utm_content=75442697&utm_source=hs_automation)
-  [Bots that Code](https://codebots.com/assets/books/Bots-That-Code-Hydrogen-2019-web.pdf?__s=f8g5lrihxpbd7kghkp4w)
-  [IEE Spectrum: Programming Without Code: The Rise of No-Code Software Development](https://spectrum.ieee.org/tech-talk/computing/software/programming-without-code-no-code-software-development)
-  [BettyBlocks Platform Demo: How to Build a Case Management Application](https://www.bettyblocks.com/webinar-how-to-build-a-case-management-application-recap)
-  [Appraisal and performance application Demo](https://www.bettyblocks.com/appgallery/appraisal-and-performance?hsCtaTracking=ce77f84d-467d-4d36-a3b1-c711913fcd4e%7C63c38840-fc05-4948-a5a4-3b793c2f337d)

# Conclusion


![software-development-4165307_1280.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1622100423196/yRkeBcVAE.jpeg)

Human race have evolved and they are in a continuous journey to find ways to automate and streamline things. Along this journey they have come up with tools and systems to make complicated tasks easy. This applies to Software industry too. No code software development has emerged to allow non programmers build software without writing code. They automate their businesses, daily needs by building software by their own. They organize, connect and configure blocks of encapsulated logic to solve these problems. But still there is enough room for improvement in this discipline. Creativity and the imagination can take us to the extents that we did not even imagine existed in the software development discipline.
