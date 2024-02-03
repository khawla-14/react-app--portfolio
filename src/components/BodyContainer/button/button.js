import React from 'react';
import resumeFile from './resume.pdf';
import  './resume.css';



class ResumeButton extends React.Component {
    render() {
        // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
        const resumeUrl = resumeFile;
    
        return (
          <a href={resumeUrl} download="khawla.pdf" className='resume-link'>
            <button className='button'>
                VIEW FULL RESUME
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </a>
        );
      }

}
export default ResumeButton