import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../utils/fontawesome'

export default () => (
    <form className="contact-me-form" method="post" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="bot-field" />
        <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left">
                <input className="input" type="text" placeholder="Name"/>
                <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="align-left" />
                </span>
            </div>
        </div>

        <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
                <input className="input" type="email" placeholder="Email"/>
                <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="envelope" />
                </span>
            </div>
        </div>

        <div className="field">
            <label className="label">Message</label>
            <div className="control">
                <textarea className="textarea" placeholder="Message"></textarea>
            </div>
        </div>

        <div className="field is-grouped">
            <div className="control">
                <button className="button is-primary">Submit</button>
            </div>
            <div className="control">
                <button className="button is-light">Cancel</button>
            </div>
        </div>
    </form>
)