import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../utils/fontawesome'

export default () => (
    <form className="contact-me-form" name="contact-me-form" method="post" action="/contact-me/success" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact-me-form" />
        <input type="hidden" name="bot-field" />
        <div className="field">
            <label htmlFor="name" className="label">Name</label>
            <div className="control has-icons-left">
                <input id="name" name="name" className="input" type="text" placeholder="Name" />
                <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="align-left" />
                </span>
            </div>
        </div>

        <div className="field">
            <label htmlFor="email" className="label">Email</label>
            <div className="control has-icons-left">
                <input id="email" name="email" className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="envelope" />
                </span>
            </div>
        </div>

        <div className="field">
            <label htmlFor="message" className="label">Message</label>
            <div className="control">
                <textarea id="message" name="message" className="textarea" placeholder="Message" required></textarea>
            </div>
        </div>

        <div className="field is-grouped">
            <div className="control">
                <input type="submit" className="button is-primary" value="Submit" />
            </div>
            <div className="control">
                <Link to="/contact-me/" className="button is-light">Cancel</Link>
            </div>
        </div>
    </form>
)