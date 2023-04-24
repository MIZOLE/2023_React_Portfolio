import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="part1">

                    <h2>About myself</h2>
                    <p>
                        I am a tech fanatic, I have 3 years of experience coding space and I am still open to learning new soft and tech skills.

                        I was born and raised in Cape Town but am originally from Eastern Cape, I am interested in being updated with what is happening to the world and the social trends, great team player, I can work under pressure and I can go beyond my role when it comes to working.
                    </p>

                    <p>

                        I believe in curiosity and energy, being driven by results, and being hard-working, with good communication and presentation skills, and problem-solving skills, analysis skills.

                        I can code with the following programming languages javascript, python 3 and the HTML 5 web framework, and CSS, SQL database for storage unit and good understanding of query unit testing and SDLC I am also familiar with visual studio code, Linux command line and command prompt, mocha, Travis, Heroku deployment, testing, debugging, web design logic, React, Bootsrap 5, Linux, Git hub, expressJS.

                        I can create web applications using Python preferably but I can work with JavaScript as well, I am a team player, and I am open to learning and can adapt very quickly.
                    </p>
                </div>

                <div className="part 2">

                    <h2>Why I would like to join SovTech</h2>
                    <p>
                        The reason I would like to work here is because of the company culture, the values and, the industry and the growth.

                        One of the reasons is what the company is doing for businesses interms of branding in every digital angles having my name in their books would be a great boost for my motivation to always strive for the best in my career and my CV.
                    </p>

                    <p>
                        This is a chance for me to add on what I have so that I could become a successful web developer in the near future with great industry exposure as a junior, that I am aspirng to be a senior web developer, adding value and insights is one of my strenghts, I believe in the power of AI, entrepreneurship and marketing.

                        Since I am still a junior growth and learning is what I am looking for with hopes of landing great carrer opportunities and network after the program so I believe this program will help me achieve this goal.
                    </p>
                </div>
            </div>
        );
    }
}

var i = 0;
let text = "Welcome to Lulama Komana's portfolio";

function typing() {
    if (i < text.length) {
        document.getElementById("show").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 90);
    }
}

typing();

export default Home;
