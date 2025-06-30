import React from 'react';
import { skills } from '../data/portfolio';
import { Code, Database, Server, PenTool as Tool } from 'lucide-react';

const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code className="w-6 h-6" />;
      case 'backend':
        return <Server className="w-6 h-6" />;
      case 'database':
        return <Database className="w-6 h-6" />;
      case 'tools':
        return <Tool className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'Frontend Development';
      case 'backend':
        return 'Backend Development';
      case 'database':
        return 'Database Technologies';
      case 'tools':
        return 'Tools & Technologies';
      default:
        return category;
    }
  };

  const categories = ['frontend', 'backend', 'database', 'tools'];

  const SkillBar: React.FC<{ skill: any }> = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <div key={category} className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="text-blue-600 dark:text-blue-400 mr-3">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {getCategoryTitle(category)}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
              cloud technologies, DevOps practices, and advanced React patterns to stay current with 
              industry trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;