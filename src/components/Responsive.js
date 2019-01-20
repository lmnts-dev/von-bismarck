import React from 'react'
import Responsive from 'react-responsive'
import * as lmnts from '../data/Styles'

export const Xs = props => (
  <Responsive {...props} maxWidth={lmnts.Base.Screen.Xs} />
)
export const Sm = props => (
  <Responsive
    {...props}
    minWidth={lmnts.Base.Screen.Xs + 1}
    maxWidth={lmnts.Base.Screen.Sm}
  />
)
export const Md = props => (
  <Responsive
    {...props}
    minWidth={lmnts.Base.Screen.Sm + 1}
    maxWidth={lmnts.Base.Screen.Md}
  />
)
export const Lg = props => (
  <Responsive
    {...props}
    minWidth={lmnts.Base.Screen.Md + 1}
    maxWidth={lmnts.Base.Screen.Lg}
  />
)
export const Xl = props => (
  <Responsive {...props} minWidth={lmnts.Base.Screen.Lg + 1} />
)
