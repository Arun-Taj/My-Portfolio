import { Canvas } from '@react-three/fiber';
import { OrbitControls, Cylinder, Float, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FiBriefcase, FiClock, FiMapPin } from 'react-icons/fi';
import experience from '../data/experience';
import React from 'react';
import game from '../assets/game.png'
const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Experience Content */}
          <div className="space-y-12 flex flex-col justify-center items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-center"
            >
              Professional Experience
            </motion.h2>

            <div className="relative w-full">
              {/* Timeline */}
              <div className="absolute left-4 md:left-9 h-full w-0.5 bg-gray-200 origin-top" />
              
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-16 md:pl-24"
                  >
                    <div className="absolute left-2 md:left-8 top-4 w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FiBriefcase className="text-xl md:text-2xl text-blue-600" />
                    </div>
                    
                    <div className="p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-lg md:text-xl font-bold">{item.position}</h3>
                      <p className="text-gray-600 font-medium mt-1 md:mt-2 text-sm md:text-base">{item.company}</p>
                      
                      <div className="flex flex-wrap gap-2 md:gap-4 mt-2 md:mt-4 text-xs md:text-sm text-gray-500">
                        <div className="flex items-center gap-1 md:gap-2">
                          <FiClock className="flex-shrink-0" />
                          <span>{item.startDate} - {item.endDate || 'Present'}</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                          <FiMapPin className="flex-shrink-0" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <ul className="mt-2 md:mt-4 space-y-1 md:space-y-2">
                        {item.responsibilities.map((responsibility, i) => (
                          <li 
                            key={i}
                            className="flex items-start gap-2 text-gray-600 text-sm md:text-base"
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