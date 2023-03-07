import * as React from "react";
import { graphql, PageProps } from "gatsby"
import PageFooter from "./PageFooter";

export type CityPageLayoutContext = {
    routeName: string
}

type Props = PageProps<Queries.Query, CityPageLayoutContext>

const CityPageLayout: React.FunctionComponent<Props> = (props: Props) => {
    return <main>
        <h1>{props.data.citiesCsv?.title}</h1>
        <p>{props.data.citiesCsv?.text}</p>
        <PageFooter />
    </main>
}

export default CityPageLayout;

export const pageQuery = graphql`
    query CityPageLayoutQuery($routeName: String) {
        citiesCsv(route: { eq: $routeName }) {
            id
            route
            title
            subtitle
            text
        }
    }
`