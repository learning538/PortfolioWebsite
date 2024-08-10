
function Header() {
    let style={
        fontSize: "50px",
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#4797b1",
        Color: "White"

        
        
    }
    let bg= {
        backgroundColor: "#4797b1",
        
    }
    return (
        <div className="Header" style={bg}>
            <h1 style ={style}>There is a portfolio of Harshit Dubey</h1>
            <br />
            <nav>
                <ul style={{display: 'flex', justifyContent: "space-evenly", width:"auto", fontSize:"30px"}}>
                    <li><a href="http://example.com " target="_blank" rel="noopener noreferrer">Home</a></li>
                    <li><a href="About" target="_blank" rel="noopener noreferrer">About</a></li>
                    <li><a href="Project" target="_blank" rel="noopener noreferrer">Project</a></li>
                    <li><a href="Contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
                </ul>  
            </nav>
        </div>
    );
}

export default Header;
