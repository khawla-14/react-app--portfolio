import React from 'react';
import './bodyContainer.css';
import Card from './experienceCard/card'
import ResumeButton from './button/button'
import Project from './project/project'
import '../BodyContainer/project/project.css';
import { useState } from 'react';
import talent from './projects_imgs/talent.png';

const BodyContainer = () => {
    const webDeveloper = ['Information Technology', 'Social Media Marketing', 'Web Design', 'Web DevelopmentSkills'];
    const englishTeacher = ['ESL', 'Educational Consulting', 'Communication'];
    const graphicDesigner = ['Graphic Design', 'UI UX Design', 'Content Creation', 'MarketResearch'];


    // Projects element
    const [projects, setProjects] = useState([
        { title: 'Fashion shop landing page', clien: 'FashionHouse', description: 'An elegant web interface design using figma that shows the different models and latest fashion made by the shop', image: talent, id: 1 },
        { title: 'Chat app design', clien: 'MyChat App', description: 'An ongoing project - stands for a social media app with different functionalities and modern dark mode deesign', image: talent, id: 2 },
        { title: 'Web Design Concept for Photography Services', clien: 'Talent', description: 'The design is fully responsive, ensuring that it looks great on all devices, from desktop to mobile. This project was created using Figma and features a detailed design board and color palette, providing a comprehensive look at the design process.', image: talent, id: 3 }
    ]);

    return (
        <div className='body-container'>

            <div className='about' id='About'>

                <p>
                    With a passion for design and a strong focus on <span>creativity</span> and functionality,
                    I am dedicated to helping businesses like yours create a strong <span>online presence</span>.
                </p>
                <span></span>
                <p>
                    Whether you need a new <span>buiness card</span>, <span>marketing</span> materials, or a
                    <span> website </span>
                    that effectively
                    showcases your products and services,
                    I have the skills and expertise to turn your vision into reality.
                </p>

                <p>
                    My principle is <span>“Keep it simple”</span>. It is always about clear, direct and simple design.
                    You will never find me handing an unnecessarily complicated Website. Thus, when working
                    with me you need to expect an <span>easy to understand</span>, <span>well structured</span> aesthetic design
                </p>

            </div>
            <div className='skills-container'>
                <div className='langs'>
                    <h2>Languages & frameworks I use</h2>
                    <ul>
                        <li> <i class="fa-brands fa-html5"></i>  HTML</li>
                        <li> <i class="fa-brands fa-css3-alt"></i>  CSS</li>
                        <li> <i class="fa-brands fa-js"></i>  JavaScript</li>
                        <li> <i class="fa-brands fa-react"></i>  React</li>
                        <li> <i class="fa-brands fa-vuejs"></i>  vuejs</li>
                        <li> <i class="fa-brands fa-bootstrap"></i>  Bootstrap</li>
                    </ul>
                </div>

            </div>


            <div className='cardsContainer' id='Experiance'>

                <Card
                    duration="Full-time, Apr 2023 - Present"
                    jobTitle="Web developer & designer"
                    postType="CDO at ISTARTEC"
                    jobDescription="
                    As the Chief Digital Officer at I-startec, I lead and oversee the digital transformation strategies, leveraging my expertise in Information Technology, Social Media Marketing, Web Design, and Web Development. In this role, I drive innovation, implement cutting-edge technologies, and ensure a seamless integration of digital solutions to enhance business operations."
                    externalLink="https://www.i-startec.com"

                    tags={webDeveloper}
                />

                <Card
                    duration="Contract, Dec 2022 - Present"
                    jobTitle="English Teacher"
                    postType="Languages schools"
                    jobDescription="
                    In my role as an English Teacher at Languages Schools, I am dedicated to providing high-quality language education through both one-on-one instruction and group classes. My commitment is to create a supportive and dynamic learning environment that inspires students to reach their full potential."
                    externalLink="none"

                    tags={englishTeacher}
                />

                <Card
                    duration="Self-employed, Jun 2020 - Present"
                    jobTitle="Graphic & Web Designer"
                    postType="Languages schools"
                    jobDescription="
                    As a Graphic & Web Designer with khawla.info, I bring creativity and technical expertise to deliver visually appealing and functional design solutions. My journey as a self-employed designer spans over 3 years, during which I have honed a diverse skill set to meet the evolving needs of clients."
                    externalLink="https://www.khawla.info"

                    tags={graphicDesigner}
                />
                <ResumeButton />

            </div>


            <div className='projectContainer' id='Projects'>
                <div className="projects-container">
                    {/* Project card */}
                    <Project projects={projects} />
                </div>
            </div>


        </div>
    )
}

export default BodyContainer
