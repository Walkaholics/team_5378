# <p align="center"> National University of Singapore <br> CP2106 (Orbital) </p>
![icon](https://user-images.githubusercontent.com/103088135/180934522-54b0c8e9-1d1a-447f-be1d-5f6dd12aee3c.png)

## Team Name
*Walkaholics*
## Team Member
Shang Feiyang
Ho Jia We
## Date
2022 May - 2022 August
## Proposed Level of Achievement
*Project Gemini*
## Motivation
As more people are becoming aware of the significance of health, there is an even greater need for reliable health information. **Especially some university students like us, who spend most of their time studying hard; they might face a variety of health problems** such as anxiety disorders, Binge Eating Disorders, and obesity. However, it is difficult for them to understand their personal health conditions and make efficient approaches to alleviate them. This discourages them from taking the first step toward their health goals. 
 
Thus, we want to provide a professional analysis of users’ personal health data(e.g. age, height, weight, body fat percentage, sleep time) to recommend ways to improve their quality of life. We want to show our users that **even a small change like 2000 more steps per day could lead to their health improvements.** We also want to provide **a basic fitness plan for fitness beginners to start with and allow them to customize the plan while they become more professional at fitness.**
## Aim
We hope that our app could help users tackle some health issues(psychologically and physically) and have a healthier lifestyle.
We also hope to make managing one’s health easy and enjoyable for everyone. 
## User Stories
1. As a person who is looking for a healthier diet, I can input personal data of weight, height, and gender, and receive customized weekly diet plans.
2. As a person who is looking to lose weight, I want to be able to have a personalized exercise plan that can ensure the desired result.
3. As a person who is looking to build muscle, I want to be able to follow a reliable workout and nutrition plan that allows me to efficiently gain muscle mass.
4.  As a person who wants to track body data and see the changes,  I want to be able to see easier-understood plots and receive notifications when there are negative changes in my body
5. As a student who wants to manage stress, I want to be able to see personal health reports and what to do to release pressure.
## Scope of Project
**The App provides an interface for users to input their key health data such as age, height, weight, as well as their health goals; a weekly plan would also be recommended.**
- Features to be completed by the mid of June:
1. Fitness planner

   Provides users with a recommended weekly fitness plan
   Display details of each workout

2. Personal report

   Analysis based on user’s health data
   Display details with some data visualization and how their health levels are

- Features to be completed by the mid of July:
1. Customized diet plan

   Develop a personalized and editable weekly diet plan for users(they could change the specific food in the same category)

2. Report Page Add-on

   A TDEE Calculator that calculates user’s TDEE based on the activity rate they chose and their BMR
- By end of July:

A complete Settings page for users to change personal data, fitness goal, and upload a profile picture
## Tech Stack
 1. React Native (Frontend)
 2. Supabase (Backend)
 3. Expo CLI
 4. HTML/CSS/Javascript
## Our strengths compared to other similar apps:
- No ads, entirely free for all features, including customized plans for fitness and diet
- Beginner-friendly:  start with a basic fitness plan, and can change the level of exercise by changing to a different fitness plan as the user feels their - fitness level is improved (e.g. become healthier to build muscles)
Good UI/UX design, easy and comfortable to use
## Development Plan
May 9 to May 15: Complete Mockup, poster, and video

May 16 to May 22: Pick up necessary technologies - Javascript/HTML/CSS, React, Nodejs, Supabase

May 23 to May 29: Start building the register/login page

May 30 to June 5: Finalize the features and start building a user-health data input page.

June 6 to June 12: Start building the data reports page

June 13 to June 19: Finalize data report and fitness plan pages

June 20 to June 26: Testing and debugging

June 27 to July 3: Implementation of peer teams’ suggestions

July 4 to July 10: Implement additional capabilities – Diet plan Page

July 11 to July 17: Finalize the settings page, video, and poster

July 18 to July 24: Finalize README file, testing and debugging
## User Flow(MS1)
<img width="420" alt="image" src="https://user-images.githubusercontent.com/103088135/180937661-7c4f28d6-cb3c-4af1-a53c-9a10653cf06d.png">

## Problems Encountered
1.	For the data visualization part of the report page, firstly we decided to use stacked bar charts and add a marker showing the user’s data level in those ranges. However, the number labels on stacked bar charts are not cumulative, which is not suitable for displaying BMI and BFP ranges.<img width="200" alt="image" src="https://user-images.githubusercontent.com/103088135/180938890-bde1c262-3b3a-4104-8e42-c1ec6ce9b1c0.png"><br>Then we tried a few npm packages but all of them have error messages ‘View config getter callback for component `div` must be a function (received   `undefined`)’; finally realized that those are for web development only, and found a react native speedometer package.

2.	As for the plans page part, we discussed many times the customization part and how to recommend plans for users. Especially for the diet plan, to make the plan very detailed, we might need to learn machine learning and train models, which is too complicated for us and hard to complete before the end of July. <br>After several meetings, we decided in mid-June that for milestone 2, we will do a fitness plan only, and provide a basic plan based on the user's fitness   goal, then allow them to customize the amount of each exercise. 

3.	Since we want to allow users to change their fitness goal as their fitness level is improved, or they feel that their initial goal is too hard to achieve, we need to ensure that their diet and fitness plans are updated when they change their goals. However, the update() command will not work as the old and new plans are different and we didnot set primary keys but made it auto-generated. Besides, updating with different rows once at a time would make code very long complicated. Then we tried with deleting and inserting plans, but didn’t know why deleting and immediately insert when user clicks on ‘confim’ caused errors that only new diet plan inserted but fitness plan not. We thought it might be problems with async function or supabase bugs, but couldnt resolve this.<br>We finally decided to delete user plans once they click into the edit profile page, and since the only button users can click to exit that  page is ‘confirm’, we insert plans when user clicks on ‘confirm’ button. This fixes the problem for now, but we will certainly try to  find better ways, if   possible.

## Bugs Squashed
1. Diet Page shows nothing on Sunday
Debugging: firstly checks if it is the issue with variable day:
Change it to 0, and diet page shows Sunday’s diet plan. Then check for variable day. Research on Supabase async function to check if the index of data returned from getPlan() starts from 0, after confirming, remove the - 1 code, and Sunday’s diet plan shows correctly on diet page.
2. Circular Progress causing app to freeze
Added additional if-else statement to check if result is infinity as plan.length could be null as the async request for the plan details from supabase might not have been carried out yet. This is so that the “progress” value would not be infinity which when input into circular progress would cause the program to hang.
3. Main page data is not updated after editing profile
Upon toggling back to the main page from the profile page, the page is not re-rendered. So using react navigation, the function  “setDetailedData” would be called upon toggling back and this function updates the data displayed on the page.
4. BMI and BMR returned null or incorrect number in both userdata and editprofile pages
After clicking confirm, user profile data in supabase is updated, but bmr and bmi returned are null;
Added a useffect function to update bmi and bmi when data values are updated;
Then test again with edit profile feature - now the BMI and BMR is updated in supabase.

## Core Features
### Report Page

