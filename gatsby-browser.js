/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "normalize.css/normalize.css"

// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
export const onClientEntry = () => {  
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
  }
}