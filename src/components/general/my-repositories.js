import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../utils/fontawesome'

export default () => {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        let isSubscribed = true
        fetch("https://api.github.com/users/arjanvhugten/repos")
            .then(res => res.json())
            .then(response => {
                if (isSubscribed) {
                    setRepositories(response)
                }
            })
            .catch(error => console.log(error))

        return () => isSubscribed = false
    }, [])

    return (
        <nav className="panel">
            <p className="panel-heading">
                <FontAwesomeIcon icon={['fab', "github"]} /> My GitHub repositories
            </p>
            {repositories.map(repository => 
                <a key={repository.id} href={repository.html_url} className="panel-block" target="_blank" rel="noopener noreferrer">
                    <span className="panel-icon">
                        <FontAwesomeIcon icon="book" />
                    </span>
                    {repository.name}
                </a>
            )}
            <div className="panel-block">
                <a href="https://github.com/ArjanvHugten?tab=repositories" className="button is-link is-outlined is-fullwidth" target="_blank" rel="noopener noreferrer">
                    Go to my github
                </a>
            </div>
        </nav>
    )
}