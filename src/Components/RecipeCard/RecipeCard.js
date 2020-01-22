/** @jsx jsx */
// import {useState} from 'react'
import {css, jsx} from '@emotion/core'
import {RecipeState} from '../../context'
import {useContext} from 'react'
import Card from 'react-bootstrap/Card'
import RecipeModal from '../../Layout/RecipeModal/RecipeModal'

const RecipeCard = ({key, recipe}) => {
  // const [showText, setShowText] = useState(false)
  // const toggleText = () => setShowText(!showText)
  const {showModal, setShowModal} = useContext(RecipeState)
  const {
    name,
    // category,
    // howTo,
    thumbnail,
    // ingredients,
    // id
  } = recipe

  return (
    <Card
      as={'div'}
      href={null}
      onClick={() => setShowModal(true)}
      className={`recipe-card`}
      key={key}
      css={css`
        display: block;
        max-width: 100vw;
        max-height: 100vh;
        margin: 0;
      `}
    >
      <Card.Img src={thumbnail} />
      <Card.ImgOverlay classname="d-flex justify-content-center flex-direction-column">
        <Card.Body
          css={css`
            width: 100%;
            padding: 0;
          `}
        >
          <Card.Title
            css={css`
              background-color: rgba(0, 0, 0, 0.35);
              color: #efefef;
              margin: 0;
              width: 100%;
            `}
          >
            <h3 className="font-title text-center responsive-text-4">
              {name}
            </h3>
          </Card.Title>
        </Card.Body>
      </Card.ImgOverlay>
      <RecipeModal
        onHide={setShowModal(false)}
        show={showModal}
        recipe={recipe}
      />
    </Card>
  )
}

export default RecipeCard
