// @flow
import slugify from "slugify"

export type ProjectListItem = {
  title: string,
  description: string,
  url: string,
  type: string,
  date: string,
  featuredImage: any,
  visible: boolean,
}

const parse = (node: any): ProjectListItem => {
  return {
    title: node.title.value,
    description: node.description.value,
    url: `/projects/${node.cockpitId}-${slugify(node.title.value)}`,
    type: node.type.value[0],
    date: node.date.value,
    featuredImage: node.featured_image.value.childImageSharp,
    visible: true,
  }
}

export default { parse }
