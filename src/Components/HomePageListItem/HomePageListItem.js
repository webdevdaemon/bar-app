import React from 'react'
import Card from 'react-bootstrap/Card'

function HomePageListItem({title, subtitle, desc, path, ...props}) {
  return (
    <Card as="a" href={`${path}`} bg="secondary" className="mb1">
      <Card.Header as="h3" className="font-title">{`${title}`}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{`${subtitle}`}</p>
          <footer className="blockquote-footer">{`${desc}`}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default HomePageListItem
