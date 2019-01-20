import React from 'react'
import Responsive from 'react-responsive'
import * as lmnts from '../data/Styles'

export const MediaXs = props => (
  <Responsive {...props} maxWidth={lmnts.Base.Screen.Xs} />
)
export const MediaSm = props => (
  <Responsive
    {...props}
    minWidth={lmnts.Base.Screen.Xs + 1}
    maxWidth={lmnts.Base.Screen.Sm}
  />
)
export const MediaSmMax = props => (
  <Responsive
    {...props}
    maxWidth={lmnts.Base.Screen.Sm}
  />
)
export const MediaMd = props => (
  <Responsive
    {...props}
    minWidth={lmnts.Base.Screen.Sm + 1}
    maxWidth={lmnts.Base.Screen.Md}
  />
)
export const MediaMdMax = props => (
  <Responsive
    {...props}
    maxWidth={lmnts.Base.Screen.Md}
  />
)
export const MediaLg = props => (
  <Responsive
    {...props}
    minWidth={lmnts.Base.Screen.Md + 1}
    maxWidth={lmnts.Base.Screen.Lg}
  />
)
export const MediaLgMax = props => (
  <Responsive
    {...props}
    maxWidth={lmnts.Base.Screen.Lg}
  />
)
export const MediaXl = props => (
  <Responsive {...props} minWidth={lmnts.Base.Screen.Lg + 1} />
)
export const MediaXlMax = props => (
  <Responsive {...props} minWidth={lmnts.Base.Screen.Lg + 1} />
)
