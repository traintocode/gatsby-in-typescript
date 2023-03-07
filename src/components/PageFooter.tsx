import { Link } from "gatsby"
import * as React from "react"
import "./PageFooter.scss"

const cssBlockName = "page-footer"
const cssLinkClass = `${cssBlockName}__link`

const PageFooter: React.FunctionComponent = () => {
    return <footer className={cssBlockName}>
        <p>This is my footer</p>
        <Link className={cssLinkClass} to="privacy-policy">Privacy Policy</Link>
    </footer>
}

export default PageFooter