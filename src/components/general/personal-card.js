import React from "react"
import Img from "gatsby-image"

export default ({ imageFluid }) => (
    <div className="card">
        <div className="card-image">
            <figure className="image">
                <Img fluid={imageFluid} alt="My profile picture" imgStyle={{objectFit: 'contain'}} />
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
            <div className="media-content">
                <p className="title is-4">Arjan van Hugten</p>
                <p className="subtitle is-6">
                    Software Developer
                </p>
            </div>
            </div>

            <div className="content">
            <p>
                Hi, welcome to my site. I'm Software Developer at Aviva Solutions in Eindhoven. 
            </p>
            <span className="primary-color">C#</span> | <span className="primary-color">Javascript</span> | <span className="primary-color">Azure Devops</span> 
            <br/>
            <span className="primary-color">Kentico</span> | <span className="primary-color">Python</span> | <span className="primary-color">Git</span> | <span className="primary-color">Docker</span> 
            <br/>
            <time dateTime="1998-08-30">30 August 1998</time>
            </div>
        </div>
    </div>
)