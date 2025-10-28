import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { BentoGrid, BentoCard } from '../components/ui/BentoGrid'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Metric from '../components/ui/Metric'
import siteData from '../data/site'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{siteData.name} | {siteData.role}</title>
        <meta name="description" content={siteData.tagline} />
        <meta property="og:title" content={`${siteData.name} | ${siteData.role}`} />
        <meta property="og:description" content={siteData.tagline} />
        <meta name="twitter:title" content={`${siteData.name} | ${siteData.role}`} />
        <meta name="twitter:description" content={siteData.tagline} />
      </Helmet>

      <div className="grain min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">{siteData.name}</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-2">
                {siteData.role}
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {siteData.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <Link to="/projects">
                <Button variant="primary" magnetic size="lg">
                  View Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-2 pt-6"
            >
              {siteData.topSkills.map((skill, i) => (
                <Badge key={i} variant="primary" animated>
                  {skill}
                </Badge>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <BentoGrid>
            {/* Featured Project */}
            <BentoCard colSpan={2} rowSpan={2} gradient>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary-500/20 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
                    Featured Project
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {siteData.projects[0].title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {siteData.projects[0].summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {siteData.projects[0].tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i}>{tag}</Badge>
                    ))}
                  </div>
                </div>
                <Link to={`/projects/${siteData.projects[0].id}`} className="mt-4">
                  <Button variant="primary">View Details →</Button>
                </Link>
              </div>
            </BentoCard>

            {/* Experience Snapshot */}
            <BentoCard>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {siteData.experience[0].role}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                    {siteData.experience[0].company}
                  </p>
                </div>
                <Link to="/experience" className="mt-4">
                  <Button variant="ghost" size="sm">View All →</Button>
                </Link>
              </div>
            </BentoCard>

            {/* Skills Marquee */}
            <BentoCard>
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Tech Stack
                </h3>
                <div className="flex-1 overflow-hidden relative">
                  <div className="flex flex-wrap gap-2">
                    {siteData.skills.slice(0, 8).map((skill, i) => (
                      <Badge key={i} variant="default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Link to="/about" className="mt-4">
                  <Button variant="ghost" size="sm">View All →</Button>
                </Link>
              </div>
            </BentoCard>

            {/* Quick Contact */}
            <BentoCard>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Let's Connect
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Available for freelance projects and collaborations
                  </p>
                </div>
                <Link to="/contact" className="mt-4">
                  <Button variant="primary" size="sm">Contact Me →</Button>
                </Link>
              </div>
            </BentoCard>

            {/* Location */}
            <BentoCard>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <span className="text-4xl mb-3">📍</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {siteData.location}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Available for remote work
                </p>
              </div>
            </BentoCard>
          </BentoGrid>
        </section>

        {/* Metrics Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Impact by Numbers
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Delivering measurable results through quality code and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.metrics.map((metric, i) => (
              <Metric
                key={i}
                label={metric.label}
                value={metric.value}
                icon={metric.icon}
                delay={i * 0.1}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-blue-600 p-12 text-center"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's collaborate on your next project and create exceptional web experiences together.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="secondary" size="lg">
                    Start a Project
                  </Button>
                </Link>
                <a href={siteData.resumeUrl} download>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </section>
      </div>
    </>
  )
}

