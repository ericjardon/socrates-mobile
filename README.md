# Socrates Mobile Front End
IBM challenge

This is the client application prototype for an Online Voting System proposal named Socrates.

Socrates is an auditable, coercion-resistant, individually and universally-verifiable voting system that uses distributed vote collection servers, public key infrastructure, 
homoencryption, blockain logging services, and a public bulletin board for the voter's unique vote hashes. 

The application is built on React Native and performs a single post request to IBM cloud, to reduce the probability of MiTM attacks.

The application is designed to be simple and straightforward to use. The voter follows a sequence of well-documented steps and can understand with minimum technical expertise.
The voter is able to verify that their vote is:
- registered-as-cast (by checking that the received OTP code by SMS matches their one-time ballot),
- and that it is cast-as-stored (by checking the hash in the Public Bulletin Board).
