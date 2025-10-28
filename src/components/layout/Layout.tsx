import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CommandPalette from '../ui/CommandPalette'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      
      <Footer />
      
      <CommandPalette />
    </div>
  )
}

