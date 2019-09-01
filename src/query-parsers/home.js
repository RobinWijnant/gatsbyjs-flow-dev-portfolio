// @flow
import slugify from "slugify"

export type FeaturedProject = {
  year: number,
  title: string,
  slug: string,
  type: string,
  featuredImage: any,
}

export type HomePageData = {
  bannerImage: any,
  projects: FeaturedProject[],
}

const parse = (data: any): HomePageData => {
  const projects: FeaturedProject[] = data.allCockpitProjects.nodes.map(
    node => {
      return {
        year: Number(node.date.value.substring(0, 4)),
        title: node.title.value,
        slug: slugify(node.title.value, { lower: true }),
        type: node.type.value[0],
        featuredImage: node.featured_image.value.childImageSharp,
      }
    }
  )
  return {
    bannerImage: data.cockpitHome.banner_image.value.childImageSharp,
    projects: projects,
  }
}

export default { parse }
