# Synch Timer - Annular Fusion
![Screenshot of the Annular Fusion Timer app](https://i.ibb.co/J5y5kVc/annular-fusion-screenshot.png)

A synchronous timer created using React, Node and websockets to help musicians perform "Annular Fusion" by Chappell Kingsland over Zoom.

View the app live at: https://aviolin.github.io/annular-fusion

# How To Use
Each performer should load the app on a device. One performer will be chosen as the leader, and they will tick the box labeled "Control all clients?" in the admin controls. When the leader hits the start button, each client will begin the timers. Performers can also use it in "solo mode" by unchecking the checkbox, and using the app to practice with.

# Features
* Timer with countdown for each section of the piece of music.
* Node.js server using Express and WebSockets to notify all clients when to start and stop their timers.
* Ability to control only your own client or all clients.

## Todo
* Create rooms so there can be multiple groups using the app at one time.
* Add the ability to create custom timer sections.

# Motivation
This project was created to help Nebula Ensemble perform "Annular Fusion" during a live Zoom concert in 2021. Each performer needed to begin at the same time, and stay together through many different sections of the piece that varied in length. The app was used during Nebula Ensemble's April 23rd, 2021 performance.
