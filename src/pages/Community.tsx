import React from 'react'
import { motion } from 'framer-motion'
import { Users, MessageCircle, Zap, Award, ArrowRight } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import FeatureCard from '../components/FeatureCard'
import CallToAction from '../components/CallToAction'

const Community: React.FC = () => {
  const features = [
    { icon: Zap, title: "Networking Opportunities", description: "Connect with potential collaborators, clients, and mentors." },
    { icon: MessageCircle, title: "Expert Q&A Sessions", description: "Regular sessions with industry experts to answer your questions." },
    { icon: Award, title: "Exclusive Resources", description: "Access to tools, guides, and discounts for community members." }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 space-y-16"
    >
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6 nood-gradient-text">NOOD Community</h1>
        <p className="text-xl text-text max-w-3xl mx-auto">
          Join our thriving Telegram-based community. Connect, learn, and grow with like-minded individuals focused on side hustle development.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg p-6">
          <div>
            <Users className="text-primary mb-4" size={48} />
            <h2 className="text-2xl font-bold mb-4">Join the Conversation</h2>
            <p className="text-text mb-6">
              Engage with fellow entrepreneurs, share ideas, and get instant feedback on your projects.
            </p>
          </div>
          <Button to="/join-telegram" variant="primary" className="mt-auto">
            Join Telegram Community <ArrowRight className="ml-2" size={20} />
          </Button>
        </Card>
        <Card className="flex flex-col justify-between h-full transition-all duration-300 hover:shadow-lg p-6">
          <div>
            <MessageCircle className="text-primary mb-4" size={48} />
            <h2 className="text-2xl font-bold mb-4">Sub-Communities</h2>
            <p className="text-text mb-6">
              Explore specialized groups for Graphic Design, E-commerce, Trading, and Content Creation.
            </p>
          </div>
          <Button to="/sub-communities" variant="secondary" className="mt-auto">
            Explore Sub-Communities <ArrowRight className="ml-2" size={20} />
          </Button>
        </Card>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>

      <CallToAction 
        title="Ready to Join Our Community?"
        description="Take the first step towards building your digital side hustle with the support of our community."
        buttonText="Join NOOD Community"
        buttonLink="/join-community"
      />
    </motion.div>
  )
}

export default Community
