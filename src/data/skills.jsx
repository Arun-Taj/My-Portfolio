import React from 'react';
import { 
  SiReact, 
  SiJavascript, 
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit
} from 'react-icons/si';

const skills = [
  { 
    name: 'React', 
    icon: SiReact,
    category: 'frontend'
  },
  { 
    name: 'JavaScript', 
    icon: SiJavascript,
    category: 'frontend'
  },
  { 
    name: 'Node.js', 
    icon: SiNodedotjs,
    category: 'backend'
  },
  { 
    name: 'Python', 
    icon: SiPython,
    category: 'backend'
  },
  { 
    name: 'MongoDB', 
    icon: SiMongodb,
    category: 'database'
  },
  { 
    name: 'PostgreSQL', 
    icon: SiPostgresql,
    category: 'database'
  },
  { 
    name: 'Docker', 
    icon: SiDocker,
    category: 'backend'
  },
  { 
    name: 'Git', 
    icon: SiGit,
    category: 'backend'
  }
];

export default skills;