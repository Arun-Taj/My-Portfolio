import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase } from 'react-icons/fi';
import Profile from '../assets/pptest.jpg'; // Replace with your profile image path

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* 3D Scene with Profile Picture */}
          <div className="h-96 md:h-[500px] relative flex items-center justify-center">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Stars radius={100} depth={50} count={5000} factor={4} />
              
              {/* Floating Sphere */}
              <Sphere args={[1, 32, 32]} scale={1.5}>
                <meshStandardMaterial
                  color="#3B82F6"
                  metalness={0.3}
                  roughness={0.2}
                  transparent
                  opacity={0.7}
                />
              </Sphere>

              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={2}
              />
            </Canvas>

            {/* Profile Picture with 3D Effect */}
            <motion.div
              className="absolute w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={Profile} // Replace with your profile image path
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg"
            >
              I'm a passionate full-stack developer with expertise in modern web 
              technologies. I specialize in creating beautiful, responsive, and 
              high-performance web applications with cutting-edge technologies.
            </motion.p>

            {/* Skills Icons with Animation */}
            <motion.div 
              className="flex gap-6 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="p-4 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
                <FiCode className="text-3xl text-blue-600" />
              </div>
              <div className="p-4 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors">
                <FiServer className="text-3xl text-purple-600" />
              </div>
              <div className="p-4 bg-green-100 rounded-full hover:bg-green-200 transition-colors">
                <FiDatabase className="text-3xl text-green-600" />
              </div>
            </motion.div>

            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { number: '3+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '100%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-3xl font-bold text-blue-600">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;