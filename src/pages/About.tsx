import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import siteData from '../data/site'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | {siteData.name}</title>
        <meta name="description" content={siteData.bio} />
      </Helmet>

      <div className="grain min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get to know more about my journey, skills, and what drives me as a developer.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Avatar */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-white text-6xl font-bold mb-4 shadow-2xl">
                      {siteData.name.charAt(0)}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {siteData.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {siteData.role}
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href={siteData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a 
                        href={siteData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Hi there! 👋
                    </h3>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      <p>{siteData.bio}</p>
                      <p>
                        I'm passionate about creating intuitive user interfaces and writing clean, 
                        maintainable code. I believe in continuous learning and staying up-to-date 
                        with the latest web technologies and best practices.
                      </p>
                      <p>
                        When I'm not coding, you can find me exploring new technologies, 
                        contributing to open-source projects, or sharing knowledge with the developer community.
                      </p>
                    </div>
                    <div className="mt-6">
                      <a href={siteData.resumeUrl} download>
                        <Button variant="primary" size="lg">
                          Download Resume →
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Skills & Technologies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Core Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'].map((skill, i) => (
                        <Badge key={i} variant="primary" animated>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Tools & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Vite', 'Redux', 'Tailwind CSS', 'Git', 'Webpack'].map((skill, i) => (
                        <Badge key={i} variant="default" animated>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Testing */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Testing & Quality
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Jest', 'React Testing Library', 'Vitest'].map((skill, i) => (
                        <Badge key={i} variant="success" animated>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Other */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Other Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['REST API', 'Azure DevOps', 'Node.js', 'Spring Boot'].map((skill, i) => (
                        <Badge key={i} variant="default" animated>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Values/Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What I Value
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: '🎯',
                    title: 'Quality Code',
                    description: 'Writing clean, maintainable, and well-documented code that stands the test of time.',
                  },
                  {
                    icon: '🚀',
                    title: 'Performance',
                    description: 'Building fast, optimized applications that provide excellent user experiences.',
                  },
                  {
                    icon: '♿',
                    title: 'Accessibility',
                    description: 'Ensuring web applications are usable by everyone, regardless of their abilities.',
                  },
                ].map((value, i) => (
                  <Card key={i} className="p-6 text-center" hoverable>
                    <div className="text-4xl mb-3">{value.icon}</div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {value.description}
                    </p>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Card className="p-12 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-950 dark:to-blue-950 border-none">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Interested in working together?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link to="/contact">
                    <Button variant="primary" size="lg">
                      Get in Touch
                    </Button>
                  </Link>
                  <Link to="/projects">
                    <Button variant="outline" size="lg">
                      View My Work
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

