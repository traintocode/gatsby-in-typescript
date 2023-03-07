import type { GatsbyNode } from "gatsby"
import path from "path"
import { CityPageLayoutContext } from "./src/components/CityPageLayout"

export const createPages: GatsbyNode["createPages"] = (nodeArgs) => {
    nodeArgs.graphql<Queries.Query>(`
    query {
        allCitiesCsv {
          edges {
            node {
              route
            }
          }
        }
      }`).then(result => {
        result.data?.allCitiesCsv?.edges.map(item => {
            nodeArgs.actions.createPage({
                path: item.node.route!,
                component: path.resolve('src/components/CityPageLayout.tsx'),
                context: {
                    routeName: item.node.route!
                } as CityPageLayoutContext
            })
        })
      })
}

export const onCreatePage: GatsbyNode["onCreatePage"] = (args) => {
  args.reporter.info
}

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = (args) => {
  args.actions.setWebpackConfig({
    plugins: [
      args.plugins.define({
        __MY_VARIABLE__: "hello"
      }),
    ],
  })
}

export const onCreateWebpackConfigA: GatsbyNode["onCreateWebpackConfig"] = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        __MY_VARIABLE__: "hello"
      }),
    ],
  })
}