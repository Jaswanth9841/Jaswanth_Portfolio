import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Metric from '../components/ui/Metric'
import siteData from '../data/site'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = siteData.projects.find(p => p.id === id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | {siteData.name}</title>
        <meta name="description" content={project.summary} />
      </Helmet>

      <div className="grain min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link to="/projects">
              <Button variant="ghost" size="sm">
                ← Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h1>
                  {project.featured && <Badge variant="primary">Featured</Badge>}
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  {project.summary}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                {project.links?.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">
                      Live Demo →
                    </Button>
                  </a>
                )}
                {project.links?.repo && (
                  <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      View Code
                    </Button>
                  </a>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
            >
              {project.metrics.map((metric, i) => (
                <Metric key={i} {...metric} delay={i * 0.1} />
              ))}
            </motion.div>
          )}

          {/* Description */}
          {project.description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  About This Project
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
              </Card>
            </motion.div>
          )}

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Key Features & Achievements
                </h2>
                <ul className="space-y-4">
                  {project.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 text-lg">
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          )}

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteData.projects
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map((otherProject) => (
                  <Link key={otherProject.id} to={`/projects/${otherProject.id}`}>
                    <Card hoverable className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {otherProject.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {otherProject.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {otherProject.tags.slice(0, 3).map((tag, i) => (
                          <Badge key={i} variant="default">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

