# CS489 Team 4 Project
*We need a name. I suggest 'moral test' (or something similar), to hide our true motive and let user think that this is a test of AI/other people's moral sense.*
(I think it is not a test for the public, more like an experiment. So, I think we can just say it is a moral survey,  so the people would not feel they are tested, although I think some questions are not exactly related to moral. But I am little afraid also about the bias of people if we make a title.)

## Installation
#### Additional Node Packages
We will be using the [Firebase](https://www.npmjs.com/package/firebase) package. Install this after your app has been created by running `npm install --save firebase`.

## Overall Structure
### Intro
Welcome to *Moral Survey*!

The purpose of our project is to study human's moral decision making process and help machine to make better moral decision for human.

The procedure involves filling an online survey that will take approximately 10 minutes. 

Your responses will be confidential and we do not collect identifying information such as your name, email address or IP address. 

Clicking on the start button below indicates that you have read the above information and voluntarily agree to participate.
### Experiment
Containing our main experiment. The order:
1. Basic info collection (age, gender, CS background (yes/no))
2. Question 1
3. Question 2
..  
10. Question 10   
### Outtro
Clarifying that the test is not about AI/human moral sense.
Explain our motive. Let the participant sees the analysis?
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
