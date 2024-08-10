import HarshitImage from '../assets/Harshit.jpg';
import SymonsImg from '../assets/Symons.png';
import Google from '../assets/Google.png';
import Photoshop from '../assets/Photoshop.png';

function Home() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        
    };

    const cardStyle = {
        width: '100%', // Use percentage to make it responsive
        border: '2px solid #ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '10px 0', // Add vertical margin for spacing
        backgroundColor: '#fff',
    };

    const imgStyle = {
        backgroundColor: '#4797b1',
        width: '400px',
        height: 'auto', // Fixed height for uniformity
        objectFit: 'cover', // Ensure image covers the area without distortion
        display: 'flex', 
    };

    const textStyle = {
        padding: '15px',
        color: '#333',
    };

    const headerStyle = {
        backgroundColor: '#4797b1',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '10px',
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={headerStyle}>Welcome to My Portfolio</h1>
                <img src={HarshitImage} alt="Harshit Dubey" style={imgStyle } />
                <div style={textStyle}>
                    <p>Hello! I'm Harshit Dubey, a web developer with a passion for creating interactive web applications. As a student pursuing a B.Tech in Electronics and Communication from Rustamji Institute of Technology, Gwalior, I have demonstrated my passion for technology and coding since a young age. In fact, in class 10, I developed a computer game for an exhibition and won 1st prize.</p>
                    <p>Currently in my 5th semester with a CGPA of 6.91, I possess a strong foundation in electronics and communication. Moreover, I have extra knowledge in the coding field with proficiency in HTML, basic knowledge in Python, and a beginner-level understanding of C++.</p>
                    <p>I have also applied my practical skills in coding by developing a project using HTML and CSS to create a Google Cloud Clone. I am dedicated to enhancing my knowledge in both electronics and coding and am eager to explore new opportunities and challenges.</p>
                </div>
            </div>

            <div style={cardStyle}>
                <h3 style={headerStyle}>Projects</h3>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    <li style={textStyle}>
                        <h4>Symon Say's Game</h4>
                        <img src={SymonsImg} alt="Symon Say's Game" style={imgStyle} />
                        <p>A fun and interactive memory game.</p>
                    </li>
                    <li style={textStyle}>
                        <h4>Google Cloud Clone</h4>
                        <img src={Google} alt="Google Cloud Clone" style={imgStyle} />
                        <p>A front-end clone of the Google Cloud platform.</p>
                    </li>
                    <li style={textStyle}>
                        <h4>Photoshop Clone</h4>
                        <img src={Photoshop} alt="Photoshop Clone" style={imgStyle} />
                        <p>A simplified version of Adobe Photoshop.</p>
                    </li>
                    <li style={textStyle}>
                        <h4>Spotify Clone</h4>
                        <p>A responsive clone of the Spotify music platform.</p>
                    </li>
                    <li style={textStyle}>
                        <h4>Live Weather Updates</h4>
                        <p>A web app providing live weather updates.</p>
                    </li>
                </ul>
            </div>

            <div style={cardStyle}>
                <h3 style={headerStyle}>Certificates</h3>
                <div style={textStyle}>
                    <h4>Certificate 1</h4>
                    <img src="" alt="Certificate 1" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={textStyle}>
                    <h4>Certificate 2</h4>
                    <img src="" alt="Certificate 2" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={textStyle}>
                    <h4>Certificate 3</h4>
                    <img src="" alt="Certificate 3" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={textStyle}>
                    <h4>Certificate 4</h4>
                    <img src="" alt="Certificate 4" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={textStyle}>
                    <h4>Certificate 5</h4>
                    <img src="" alt="Certificate 5" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
}

export default Home;
