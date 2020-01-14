import React, {useState} from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';


const RecipeCard = ({key, name, text}) => {
  const [showText, toggleText] = useState(false)

  return (
    <Card key={key}>
      <CardHeader inlist>{name}</CardHeader>
      <CardBody>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional
          content.
        </CardText>
        <Button>Go somewhere</Button>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  )
}

export default RecipeCard
