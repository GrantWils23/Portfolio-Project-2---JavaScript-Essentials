<h1>Portfolio_Project_2 --- JavaScript_Essentials</h1>
<h1>Quiz Game!</h1>
<p>Yes I know what you are thinking, a very original title. This Quiz game is designed to test your knowledge on a whole wide range of topics. Each question is designed to be fun and interesting to the user as well as help the user learn new random bits of facts that they can tell their friends. This game is designed for all age groups in mind to have fun and learn if you don't know the answer you will learn the correct one too.</p>
To delve straight in to the quiz, please just click here to <a href="https://grantwils23.github.io/Portfolio-Project-2---JavaScript-Essentials/">Quiz Game</a>
<br><br>

![image](https://user-images.githubusercontent.com/72948843/139583320-9a4176cc-546e-4bda-84bf-84f35dcd1b2a.png)

# Contents

* [**User Experience UX**](<#user-experience-ux>)
    * [Wireframes](<#wireframes>)
    * [Site Structure](<#site-structure>)
    * [Design and Styles](<#design-choices>)
    *  [Font Selection](<#font-selection>)
    *  [Color Scheme](<#colour-scheme>)
* [**Features**](<#features>)
    * [Header](<#header>)
    * [Game Area](<#game-area>)
    * [Game Results](<#game-results>)
    * [Features left to implement](<#features-left-to-implement>)
* [**Testing**](<#testing>)
    * [Bugs](<#bugs>)
    * [Solved Bugs](<#solved-bugs>)
    * [Responsive Testing](<#responsive-testing>)
    * [Validation Testing](<#validation-testing>)
* [**Technologies Used**](<#technologies-used>)
* [**Deployment**](<#deployment>)
    * [Deployment of the project](<#deployment-of-the-project>)
    * [Cloning of the project](<#cloning-of-the-project>)
* [**Credit**](<#credits>)
    * [Content](<#content>)
    * [media](<#media>)
* [**Acknowledgements**](<#acknowledgements>)





# User Experience (UX)

## Wireframes
 <p>Below you can see the wireframe designs. This was the template of how I wanted to structure the website. From here you can see the design changes from a browser window to a player playing on a mobile device or tablet. The designs were made using <a href="https://balsamiq.com/wireframes/?gclid=Cj0KCQiAsqOMBhDFARIsAFBTN3eQX6VBw3HAvaxwNwtza1153MDst7_OyuBtz8vvgC2lfMN74b2jbB8aAiA4EALw_wcB" taget="_blank">Balsamiq</a></p>
<img src="https://user-images.githubusercontent.com/72948843/140789265-fceacf57-b045-4c05-b42a-4633662b1b2d.png">
<img src="https://user-images.githubusercontent.com/72948843/140790422-6cce8575-d2a6-4b00-a596-443e40f9757a.png">

[Back to Top](<#contents>)

## Site Structure
<p>The Website consists of one interactive front-end page. The shape of the page draws focus to the middle of the screen and is designed to engage the user. There are two sets of important JavaScript files in the project. The game_questions.js file and scripts.js file are required to run for the game to work correctly.</p>

[Back to Top](<#contents>)

## Design and Style
<hr>

## Font Selection 
<p>The fonts settled upon were 'Nunito' and 'Lato'. 'Nunito' was selected for the Body whilst 'Lato' was used for the title of the game.</p>
<ul>
    <li>'Lato' was choosen for its very sharp and dynamic style which gives the game some energy to the front end to catch the users eye.</li>
    <li>'Nunito' was choosen to complement the header because it is really easy on the eye and very clear to read but still retains a lot of similarities to 'Lato'.</li>
</ul>

[Back to Top](<#contents>)

## Color Scheme
<p>The color scheme choice was down to a combination of associations of what colors work well to draw the user's attention. The colors settled upon were black on the fonts and then in variations of green that blend in with vivid appeal. The styles and placing of the colors are important to the user experience. Using radiants centered to the center pulls your eyes to the center of the game area. whilst in the background, you have a subtle and very calming blend of colors from white to green. This helps the reader read the title of the page and the help button underneath.</p>

<li><span style="color:DarkOliveGreen;"><b>DarkOliveGreen</b></span> - #556B2F</li>
<li><span style="color:Green;"><b>Green</b></span> - #008000</li>
<li><span style="color:DarkSeaGreen;"><b>DarkSeaGreen</b></span> - #8FBC8F</li>
<li><span style="color:LightGreen;"><b>LightGreen</b></span> - #90ee90</li>
<li><span style="color:YellowGreen;"><b>YellowGreen</b></span> - #9ACD32</li>
<li><span style="color:Yellow;"><b>Yellow</b></span> - #FFFF00</li>
<li><span style="color:rgb(107, 179, 189)"><b>Background-color to results box</b></span> - rgb(107, 179, 189)</li>
<li><span style="color:rgb(71, 112, 112)"><b>Border-color to results box</b></span> - rgb(71, 112, 112)</li>

<br>

[Back to Top](<#contents>)

# Features
<hr>

## Existing Features
### Header
<ul>
<li>The header features at the top of the screen an easily visible title to the website which sits on a contrasting background to make for easy reading for the user.</li>
<li>The header displays the type of game and website this page is.</li>
<li> The header also contains a modal box which within the box when clicked displays the instructions of the game and how the game works.</li>
<br>
<img src="https://user-images.githubusercontent.com/72948843/139582919-c85bbee4-a4ca-4d88-b0a4-05f088fd958f.png">
<img src="https://user-images.githubusercontent.com/72948843/139581080-a047d7a7-1a59-4937-8291-5c244f4c0faf.png">
<br>
</ul>

[Back to Top](<#contents>)
### Game Area
<ul>
<li>The game area is where the interactive side of the website can be found. When you start a game by pressing the button, the game will start to run through a randomly selected bunch of questions which will then be down to the user to pick an answer.</li>
<li>The game area answers will be displayed in reactive boxes which change sizes depending on content and screen size.</li>
<li>The answer buttons will all be reactive to hovering over elements and to onclick events that will tell you when you have selected an answer with a visual display of color as feedback to the user.</li>
<li>The submit answer button will be clear and easy to read as the rest of the content on the page and will adopt the same stylings of the start button as the main function buttons.</li>
<li>The onclick event on the submit button will return the user with the correct answer, if the users' answer is correct, it will return green color as to where an incorrect answer will return red and also display the correct answer in green.</li>
<li>Once the user has had time to read through the answer, they are then prompted to use the next question button that is forced so they can continue the game till all 10 questions from the game are completed.</li>
<br>
<img src="https://user-images.githubusercontent.com/72948843/139583398-f2010d8f-96a3-491a-b1a3-3ba7896f5e4c.png">
<img src="https://user-images.githubusercontent.com/72948843/139583649-860a6edb-f335-45a6-a73d-e18db9fc99ff.png">
<img src="https://user-images.githubusercontent.com/72948843/139583696-98c351b6-9672-48f9-a62e-5cc31ca73a9e.png">
<br>
</ul>

[Back to Top](<#contents>)

### Game Results
<ul>
    <li>The game results are displayed once the 10 questions have been answered.</li>
    <li>The results page returns a score to the user out of ten and leaves you with a personalized message based on your score performance. The higher the score the more positive message congratulates you on your success based on your results.</li>
    <li>The background color is set to blue to make it easy to destinguish the conclusion of the game.</li>
    <li>Under your results and personal scored based message will appear a new button prompting the user to try their luck again at the game and try to out perform their last score.</li>
    <li>The bright green colors of the main control buttons are designed to draw the users attention to them and to carry on playing the game.</li>
    <br>
    <img src="https://user-images.githubusercontent.com/72948843/139583356-262d6999-110e-4789-b672-0f7f45bb7ff8.png">
    <br>
</ul>
    
[Back to Top](<#contents>)

### Features left to implement

<p>Features that I would like to include where there more time is in this game would be a timer on each question and there would be a bar that moves down from right to left for the given amount of time to answer the question. It would be interesting to have different categories and have also a larger database of questions.</p>
<br>

[Back to Top](<#contents>)

<br>

# Testing
<ul>
    <li>
        I tested playing this game on different website browsers such as Firefox, Chrome, Safari, and Samsung Internet.
    </li>
    <li>
        I can confirm that the results are correct and it accurately counts the user's score to give them their total.
    </li>
    <li>
        I confirmed that the text displayed on the screen is readable and easy to understand even when the screen size changes.
    </li>
    <li>
        I can confirm that the colors and fonts are easy to read and accessible by passing them through the lighthouse in DEVELOPER TOOLS!
    </li>
    <br>
    <img src="https://user-images.githubusercontent.com/72948843/139580754-840ef914-ad09-48aa-8053-1ebc85847455.png">
    <br>
    <li>
        I can confirm that the website design is responsive, looks aesthetically pleasing, and functions correctly on all standard screen sizes using the developers' dev toolbar.
    </li>
</ul>

[Back to Top](<#contents>)

<br>

## Bugs

### Solved Bugs

<ul>
    <li>A style fault was highlighted during the LightHouse report. The background color was found to clash with the foreground color of the text from the incorrect answer which wasn't providing enough contrast.</li>
    <li>The item was found in my JavaScript script file in the check answer function where the original color was set to red to signal an incorrect answer.</li>
    <li>This styling issue was rectified by altering the color to a different shade of red. I changed the color from "Red" to "Crimson".</li>
    <hr>
    <li>Upon playing the game, on the 10th submission of results I neglected to notice the button still has the writing inside it which says "next question".</li>
    <li>The js code needed editing to allow it to trace that when the 10th question is answered, it should prompt get results in the "next question"'s button inner HTML.</li>
    <li>The code was found and an appropriate edit to the programming of the function is edited to allow the text content to change. The code was implemented inside the Question tracker function and then the value reset in the reset values function on the rerun of the game.</li>
</ul>

[Back to Top](<#contents>)

<br>

### Unsolved Bugs

<p>There are no unfixed bugs found on the project.</p>

<br>

[Back to Top](<#contents>)

## Responsive Testing

<p>I checked the responsiveness of the page using <a href="https://developer.chrome.com/docs/devtools/" target="_blank">Chrome Developer Tools</a> and <a href="https://www.responsivedesignchecker.com/" target="_blank">Responsive Design Checker</a> and the results pass the checks across a full range of device sizes from monitors, tablets and mobile devices.</p>

<br>

[Back to Top](<#contents>)


## Validation Testing
<hr>
<ul>
    <li>HTML</li>
    <ul>
        <li>I passed my code through the official W3C HTML validator and it passed with no errors, <a href="https://github.com/GrantWils23/Portfolio-Project-2---JavaScript-Essentials/blob/main/test_results/project-two-hmtl-validation-pass.jpg" target="_blank">Results here</a></li>
    </ul>
    <li>CSS</li>
    <ul>
        <li>I passed my code through the official jigsaw CSS validator and it passed with no errors, <a href="https://github.com/GrantWils23/Portfolio-Project-2---JavaScript-Essentials/blob/main/test_results/project-two-css-validation-pass.jpg" target="_blank"> Results here</a></li>
    </ul>
    <li>LightHouse</li>
    <ul>
        <li>I passed my code through the web developers tool lighthouse to see its performance and it passed with no errors, <a href="https://github.com/GrantWils23/Portfolio-Project-2---JavaScript-Essentials/blob/main/test_results/lighthouse-checker-pass.jpg" target="_blank">Results here</a></li>
    </ul>
    <li>JShint</li>
    <ul>
        <li>I passed my code through the official javascript code checker and both the game_questions and script files passed with no errors, <a href="https://github.com/GrantWils23/Portfolio-Project-2---JavaScript-Essentials/blob/main/test_results/jshint-game-questions-validation-pass.jpg" target="_blank">game_questions.js results here</a> and <a href="https://github.com/GrantWils23/Portfolio-Project-2---JavaScript-Essentials/blob/main/test_results/jshint-script-validation-pass.jpg" target="_blank">scripts.js results here</a></li>
    </ul>
</ul>

<br>

[Back to Top](<#contents>)

## Technologies Used

<li><a href="https://balsamiq.com/wireframes/?gclid=Cj0KCQiAsqOMBhDFARIsAFBTN3fo8GEpN1QxbMnF33fwtpl5TBARoyLLLRF7XPtAPNGO-q-wKkZw_NYaApBoEALw_wcB" target="_blank">Balsamiq</a> - Used in the creating of the original wireframe designs.</li>
<li><a href="https://github.com/" target="_blank">GitHub</a> - The site was used to edit and host the website.</li>
<li><a href="https://gitpod.io/projects" target="_blank">GitPod</a> - Used in the deployment and creating the website</li>
<li><a href="https://www.w3.org/html/" target="_blank">HTML5</a> - This is used in providing the content and structure for the website.</li>
<li><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">CSS</a> - This was used to provide the styling to the website.</li>
<li><a href="https://www.javascript.com/" target="_blank">JavaScript</a> - JS provided the the interactive element and functionality to the logic and running of the game.</li>

<br>

[Back to Top](<#contents>)

<br>

## Deployment

### Deployment of the project

<p> I deployed this page using GitHub pages. To deploy this project i used the following steps in GitHub:</p>
<ol>
    <li>In the GitHub repository, go to the settings tab.</li>
    <li>In the settings navigate, on the left hand drop down menu select the pages tab.</li>
    <li>On the GitHub pages tab, change the source from none to master or main(depending on what the user sees).</li>
    <li>Once selected, press save and then the page will generate a link for your new completed page.</li>
</ol>

![image](https://user-images.githubusercontent.com/72948843/140975012-22d6b451-1c91-4a16-924a-73046525f5a2.png)

<p>The link to the page can be found here - <a href="https://grantwils23.github.io/Portfolio-Project-2---JavaScript-Essentials/">LINK HERE!!!!</a></p>

<br>

[Back to Top](<#contents>)

<br>

### Cloning of the Project
<hr>
<p>To create a local clone of the project, follow the steps below:</p>
<ol>
    <li>In the GitHub repository, under the repository name there is a code tab., click on the <b>code</b> tab.</li>
    <li>In the clone tab, click the HTTPS tab. Within this section, click on the clipboard icon and copy the URL supplied for the repository.</li>
    <li>Open an IDE of your choosing and run Git Bash.</li>
    <li>Change the current working directory to the location of which you wish to place the cloned repository.</li>
    <li>In the terminal, write <b>Git Clone</b> and then paste in the URL supplied via GitHub from step 2.</li>
    <li>Press enter and your new cloned repository will be created within the desired location.</li>
</ol>

![image](https://user-images.githubusercontent.com/72948843/140975333-d7caf4dc-5fb4-435d-b85a-c92ad5ec4367.png)

<br>

[Back to Top](<#contents>)

<br>

## Credits

### Content

<ul>
    <li>The code and logic I got for the modal box came from the <a href="https://www.w3schools.com/howto/howto_css_modals.asp" target="_blank">w3schools.com</a>, so a special thanks for the w3school for their free lessons and content which helped me understand how modal boxes are used.</li>
    <li>The Fonts used on this project are from <a href="https://fonts.google.com/" target="_blank">fonts.google.com</a>.</li>
</ul>

<br>

[Back to Top](<#contents>)

<br>

### Media

<ul>
    <li>The favicon question mark that is used for the tab page was open source and I aquired it from <a href="https://favicon.io/" target="_blank">favicon.io</a>.</li>
    <li>The question mark that is used in the content of the web page itself was source from <a href="https://fontawesome.com/" target="_blank">fontawesome.com</a>.</li>

</ul>

<br>

[Back to Top](<#contents>)

<br>

## Acknowledgements

<p>This project is my 2nd Portfolio Project for the Full Stack Software Developer (e-Commerce) Diploma course provided by the <a href="https://codeinstitute.net/" target="_blank">Code Institute</a>. Here I would like to thank Precious Ijege my Mentor for his help and support as well as people in the Code Institute community. Also a small and yet rather big shout out to <a href="https://stackoverflow.com/" target="_blank">Stack Overflow</a> and <a href="https://www.w3schools.com/" target="_blank">w3schools</a> for their learning material and knowledge is really useful when stuck and need to come up with ideas.</p>


[Back to Top](<#contents>)
