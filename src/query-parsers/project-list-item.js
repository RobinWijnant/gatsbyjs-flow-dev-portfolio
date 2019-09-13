// @flow
import slugify from "slugify"

export type ProjectListItem = {
  title: string,
  url: string,
  type: string,
  date: string,
  featuredImage: any,
}

const parse = (node: any): ProjectListItem => {
  return {
    title: node.title.value,
    url: `/projects/${node.cockpitId}-${slugify(node.title.value)}`,
    type: node.type.value[0],
    date: node.date.value,
    featuredImage: node.featured_image.value.childImageSharp,
  }
}

export default { parse }
