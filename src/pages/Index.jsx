import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const AnimatedSection = ({ children, delay = 0, direction = "left" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay, 
        ease: [0.17, 0.55, 0.55, 1],
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-6xl font-bold mb-4 text-indigo-800">Alex Albert</h1>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} direction="right">
          <h2 className="text-3xl font-semibold mb-8 text-indigo-600">DevRel at Anthropic</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4} direction="up">
          <p className="text-xl mb-8 text-gray-700">
            Passionate about bridging the gap between developers and cutting-edge AI technology. 
            Helping to shape the future of AI through community engagement and education.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.6} direction="left">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-700">What I Do</h3>
          <ul className="list-disc list-inside mb-8 text-gray-700">
            <li>Develop and maintain developer documentation</li>
            <li>Create engaging content for the developer community</li>
            <li>Speak at conferences and meetups</li>
            <li>Gather feedback to improve Anthropic's products</li>
          </ul>
        </AnimatedSection>
        
        <AnimatedSection delay={0.8} direction="right">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Connect with Me</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/alexalbert" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">
              <Github size={24} />
            </a>
            <a href="https://twitter.com/alexalbert" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">
              <Twitter size={24} />
            </a>
            <a href="https://linkedin.com/in/alexalbert" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">
              <Linkedin size={24} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Index;
