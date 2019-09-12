// @flow

export type DetailedProject = {
  brand: string,
  title: string,
  featuredImage: any,
  type: string,
  date: string,
  techStack: string[],
  description: string,
  resultImages?: any,
  resultTitle?: string,
  resultText?: string,
}

const parse = (node: any): DetailedProject => {
  const parsed: DetailedProject = {
    brand: node.brand.value,
    title: node.title.value,
    featuredImage: node.featured_image.value.childImageSharp,
    type: node.type.value[0],
    date: node.date.value,
    techStack: node.tech_stack.value,
    description: node.description.value,
  }
  if (node.result_images) {
    parsed.resultImages = node.result_images.value.map(
      image => image.childImageSharp
    )
  }
  if (node.result_text_block) {
    parsed.resultTitle = node.result_text_block.value.title.value
    parsed.resultText = node.result_text_block.value.text.value
  }
  return parsed
}

export default { parse }
