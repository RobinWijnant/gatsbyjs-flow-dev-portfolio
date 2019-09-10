// @flow
import slugify from "slugify"

export type Project = {
  title: string,
  brand: string,
  url: string,
  type: string,
  featuredImage: any,
}

export type HomePageData = {
  bannerImage: any,
  projects: Project[],
}

const parse = (data: any): HomePageData => {
  const projects: Project[] = data.allCockpitProjects.nodes.map(node => {
    return {
      title: node.title.value,
      brand: node.brand.value,
      url: `/projects/${node.cockpitId}-${slugify(node.title.value)}`,
      type: node.type.value[0],
      featuredImage: node.featured_image.value.childImageSharp,
    }
  })
  return {
    bannerImage: data.cockpitHome.banner_image.value.childImageSharp,
    projects: projects,
  }
}

export default { parse }
