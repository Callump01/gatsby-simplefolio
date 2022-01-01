import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Callum Pope | Senior IAM Specialist & Security Researcher', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Callum',
  subtitle: 'I\'m an Identity Specialist & Security Researcher',
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'me-unedited_ccexpress.png',
  paragraphOne: 'I\'m a confident, reliable and multi-skilled identity consultant with a comprehensive understanding and experience in designing, developing, and deploying Identity and Access Management (IAM) infrastructure, alongside maintaining and triaging existing client infrastructure through years of experience delivering successful identity solutions for both multinational enterprises and small-medium business solutions.',
  paragraphTwo: 'I\'m an excellent cross-functional collaborator with an ability to multi-task well under pressure and relate with stakeholders of all seniorities and technical ability. Curious personality with a positive mindset and a dedication to continued growth.',
  paragraphThree: 'I am security cleared to a high government standard.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Title',
    info: 'First line of info.',
    info2: 'Second line of info.',
    url: 'google.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Title 2',
    info: 'First line of info.',
    info2: 'Second line of info.',
    url: 'google.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Title 3',
    info: 'First line of info.',
    info2: 'Second line of ijnfo.',
    url: 'google.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to know more?',
  btn: 'Let\'s Chat',
  email: 'contact@callumpope.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    //{
    //  id: nanoid(),
    //  name: 'twitter',
    //  url: '',
    //},
    //{
    //  id: nanoid(),
    //  name: 'codepen',
    //  url: '',
    //},
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/callumpope/',
    },
    //{
    //  id: nanoid(),
    //  name: 'github',
    //  url: '',
    //},
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
