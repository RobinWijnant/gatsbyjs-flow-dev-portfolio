/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const slugify = require("slugify")
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`./src/templates/project.js`)
  return graphql(`
    {
      allCockpitProjects {
        nodes {
          cockpitId
          title {
            value
          }
        }
      }
    }
  `).then(result => {
    result.data.allCockpitProjects.nodes.map(node => {
      createPage({
        path: `/projects/${node.cockpitId}-${slugify(node.title.value)}`,
        component: projectTemplate,
        context: {
          cockpitId: node.cockpitId,
        },
      })
    })
  })
}
