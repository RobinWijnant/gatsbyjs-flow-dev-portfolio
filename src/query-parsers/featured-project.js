// @flow
import slugify from "slugify"

export type FeaturedProject = {
  title: string,
  url: string,
  type: string,
  featuredImage: any,
}

const parse = (node: any): FeaturedProject => {
  return {
    title: node.title.value,
    url: `/projects/${node.cockpitId}-${slugify(node.title.value)}`,
    type: node.type.value[0],
    featuredImage: node.featured_image.value.childImageSharp,
  }
}

export default { parse }
