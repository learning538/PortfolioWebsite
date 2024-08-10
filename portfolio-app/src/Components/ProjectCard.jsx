
function ProjectCard({title, description, link}){
    let Style={
        backgroundColor: "DarkGrey",
        color: "White",
        Display: "Flex",
        justifyContent: "space-between",
    }
    
    return(
        
        <div className="ProjectCard" style={Style}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer"><h3>View Project</h3></a>
        </div>
    );
}
export default ProjectCard;