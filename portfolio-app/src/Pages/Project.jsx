import SymonsImg from '../assets/Symons.png';
import Google from '../assets/Google.png';
import Photoshop from '../assets/Photoshop.png';

  function Project(){
    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px', padding: '20px' }}>
  
        <div style={{ width: '500px', border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src={SymonsImg} alt="Symon Say's Game" style={{ width: '500px', height: 'auto', objectFit: 'cover' }} />
          <div style={{ padding: '15px' }}>
            <h3 style={{ fontSize: '20px', color: '#2c3e50' }}>Symon Say's Game</h3>
            <p style={{ color: '#7f8c8d' }}>A fun and interactive memory game.</p>
            <a href="#code-link" style={{ color: '#2980b9', textDecoration: 'none' }}>View Code</a>
          </div>
        </div>
        
       
        <div style={{ width: '500px', border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src={Google} alt="Google Cloud Clone" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          <div style={{ padding: '15px' }}>
            <h3 style={{ fontSize: '20px', color: '#2c3e50' }}>Google Cloud Clone</h3>
            <p style={{ color: '#7f8c8d' }}>A front-end clone of the Google Cloud platform.</p>
            <a href="#code-link" style={{ color: '#2980b9', textDecoration: 'none' }}>View Code</a>
          </div>
        </div>
        
       
        <div style={{ width: '500px', border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src={Photoshop} alt="Photoshop Clone" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          <div style={{ padding: '15px' }}>
            <h3 style={{ fontSize: '20px', color: '#2c3e50' }}>Photoshop Clone</h3>
            <p style={{ color: '#7f8c8d' }}>A simplified version of Adobe Photoshop.</p>
            <a href="#code-link" style={{ color: '#2980b9', textDecoration: 'none' }}>View Code</a>
          </div>
        </div>
        
        
        <div style={{ width: '500px', border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ padding: '15px' }}>
            <h3 style={{ fontSize: '20px', color: '#2c3e50' }}>Spotify Clone</h3>
            <p style={{ color: '#7f8c8d' }}>A responsive clone of the Spotify music platform.</p>
            <a href="#code-link" style={{ color: '#2980b9', textDecoration: 'none' }}>View Code</a>
          </div>
        </div>
        
        
        <div style={{ width: '500px', border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ padding: '15px' }}>
            <h3 style={{ fontSize: '20px', color: '#2c3e50' }}>Live Weather Updates</h3>
            <p style={{ color: '#7f8c8d' }}>A web app providing live weather updates.</p>
            <a href="#code-link" style={{ color: '#2980b9', textDecoration: 'none' }}>View Code</a>
          </div>
        </div>
        
        
      </div>
      
        
    )
}
export default Project;