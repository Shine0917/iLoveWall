import { AnyAction, Dispatch } from 'redux'
import { CommonModelState } from './common'
import { UserModelState } from './user'

export interface Loading {
  global: boolean
  effects: { [key: string]: boolean | undefined }
}

export interface ConnectProps {
  dispatch: Dispatch<AnyAction>
}

export interface ConnectState {
  loading: Loading
  common: CommonModelState
  user: UserModelState
}

export { CommonModelState, UserModelState }
