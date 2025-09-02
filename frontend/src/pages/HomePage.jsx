import '../css/HomePage.css'
import { ProjectComponent } from '../components/ProjectComponent'
import { useState } from 'react'

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
                    Hello, my name is <strong className="strong-text">Gina Fender</strong> and here are some projects I have been working on! I am a passionate and adaptable software developer who thrives on learning new technologies and tackling complex challenges. 
                </h3>
                <div className="projects-wrapper">
                    <h3 className="text">Featured Projects</h3>
                    <div className="project-component-container">
                        <div className="project-components">
                            <ProjectComponent 
                                label="DnD Spell Guessing Game"
                                description="This is a description of the project"
                                link=""
                                image="../images/intelligenceCheck.png"
                                imgText="dnd game"
                            />
                        </div>
                        <div className="project-components">
                            <ProjectComponent 
                                label="DnD Spell Guessing Game"
                                description="This is a description of the project"
                                link=""
                                image="../images/intelligenceCheck.png"
                                imgText="dnd game"
                            />
                        </div>
                        <div className="project-components">
                            <ProjectComponent 
                                label="DnD Spell Guessing Game"
                                description="This is a description of the project"
                                link=""
                                image="../images/intelligenceCheck.png"
                                imgText="dnd game"
                            />
                        </div>
                    </div>
                </div>
                <div className="education-container">
                    <h3 className="title-text-box">
                        Hello, my name is <strong className="strong-text">Gina Fender</strong> and here are some projects I have been working on! I am a passionate and adaptable software developer who thrives on learning new technologies and tackling complex challenges. 
                    </h3>
                    <h3 className="title-text-box">
                        Hello, my name is <strong className="strong-text">Gina Fender</strong> and here are some projects I have been working on! I am a passionate and adaptable software developer who thrives on learning new technologies and tackling complex challenges. 
                    </h3>
                    <h3 className="title-text-box">
                        Hello, my name is <strong className="strong-text">Gina Fender</strong> and here are some projects I have been working on! I am a passionate and adaptable software developer who thrives on learning new technologies and tackling complex challenges. 
                    </h3>
                    <h3 className="title-text-box">
                        Hello, my name is <strong className="strong-text">Gina Fender</strong> and here are some projects I have been working on! I am a passionate and adaptable software developer who thrives on learning new technologies and tackling complex challenges. 
                    </h3>
                    <h3 className="title-text-box">
                        Hello, my name is <strong className="strong-text">Gina Fender</strong> and here are some projects I have been working on! I am a passionate and adaptable software developer who thrives on learning new technologies and tackling complex challenges. 
                    </h3>
                    <h3 className="title-text-box">
                        Hello, my name is <strong className="strong-text">Gina Fender</strong> and here are some projects I have been working on! I am a passionate and adaptable software developer who thrives on learning new technologies and tackling complex challenges. 
                    </h3>
                    <h3 className="title-text-box">
                        Hello, my name is <strong className="strong-text">Gina Fender</strong> and here are some projects I have been working on! I am a passionate and adaptable software developer who thrives on learning new technologies and tackling complex challenges. 
                    </h3>
                    <h3 className="title-text-box">
                        Hello, my name is <strong className="strong-text">Gina Fender</strong> and here are some projects I have been working on! I am a passionate and adaptable software developer who thrives on learning new technologies and tackling complex challenges. 
                    </h3>
                </div>
            </div>
        </div>
        </>
    )
}