'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Mail, Send, Printer, Cpu, Bitcoin,Globe,Linkedin} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { TechStack } from './tech-stack'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

export function Content() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const servicesOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])
  
  return (
    <>
      <motion.div 
        style={{ y, opacity }}
        className="h-screen flex flex-col items-center justify-center"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center px-4"
        >
          <motion.h1 
            variants={item}
            className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
          >
            Keep it simple! 
          </motion.h1>


          <motion.p 
            variants={item}
            className="text-xl md:text-3xl text-purple-200 mb-8"
          >
          your customized software solution
          </motion.p>

          <motion.p 
            variants={item}
            className="text-xl md:text-3xl text-purple-200 mb-8"
          >
            Hi, I&apos;m Diego - Full Stack Developer
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex gap-4 justify-center"
          >
            <Button 
              asChild 
              variant="outline" 
              size="icon" 
              className="rounded-full hover:scale-110 transition-transform"
            >
              <a href="mailto:3dvolt.info@gmail.com">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="icon" 
              className="rounded-full hover:scale-110 transition-transform"
            >
              <a href="https://t.me/Voltpwr" target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5" />
                <span className="sr-only">Telegram</span>
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="icon" 
              className="rounded-full hover:scale-110 transition-transform"
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">Linkedin</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: servicesOpacity }}
        className="min-h-screen px-4 py-24"
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: <Cpu className="w-12 h-12 mb-4 mx-auto text-purple-400" />,
              title: "Hardware & IoT Development",
              description: "Creating IoT solutions with Arduino, Raspberry Pi, and ESP boards. From firmware to hardware, I handle everything from project conception to physical device prototyping."
            },
            {
              icon: <Printer className="w-12 h-12 mb-4 mx-auto text-purple-400" />,
              title: "3D Printing & Modeling",
              description: "Running a 3D printing business offering modeling, rendering, and printing services. Transforming ideas into physical reality with rapid prototyping technology."
            },
            {
              icon: <Bitcoin className="w-12 h-12 mb-4 mx-auto text-purple-400" />,
              title: "Blockchain Development",
              description: "Crypto enthusiast focused on blockchain development and dApp integration. Building decentralized solutions for the future."
            },
            {
              icon: <Globe className="w-12 h-12 mb-4 mx-auto text-purple-400" />,
              title: "Web Development",
              description: "Creating web applications for small businesses including online stores, dashboards, and custom solutions. Full stack development with modern technologies."
            }
          ].map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-purple-900/50 border-purple-700 hover:bg-purple-800/50 transition-colors group">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h2 className="text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-purple-100">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-32">
          <TechStack />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mt-32"
        >
          <motion.h2 
            variants={item}
            className="text-2xl font-bold mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-purple-100 mb-8"
          >
            If you are interested feel free to send me an email or via Telegram Message 
            to schedule a meeting
          </motion.p>
          <motion.div 
            variants={item}
            className="space-y-2"
          >
            <p className="text-purple-200">📧 3dvolt.info@gmail.com</p>
            <p className="text-purple-200">📱 @Voltpwr</p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            asChild 
            variant="secondary" 
            className="bg-purple-600 hover:bg-purple-700 text-white hover:scale-105 transition-all"
          >
            <Link href="/roadmap">
              View My Projects
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </>
  )
}

