---
title: "Develop mainstream apps with Low/No-Code platforms"
description: How low/no code platforms can be utlized to develop mainstream software applications
date: 2021-06-19
slug: develop-mainstream-apps-with-low-or-no-code-platforms
authors: arunatebel
tags: [lowcode, nocode]
hide_table_of_contents: false
---

If you are reading this post, there is a high chance that you might be using various software, apps, or tools at work and in your personal life. Haven't you ever wondered that most of those apps share a common set of features? Haven't you ever felt that most of them can be combined into one app or a platform so you can manage everything from a single place?

Low or no-code platforms (will be referred to as 'low code platforms' hereafter) are there to solve this problem. In the first article of this series,  [Introduction to "Low | No Code Software Development"](https://archeun.hashnode.dev/introduction-to-low-or-no-code-software-development), I explained why such a discipline exists and its evolution.

The motivation behind low code platforms is that one should not be using a variety of software apps to cater to their multiple similar requirements. There are Todo apps, Note-taking apps, Task trackers, project management apps, etc. out there providing a set of technically similar core functionalities. But to the end-user, they are drastically different because of the way those features are presented.

Let me list down a few of the [X] Management Applications that are widely available in the market.

- Inventory Management
- Asset Management
- Task Management
- Project Management
- Invoice/Billing Management
- Client Information Management
- Product Information Management
- Document Management
- Note or List Management
- Classroom Management

As you know, the list is extensive. All of the above applications share a set of common features. But obviously, some additional distinct features make them unique to the business domain they operate on. Due to that, consumers tend to use separate apps for different purposes. There is no harm and also there are some advantages of doing that too.

But as software developers, we should be able to identify the technical similarity of these apps and address the problem. As one can see, all of the above [X] Management Apps share a set of common features as below.

- The data
    - Data model is structured and predefined
    - Business model defines the data model, and also the relationship between data.
    - Data is dynamic, subject to change. Data is retrieved, stored, modified, and deleted by user actions
- The user interface
    - User interacts with data utilizing UI controls. The type of the UI control will closely match the type of data
    - UI is logically laid out to match the business model. It has a layout and most of the time follows a similar structure to the data model.
    - Input data through UI can be validated against rules. User actions too.
- User actions,
    - Trigger changes to the data. How the data is changed is controlled through programmed logic.
    - Trigger events in the system. Other components in the system listen to these events and propagate similar changes.
    - Interacts with outside systems
- Reporting/Visualization
    - Users can define ways to retrieve data as per their requirements, through reports/charts and file exports.
- May have some additional set of features
    - Those systems have ways to provision users and their access to data, and which level of permissions to grant. They provide authenticating mechanisms.
    - Logging and auditing - capturing user actions and events in a presentable way. Improves the integrity of the users and the system
    - Security - prevent unintended access and various other vulnerabilities.
    - Notifications - users are notified through a variety of ways about the changes they might be interested in.

The above is an abstract way of defining the features (or the functionality) of such a system. For a well-established organization or a dedicated team of software engineers, it does not take an enormous effort to identify the common patterns and implement a service platform to combine those features. That platform will facilitate the end-user to build their services/software applications on top of it. That platform can be categorized as a **low code platform for building information management systems**; one among the few.

The end goal here is not to replace the apps I listed down previously with a single platform. It is not only impossible to address all of the features of those sophisticated apps through a single platform, but it also makes such a platform heavy and complex to maintain.

It is important to identify, to which extent can we abstract out and build that platform for creating such apps. Our intention here is to provide the business or domain experts with the ability to build the core functionality of their apps through this platform and get a programmer's help only to fulfill the set of specific requirements. This will be a win-win situation for the software industry and also the end-users.

- Business or domain experts know,
    - About their data and the UI. So they can tell,
        - How their data is structured. So the low code platform should provide a way to define the data model
        - How their screens/UI should be laid out. So the platform should provide them a way to define the screens/UI controls.
        - How their data is represented in the UI. The platform should provide them a way to connect the data to the screens and UI
        - What actions user can perform on their data. The platform should provide them a way to define actions to insert or modify their data.
        - What constraints are enforced upon changing their data. The platform should provide them a way to add rules/validations for their data.
        - How to retrieve data so that they have a business value. The platform should provide them a way to create reports or charts.
    - What are the consequences of the actions on their data. So they can tell,
        - How to pre-process/validate the data coming through UI
        - What are the side effects that can happen due to the user actions.
            - Define the side effect in the form or `(input) → [ black-box ] → (output)`
            - The platform can have predefined templates of black-boxes to be used off the shelf. If needed, the domain expert can define custom black-boxes with the help of a programmer.
    - About the different types of users/roles their business has. So they can,
        - Register users/accounts inside the system. Categorize users by their role.
        - Define the access levels to the data for each user/role
        - What actions can users perform on data
    - How their data and actions interact with systems in the outer world

Even though the above might sound too abstract or generic, it is not impossible to build such a platform to address this problem domain. It is up to the software architects to figure out the design to support such a platform. It is up to the technical leads to look for the technology we can harness to build it. There are plentiful voids, which can be filled in by a well-set, dedicated startup.
