/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const styles = {
  header: (css`
    display: block;
  `),
  text: (css`
    display: block;
  `),
}

function RecipeModal({name, howTo, onHide, ...props}) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 css={styles.header}>Ingredients</h4>
        
        <h4 css={styles.header}>Mixing Instructions</h4>
        <p>{howTo}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RecipeModal