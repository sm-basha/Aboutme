/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resumeEN = {
  photo: 'sm-pic.jpg', 
  firstName: 'SHAIK ',
  lastName: 'MAHABOOB BASHA',
  jobTitle: 'IT Administrator/ DevOps Engineer',
  city: 'Hyderabad',
  postalCode: '500032',
  country: 'India',
  phone: '+91 950 2720 548',
  email: 'sm_basha@outlook.com',
  education: [
    {
      // school: 'Institución Universitaria Politécnico Grancolombiano',
      degree: 'Quba College of Engineering',
      // graduationDate: 'Present',
      description: 'Computer Science & Engineering'
    },
    {
      // school: 'Quba college of Engg & Tech.',
      degree: 'Sri Venkateswara Jr. College',
      // graduationDate: '2013',
      description: ''
    }
  ],
  links: [
    {
      label: 'GitHub Profile',
      link: 'https://github.com/sm-basha'
    },
    {
      label: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/in/sm-basha'
    },
    {
      label: 'AWS Certified Sol. Arch – Associate',
      link: 'https://www.credly.com/badges/1a3cf774-d537-4127-b696-44848fa07a39/linked_in?t=s7797k'
    },

  ],
  skills: [
    'IT Administration',
    'Asset Management',
    'Vendor Management',
    'Sophos End-point Security',
    'Google Workspace',
    'Cloud Security',
    'AWS Devops',
    'Jenkins',
    'Docker',
    'Kubernates',
    'Terraform',
    'Azure Devops',
    'Windows; Linux; Mac'
  ],
  languages: ['English ', 'Hindi', 'Telugu'],
  professionalSummary: `Having 11 years of experience in IT Administration, including 3+ years in DevOps with proficiency in architecting and executing automated CI/CD pipelines, by cutting deployment time and increasing the frequency. Skilled in AWS, Azure, infrastructure as code, and deploying monitoring systems.`,
  employmentHistory: [
    {
      jobTitle: 'Sr. System & Network Administrator',
      startDate: 'Feb 2024',
      endDate: 'till date',
      employer: 'NeoLync Electronics Pvt Ltd',
      city: 'Hyderabad',
      achievements: [
        'IT Administration, Asset Management, Vendor development and negotiation. Worked closely with vendors to slash company costs by 25%.',        
        'Manage and optimize platform services including compute, storage, network, load balancing, DNS, VMware, and Azure environments.',
        'Implement and maintain robust security practices for managing and storing secrets, tokens, certificates, and other sensitive data.',
        'Harden and secure OS images to protect against vulnerabilities and ensure compliance with security standards.',
        'Uses PowerShell for automation and configuration tasks within the Azure environment.',
        'Administer and maintaining Active Directory services, ensuring secure and efficient directory operations.',
        'Designed and managed Virtual Networks (VNET) and Virtual Private Clouds (VPC) for seamless connectivity and data flow.',
        'Collaborate with development, operations, and security teams to ensure seamless integration and continuous delivery of applications.',
        'Using Terraform for infrastructure as code, automating cloud infrastructure deployment and management.',
        'Reviewed all AWS accounts and environments to avoid additional costs, decreasing 33% of quarterly bills.',
        'Governance cost optiomization, security of the AWS resources using Lamda functions',
        'Successfully deployed a highly available application stack on AWS utilizing EC2 autoscaling groups which enabled increased customer engagement by 20%.'
      ]
    },
    {
      jobTitle: 'System & Network Administrator',
      startDate: 'May 2016',
      endDate: 'Jan 2024',
      employer: 'NowFloats Technologies Ltd',
      city: 'Hyderabad',
      achievements: [
        'Responsible and involved in all IT and related Audits including periodic reviewing of Assets and Software Licenses, Access Review as part of Risk Management.',
        'Conﬁguring, Managing, and Auditing software like Google Workspace/G-suit, Abode, Zoom, Skype Manager Account, Firewalls, CCTV Video Surveillance, Bio-metric Access Control, ',
        'Built Docker Images and managed image distribution to Docker registry and AWS ECR, deploying to production clusters on AWS EKS.',
        'Managed source code version tagging and prepared release notes for efficient build and release processes.',
        'Set up and maintaining SFTP servers for secure file transfers.',
        'Implemented encryption and decryption setups to protect sensitive data.',
        'Customized Jenkins pipelines for project-specific builds and deployments across different environments (Dev, QA, Prod).',
        'Configured database parameters during environment deployments and troubleshooted build issues in collaboration with development teams.',
        'Orchestrated deployment of 3-tier architecture infrastructure on AWS Cloud utilizing Terraform.',
        'Developed CI/CD workflows with cloud platform integrations using Git, GitHub, Sonar, Nexus, Terraform, Docker, and Kubernetes.',
        'Implemented and optimized Jenkins CI/CD pipelines, integrating Git & GitHub for seamless deployment.',
        'Containerized applications with Docker for consistent deployment and scalability.',
        'Documented processes, configurations, and best practices for future reference.'

      ]
    }, {
      jobTitle: 'System & Network Executive',
      startDate: 'Oct 2014',
      endDate: 'Apr 2016',
      employer: 'MLR Auto Ltd',
      city: 'Toopran, Hyderabad',
      achievements: [
        'Installation of the wired and wireless network throughout the company.',
        'Installation, administering, and troubleshooting of Desktops, laptops, workstations with various Operating Systems and Server-based Antivirus.',
        'Installation, troubleshooting of various Designing software like Pro-Engineer, Creo3.0.',
        'Installing, troubleshooting, backup of various Mailing applications like MS Outlook, Thunderbird & Windows live mail.',
        'Periodic backups of Systems, ERP’s database, biometric, remote support to end-user/clients.',
        'Performing preventive maintenance in accordance with department policies.',

      ]
    },
    {
      jobTitle: 'System & Network Engineer',
      startDate: 'Jul 2013',
      endDate: 'Sep 2014',
      employer: 'Alkali Metals Ltd',
      city: 'Uppal, Hyderabad',
      achievements: [
        'Responsible for internet connection, LAN, ﬁle and print server.',
        'Installation & maintaining other computer peripheral devices such as Network printers, desktop printers, scanners and solving problems if arise.',
        'Maintaining wired, wireless network, Mpls. Dealing and worked with Hubs, Switches, Firewall.'

      ]
    },
    // {
    //   jobTitle: 'Senior Full-Stack Developer',
    //   startDate: 'March 2021',
    //   endDate: 'March 2022',
    //   employer: 'IAS Software',
    //   city: 'Medellín/Colombia',
    //   achievements: [
    //         'I worked as a vendor at Bancolombia, developing new modules for Java SpringBoot and JavaScript-TypeScript in Angular web applications.',
    //         'I implemented some AWS services, used Docker, EKS, RDS, Secret manager .',
    //         'I implemented continuos integration and cotinous deploymenta with Azure DevOps for application deployment and server management.'
    //   ]
    // },
    // {
    //   jobTitle: 'Senior Developer',
    //   startDate: 'Aug 2020',
    //   endDate: 'March 2021',
    //   employer: 'Matrixtech',
    //   city: 'Medellín/Colombia',
    //   achievements: [
    //     'I leaded a team of 3 developers and coordinated with other teams to build a web application with Java SpringBoot and JavaScript-TypeScript in Angular.',
    //     'I developed the SuperChance module for the GANA application (https://www.gana.com.co/) using the JavaScript-TypeScript in React language as frontend and Java EE implementing plugins.',
    //     'I developed the Raspita module for the GANA aplication web and mobile using the AndroidStudio with Java language as frontend and Java EE implementing plugins.'
    //   ]
    // }
  ],
}

const resumeES = {
  // photo: 'https://awsbucket-emmanuelgaviria.s3.amazonaws.com/profile.jpeg',
  // firstName: 'Juan Emmanuel',
  // lastName: 'Gaviria López',
  // jobTitle: 'Desarrollador Full-Stack ',
  // city: 'Medellin',
  // postalCode: '051052',
  // country: 'Colombia',
  // phone: '+57 313 602 9181',
  // email: 'emmanuel.gaviria.25@gmail.com',
  // education: [
  //   {
  //     school: 'Institución Universitaria Politécnico Grancolombiano',
  //     degree: 'En proceso',
  //     graduationDate: 'Actualmente',
  //     description: 'Ingenieria de Software'
  //   },
  //   {
  //     school: 'SENA: Servicio Nacional de Aprendizaje',
  //     degree: 'Graduado',
  //     graduationDate: '2016',
  //     description: 'Tecnologo en Analisis y desarrollo en sistemas de información'
  //   }
  // ],
  links: [
    {
      label: 'Perfil GitHub',
      link: 'https://github.com/sm-basha'
    },
    {
      label: 'Perfil LinkedIn',
      link: 'linkedin.com/in/sm-basha-a7790856'
    },
    {
      label: 'Certificado de Ingles',
      link: 'https://www.efset.org/cert/N49DQe'
    },
    {
      label: 'Canal de Youtube',
      link: 'https://www.youtube.com/channel/UC-4dSLsDkE4ItqvBFa8lGqQ'
    }
    //  ],
    //  skills: [
    //    'Java',
    //    'Spring Boot',
    //    'JavaScript',
    //    'TypeScript',
    //    'Angular',
    //    'ReactJs',
    //    'NextJs',
    //    'Azure',
    //    'Devops',
    //    'Servicios AWS',
    //    'PostgreSQL',
    //    'Oracle-PL SQL',
    //    'MySQL',
    //    'Desarrollo de juegos',
    //    'Unreal Engine 5'
    //  ],
    //  languages: ['Ingles', 'Español'],
    //  professionalSummary: `Soy un desarrollador de software fullstack senior y he trabajado en una variedad de proyectos en el desarrollo de aplicaciones tanto backend como frontend. He utilizado JavaScript, TypeScript Angular, React, Java en entornos empresariales para desarrollar sistemas de gestión de información, sistemas bancarios, aplicaciones de comercio electrónico y soluciones de software personalizadas. Mi experiencia incluye diseñar e implementar arquitecturas robustas utilizando frameworks como NextJS, Spring e Hibernate, así como la integración de sistemas a través de servicios web y API RESTful.`,
    //  employmentHistory: [
    //   {
    //     jobTitle: 'Software Developer',
    //     startDate: 'Noviembre 2022',
    //     endDate: 'Enero 2024',
    //     employer: 'Cobis',
    //     city: 'Quito/Ecuador',
    //     achievements: [
    //           'Estuve desarrollando varias aplicaciones web con React y NextJs. de un sistema de gestión de cliente desde la web',
    //           'Estuve desarrollando una aplicación backend para Java, implementando API RESTFUL con Spring framework.',
    //           'Implementé la integración continua y la implementación continua con Azure DevOps para la implementación de aplicaciones y la administración de servidores.'

    //     ]
    //   }, {
    //     jobTitle: 'Software Developer',
    //     startDate: 'Febrero 2023',
    //     endDate: 'Agosto 2023',
    //     employer: 'Team International',
    //     city: 'Medellín/Colombia',
    //     achievements: [
    //           'Trabajé como proveedor en Datacredito, desarrollando módulos para aplicaciones web Java Springboot y Angular.',
    //           'Implementé algunos servicios de AWS, usé Docker, EKS, RDS, Secret Manager.',
    //           'Implementé la integración continua y la implementación continua con Azure DevOps para la implementación de aplicaciones y la administración de servidores.'
    //     ]
    //   },
    //    {
    //      jobTitle: 'Desarrollador Full-Stack Senior',
    //      startDate: 'Marzo 2022',
    //      endDate: 'Enero 2023',
    //      employer: 'Sofka Tecnologies',
    //      city: 'Medellín/Colombia',
    //      achievements: [
    //        'Trabajé como proveedor en Grupo Argos, desarrollando nuevos módulos para NodeJS y aplicaciones Angular.',
    //        'Utilizé algunos servicios de AWS y temas de Azure DevOps para el despliegue de aplicativos y manejo de servidores.'
    //      ]
    //    },
    //    {
    //      jobTitle: 'Desarrollador Full-Stack Senior',
    //      startDate: 'Marzo 2021',
    //      endDate: 'Marzo 2022',
    //      employer: 'IAS Software',
    //      city: 'Medellín/Colombia',
    //      achievements: [
    //        'Trabajé como proveedor en Bancolombia, desarrollando nuevos módulos para Spring Boot y aplicaciones Angular.',
    //        'Implementé algunos servicios de AWS y temas de Azure DevOps para el despliegue de aplicativos y manejo de servidores.'
    //      ]
    //    },
    //    {
    //      jobTitle: 'Desarrollador Senior ',
    //      startDate: 'Agosto 2020',
    //      endDate: 'Marzo 2021',
    //      employer: 'Matrixtech',
    //      city: 'Medellín/Colombia',
    //      achievements: [
    //        'Me uní para trabajar con el equipo de desarrollo a cargo de las aplicaciones cliente de GANA.',
    //        'Dirigí un equipo de 3 desarrolladores y coordinó con otros equipos para crear una aplicación web con SpringBoot y Angular.',
    //        'Desarrollé el módulo SuperChance para la aplicación GANA (https://www.gana.com.co/) utilizando el lenguaje React como interfaz y complementos de implementación de Java EE.',
    //        'Desarrollé el módulo Raspita para la aplicación web y móvil de GANA usando AndroidStudio con lenguaje Java como frontend e implementando plugins Java EE.'
    //      ]
    //    },
    //    {
    //      jobTitle: 'Analista Desarrollador TI 2',
    //      startDate: 'Mayo 2018',
    //      endDate: 'Agosto 2020',
    //      employer: 'Konecta Fabrica de Software',
    //      city: 'Medellín/Colombia',
    //      achievements: [
    //        'Me uní para trabajar con el equipo de desarrollo encargado de mejorar la gestión de procesos de negocio de las aplicaciones de Konecta.',
    //        'Fuí el primer empleado en implementar el tecnologia Angular en la empresa y encargado de capacitar al equipo para comenzar a crear o implementar aplicaciones web con Angular 8+.',
    //        'Implementé desarrollos utilizando el lenguaje JQuery como frontend y Spring como backend.',
    //        'Modifique el diseño de una aplicación que estaba en la versión anterior ExtJS de Bootstrap.',
    //      ]
    //    }
  ],
}

const lang = "EN";

const formatResume = (r, l) => ({
  resume: {
    ...r,
    address: [
      r.country,
      r.city,
      r.postalCode
    ].filter(Boolean).join(', '),
    lang: l
  }
});

var vm = new Vue({
  el: "#app",
  data: {
    resume: {
      ...resumeEN,
      address: [
        resumeEN.country,
        resumeEN.city,
        resumeEN.postalCode
      ].filter(Boolean).join(', '),
      lang: lang
    }
  },
  methods: {
    changeLang: function (lang) {
      this.resume = lang == "ES" ? {
        ...resumeES,
        address: [
          resumeES.country,
          resumeES.city,
          resumeES.postalCode
        ].filter(Boolean).join(', '),
        lang: lang
      } : {
        ...resumeEN,
        address: [
          resumeEN.country,
          resumeEN.city,
          resumeEN.postalCode
        ].filter(Boolean).join(', '),
        lang: lang
      }
    }
  }
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()
