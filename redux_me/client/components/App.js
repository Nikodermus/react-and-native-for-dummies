import { bindActionCreators } from 'redux';
import * as actionCreator from '../actions/actionCreator';
import { connect } from 'react-redux';
import Main from './Main';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreator, dispatch)
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;