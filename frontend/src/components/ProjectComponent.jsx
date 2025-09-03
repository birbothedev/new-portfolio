import '../css/componentcss/ProjectComponent.css'

export function ProjectComponent({label, description, link, image, imgText, githublink}) {
    return (
        <>
        <div className="project-component-wrapper">
            <a href={link} target="_blank" className="project-component-link">
                <div className="project-component">
                    <img className="project-image" src={image} alt={imgText}/>
                </div>
            </a>
            <div className="project-label-and-desc">
                <h3 className="label-text">{label}</h3>
                <h4 className="description-text">{description}</h4>
                <a className="github-link" href={githublink} target="_blank">Github</a>
            </div>
            
        </div>
        </>
    )
}