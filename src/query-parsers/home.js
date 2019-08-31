// @flow
import slugify from "slugify"

export type ProjectListItem = {
  year: number,
  slug: string,
  type: string,
  featuredImage: any,
}

export type HomePageData = {
  bannerImage: any,
  projects: ProjectListItem[]
}

const parse = (data: any): HomePageData => {
  const projects: ProjectListItem[] =  data.allCockpitProjects.nodes.map(node => {
    return {
      year: Number(node.date.value.substring(0,4)),
      slug: slugify(node.title.value, {lower: true}),
      type: node.type.value[0],
      featuredImage: node.featured_image.value.childImageSharp
    }
  })
  return {
    bannerImage: data.cockpitHome.banner_image.value.childImageSharp,
    projects: projects
  }
}

export default { parse }