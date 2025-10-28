import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Timeline from '../components/ui/Timeline'
import siteData from '../data/site'

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience | {siteData.name}</title>
        <meta name="description" content={`View ${siteData.name}'s professional experience and work history`} />
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
              My <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A journey through my professional career in web development, 
              highlighting key roles, achievements, and technologies I've mastered.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Timeline
              items={siteData.experience.map((exp, index) => ({
                title: exp.role,
                subtitle: exp.company,
                period: exp.period,
                description: exp.description,
                highlights: exp.highlights,
                technologies: exp.technologies,
                index,
              }))}
            />
          </motion.div>

          {/* Education */}
          {siteData.education && siteData.education.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-20"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Education
              </h2>
              <div className="space-y-6">
                {siteData.education.map((edu, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Recognition & Achievements */}
          {siteData.testimonials && siteData.testimonials.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mt-20"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                <span className="gradient-text">Recognition</span> & Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {siteData.testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="p-8 rounded-xl border-2 border-primary-200 dark:border-primary-800 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-shadow duration-300"
                  >
                    {testimonial.id === 'award1' && (
                      <div className="text-4xl mb-4">🏆</div>
                    )}
                    {testimonial.id === 'achievement1' && (
                      <div className="text-4xl mb-4">⭐</div>
                    )}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.id === 'award1' ? '🏆' : '⭐'}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.role}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.author}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  )
}

