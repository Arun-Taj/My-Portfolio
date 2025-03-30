import { Canvas } from '@react-three/fiber';
import { OrbitControls, Cylinder, Float, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FiBriefcase, FiClock, FiMapPin } from 'react-icons/fi';
import experience from '../data/experience';
import React from 'react';
const ExperienceScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={2000} factor={4} />
      
      <Float speed={2} rotationIntensity={2}>
        <Cylinder args={[1, 1, 2, 32]} scale={1.5}>
          <meshStandardMaterial
            color="#3B82F6"
            metalness={0.3}
            roughness={0.2}
          />
        </Cylinder>
      </Float>
      
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={2}
      />
    </Canvas>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* 3D Scene */}
          <div className="h-96 md:h-[500px] relative">
            <ExperienceScene />
          </div>

          {/* Experience Content */}
          <div className="space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold"
            >
              Professional Experience
            </motion.h2>

            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-9 h-full w-0.5 bg-gray-200 origin-top" />
              
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-24"
                  >
                    <div className="absolute left-8 top-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FiBriefcase className="text-2xl text-blue-600" />
                    </div>
                    
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold">{item.position}</h3>
                      <p className="text-gray-600 font-medium mt-2">{item.company}</p>
                      
                      <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <FiClock />
                          <span>{item.startDate} - {item.endDate || 'Present'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <ul className="mt-4 space-y-2">
                        {item.responsibilities.map((responsibility, i) => (
                          <li 
                            key={i}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <span className="text-blue-600 mt-1">▹</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;