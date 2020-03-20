import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../utils/fontawesome'

export default ({ socials }) => (
    <div className="social-icons">
        <nav className="level is-mobile">
            {socials.map(social => 
                <div key={social.label} className="level-item has-text-centered">
                    <div>
                        <p className="heading">{social.label}</p>
                        <p className="title">
                            <a href={social.linkURL} className="social-icon-link" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={['fab', social.icon]}/>
                            </a>
                        </p>
                    </div>
                </div>
            )}
        </nav>
        <hr />
    </div>
)