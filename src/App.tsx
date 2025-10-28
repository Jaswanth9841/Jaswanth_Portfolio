import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { CommandPaletteProvider } from './contexts/CommandPaletteContext'
import { useScrollOptimization } from './hooks/useScrollOptimization'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Experience from './pages/Experience'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  useScrollOptimization()
  
  useEffect(() => {
    // Set up intersection observer for animations with better performance
    const observer = new IntersectionObserver(
      (entries) => {
        // Use requestAnimationFrame to batch DOM updates
        requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in')
              // Unobserve after animation to improve performance
              observer.unobserve(entry.target)
            }
          })
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Load animations slightly before they're visible
      }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <ThemeProvider>
      <CommandPaletteProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetail />} />
            <Route path="experience" element={<Experience />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </CommandPaletteProvider>
    </ThemeProvider>
  )
}

export default App

