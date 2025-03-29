# DIGITS / S&P-ARK / ALPES

Distributed Internet Geographic Infrastructure Transmission Service (DIGITS)

Simple Playground - Achieving Required Knowledge (S&P-ARK)

Application Layer Protocol, Experimental Setup (ALPES)

# The Vision

Well, every journey starts with the first step.

But before we talk about the first step, let’s rather talk about the goals, and
let’s talk about the vision.

The Internet – when it barely provided **the TELNET, the E-MAIL and the FTP
services** – was not more than “just the Internet”. Only a few scientists and
technicians knew about the existence of the Internet.

This should change with **the invention of HTML (and its extensions CSS and
JavaScript)**, when the Internet became to be the “World Wide Web (WWW)”.

Nowadays, though many of the circumstances changed – financial, organizational,
political and lawful circumstances, just to list some of them – the Internet is
still based on the “working horse” HTML.

However, nowadays the HTML content of the web pages is accompanied by many new
services like streaming services for offline or online real time media (voice,
music, video), by services for up- and download of arbitrary files and by peer
to peer services for files, voice, music and video, as well as instant messages.

Nearly any information that can be expressed as digital data, can be exchanged
via the Internet, so **the Internet is actually a "Vast Collaboration Tool for
Mankind"**.

Just **one thing is still restricted to the gaming community and has not yet
found the broad acceptance by the mainstream of Internet companies and Internet
communities**:

- This is real time 3D computer graphics and, even better, virtual reality and
  mixed reality.

**With X3D / WebGL and WebXR**, all we hope is that the Internet once again
changes its face and becomes a kind of “Enternet”, so to “enter” a greater –
virtual – universe that helps us to cope with our original – real – universe.

Another possible vision besides the “Enternet” would be the “3D Web”, which
provides basic access to a broad variety of 3D resources and free geographic
infrastructure.

**Metaphoric speech**:

The “Enternet” and the “3D Web” would be two siblings, which would provide the
most important building blocks for Integrated 3D Collaboration Services.

The “Enternet” would provide the basic 3D Multiuser functions (including the UI
for the users and the connection to the IoT),

the “3D Web” would provide for efficient download of 3D resources and
geographic infrastructure.

Both should be “grown up together”, to be compatible to each other.

# Latest Achievements

## A. The Project had been started

In spring 2022, we decided to actually start the S&P-ARK project.

Actually, S&P-ARK is a [part of the DIGITS Project (which is rather a Vision
than a Project)](https://github.com/christoph-v/digits), however, it is managed
in a separate repository (this repository).

Recently, an own WIKI page has been introduced to better explain the
[connection between DIGITS and S&P-ARK](https://github.com/christoph-v/spark/wiki/DIGITS).

Puchberg, 2022-06-11

slightly updated on 2024-05-11

## B. The S&P-ARK Wiki has been created

[S&P-ARK Wiki](https://github.com/christoph-v/spark/wiki)

## C. The Society has been Founded

The repository spark (this repository) is still under my responsibility, but
I am trying to organize my (better our) work within the boundaries of the
freshly founded association
[**"Society for Lifelong Collaborating"**](https://lc-soc-lc.or.at).

Some very first experiments with DIS and FreeWRL have been done in the scope of
The Society, but the approbation of my projects by the organs of that society
is still pending.

Vienna, 2025-03-02

# Statements

Following statements are intended to hold true for this repository

## 1. S&P-ARK, The Project

S&P-ARK is not a "real" project, but it is used to publish my opinion
about a project / or about projects / that should be conducted by the Web3D
Community to elaborate the "Community Requirements" for the NSN and to use the
NSN, after it will have been standardized.

So, actually this means, I (we) will do experiments, we will test this or that
software, but we will implement our own software only, if this is needed to
test something else.

The current repository is the place for such experiments and/or tests and/or
testing software.

### 1.1. (2022-03-24) The "Template" Project had actually been started

with following TODO List

#### Phase 0 - Telling Stories / Collecting Information - DONE

We make following assumptions:
1. Assumption (1) - We will start with implementing an open source conferencing tool for small, closed groups
2. Assumption (2) - The tool will use a "tiny" VPN for RTP communication over IP Multicast (voice, video RFC 3551)
3. Assumption (3) - The tool will have browser based clients, implemented in HTML and JavaScript
4. Assumption (4) - The sharing of files will be provided by the ownCloud software
5. Assumption (5) - We will modify the ownCloud software, so that it provides the necessary authentication and authorization services for the tool 
6. Assumption (6) - Using HTML and JavaScript will be a preparation for tinkering with X3Dv4
7. Assumption (7) - We will select one of the following approaches (thank you, Sven-Erik, John and Kevin, for all your hints)

Probably, we will follow one of the following approaches
1. Approach (A) - [https://www.kamailio.org](https://www.kamailio.org)
2. Approach (B) - [https://freeswitch.com](https://freeswitch.com)
3. Approach (C) - [https://peerjs.com](https://peerjs.com)
4. Approach (D) - openfire server / jingle RTC client
5. Approach (E) - pure WebRTC and Node.js
6. Approach (F) - Strophe.js

We acknowledge following additional resources of information
1. Additional Info (a) - [https://coderextreme.net/grasshopper](https://coderextreme.net/grasshopper) - peer 2 peer
2. Additional Info (b) - [https://coderextreme.net/BigBuck](https://coderextreme.net/BigBuck) - video texture
3. Additional Info (c) - [https://quiet-forest-75069.herokuapp.com](https://quiet-forest-75069.herokuapp.com) - socket.io (text/chat/multiuser app)

#### Phase 1 - Open Source Conferencing Tool (OSC/AR) - ONGOING

Deadline: it's done, when it's done

**Summary:**

0. Some Preparations
   - Setup the Infrastructure
   - First Experiments (WebRTC, socket.io, AJAX/fetch(), Node.js)
   - Design of "Experimental Login Server Application (ELSA)"
1. Try multicast WebRTC voice conference with HTTP Login and pure Node.js
   - Design of "Simple ALP Login Server Application (SALSA)"
2. If this works --> try the same with video
3. If this works --> try the same with data
4. If this simple multicast works with voice + video + data --> finished
5. If it fails, try WebRTC + SIP.js with kamailio (or FreeSwitch)
6. If multicast does not work at all --> do it with unicast without mixer
7. If it does not work without mixer --> look for a mixer

Next step: tinker with X3Dv4

#### Phase 2 - ALPES Project (Application Layer Protocol, Experimental Setup)

Tbd.

See the [README of the ALPES directory](https://github.com/christoph-v/spark/tree/master/ALPES).

### 1.2. Since 2023-05-03 the "Template" Project has been ON HOLD

The reason for the S&P-ARK project being "ON HOLD" is, I am currently occupied
with the establishment of [**The Society**](https://lc-soc-lc.or.at).

Furthermore, I was doing some "Experiments with DIS" (see the following
[LINK](https://github.com/christoph-v/psark/tree/master/apps/tprev)).

### 1.3. 2025-03-20 / Inofficial Decision to Start OSC/AR

I had already done some minor attempts to implement the "Open Source
Conferencing Tool" (those times I called it SOMA), but now 
[The Society](https://lc-soc-lc.or.at) has been successfully founded
and we have established our way of working.

Therefore, I asked the other members of The Society, if they could imagine
to be willing to test the "Open Source Conferencing Tool", once I would
have implemented it after some months or years.

Now, I am calling the "Open Source Conferencing Tool" the OSC/AR.

See the [README of the OSC/AR tool](https://github.com/christoph-v/spark/tree/master/ALPES/apps/osc_ar)

## 2. Everlasting Statements (last modified on 2019-07-23)

### 2.1. The GOALs of this project can be described as follows

- Develop a Demo Simple Multiuser Scene x) with Working Title "Spaceship Web3D" - tbd.
- SMS-BONES-GPS: Support Standardization of Network Sensor Node (NSN) xx)
- Hence helping to ignite what-I-call SMS Biotope or Extended Universe (Working Title)

x)  
A Simple Multiuser Scene is an X3Dv4 xxx) MU Scene, which uses standardized
communication protocols to communicate among scene instances and with a server.
It uses the X3D Network Sensor Node as one of its nodes to access the network

xx)  
The Network Sensor Node (NSN) was proposed some time ago. It enables the scene
author to define fields with arbitrary names (similar to Script or Prototype
nodes). Those fields can be used to send and receive the current value or change
requests for some network events and for some network states. Pre-defined
calculations can be used on the server side and client side calculations can be
autonomously implemented by the scene author to calculate the current value of
states and events.

The exact syntax and the protocol for the Network Sensor are still to be
defined. S&P-ARK shall help to gain knowledge about the possibilities we have
therefore.

xxx)  
X3Dv4 is version 4 of the "Extensible 3D" standard, which is developed at
[Web3D Consortium](http://www.web3d.org "Web3D Consortium").

xxxx)  
The acronym SMS-BONES-GPS means, we would like to support the idea of
using and/or profiling and/or defining IETF based communication protocols for
Mixed Reality multiuser scenes
i.e. the goal is to support something we would denote as
- Simple Multiuser Scenes - Based On Network Sensor - Global Protocol Spec
      
### 2.2. The content of this repository is licensed by a GPL 

## 3. Other Statements

### Statement on 2017-12-02 by [Christoph Valentin](https://github.com/christoph-v)

In a first approach, I will bring the documentation of SrrTrains v0.01 project
(.odt) to this repository to have it properly licensed

## 4. Links

This playground is a [GIT repository](https://github.com/christoph-v/spark)

The "SMS Biotope" or "Extended Universe" (working titles) has not got a location
yet.

[Write an E-MAIL to SrrTrains Core Team - LINK BROKEN!!!](http://lc-soc-lc.at/addendum.htm)

### 4.1. OUTPUT of the Playground

#### 4.1.1. Your Output Missing Here

#### 4.1.2. DRAFT for the Application Layer Protocol (ALP) over RTP

- at the directory [ALP @ GIT repository](https://github.com/christoph-v/spark/tree/master/ALP)

### 4.2. INPUT

#### 4.2.1. Your Input Missing Here

#### 4.2.2. Input from SrrTrains v0.01

- The Technical Summary: please refer to the
  [Technical Summary @ GIT repository](https://github.com/christoph-v/spark/tree/master/3rd-party-input/SrrTrains-v0.01/TechnicalSummary)
- The Hobby Reports: please refer to the
  ["Hobby Reports @ GIT repository"](https://github.com/christoph-v/spark/tree/master/3rd-party-input/SrrTrains-v0.01/HobbyReports)

#### 4.2.3. Input from Protocol Brainstorming

- The ESDP-BS: please refer to the
  ["ESDP-BS @ GIT repository"](https://github.com/christoph-v/spark/tree/master/3rd-party-input/esdp-bs)

#### 4.2.4. Input from John C.

- PC.MULTIPLAYER Game and Grasshopper Academy from John C., please refer to
  ["YOTTZUMM @ GIT repository"](https://github.com/christoph-v/spark/tree/master/3rd-party-input/yottzumm%40gmail.com)

#### 4.2.5. Project Exposee

- ["Project Exposé (2022-03-25) @ GIT Repository"](https://github.com/christoph-v/spark/tree/master/3rd-party-input/esdp-bs/project-exposee_v1.1-2022-03-25.txt)
  
