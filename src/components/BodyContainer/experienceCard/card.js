import React from 'react';
import './card.css';

// const duration = '2022 - Present';
// const jobTitle = 'Web developer & designer';
// const postType = 'CDO at Istartec';
// const jobDescription = 'My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I have also released an online video course that covers everything you need to know to build a web app with the Spotify API.';
// const tags = ['JavaScript', 'HTML', 'UI/UX'];

// 

const Card = ({ duration, jobTitle, postType, jobDescription, tags, externalLink }) => {
    return (

        <a href={externalLink} target="_blank"  >
            <div className='card'>
                <div className='duration'>{duration}</div>
                <div className='card-content'>
                    <h1>{jobTitle}</h1>
                    <p className='postType'>{postType}</p>
                    <p>{jobDescription}</p>


                    <div className='tags'>
                        {tags.map((tags, index) => (
                            <span key={index}>{tags}</span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Card
