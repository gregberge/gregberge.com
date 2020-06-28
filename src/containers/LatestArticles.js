import React from 'react'
import { Box } from '@xstyled/styled-components'
import { Link } from 'gatsby'
import {
  Card,
  CardLink,
  CardTitle,
  CardBody,
  CardText,
} from '../components/Card'

export function LatestArticles({ edges }) {
  return (
    <Box row my={-2}>
      {edges.map((edge) => (
        <Box key={edge.node.id} col={1} py={2}>
          <CardLink as={Link} to={edge.node.fields.link}>
            <Card>
              <CardBody>
                <CardTitle>{edge.node.frontmatter.title}</CardTitle>
                <CardText>{edge.node.excerpt}</CardText>
              </CardBody>
            </Card>
          </CardLink>
        </Box>
      ))}
    </Box>
  )
}
