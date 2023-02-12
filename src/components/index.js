import ComponentUseState from './ComponentUseState'
import ComponentUseEffect from './ComponentUseEffect'
import ComponentUseMemo from './ComponentUseMemo'
import ComponentUseRef from './ComponentUseRef'
import ComponentUseContext from './ComponentUseContext'
import ComponentUseReducer from './ComponentUseReducer'
import ComponentUseCallback from './ComponentUseCallback'

export const Components = {
  useState: ComponentUseState,
  useEffect: ComponentUseEffect,
  useMemo: ComponentUseMemo,
  useRef: ComponentUseRef,
  useContext: ComponentUseContext,
  useReducer: ComponentUseReducer,
  useCallback: ComponentUseCallback
}

export default Components
