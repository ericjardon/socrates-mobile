# Socrates Mobile
## IBM challenge

This is the client application prototype for an Online Voting System proposal named Socrates, developed in a Hackathon.
### What is Socrates?
Socrates is an **auditable**, **coercion-resistant**, **individually and universally-verifiable** voting system that uses distributed vote collection servers, blockain logging services, homomorphic encryption, public key infrastructure, and features a public bulletin board for storing the unique votes' hashes.

### Socrates Mobile Application
The application prototype is built using React Native and Expo, and performs a single post request to IBM cloud and only after authenticating, to reduce the probability of MiTM attacks and ensure transparency of the system at the same time.

### Features
The application is designed to be simple and straightforward to use. 
The voter follows a sequence of well-documented steps and can understand with minimum technical expertise.
The voter is able to verify that their vote is:
- registered-as-cast (by checking that the received OTP code by SMS matches their one-time ballot),
- and that it is cast-as-stored (by checking the hash in the Public Bulletin Board).

To avoid voter coercion, the voter is allowed to cast a vote as many times as needed. Only the last vote is the one that will be counted.
