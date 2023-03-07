import { graphql, Link } from "gatsby"
import * as React from "react"
import PageFooter from "../components/PageFooter"

type Props = {
  data: Queries.Query
}

const IndexPage: React.FunctionComponent<Props> = (props: Props) => {
  return <main>
    <nav>
      {props.data.allCitiesCsv?.edges.map(item =>
        <Link key={item.node.title} to={item.node.route!}>
          <h2>{item.node.title}</h2>
          <p>{item.node.subtitle}</p></Link>)}
    </nav>
    <PageFooter />
  </main>
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allCitiesCsv {
      edges {
        node {
          route
          title
          subtitle
        }
      }
    }
  }
`
