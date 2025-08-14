import '../css/componentcss/ProjectComponent.css'

export function ProjectComponent({label, description, link, image, imgText}) {
    return (
        <>
        <div className="project-component-wrapper">
            <div className="project-component">
                <div className="project-label-and-desc">
                    <img src={image} alt={imgText} />
                    <h3 className="label-text">{label}</h3>
                    <h4 className="description-text">{description}</h4>
                    <a href={link} target="_blank"/>
                </div>
            </div>
        </div>
        </>
    )
}