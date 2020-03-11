import React from "react"

const Footer = () => (
    <footer className="footer">
        <div className="container content">
            <p>
                Copyright © {new Date().getFullYear()} <strong>Arjan van Hugten</strong>. 
                Developer at <a href="https://www.avivasolutions.nl/">Aviva Solutions</a>.
            </p>
        </div>
    </footer>
)

  
export default Footer