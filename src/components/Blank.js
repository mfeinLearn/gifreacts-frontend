import React from 'react';
import { connect } from 'react-redux'
import { fetchGifs } from '../actions/gifs'
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
class Blank extends React.Component {

  componentDidMount() {
    this.props.fetchGifs()
  }

  render(props) {
      return (

        <div className="NavBar">
            <span role="img" aria-labelledby="myNameId">😖 </span>
           <h2>This is Blank</h2>
{/*  //          {this.props.gifs.map(gif => */}
{/*  // <li key={gif.id}> {gif.attributes.name} </li> )} */}

            <span role="img" aria-labelledby="myNameId"> 🙄</span>
        </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs
  }
}

export default connect(mapStateToProps, {fetchGifs})(Blank)
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
