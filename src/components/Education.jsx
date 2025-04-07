import { Canvas } from '@react-three/fiber';
import { OrbitControls, Torus, Float, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import { FaUserGraduate } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import education from '../data/education';
import React from 'react';
const EducationScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={2000} factor={4} />
      
      <Float speed={2} rotationIntensity={2}>
        <Torus args={[1, 0.4, 16, 100]} scale={1.5}>
          <meshStandardMaterial
            color="#3B82F6"
            metalness={0.3}
            roughness={0.2}
          />
        </Torus>
      </Float>
      
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={2}
      />
    </Canvas>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 relative ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* 3D Scene */}
          {/* <div className="h-96 md:h-[500px] relative">
            <EducationScene />
          </div> */}

          {/* Education Content */}
          <div className="space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold"
            >
              Education
            </motion.h2>

            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      {item.type === 'degree' && <FaGraduationCap className="text-2xl text-blue-600" />}
                      {item.type === 'course' && <FiBookOpen className="text-2xl text-blue-600" />}
                      {item.type === 'certification' && <FaAward className="text-2xl text-blue-600" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      <p className="text-gray-600 font-medium">{item.institution}</p>
                      <p className="text-gray-500 text-sm mt-2">
                        {item.startYear} - {item.endYear || 'Present'}
                      </p>
                      <p className="text-gray-600 mt-3">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;