require("dotenv").config()

const blogsQuery = `{
    blogs: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blogs/" } }) {
        edges {
            node {
                objectID: id
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    intro
                    path
                }
                excerpt(pruneLength: 5000)
            }
        }
    }
}`
  
const flatten = arr => arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
}))

const settings = { 
    attributesToSnippet: [`excerpt:20`],
    searchableAttributes : [
        'title,path',
        'intro',
        'excerpt',
    ],
}

const queries = [
{
    query: blogsQuery,
    transformer: ({ data }) => flatten(data.blogs.edges),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    settings,
},
]

module.exports = queries