# CS489 Team 4 Project
*We need a name. I suggest 'moral test' (or something similar), to hide our true motive and let user think that this is a test of AI/other people's moral sense.*
(I think it is not a test for the public, more like an experiment. So, I think we can just say it is a moral survey,  so the people would not feel they are tested, although I think some questions are not exactly related to moral. But I am little afraid also about the bias of people if we make a title.)

## Installation
#### Additional Node Packages
We will be using the [Firebase](https://www.npmjs.com/package/firebase) package. Install this after your app has been created by running `npm install --save firebase`.
To install country selector, run `npm i react-country-region-selector`.

## Overall Structure
### Intro
Welcome to *Moral Survey*! Thank you for agreeing to take part in this survey.

The purpose of our project is to study human's moral decision making process and help machine to make better moral decision for human.

The procedure involves filling an online survey that will take approximately 5 to 10 minutes. The questions will be asking whether if you agree on the moral decisions in some certain situations. Note that there is no absolute answer and you can freely choose the answer based on your own opinion.

Your responses will be confidential and we do not collect identifying information such as your name, email address or IP address. 

Clicking on the start button below indicates that you have read the above information and voluntarily agree to participate.
### Experiment
Containing our main experiment. The order:
1. Basic info collection (age, gender, CS background (yes/no))
2. Question 1
3. Question 2
..  
10. Question 10   
### Outro
Thank you so much for participating in the survey!

*Moral Survey* is actually a blinded experiment. Two sets of questions are randomly assigned to our participants. One tells the participants that moral decisions are all made by machine, while the other one tells that some humans have made the same moral decisions. You had only answered one of the question sets. 

The purpose of this experiment is to study if human has any bias on moral decisions made by machine, that human may change their opinion, depending on who has made the decisions. 

This is an important experiment to measure the level of trust of human on machine, before we discuss how machine should make their moral decisions. The machine's decisions will only have its significant meaning, if human trusts its decisions, as much as other human's decisions.

If you are interested in our experiment or you are curious about the experiment result analysis, please contact *some contact*. 

Thank you again for your support and participation.
### Analysis
We have only two kinds of numbers: agreement rate with AI, and agreement rate with human.
We can customize more on:
- Scope
	- Per question
	- In total
- Age: This depends on how diverse our result is. Most simple way:
	- Below 25
	- Over 25
- Gender
	- Male
	- Female

I'm thinking about bar graph, but not sure if it is the right choice.

## Database structure
There are two main collections:
1. Question
	- question 1
		- description AI version
		- description human version
		- image source (if applicable, backend would have to deal with whether to load image)
2. UserRecord
	- user record 1
		- version: does this user answer the AI version or human version
		- age
		- gender
		- answers: map of answer to all the questions (if we random from the set of questions, then some questions will not have answer).
			- "q1": "Agree"
			- "q2": "Disagree"
			- "q3": "Unapplicable"
			- etc.

There is an option of accumulating the answers of all user into the question,
so that dont have to recalculate everything from scratch for analysis every time.
But that depends..
We can come back to fix that later
