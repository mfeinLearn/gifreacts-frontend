// import React from 'react'
// import { connect } from 'react-redux'
// // import { editGif } from "../actions/gifs.js"
//
// class EditGifFormContainer extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//
//   state = {
//     emotion: '',
//     humer_type: '',
//     name: this.props.gif.images.downsized.url //  add changes to dispatch the setGif action with a response from the giffy api
//   };
//
//   onFormSubmit = event => {
//     event.preventDefault();
//     // this.props.editGif(this.state)
//     //console.log(this.state.aGif)
//     // console.log(this.state.humer_type)
//
//
//     //this.props.onSubmit(this.state.term);
//     // console.log(this.state.term)
//   }
//
//   render() {
//   return (
//     <form onSubmit={this.onFormSubmit}>
//       <input
//         placeholder="emotion"
//         name="emotion"
//         type="text"
//         value={this.state.emotion}
//         onChange={(e) => this.setState({ emotion: e.target.value })}
//       />
//       <input
//         placeholder="humer type"
//         name="humer type"
//         type="text"
//         value={this.state.humer_type}
//         onChange={(e) => this.setState({ humer_type: e.target.value })}
//       />
//       <input type="submit" value="Submit" />
//     </form>
//     )
//   }
// }
//
// export default connect(null)(EditGifFormContainer)
//
// // I still need....
//
// // 1. action (creator)
// // - 2 action creator?
//
// // 2. another case statment
// //.. in my currentUser reducer
//
// ////////
// // <form onSubmit={this.onFormSubmit} className="ui form">
// //   <div className="field">
// //   <label>Gif Search</label>
// //   <input
// //     type="text"
// //     value={this.state.term}
// //     onChange={(e) => this.setState({ term: e.target.value })}
// //   /> {/*call at some point in time in the future*/}
// //   </div>
// // </form>