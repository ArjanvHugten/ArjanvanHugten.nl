import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../utils/fontawesome'

export default () => (
    <div className="social-icons">
        <nav className="level is-mobile">
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">LinkedIn</p>
                    <p className="title">
                        <a href="https://www.linkedin.com/in/arjan-van-hugten-090b1511a/" className="social-icon-link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                        </a>
                    </p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">Stack overflow</p>
                    <p className="title">
                        <a href="https://stackoverflow.com/users/6421230/a-van-hugten" className="social-icon-link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
                        </a>
                    </p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                    <p className="heading">GitHub</p>
                    <p className="title">
                        <a href="https://github.com/ArjanvHugten" className="social-icon-link" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                    </p>
                </div>
            </div>
        </nav>
        <hr />
    </div>
)