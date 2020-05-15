import React from 'react'
import PropTypes from 'prop-types'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'
import userStore from 'part:@sanity/base/user'
import authenticationFetcher from 'part:@sanity/base/authentication-fetcher'

const createPatchFrom = value =>
  PatchEvent.from(value === '' ? unset() : set(value))

class CreatedBy extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if (this.props.value == null) {
      authenticationFetcher.getCurrentUser().then(u => {
        this.props.onChange(createPatchFrom(u.id))
      })
    }
  }

  render() {
    return null
  }
}

export default CreatedBy
