export const profile = {
  name: 'Abubakar A.',
  title: 'Junior .NET Developer | 2026 BCA Graduate',
  location: 'Chennai, Tamil Nadu, India',
  email: 'abuostar101@gmail.com',
  phone: '+91 93424 53230',
  phoneHref: 'tel:+919342453230',
  linkedin: 'https://www.linkedin.com/in/abubakar-dotnet-dev/',
  github: 'https://github.com/abuostar101-glitch',
}

export const nav = [
  ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'],
  ['experience', 'Experience'], ['education', 'Education'], ['contact', 'Contact'],
]

export const skills = [
  { title: 'Backend', note: 'Where most of my project time goes.',
    items: ['C#', '.NET 8', 'ASP.NET Core MVC', 'ASP.NET Core Web API', 'Razor Pages', 'Dapper', 'Entity Framework Core', 'LINQ', 'REST APIs'] },
  { title: 'Frontend', note: 'Enough to build and ship full-stack screens.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'React'] },
  { title: 'Databases', note: 'Hand-written SQL and ORM-based access.',
    items: ['SQL Server', 'SQLite', 'Stored Procedures'] },
  { title: 'Development tools', note: 'My daily setup.',
    items: ['Visual Studio', 'Visual Studio Code', 'SQL Server Management Studio', 'Swagger/OpenAPI', 'Git', 'GitHub'] },
  { title: 'Cloud and deployment', note: 'Fundamentals, used to host a live site.',
    items: ['AWS EC2', 'Nginx reverse proxy', 'systemd', 'HTTPS configuration basics'] },
  { title: 'Core concepts', note: 'The habits behind the code.',
    items: ['Object-Oriented Programming', 'Collections and Generics', 'Async/Await', 'Exception Handling', 'CRUD operations', 'Dependency Injection', 'Model Validation', 'Authentication and Authorization', 'Claims-based authorization', 'Cookie authentication', 'Three-tier architecture', 'Debugging and troubleshooting'] },
]

export const projects = [
  { id: 'oems', name: 'Online Examination Management System',
    short: 'OEMS',
    blurb: 'An ASP.NET Core 8 MVC application for running online examinations, with separate Admin, Staff and Student roles.',
    tags: ['C#', '.NET 8', 'ASP.NET Core MVC', 'Dapper', 'SQL Server', 'Stored Procedures'],
    features: ['Role-based access for Admin, Staff and Student', 'Cookie authentication with claims-based authorization', 'Account lockout after three failed login attempts', 'Password update', 'Examination scheduling and management', 'Evaluation and result management', 'Dashboard and email notifications'],
    github: 'https://github.com/abuostar101-glitch/OEMS' },
  { id: 'inventory', name: 'Inventory Management System',
    short: 'Inventory',
    blurb: 'A full-stack inventory app: a React frontend talking to an ASP.NET Core Web API documented with Swagger.',
    tags: ['C#', '.NET 8', 'ASP.NET Core Web API', 'Entity Framework Core', 'SQLite', 'React', 'Vite'],
    features: ['Product CRUD operations', 'Product details and low-stock management', 'Order management', 'Customer and order-item information', 'Quantity, unit-price and order-total calculations', 'API documentation with Swagger/OpenAPI'],
    github: 'https://github.com/abuostar101-glitch/inventory-management-system' },
  { id: 'safa', name: 'Safa Hajj & Umrah Services',
    short: 'Safa',
    blurb: 'A responsive website built for a real Hajj and Umrah services business, serving travellers from South Tamil Nadu to Makkah and Madinah.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    features: ['Home, Hajj, Umrah, Packages, Gallery, About and Contact sections', 'Service and package information', 'Business contact and location details', 'WhatsApp inquiry call-to-action', 'Navigation, animations and responsive layout'],
    github: 'https://github.com/abuostar101-glitch/safa-hajj-services',
    live: 'https://safahajservices.com/' },
]

export const internship = {
  role: 'Web Developer Intern',
  company: 'Customized Digital Solutions Private Limited',
  place: 'Chennai, Tamil Nadu',
  period: '12 May 2025 – 06 June 2025',
  points: ['Gained exposure to C# and JavaScript.', 'Learned about database management and web application development.', 'Practised debugging and troubleshooting.', 'Took part in technical training and development-related activities.'],
}

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  college: 'S.S.S. College of Arts, Science & Management Co-Ed',
  place: 'Ranipet, Tamil Nadu, India',
  graduation: 'May 2026',
}
