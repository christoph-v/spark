# S&P-ARK
Simple Playground - Achieving Required Knowledge

Following statements are intended to hold true for this repository

## 1. S&P-ARK was a TEMPLATE Project

S&P-ARK was not a "real" project, but it was used to publish my opinion
about a project / or about projects / that should be conducted by the Web3D
Community to elaborate the "Community Requirements" for the NSN and to use the
NSN, after it will have been standardized

### 1.1. Now (2022-03-24) the Project is actually started

with following TODO List

#### Phase 0 - Telling Stories / Collecting Information (DONE)

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

#### Phase 1 - Open Source Conferencing Tool (ONGOING)

Deadline: it's done, when it's done

0. Some Preparations (ONGOING)
   - Setup the Infrastructure (ONGOING)
   - First Experiments with WebRTC, AJAX/fetch() and Node.js
1. Try multicast WebRTC voice conference with HTTP Login and pure Node.js
   - Design of "Simple ALP Login Server Application (SALSA)"
2. If this works --> try the same with video
3. If this works --> try the same with data
4. If this simple multicast works with voice + video + data --> finished
5. If it fails, try WebRTC + SIP.js with kamailio (or FreeSwitch)
6. If multicast does not work at all --> do it with unicast without mixer
7. If it does not work without mixer --> look for a mixer

Next step: tinker with X3Dv4

## 2. Everlasting Statements (last modified on 2019-07-23)

### 2.1. The GOALs of this project can be described as follows

- Develop a Demo Simple Multiuser Scene x) with Working Title "Spaceship Web3D" - tbd.
- SMS-BONES-GPS: Support Standardization of Network Sensor Node (NSN) xx)
- Hence igniting what-I-call SMS Biotope or Extended Universe (Working Title)

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
  
