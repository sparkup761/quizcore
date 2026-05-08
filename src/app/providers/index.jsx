import { ThemeProvider } from './ThemeProvider'
import { StoreProvider } from './StoreProvider'

export function AppProviders({ children }) {
  return (
    <StoreProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreProvider>
  )
}

