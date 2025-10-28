import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCommandPalette } from '../../contexts/CommandPaletteContext'
import { useTheme } from '../../contexts/ThemeContext'
import { fuzzySearch, SearchableItem } from '../../utils/fuzzySearch'
import siteData from '../../data/site'
import { cn } from '../../utils/cn'

export default function CommandPalette() {
  const { isOpen, close } = useCommandPalette()
  const { setTheme } = useTheme()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const allItems: SearchableItem[] = [
    // Pages
    { id: 'home', title: 'Home', content: 'Go to home page', type: 'page', path: '/' },
    { id: 'projects', title: 'Projects', content: 'View all projects', type: 'page', path: '/projects' },
    { id: 'experience', title: 'Experience', content: 'View work experience', type: 'page', path: '/experience' },
    { id: 'about', title: 'About', content: 'Learn more about me', type: 'page', path: '/about' },
    { id: 'contact', title: 'Contact', content: 'Get in touch', type: 'page', path: '/contact' },
    
    // Projects
    ...siteData.projects.map(project => ({
      id: `project-${project.id}`,
      title: project.title,
      content: project.summary,
      type: 'project' as const,
      path: `/projects/${project.id}`,
    })),
    
    // Actions
    {
      id: 'theme-dark',
      title: 'Dark Mode',
      content: 'Switch to dark theme',
      type: 'action' as const,
      action: () => setTheme('dark'),
    },
    {
      id: 'theme-light',
      title: 'Light Mode',
      content: 'Switch to light theme',
      type: 'action' as const,
      action: () => setTheme('light'),
    },
  ]

  const filteredItems = query ? fuzzySearch(allItems, query) : allItems

  const handleSelect = useCallback((item: SearchableItem) => {
    if (item.action) {
      item.action()
    } else if (item.path) {
      navigate(item.path)
    }
    close()
    setQuery('')
    setSelectedIndex(0)
  }, [navigate, close])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open with Cmd/Ctrl + K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (!isOpen) {
          setQuery('')
          setSelectedIndex(0)
        }
        close()
      }

      if (!isOpen) return

      // Close with Escape
      if (e.key === 'Escape') {
        close()
        setQuery('')
        setSelectedIndex(0)
      }

      // Navigate with Arrow keys
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % filteredItems.length)
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length)
      }

      // Select with Enter
      if (e.key === 'Enter' && filteredItems[selectedIndex]) {
        e.preventDefault()
        handleSelect(filteredItems[selectedIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, close, filteredItems, selectedIndex, handleSelect])

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'page': return '📄'
      case 'project': return '🚀'
      case 'action': return '⚡'
      default: return '📌'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Command Palette */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl"
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-800">
                <span className="text-gray-400">🔍</span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pages, projects, or actions..."
                  className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder:text-gray-500 outline-none"
                  autoFocus
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 rounded">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto p-2">
                {filteredItems.length === 0 ? (
                  <div className="py-8 text-center text-gray-500">
                    No results found
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredItems.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={cn(
                          'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors',
                          index === selectedIndex
                            ? 'bg-primary-100 dark:bg-primary-900/30'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        )}
                      >
                        <span className="text-xl">{getItemIcon(item.type)}</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 dark:text-white truncate">
                            {item.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                            {item.content}
                          </div>
                        </div>
                        {index === selectedIndex && (
                          <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs font-mono text-gray-500 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700">
                            ↵
                          </kbd>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500">
                <span>Navigate with ↑↓</span>
                <span className="flex items-center gap-2">
                  <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">⌘K</kbd>
                  to close
                </span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

