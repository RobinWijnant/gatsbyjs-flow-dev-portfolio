// @flow
import slugify from "slugify"

export type FooterProject = {
  brand: string,
  url: string,
}

const parse = (node: any): FooterProject => {
  return {
    brand: node.brand.value,
    url: `/projects/${node.cockpitId}-${slugify(node.title.value)}`,
  }
}

export default { parse }
