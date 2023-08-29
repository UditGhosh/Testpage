import { ECommandType } from '../models/commands.model';
import { ETheme } from '../models/themes.model';

export const email = 'ughosh1@uncc.edu';
export const cvURL = 'https://drive.google.com/file/d/1Aztxl-X1AkttHHaBQlYsAxkQvWy-hdu2/view?usp=sharing';
export const linkedInProfileURL = 'https://www.linkedin.com/in/uditghosh/';
// export const projects = [
//   {
//     name: 'Caller Sentiment Analysis',
//     date: '09/2020 - 08/2021',
//     pointers: [
//       'A web-based tool that conducts sentiment analysis specifically designed for call centers.',
//       'Enables managers to evaluate the performance of calls and provide feedback to operational executives.',
//       'Designed backend with Node.js, Express.js, Mongoose and frontend with Angular 10 from scratch.',
//       'Constructed a Machine Learning pipeline utilizing Python and IBM Watson NLU.'
//     ],
//     technologies: [
//       'Node.js',
//       'Angular 10',
//       'Express.js',
//       'MongoDB',
//       'Python',
//       'Natural Language Processing',
//       'Azure Active Directory Authentication',
//       'IBM Watson NLU'
//     ]
//   },
//   {
//     name: 'Intelligent Assistant',
//     date: '03/2020 - 09/2020',
//     pointers: [
//       `A web-based platform that reviews and instructs machine learning models for ticketing tools,
//       <br class="bg-screen"> aimed at decreasing SLA duration.`,
//       `Enterprises can upload data for training machine learning models and set up the application
//       <br class="bg-screen"> with an existing ticketing tool to categorize upcoming ticket data.`,
//       'Developed the complete frontend and backend from scratch using Python and fastapi.'
//     ],
//     technologies: ['Python', 'FastAPI', 'MongoDB', 'Natural Language Processing']
//   },
//   {
//     name: 'Ticket Management System',
//     date: '08/2019 - 03/2020',
//     pointers: [
//       'A client ticket management application for businesses.',
//       'Developed multiple RESTful APIs along with few UI pages.'
//     ],
//     technologies: ['.Net MVC', 'Dapper', 'MS SQL Server']
//   },
//   {
//     name: 'Thrifty',
//     date: '04/2019 - 05/2019',
//     pointers: ['A web-based platform that contrasts food and lodging rates across multiple websites.'],
//     technologies: ['.Net Core', 'Angular 6', 'MS SQL Server']
//   }
// ];

export const projects = [

  {
    name: 'AWS-Powered Real Estate Analysis',
    date: 'Sept 2022',
    pointers: [
      'Developed machine learning framework for predicting housing prices in California with 81% accuracy using XGBoost-algorithm and AWS tools',
      'Created data pipeline in AWS for ingesting, storing, processing, and performing analytics on housing data using Sagemaker, S3, Glue, and EC2 instances',
      'Developed interactive dashboard in Tableau for visualizing data and facilitating informed business decisions', 
      'Leveraged understanding of AWS services and predictive modelling techniques'
    ],
    technologies: [
      'AWS', 'SageMaker', 'S3', 'EC2', 'Glue', 'XGBoost', 'Tableau'
    ]
  },

  {
    name: 'Pantry Connect App', 
    date: 'Jan 2022 - April 2022',
    pointers: [
      'Designed and implemented an end-to-end web application for locating pantries and creating appointments based on GPS coordinates',
      'Utilized Google Dialogflow API to integrate chatbot functionality into the application, and developed custom webhooks using flask to handle requests and validate results',
      'Ensured security of the application by implementing authentication services for every user and storing hashed credentials in a NoSQL database',
      'Leveraged understanding in Python, Flask, Google Dialogflow, REST API and MongoDB'
    ],
    technologies: [
      'Python', 'Flask', 'Google Dialogflow', 'REST API', 'MongoDB'
    ]
  },

  {
    name: 'YouTube Channel Analyzer',
    date: 'Dec 2021', 
    pointers: [
      'Designed a fully functional web application that allows users to understand and analyse the YouTube channels statistics and trends through visualizations, and identify which videos gain more user interactions.',
      'Invoked YouTube REST API to obtain data, and performed pre-processing to ensure valid input data',
      'Developed an intuitive and user-friendly interface using Streamlit, and performed deployment using Heroku',
      'Leveraged understanding in Python, HTML, CSS, and REST API'
    ],
    technologies: [
      'Python', 'Streamlit', 'YouTube API', 'HTML', 'CSS', 'Heroku'
    ]
  },

  {
    name: 'Real Time Face Mask Detection',
    date: 'Sept 2021 - Nov 2021',
    pointers: [
      'Built a Deep Learning Model based on YOLOv5 architecture to detect whether a mask is worn correctly in real-time from video-feed with 90% accuracy',
      'Utilized Roboflow API to automatically load dataset and perform data augmentation',
      'Leveraged knowledge in Convolutional Neural Network and Object detection'  
    ],
    technologies: [
      'Python', 'YOLOv5', 'Roboflow', 'Computer Vision', 'Deep Learning'
    ]
  }

];
export const workEx = [

  {
    position: 'DevOps Engineering Intern',
    company: 'Visual Lease LLC',
    date: 'May 2022 - April 2023',
    tasks: [
      'Worked in Agile-driven environment to monitor application performance issues, identify bugs, and understand how specific application components behave in production and test environments',
      'Designed and implemented a highly available Serverless Jenkins environment on AWS Fargate by utilizing Terraform to provision critical resources such as Application Load Balancer, VPC, and ECS. Reduced the overall provisioning time by 70%, ensuring standardization and minimize the chance of human error',
      'Created Jenkins pipeline that utilizes CodeBuild integration to automate build jobs for generating Docker images and pushing them to Amazon ECR, ensuring efficient and consistent builds of containerized applications', 
      'Wrote and maintained build spec files within CodeBuild to streamline container creation and optimize builds',
      'Implemented CloudWatch Trails to store CodeBuild logs, enabling real-time visibility into the build process',
      'Configured Jenkins to send job console logs to Datadog for centralizing logging, and improved visibility',
      'Developed a continuous monitoring solution with Datadog to identify problematic resources that were negatively impacting uptimes. Reduced time for manual investigation by 30% through generating automated alerts for the Ops team.',
      'Leveraged understanding in key DevOps practices including CI/CD, Jenkins, Terraform, AWS, Docker, Bash, and Git'
    ]
  },

  {
    position: 'Research Assistant',
    company: 'University of North Carolina - Charlotte',
    date: 'Aug 2020 – June 2021',
    tasks: [
      'Assisted Professor in advanced research on Dominant Association Rule Mining, contributing to data-driven insights and pattern discovery through conducting comprehensive analysis, comparing performance and efficiency of 7 algorithms against similar solutions on 6 real-world datasets from SPMF',
      'Developed and optimized Python-based code for proposed algorithms, resulting in a 40% reduction in processing time, enhancing overall computational efficiency',
      'Demonstrated expertise in Data Mining and Python, to drive data-driven decision-making and achieve research objectives'
    ]
  }

];
// export const workEx = [
//   {
//     position: 'Senior Software Developer',
//     company: 'Locusnine Innovations - A Verto Company',
//     date: '08/2021 - Present',
//     tasks: [
//       `Developed and deployed serverless apps using AWS Lambda, S3 buckets, SQS, Cloudfront, and Route 53.`,
//       `Used AWS Codebuild and GitHub Actions to create a CI/CD pipeline.`,
//       `Developed a new wallet top-up flow in which users can top up their <br class="bg-screen"> multi-currency wallets using debit/credit cards.`,
//       `Built a new feature that allows users to generate and share payment links <br class="bg-screen"> with auto-reminders to their own customers in 11 different currencies.`,
//       `Collaborated with other developers to create a multi&hyphen;user solution that <br class="bg-screen"> allows businesses to onboard multiple clients as team members on our platform.`,
//       `Implementing user roles and permissions for administrators and clients in a scalable <br class="bg-screen"> and robust manner across the entire application.`
//     ]
//   },
//   {
//     position: 'Systems Engineer',
//     company: 'Infosys Ltd.',
//     date: '08/2019 - 08/2021',
//     tasks: [
//       `Built applications to classify emails and extract useful information using various <br class="bg-screen"> Machine Learning Algorithms and Deep Learning Techniques.`,
//       `Built RESTful APIs on Node.js using Express with token based authentication that served data to our Angular Front-End.`,
//       `Worked alongside other developers to build an user&hyphen;management web app from scratch using MEAN Stack.`
//     ]
//   },
//   {
//     position: 'Systems Engineer Trainee',
//     company: 'Infosys Ltd.',
//     date: '02/2019 - 05/2019',
//     tasks: [
//       `Got trained in .NET Core, Entity Framework, MS SQL Server.`,
//       `Got High Performer Tag after completing my training with score of 85%.`
//     ]
//   },
//   {
//     position: 'Intern',
//     company: 'Capgemini India Pvt. Ltd.',
//     date: '12/2017 - 01/2018',
//     tasks: [
//       `Worked on a cloud based machine learning project for predictive analysis where four different algorithms were devised.`,
//       `Learnt how Python Flask works as a micro web framework.`,
//       `Got an overview of machine learning algorithms and how they work.`
//     ]
//   }
// ];
export const certificates = [
  {
    name: 'AWS Academy Graduate - AWS Academy Data Analytics',
    link: 'https://www.credly.com/badges/41c70f6c-9ec9-4a2a-9e02-5cf0f12115d2'
  },
  // {
  //   name: 'Deep Learning with Advanced NLP',
  //   link: 'https://1drv.ms/b/s!AkD34JHCNHdBg5dRKnQ0CZizugSBTg?e=toTtFT'
  // },
  // {
  //   name: 'NLP with Classification and Vector Spaces',
  //   link: 'https://1drv.ms/b/s!AkD34JHCNHdBg5dP-c8x1EgvXWHosw?e=0E7des'
  // },
  // {
  //   name: 'NLP with Probabilistic Models',
  //   link: 'https://1drv.ms/b/s!AkD34JHCNHdBg5dOwxpw-0jqlD_kDQ?e=TyyhiX'
  // },
  // {
  //   name: 'NLP with Sequence Models',
  //   link: 'https://1drv.ms/b/s!AkD34JHCNHdBg5dQrnZ19sxVi1j40g?e=LFxDZ8'
  // },
  // {
  //   name: 'Rajasthan Hackathon',
  //   link: 'https://1drv.ms/b/s!AkD34JHCNHdBg410jQmJZ0-NC3ptyA?e=31drwv'
  // }
];
export const skills = [
  'Python',
  'C++',
  'AWS',
  'Jaba',
  'AWS Lambda',
  'Express.js',
  'Python',
  'Flask',
  'FastAPI',
  'Sequelize',
  'Mongoose',
  'MySQL',
  'MongoDB',
  'Machine Learning',
  'Natural Language Processing'
];
export const availableThemes = [...Object.values(ETheme)];
