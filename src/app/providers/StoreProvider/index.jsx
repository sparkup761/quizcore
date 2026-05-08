import { Provider } from 'react-redux'
import { createAppStore } from './store'

const store = createAppStore()

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}

