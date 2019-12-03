exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `,
  )

  if (result.errors) {
    console.log(result.errors) // eslint-disable-line no-console
    throw new Error('Error during page creation')
  }

  // Create blog posts pages.
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        id: node.id,
      },
    })
  })
}
