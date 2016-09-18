import { connect } from 'react-redux'
import { counter } from '../actions'
import Button from '../components/Button'

const mapStateToProps = (state, ownProps) => {
  return {
    behavior: ownProps.behavior
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(counter(ownProps.behavior))
    }
  }
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Counter;
