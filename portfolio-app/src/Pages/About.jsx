
function About(){
    let style={
        borderRadius: '8px',
        fontSize: '20px',
        
        
    }
    return(
        <div>
            <div style={{
  fontFamily: 'Arial, sans-serif',
  lineHeight: 1.6,
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px'
}}>
  <h1 style={{
    fontSize: '36px',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#2c3e50'
  }}>About Me</h1>

  <section>
    <h2 style={{
      fontSize: '28px',
      marginBottom: '15px',
      color: '#2c3e50'
    }}>Profile</h2>
    <p style={{
      fontSize: '18px',
      color: '#7f8c8d'
    }}>
      I am an experienced <strong>MERN Stack Developer</strong> with a strong foundation in frontend technologies and solid backend proficiency. My expertise lies in building scalable and efficient web applications, utilizing a wide range of modern technologies. I am passionate about creating user-centric, responsive, and dynamic web experiences that meet the needs of today's digital landscape.
    </p>
  </section>

  <section>
    <h2 style={{
      fontSize: '28px',
      marginBottom: '15px',
      color: '#2c3e50'
    }}>Education</h2>
    
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{
        fontSize: '24px',
        color: '#34495e'
      }}>B.Tech in Computer Science</h3>
      <p style={{
        fontSize: '18px',
        color: '#7f8c8d'
      }}>
        <strong>Institution:</strong> Rustamji Institute of Technology, Gwalior, India<br />
        <strong>CGPA:</strong> 7.2 (08/2021 – 07/2025)<br />
        I am currently pursuing my Bachelor of Technology with a focus on Computer Science. My coursework has provided me with a deep understanding of both theoretical concepts and practical skills, particularly in web development and networking technologies.
      </p>
    </div>
    
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{
        fontSize: '24px',
        color: '#34495e'
      }}>12th Grade</h3>
      <p style={{
        fontSize: '18px',
        color: '#7f8c8d'
      }}>
        <strong>Institution:</strong> Daffodils Public School, Mirzapur, India<br />
        <strong>Percentage:</strong> 78% (04/2020 – 03/2021)<br />
        During my higher secondary education, I focused on science with an emphasis on mathematics and computer science, laying the groundwork for my future studies in technology.
      </p>
    </div>

    <div style={{ marginBottom: '20px' }}>
      <h3 style={{
        fontSize: '24px',
        color: '#34495e'
      }}>10th Grade</h3>
      <p style={{
        fontSize: '18px',
        color: '#7f8c8d'
      }}>
        <strong>Institution:</strong> Daffodils Public School, Mirzapur, India<br />
        <strong>Percentage:</strong> 73.8% (04/2018 – 03/2019)<br />
        I completed my secondary education with a strong interest in computers and technology, which eventually led me to pursue a career in software development.
      </p>
    </div>
  </section>

  <section>
    <h2 style={{
      fontSize: '28px',
      marginBottom: '15px',
      color: '#2c3e50'
    }}>Skills</h2>
    <ul style={{
      fontSize: '18px',
      color: '#7f8c8d',
      listStyleType: 'disc',
      marginLeft: '20px'
    }}>
      <li>Frontend Technologies: HTML, CSS, JavaScript, React.js, Tailwind CSS</li>
      <li>Backend Technologies: Node.js, Express.js, EJS, MongoDB</li>
      <li>Programming Languages: C++, JavaScript</li>
      <li>Other Tools and Technologies: Git, RESTful APIs, Version Control, Responsive Design</li>
    </ul>
  </section>

  <section>
    <h2 style={{
      fontSize: '28px',
      marginBottom: '15px',
      color: '#2c3e50'
    }}>Awards</h2>
    <ul style={{
      fontSize: '18px',
      color: '#7f8c8d',
      listStyleType: 'disc',
      marginLeft: '20px',
      marginTop: '0'
    }}>
      <li>1st Prize at Daffodils Public School: Awarded for developing innovative computer games, demonstrating creativity and technical skill.</li>
      <li>2nd Prize at Daffodils Public School: Recognized for creating working models based on networking technology, highlighting my interest and proficiency in the field.</li>
    </ul>
  </section>

  <section>
    <h2 style={{
      fontSize: '28px',
      marginBottom: '15px',
      color: '#2c3e50'
    }}>Certificates</h2>
    <p style={{
      fontSize: '18px',
      color: '#7f8c8d'
    }}>
      <strong>MERN Stack Developer:</strong> Completed a comprehensive virtual course on the MERN stack, conducted by Apna College (Delta Batch), which further solidified my understanding and expertise in full-stack web development.
    </p>
  </section>

  <section>
    <h2 style={{
      fontSize: '28px',
      marginBottom: '15px',
      color: '#2c3e50'
    }}>Personal Background</h2>
    <p style={{
      fontSize: '18px',
      color: '#7f8c8d'
    }}>
      I hail from Mirzapur, India, and have a deep-rooted interest in technology from a young age. My father, Mr. Deep Narayan Dubey, serves in the CRPF, and my mother, Mrs. Pooja Devi, is a dedicated homemaker. Their support has been instrumental in my educational and professional journey.
    </p>
  </section>
</div>

        </div>
    )
}
export default About;