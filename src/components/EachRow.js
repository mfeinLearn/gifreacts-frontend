// import React from 'react';
// // import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { deleteGif } from '../actions/gifs.js'
// import HumerTypeDisplay from './HumerTypeDisplay.js';
// import ColoredLine from './ColoredLine.js';
// import SingleGif from './SingleGif.js';
//
//
// class EachRow extends React.Component {
//   handleClickOnEdit = (event, gif) => {
//       event.preventDefault();
//       // pass in gif id into push instead of 62
//       //props.history.push('/gifs/62')
//       this.props.history.push(`/gifs/${gif.id}`)
//       console.log(`The Edit button was clicked. - /gifs/${gif.id}`);
//     }
//
//   // **********
//
//
//   // aCounter = () => {
//   //     this.state.like
//   //   }
//   renderEditAndDeleteButtons = (gif) => {
//       return (
//         <div className="right floated content">
//            <button className="ui violet button" key={Math.random()} onClick={(event)=>this.handleClickOnEdit(event, gif)}>
//             Details
//           </button>
//            <button className="ui violet button" key={Math.random()} onClick={(event)=>this.props.handleClickOnLike(event)}>
//           {/* // ****VVV****** */}
//             Number of likes
//           </button>
//         </div>
//       );
//     }
//
//     render() {
//       const gifs = this.props.gifs.map((gif) => {
//
//
//         return(
//           <div key={gif.id} className="item">
//             <br />
//             <ColoredLine color="red" />
//             <ul>
//             <li ><img height="200" width="200" alt={gif.attributes.name} src={gif.attributes.name}/></li>
//             </ul>
//             <br />
//             {this.renderEditAndDeleteButtons(gif)}
//              <HumerTypeDisplay humer_rating={gif.attributes.humer_type_range} key={Math.random()}/>
//
//             <br />
//           </div>
//           );
//
//         })
//         return gifs;
//       }
//
// }
// const mapStateToProps = (state) => {
//   return {
//     gifs: state.gifs
//   }
// }
//
// export default connect(mapStateToProps, { deleteGif })(EachRow);
