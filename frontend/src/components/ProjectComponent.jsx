import '../css/componentcss/ProjectComponent.css'

export function ProjectComponent({label, description}) {
    return (
        <>
        <div className="project-component-wrapper">
            <div className="project-component">
                <div className="project-label-and-desc">
                    <h3 className="label-text">{label}</h3>
                    <h4 className="description-text">{description}</h4>
                </div>
            </div>
        </div>
        </>
    )
}