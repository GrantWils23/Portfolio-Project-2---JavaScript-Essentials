<h1>Portfolio_Project_2 --- JavaScript_Essentials</h1>

![image](https://user-images.githubusercontent.com/72948843/139583320-9a4176cc-546e-4bda-84bf-84f35dcd1b2a.png)

<br><br>
<a href="https://grantwils23.github.io/Portfolio-Project-2---JavaScript-Essentials/">CLICK HERE TO GO TO THE SITE</a>

<br><br>
![image goes here](assets/images/filename.jpg)
<br><br>
<h1>Quiz Game!</h1>
<p>Yes I know what you are thinking, a very original title. This Quiz game is designed to test your knowledge on a whole wide range of topics. Each question is designed to be fun and interesting to the user as well as help the user learn new random bits of facts that they can tell their friends. This game is designed for all age groups in mind to have fun and learn if you don't know the answer you will learn the correct one too. </p>

<h1>Features</h1>
<hr>
<h2>Existing Features</h2>
<ul>
    <li>
        <h3><b>Header</b></h3>
        <ul>
            <li>The header is features at the top of the screen the an easily visible title to the website which sits on a contrasting background to make for easy reading for the user.</li>
            <li>The header clearly display the type of game and website this page is.</li>
            <li> The header also contains a modal box which within the box when clicked displays the instructions of the game and how the game works.</li>
            <img src="https://user-images.githubusercontent.com/72948843/139582919-c85bbee4-a4ca-4d88-b0a4-05f088fd958f.png">
            <img src="https://user-images.githubusercontent.com/72948843/139581080-a047d7a7-1a59-4937-8291-5c244f4c0faf.png">
        </ul>
    </li>
    <li>
        <h3><b>Game area</b></h3>
        <ul>
            <li>The game area is where the interactive side of the website can be found. When you start a game by pressing the button, the game will start to run through a randomly selected bunch of questions which it will then be down to the user to pick an answer.</li>
            <li>The game area answers will be displayed in reactive boxes which change sizes depending on content and screen size.</li>
            <li>The answer buttons will all be reactive to hovering over elements and to onclick events that will tell you when you have a selected an answer with a visual display of color as feedback to the user.</li>
            <li>The submit answer button will be clear and easy to read as the rest of the content on the page and will adopt the same stylings of the start button as main function buttons.</li>
            <li>The onclick event on the submit button will return the user with the correct answer, if the users answer is correct, it will return green color as where an incorrect answer will return red and also display the correct answer on green.</li>
            <li>Once the user has had time to read through the answer, they are then prompted to use the next question button that is forced so they can can continue the game till all 10 questions from the game are completed.</li>
            <img src="https://user-images.githubusercontent.com/72948843/139581080-a047d7a7-1a59-4937-8291-5c244f4c0faf.png">
            <img src="https://user-images.githubusercontent.com/72948843/139583398-f2010d8f-96a3-491a-b1a3-3ba7896f5e4c.png">
            <img src="https://user-images.githubusercontent.com/72948843/139583649-860a6edb-f335-45a6-a73d-e18db9fc99ff.png">
            <img src="https://user-images.githubusercontent.com/72948843/139583696-98c351b6-9672-48f9-a62e-5cc31ca73a9e.png">
        </ul>
    </li>
        <li>
        <h3><b>Game Results</b></h3>
        <ul>
            <li>The game results are displayed once the 10 questions have been answered.</li>
            <li>The results page returns a score to the user out of ten and leaves you with a person message based on your score performance. The higher the score the more positive message congratulates you on your success based on your results.</li>
            <li>The backkground color is set to blue to make it easy to destinguish the conclusion of the game.</li>
            <li>Under your results and personal scored based message will appear a new button prompting the user to try their luck again at the game and try to out perform their last score.</li>
            <li>The bright green colors of the main control buttons are designed to draw the users attention to them and to carry on playing the game.</li>
            <img src="https://user-images.githubusercontent.com/72948843/139583356-262d6999-110e-4789-b672-0f7f45bb7ff8.png">
        </ul>
    </li>
    <li>
        <h3><b>Footer</b></h3>
        <ul>
            <li>The Footer contains some dead space which is there to fill the screen so that the background design isnt cut short by any changes in the sizing of the game area.</li>
        </ul>
    </li>
</ul>

<h2>Features left to implement</h2>
<p>Features that I would like to include where there more time is in this game would be a timer on each question and their would be a bar that moves down from right to left for the given amount of time to answer the question. If would be interesting to have different catagories and have also large sample size of questions which would be accessible through a database rather than questions being integral to the script file to make the coding easier and seperate the data from the programming.</p>
<br><br>

<h2>Testing</h2>
<ul>
    <li>
        I tested playing this game on different website browsers such as Firefox, Chrome, Safari and Samsung Internet.
    </li>
    <li>
        I can confirm that the results are correct and it accurately counts the user's score to give them their total.
    </li>
    <li>
        I confirmed that the text displayed on the screen is readable and easy to understand even when the screen size changes.
    </li>
    <li>
        I can confirm that the colours and fonts are easy to read and accessible by passing them through lighthouse in DEVELOPER TOOLS!
    </li>
    <img src="https://user-images.githubusercontent.com/72948843/139580754-840ef914-ad09-48aa-8053-1ebc85847455.png">
    <li>
        I can confirm that the website design is responsive, looks asthetically pleasing and functions correctly on all standard screen sizes using the developers dev toolbar.
    </li>
</ul>

<br><br>

<h2>Bugs</h2>
<br>
<h3>Sovled Bugs</h3>
<ul>
    <li>A style fault was highlighted during the LightHouse report. The backgroundColor found to clash with foregroundColor of the text from the incorrect answer which wasn't providing enough contrast.</li>
    <li>The item was found in my JavaScript script file in the checkAnswer function where the original color was set to red to signal an incorrect answer.</li>
    <li>This styling issue was rectified by altering the color to a different shade of red. I changed the color from "Red" to "Crimson".</li>
    <hr>
    <li>Upon playing the game, on the 10th submission of results I neglected to notice the button still has the writing inside it which says "next question".</li>
    <li>The js code needed editing to allow it to trace that when the 10th question is answered, it should prompt get results in the "next question"'s button inner HTML.</li>
    <li>The code was found and an appropriate edit to the programming of the function is edited to allow the text content to change. The code was implemented inside the Question tracker function and then the value reset in the reset values function on the rerun of the game.</li>
</ul>
<h3>Validator Testing</h3>
<ul>
    <li>HTML</li>
    <ul>
        <li>I passed my code through the official W3C HTML validator and it passed with no errors</li>
    </ul>
    </li>
    <li>CSS</li>
    <ul>
        <li>I passed my code through the official jigsaw CSS validator and it passed with no errors</li>
    </ul>
</ul>

<br>

<h3>Unfixed Bugs</h3>
<p>There are no unfixed bugs found on the project</p>

<br><br>

<h2>Deployment</h2>
<p> I deployed this page using GitHub pages. To deploy this project i used the following steps in GitHub:</p>
<uL>
    <li>In the GitHub repository, go to the settings tab</li>
    <li>In the settings navigate, on the left hand drop down menu select the pages tab</li>
    <li>On the GitHub pages tab, change the source from none to master or main(depending on what the user sees)</li>
    <li>Once selected, press save and then the page will generate a link for your new completed page</li>
</uL>
<p>The link to the page can be found here - <a href="https://grantwils23.github.io/Portfolio-Project-2---JavaScript-Essentials/">LINK HERE!!!!</a></p>

<br><br>

<h2>Content</h2>
<ul>
    <li>The code and logic I got for the modal box came from the <a href="https://www.w3schools.com/howto/howto_css_modals.asp" target="_blank">w3schools.com</a>, so a special thanks for the w3school for their free lessons and content which helped me understand how modal boxes are used.</li>
</ul>

<br>

<h2>Media</h2>
<ul>
    <li>The favicon question mark that is used for the tab page was open source and I aquired it from <a href="https://favicon.io/" target="_blank">favicon.io</a></li>
    <li>The question mark that is used in the content of the web page itself was source from <a href="https://fontawesome.com/" target="_blank">fontawesome.com</a></li>
    <li>The Fonts used on this project are from <a href="https://fonts.google.com/" target="_blank">fonts.google.com</a></li>
</ul>