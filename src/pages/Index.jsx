import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h1 className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Alex Albert</h1>
          <h2 className="text-3xl font-semibold mb-8 text-gray-300">DevRel at Anthropic</h2>
        </motion.div>
        
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardContent className="pt-6">
              <p className="text-xl text-gray-300">
                Passionate about bridging the gap between developers and cutting-edge AI technology. 
                Helping to shape the future of AI through community engagement and education.
              </p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">What I Do</h3>
          <ul className="space-y-2 mb-8 text-gray-300">
            <li>• Develop and maintain developer documentation</li>
            <li>• Create engaging content for the developer community</li>
            <li>• Speak at conferences and meetups</li>
            <li>• Gather feedback to improve Anthropic's products</li>
          </ul>
        </motion.div>
        
        <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Connect with Me</h3>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon">
              <a href="https://github.com/alexalbert" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a href="https://twitter.com/alexalbert" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a href="https://linkedin.com/in/alexalbert" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
