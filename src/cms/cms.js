import CMS from "netlify-cms-app";

import HomePagePreview from "./previews/homepage-preview";
import FooterPreview from "./previews/footer-preview";
import NavbarPreview from "./previews/header-preview";
import AboutMePreview from "./previews/about-me-preview";

CMS.registerPreviewTemplate("homepage", HomePagePreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("navbar", NavbarPreview);
CMS.registerPreviewTemplate("aboutme", AboutMePreview);