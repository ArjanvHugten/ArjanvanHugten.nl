import React from "react"

export default () => (
    <footer>
        <div className="container has-text-centered">
            <hr/>
            <p>
                Copyright © {new Date().getFullYear()} <strong>Arjan van Hugten</strong>. 
                Developer at <a href="https://www.avivasolutions.nl/" target="_blank" rel="noopener noreferrer">Aviva Solutions</a>.
            </p>
        </div>
    </footer>
)