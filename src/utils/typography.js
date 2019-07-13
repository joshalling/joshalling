import Typography from 'typography'
import lawton from 'typography-theme-lawton'

lawton.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

const typography = new Typography(lawton)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
