
function Footer(){
    let Style={
        
        padding: "20px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1%",
        backgroundColor:"#4797b1" 
    }
    
    return(
        <footer style={Style}>
            <p style={{backgroundColor:"#4797b1"}}>© 2004 Harshit Dubey</p>
            <a href="https://github.com/learning538" style={{backgroundColor:"#4797b1"}} target="_blank" rel="noopener noreferrer">
            <i className="<fa-brands fa-github" style={{ fontSize: '24px' }} />github</a>

            <a href="https://www.linkedin.com/in/harshitdubey2004/" style={{backgroundColor:"#4797b1"}} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" style={{ fontSize: '24px' }}/>LinkedIn</a> 
        </footer>
    );
};


export default Footer;
