import React from "react"
import Img from "gatsby-image"

export default ({ data, imageFluid }) => {
    const birthDate = new Date(data.birthdate)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <Img fluid={imageFluid} alt="My profile picture" imgStyle={{objectFit: 'contain'}} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                <div className="media-content">
                    <p className="title is-4">{data.name}</p>
                    <p className="subtitle is-6">{data.function}</p>
                </div>
                </div>

                <div className="content">
                    <p>{data.description}</p>
                    {data.techstack.map(tech => 
                        <span key={tech.label}>
                            <span className="primary-color">{tech.label}</span>
                            <span> | </span>
                        </span>
                    )}
                    <br/>
                    <span>{birthDate.toLocaleDateString('en-US', options)}</span>
                </div>
            </div>
        </div>
    )
}