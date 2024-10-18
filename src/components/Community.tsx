import React from 'react'
import { motion } from 'framer-motion'
import { Users, MessageSquare, Zap } from 'lucide-react'
import Container from './Container'
import GlassCard from './GlassCard'

const Community: React.FC = () => {
  return (
    <Container className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-nood-green">Join Our Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Users, title: 'Network', description: 'Connect with like-minded entrepreneurs and professionals.' },
          { icon: MessageSquare, title: 'Collaborate', description: 'Share ideas and work on projects together.' },
          { icon: Zap, title: 'Grow', description: 'Accelerate your personal and professional development.' },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <GlassCard className="h-full flex flex-col items-center p-6 text-center">
              <item.icon className="text-white mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-white">{item.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Container>
  )
}

export default Community
