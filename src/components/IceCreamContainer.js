import React from 'react'
import { connect } from 'react-redux'

import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Icecreams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Icecreams</button>
    </div>
  )
}

// return object
const mapStateToProps = state => ({
  numOfIceCreams: state.iceCream.numOfIceCreams
})

const mapDispatchToProps = dispatch => ({
  buyIceCream: () => dispatch(buyIceCream())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(IceCreamContainer)
