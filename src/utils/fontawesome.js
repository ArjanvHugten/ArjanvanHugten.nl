import "@fortawesome/fontawesome-svg-core/styles.css";

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faAlignLeft, faSearch, faBook } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope)
library.add(faAlignLeft)
library.add(faSearch)
library.add(faBook)
library.add(faLinkedin)
library.add(faGithub)
library.add(faStackOverflow)

config.autoAddCss = false;