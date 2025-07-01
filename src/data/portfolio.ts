import { Project, Skill } from '../types';
import agritayo_pic from '../assets/agritayo_pic.png';
import agritayoweb_pic from '../assets/agritayoweb_pic.png';
import inventory_pic from '../assets/inventory_pic.png';
import iris_pic from '../assets/iris_pic.jpg';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Agritayo: A Mobile and Web Platform for Real-Time Market Insights and Direct Farmer Trade (Mobile)',
    description: 'Full-stack e-commerce solution with React Native, Node.js, Express and Supabase',
    longDescription: 'A mobile for real-time market insights and direct farmer trade that connects farmers with buyers and provides them with the tools they need to sell their products without intermediaries.',
    image: agritayo_pic,
    technologies: ['React Native', 'Node.js', 'Supabase', 'Express', 'Supabase'],
    githubUrl: 'https://github.com/RafaelMEA/e-commerce-agritayo.git',
    liveUrl: 'https://drive.google.com/file/d/1vP5R97cfUEBRtP9adEWpdzUVj2DFvBXk/view',
    features: [
      'User authentication and authorization',
      'Two-factor authentication (Text message)',
      'Real-time Analytics for products',
      'Shopping cart and checkout process',
      'Create Seller Shop/Account',
      'Bidding system for competitive product pricing',
      'Real-time chat system for buyer-seller communication',
      'Price negotiation interface for direct deals'
    ]
  },
  {
    id: '2',
    title: 'Agritayo: A Mobile and Web Platform for Real-Time Market Insights and Direct Farmer Trade (Web)',
    description: 'Full-stack e-commerce solution for admin with React.js, Node.js, Express and Supabase',
    longDescription: 'A comprehensive admin dashboard for managing the Agritayo platform, featuring real-time market, sales, users, and orders analytics, product management, user administration, and platform insights. The dashboard provides administrators with tools to monitor marketplace activity, manage user accounts, and gain valuable business intelligence through intuitive data visualizations and reporting features.',
    image: agritayoweb_pic,
    technologies: ['React.js', 'Node.js', 'Supabase', 'Express', 'Supabase'],
    githubUrl: 'https://github.com/RafaelMEA/e-commerce-agritayo.git',
    liveUrl: 'https://agritayo-demo.onrender.com/',
    features: [
      'User authentication and authorization',
      'Two-factor authentication (Text message)',
      'Interactive product sales dashboard with real-time inventory tracking',
      'Real-time Analytics for market, sales, users, and orders',
      'Shopping cart and checkout process',
      'Platform insights',
      'Products and user management'
    ]
  },
  {
    id: '3',
    title: 'Management Information and Technology Division (MITD) Inventory System',
    description: 'Full-stack inventory management system with Vue.js, Laravel and MySQL',
    longDescription: 'A full-stack inventory management system built with Vue.js, Node.js, Laravel and MySQL. Features real-time analytics, inventory tracking, barcode scanning, and reporting tools.',
    image: inventory_pic,
    technologies: ['Vue.js', 'Laravel', 'MySQL',],
    githubUrl: 'https://github.com/RafaelMEA/sccc-is.git',
    liveUrl: 'https://smartcity-inventorysystem.onrender.com/',
    features: [
      'User authentication and authorization',
      'Two-factor authentication (Email)',
      'Real-time analytics dashboard for items',
      'Inventory tracking and barcode scanning',
      'Creating transaction and transaction history',
      'Generating reports and analytics',
      'Giving access to authorized users'
    ]
  },
  {
    id: '4',
    title: 'Iris Species Classifier',
    description: 'Machine learning project with Python',
    longDescription: 'An interactive machine learning application that classifies iris flowers into three species (setosa, versicolor, or virginica) based on their sepal and petal measurements. Built with Python and scikit-learn, this project demonstrates fundamental machine learning concepts including data preprocessing, model training, and prediction. Users can input flower measurements to receive instant species predictions, with visualizations that help understand the classification boundaries. The project serves as an excellent introduction to supervised learning and pattern recognition.',
    image: iris_pic,
    technologies: ['Python', 'HTML','Machine Learning', 'Scikit-learn',],
    githubUrl: 'https://github.com/RafaelMEA/iris-ml-project-demo.git',
    liveUrl: 'https://iris-ml-project-demo.onrender.com/',
    features: [
      'Interactive input form for iris flower measurements',
      'Real-time species prediction using a trained model',
      'Responsive design for various screen sizes',
      'Educational tool for ML beginners',
      'Measurement guidelines for iris flowers'
    ]
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 70, category: 'frontend' },
  { name: 'React Native', level: 70, category: 'frontend' },
  { name: 'Vue.js', level: 50, category: 'frontend' },
  { name: 'JavaScript', level: 70, category: 'frontend' },
  { name: 'HTML/CSS', level: 70, category: 'frontend' },
  { name: 'Tailwind CSS', level: 60, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 70, category: 'backend' }, 
  { name: 'Express.js', level: 70, category: 'backend' },
  { name: 'PHP', level: 70, category: 'backend' },
  { name: 'Laravel', level: 80, category: 'backend' },
  { name: 'Python', level: 50, category: 'backend' },
  { name: 'Java', level: 50, category: 'backend' },
  
  // Database
  { name: 'MySQL', level: 80, category: 'database' },
  { name: 'Supabase', level: 70, category: 'database' },
  { name: 'PostgreSQL', level: 70, category: 'database' },
  
  // Tools
  { name: 'Git', level: 70, category: 'tools' },
  { name: 'Visual Studio Code', level: 80, category: 'tools' },
  { name: 'Postman', level: 70, category: 'tools' },
  { name: 'Xampp', level: 70, category: 'tools' },
];