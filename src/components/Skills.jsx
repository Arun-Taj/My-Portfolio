import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FiCode, FiCloud, FiDatabase, FiSmartphone, FiLayout } from 'react-icons/fi';
import skills from '../data/skills';
import React from 'react';
const SkillCube = () => {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Float speed={2} rotationIntensity={2}>
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial
            color="#3B82F6"
            metalness={0.3}
            roughness={0.2}
          />
        </Box>
      </Float>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

const Skills = () => {
  const categories = [
    {
      name: 'Frontend',
      icon: <FiCode className="text-3xl" />,
      color: 'bg-blue-100'
    },
    {
      name: 'Backend',
      icon: <FiCloud className="text-3xl" />,
      color: 'bg-purple-100'
    },
    {
      name: 'Database',
      icon: <FiDatabase className="text-3xl" />,
      color: 'bg-green-100'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`${category.color} w-fit p-4 rounded-full mb-6`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6">{category.name}</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {skills
                    .filter(skill => skill.category === category.name.toLowerCase())
                    .map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <skill.icon className="text-xl text-blue-600" />
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;