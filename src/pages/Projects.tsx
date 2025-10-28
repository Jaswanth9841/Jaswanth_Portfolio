import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SpotlightCard from '../components/ui/SpotlightCard'
import Badge from '../components/ui/Badge'
import Chip from '../components/ui/Chip'
import siteData from '../data/site'
import { Project } from '../data/site'

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<'featured' | 'recent'>('featured')

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    siteData.projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = siteData.projects.filter(project => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch = 
          project.title.toLowerCase().includes(query) ||
          project.summary.toLowerCase().includes(query) ||
          project.tags.some(tag => tag.toLowerCase().includes(query))
        if (!matchesSearch) return false
      }

      // Tag filter
      if (selectedTags.length > 0) {
        const matchesTags = selectedTags.every(tag => 
          project.tags.includes(tag)
        )
        if (!matchesTags) return false
      }

      return true
    })

    // Sort
    if (sortBy === 'featured') {
      filtered = filtered.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return 0
      })
    }

    return filtered
  }, [searchQuery, selectedTags, sortBy])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <>
      <Helmet>
        <title>Projects | {siteData.name}</title>
        <meta name="description" content={`Explore ${siteData.name}'s portfolio of web development projects`} />
      </Helmet>

      <div className="grain min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my work in web development, featuring React applications, 
              UI/UX implementations, and full-stack solutions.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 space-y-6"
          >
            {/* Search */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
                <button
                  onClick={() => setSortBy('featured')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    sortBy === 'featured'
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Featured
                </button>
                <button
                  onClick={() => setSortBy('recent')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    sortBy === 'recent'
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  Recent
                </button>
              </div>
            </div>

            {/* Tags */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Filter by technology:
                </span>
                {selectedTags.length > 0 && (
                  <button
                    onClick={() => setSelectedTags([])}
                    className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredProjects.length} of {siteData.projects.length} projects
            </div>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                No projects found matching your criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedTags([])
                }}
                className="mt-4 text-primary-600 dark:text-primary-400 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <SpotlightCard className="h-full">
        <Link to={`/projects/${project.id}`} className="block p-6 h-full">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              {project.featured && (
                <Badge variant="primary">Featured</Badge>
              )}
            </div>

            {/* Summary */}
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
              {project.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <Chip key={i} variant="outlined">
                  {tag}
                </Chip>
              ))}
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <ul className="space-y-1 mb-4">
                {project.highlights.slice(0, 2).map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-primary-500 mt-0.5">✓</span>
                    <span className="line-clamp-1">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA */}
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
                View Details →
              </span>
              {project.links?.demo && (
                <span className="text-sm text-gray-500">Live Demo</span>
              )}
            </div>
          </div>
        </Link>
      </SpotlightCard>
    </motion.div>
  )
}

