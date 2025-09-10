import '../css/HomePage.css'
import { ProjectComponent } from '../components/ProjectComponent'
import { useState } from 'react'
import { GameCanvasComponent } from '../components/GameCanvasComponent';
import { ContactForm } from '../components/ContactForm';

export function HomePage() {
    const [hasGlasses, setHasGlasses] = useState(false);

    return (
        <>
        <div className="home-page">
            <div className="home-page-wrapper">
                <div className="profile-image-wrapper"> 
                    <div className="profile-image" onClick={() => setHasGlasses(prev => !prev)}>
                        {hasGlasses && (
                        <img 
                            className="glasses-image" 
                            src="../images/pixelglasses.png" 
                            alt="pixelated glasses"
                        /> 
                        )}
                    </div>
                </div>
                <h3 className="title-text-box">
                    My portfolio site is currently under construction, please enjoy this site preview while you are here!<br />
                    Built with React.js and Vanilla CSS
                </h3>
                <h2 className="title-text-box">
                    Hello, my name is <strong className="strong-text">Gina Fender</strong> and here are some projects I have been working on! I am a passionate and adaptable software developer who thrives on learning new technologies and tackling complex challenges. 
                </h2>
                <div className="projects-wrapper">
                    <h1 className="text">Featured Projects</h1>
                    <div className="project-component-container">
                        <div className="project-components">
                            <h3 className="year-labels">2025</h3>
                            <ProjectComponent 
                                label="Mock Twitter Site"
                                description="This is a mock twitter website built using JSP. Posts and user account information are stored in a MySQL database and retrieved using JSP."
                                link="https://github.com/birbothedev/jsp_twitter_final_project/tree/main/src/java/yapspace"
                                githublink="https://github.com/birbothedev/jsp_twitter_final_project/tree/main/src/java/yapspace"
                                image="../images/jspSite.png"
                                imgText="jsp site"
                            />
                        </div>
                        <div className="project-components">
                            <h3 className="year-labels">2025</h3>
                            <ProjectComponent 
                                label="Stock Trading Site"
                                description="This project is a mock Stock Trading website. Information about various stocks is stored in a MySQL database and retrives it using PHP."
                                link="https://github.com/birbothedev/php_stock_trader_project/tree/main/PHPProject1"
                                githublink="https://github.com/birbothedev/php_stock_trader_project/tree/main/PHPProject1"
                                image="../images/phpSite.png"
                                imgText="php site"
                            />
                        </div>
                        <div className="project-components">
                            <h3 className="year-labels">2024</h3>
                            <ProjectComponent 
                                label="DnD Spell Guessing Game"
                                description="A Dungeons and Dragons based guessing game made using Vanilla JS, HTML, and CSS. Automatically pulls information from the DnD 5e API."
                                link="https://birbothedev.github.io/js_final_project/"
                                githublink="https://github.com/birbothedev/js_final_project/blob/main/scripts/scripts.js"
                                image="../images/intelligenceCheck.png"
                                imgText="dnd game"
                            />
                        </div>
                    </div>
                </div>
                <div className="education-container">
                    <h2 className="title-text-box">
                        I have an Associate's Degree in <strong className="strong-text">Software Engineering</strong> that I earned with a <strong className="strong-text">3.84 GPA</strong>! I am excited to have found a passion in software and look forward to continuing to challenge myself throughout my career. 
                    </h2>
                </div>
                <div className="other-projects-container">
                    <h2 className="other-proj-title">Other Projects</h2>
                    <div className= "other-projects-wrapper">
                        <div className="other-projects">
                            <h3 className="year-labels">2025</h3>
                            <ProjectComponent 
                                label="Mushie Game"
                                description="A work-in-progress browser game built with VanillaJS, HTML, and CSS. Collect currency, avoid obstacles."
                                link="https://birbothedev.github.io/mushie-game/"
                                image="../images/mushieGame.png"
                                imgText="mushie game"
                                githublink="https://github.com/birbothedev/mushie-game/tree/main/scripts"
                            />
                        </div>
                        <div className="other-projects">
                            <h3 className="year-labels">2025</h3>
                            <ProjectComponent 
                                label="Rocky App"
                                description="An Android app built using Kotlin. Pulls jokes from the Jokes API and keeps track of pet rock information"
                                link="https://github.com/birbothedev/mobile_app_proj4/tree/main/app/src/main/java/com/example/project4/main"
                                image="../images/rockapp.png"
                                imgText="rrock app"
                                githublink="https://github.com/birbothedev/mobile_app_proj4/tree/main/app/src/main/java/com/example/project4/main"
                            />
                        </div>
                        <div className="other-projects">
                            <h3 className="year-labels">2024</h3>
                            <ProjectComponent 
                                label="Lil Necro"
                                description="An RPG built using RPG Maker and Vanilla Javascript. Group final project for a software engineering class."
                                link="https://mi-occ-byteme.github.io/lil-necro-game-web/"
                                image="../images/lilnecroImage.png"
                                imgText="tictactoe"
                                githublink="https://github.com/mi-occ-byteme/lil-necro/tree/main/data"
                            />
                        </div>
                        <div className="other-projects">
                            <h3 className="year-labels">2024</h3>
                            <ProjectComponent 
                                label="TicTacToe"
                                description="A basic tictactoe game built with VanillaJS, HTML, and CSS. Players can play locally against each other."
                                link="https://birbothedev.github.io/tictactoe-jsproject2/"
                                image="../images/tictactoe.png"
                                imgText="tictactoe"
                                githublink="https://github.com/birbothedev/tictactoe-jsproject2/blob/main/scripts/scripts.js"
                            />
                        </div>
                        <div className="other-projects">
                            <h3 className="year-labels">2024</h3>
                            <ProjectComponent 
                                label="Bloopy Game"
                                description="A very basic browser game built with Vanilla Javascript, HTML, and CSS, built for my very first HTML class in college. Use arrow keys to avoid obstacles."
                                link="http://bloopy.s3-website.us-east-2.amazonaws.com/"
                                image="../images/bloopyimage.png"
                                imgText="rrock app"
                                githublink="https://github.com/birbothedev/bloopyGame"
                            />
                        </div>
                        {/* <div className="other-projects">
                            other project
                        </div>
                        <div className="other-projects">
                            other project
                        </div>
                        <div className="other-projects">
                            other project
                        </div> */}
                    </div>
                </div>
                <div className="game-container">
                    <h2 className="other-proj-title">I am currently working on a browser game built right into this page, stay tuned!</h2>
                    <GameCanvasComponent />
                </div>
                {/* <ContactForm /> */}
            </div>
        </div>
        </>
    )
}