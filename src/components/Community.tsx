import React from 'react'
import { motion } from 'framer-motion'
import { Users, MessageSquare, Zap } from 'lucide-react'
import Container from './Container'

const Community: React.FC = () => {
  return (
    <Container className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center text-nood-green">Join Our Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Users className="text-nood-green mx-auto mb-4" size={48} />
          <h3 className="text-xl font-bold mb-2 text-dark-grey">Network</h3>
          <p className="text-dark-grey">Connect with like-minded entrepreneurs and professionals.</p>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MessageSquare className="text-nood-green mx-auto mb-4" size={48} />
          <h3 className="text-xl font-bold mb-2 text-dark-grey">Collaborate</h3>
          <p className="text-dark-grey">Share ideas and work on projects together.</p>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Zap className="text-nood-green mx-auto mb-4" size={48} />
          <h3 className="text-xl font-bold mb-2 text-dark-grey">Grow</h3>
          <p className="text-dark-grey">Accelerate your personal and professional development.</p>
        </motion.div>
      </div>
    </Container>
  )
}

export default Community
