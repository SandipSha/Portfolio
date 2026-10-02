export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  summary: string;
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  domain: string;
  description: string;
  architecture: string;
  responsibilities: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

export const portfolio = {
  name: 'Sandip Shaw',
  initials: 'SS',
  roles: ['Full Stack Developer', 'Java Engineer', 'Angular Developer', 'Backend Engineer', 'Software Engineer'],
  experience: '5+ years',
  headline: 'Engineering dependable software for ambitious ideas.',
  summary:
    'Java Full Stack Developer with 5+ years of experience building enterprise web applications. I work across Spring Boot microservices and REST APIs, Angular and TypeScript interfaces, secure OAuth2/JWT flows, and application performance improvements.',
  email: 'sandipshaw9683@gmail.com',
  phone: '07980775914',
  location: 'Kolkata, West Bengal, India',
  resumePath: 'assets/resume/Sandip-Shaw-Resume.pdf',
  resumeAvailable: true,
  social: {
    linkedin: '',
    github: '',
  },
  facts: [
    { value: '5+', label: 'Years of experience' },
    { value: '20+', label: 'Technologies explored' },
    { value: 'Full stack', label: 'Frontend to cloud' },
  ],
  highlights: [
    { label: 'Financial services', detail: 'Full-stack development for banking and US-based financial applications.' },
    { label: 'Microservices & APIs', detail: 'Spring Boot services, REST APIs, and JPA/Hibernate persistence.' },
    { label: 'Secure delivery', detail: 'Angular and TypeScript UI, OAuth2/JWT security, reviews, and Agile delivery.' },
  ],
  skills: [
    { title: 'Backend & APIs', icon: '01', skills: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Framework', 'RESTful APIs', 'Microservices', 'API Gateway', 'OpenAPI', 'Swagger', 'JPA', 'Hibernate', 'ORM'] },
    { title: 'Frontend', icon: '02', skills: ['Angular', 'TypeScript', 'Responsive Design', 'Bootstrap', 'jQuery', 'AJAX', 'WebSockets', 'SASS'] },
    { title: 'Delivery & Tooling', icon: '03', skills: ['Maven', 'Jenkins', 'CI/CD', 'Git', 'GitHub', 'GitLab', 'npm', 'Linux', 'Bash'] },
    { title: 'Data', icon: '04', skills: ['MySQL', 'SQL', 'NoSQL', 'Elasticsearch', 'JSON'] },
    { title: 'Cloud & Security', icon: '05', skills: ['Google Cloud', 'Azure', 'OAuth2', 'JWT'] },
    { title: 'Testing', icon: '06', skills: ['JUnit', 'Mockito'] },
  ] satisfies SkillGroup[],
  experienceItems: [
    {
      company: 'Infosys',
      role: 'Senior Associate Consultant / Java Full Stack Developer',
      dates: '2024 — Present',
      summary: 'Developing for a US-based financial client, with a focus on scalable services and responsive application experiences.',
      highlights: ['Spring Boot microservices and REST APIs using JPA/Hibernate', 'Angular and TypeScript front-end modules', 'OAuth2 and JWT authentication and authorization', 'Agile planning, backlog refinement, and code reviews', 'Database optimization and caching for application performance'],
    },
    {
      company: 'TCS',
      role: 'IT Analyst / Full Stack Java Developer',
      dates: '2021 — 2024',
      summary: 'Full-stack development for a banking application used by millions of people daily, according to the resume.',
      highlights: ['Java full-stack enterprise application development', 'Banking and financial services domain', 'Application development and ongoing enhancements'],
    },
  ] satisfies ExperienceItem[],
  education: [{ qualification: 'B.Tech in Information Technology', institution: 'Maulana Abul Kalam Azad University of Technology', dates: '2017 — 2021' }],
  certifications: ['Associate Certification in Google Cloud (Infosys)', 'Azure Fundamentals (AZ-900)'],
  awards: ['Best Team Award (TCS)', 'Insta Star Award (Infosys Ltd.)'],
  languages: ['English', 'Hindi'],
  interests: ['Cricket', 'Football'],
  projects: [] as ProjectItem[],
  architecture: [
    { name: 'Angular', detail: 'Responsive client experience and typed UI state.' },
    { name: 'API Gateway', detail: 'Central routing, authentication, and service boundaries.' },
    { name: 'Spring Boot Services', detail: 'Domain-focused APIs and business capabilities.' },
    { name: 'JPA / Hibernate', detail: 'Object-relational persistence between services and data.' },
    { name: 'SQL / MySQL', detail: 'Relational data storage and query layer.' },
  ],
};
