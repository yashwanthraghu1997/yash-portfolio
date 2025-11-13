'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';
import { Code2, BeakerIcon, Smartphone, Plus,Users, ClipboardList, Minus,Code,Boxes,Globe,Layers,Layout,Cpu,Settings,Database,MonitorSmartphone,Linkedin, Facebook, Instagram, Mail, Download } from 'lucide-react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const skills = [
    { name: "HTML", icon: <Code size={32} /> },
    { name: "CSS", icon: <Layout size={32} /> },
    { name: "JavaScript", icon: <Globe size={32} /> },
    { name: "jQuery", icon: <Boxes size={32} /> },
    { name: "PHP", icon: <Database size={32} /> },
    { name: "React.js", icon: <Cpu size={32} /> },
    { name: "Next.js", icon: <Layers size={32} /> },
    { name: "React Native", icon: <Smartphone size={32} /> },
    { name: "Node.js", icon: <Settings size={32} /> },
    { name: "Selenium", icon: <MonitorSmartphone size={32} /> },
     { name: "SQL", icon: <Database size={32} /> },
  ];

   const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/yashwanth-r-99b402135",
    },
    {
      name: "Facebook",
      icon: <Facebook size={24} />,
      href: "https://www.facebook.com/yeshwanth.rock1?mibextid=ZbWKwL",
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      href: "https://www.instagram.com/_yashwanth_royal/",
    },
  ];




  // Portfolio projects data
  const portfolioProjects = [
    {
      id: 1,
      name: 'Colity',
      year: '2023',
      category: ['CMS', 'App'],
      image: '/images/img_656effdee51d846.png',
    },
    {
      id: 2,
      name: 'Valora',
      year: '2023',
      category: ['Branding', 'Website'],
      image: '/images/img_656f016945f30ae.png',
    },
    {
      id: 3,
      name: 'Alite',
      year: '2023',
      category: ['SaaS', 'Website'],
      image: '/images/img_656f01e8f9eee08.png',
    },
    {
      id: 4,
      name: 'Conex',
      year: '2023',
      category: ['CRM', 'App'],
      image: '/images/img_656f0224757bc7e.png',
    },
  ];


  const companies = [
    { name: "WeMakeScholars", logo: "/images/wms.jpeg",url: "https://wemakescholars.com/" },
    { name: "Synergym", logo: "/images/synergym.png", url: "https//synergym.es/" },
    { name: "Auro", logo: "/images/auro.png", url: "https://aurofit.co/" },
  ];


  // Services data
  const services = [

    {
      id: 1,
      title: 'Requirement Analysis & Project Management',
      icon: <ClipboardList size={32} />,
      description: 'Translating business goals into clear technical requirements, prioritizing features, and driving on-time delivery.'
    },

    {
      id: 2,
      title: 'Technical Leadership & Mentorship',
      icon: <Users size={32} />,
      description: 'Leading cross-functional teams, defining technical roadmaps, conducting code reviews, and mentoring engineers for growth.'
    },
    {
      id: 3,
      title: 'Full-Stack Development',
      icon: <Code2 size={32} />,
      description: 'Designing and developing end-to-end web applications using modern frontend and backend technologies.'
    },

    {
      id: 4,
      title: 'Mobile App Development',
      icon: <Smartphone size={32} />,
      description: 'Creating high-performance mobile applications with clean architecture and intuitive UX.'
    },
    {
      id: 5,
      title: 'Automation & Quality Engineering',
      icon: <BeakerIcon size={32} />,
      description: 'Building reliable, scalable test automation frameworks for web and mobile platforms to ensure product quality and faster release cycles.'
    },

  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Esther Howard',
      position: 'CEO, Hourglass',
      image: '/images/img_657049ae251f485.png',
      company: '/images/img_group_1_of_6.svg',
      quote:
        '"Working with Nolan was a game-changer for our project. Their expertise in software development and keen eye for detail ensured success."',
    },
    {
      id: 2,
      name: 'Jenny Wilson',
      position: 'Project Manager, Lightbox',
      image: '/images/img_65704a560c28a8d.png',
      company: '/images/img_group_2_of_6.svg',
      quote:
        '"Nolan is a web development maestro! Their ability to transform ideas into functional & visually stunning sites is impressive."',
    },
    {
      id: 3,
      name: 'Jacob Jones',
      position: 'Founder, Luminous',
      image: '/images/img_65704a5d492ae9f.png',
      company: '/images/img_group_3_of_6.svg',
      quote:
        '"Their technical prowess and problem-solving skills were instrumental in delivering a seamless and efficient software solution."',
    },
  ];

  return (
    <div className="w-full bg-[#1b1f24] min-h-screen text-white">
      {/* ---------------- HERO SECTION ---------------- */}
        <section className="w-full px-6 sm:px-8 lg:px-14 mt-[120px] mb-[60px] lg:mt-[154px]">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                {/* Left Content */}
                <div className="flex flex-col items-start w-full lg:w-[52%]">
                {/* Accent Bar */}
                <div className="w-[100px] lg:w-[148px] h-[6px] bg-gradient-to-r from-blue-500 to-purple-500 mb-[60px]" />

                {/* Heading */}
                <h1 className="text-white text-[38px] sm:text-[44px] font-space-grotesk font-bold leading-[48px] mb-[16px]">
                    Hi, I'm Yashwanth Raghu
                </h1>

                {/* Subtitle */}
                <p className="text-blue-400 text-[18px] sm:text-[20px] font-medium mb-[32px]">
                    Team Lead • Full Stack Developer • Automation Expert
                </p>

                {/* Description */}
                <p className="text-[#c3cad5] text-[17px] leading-[30px] mb-[46px] max-w-[600px]">
                    I’m a passionate software engineer who began my journey in manual testing
                    and gradually transitioned into automation, full-stack, and app development.
                    With hands-on experience across various technologies, I’ve developed a strong
                    understanding of the complete software development lifecycle. Now, as a team
                    leader, I focus on transforming ideas into impactful digital solutions through
                    collaboration, innovation, and strategic execution. I’m driven by the goal of
                    crafting seamless user experiences that blend code, creativity, and purpose.
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#2d343f] mb-[40px]" />

                {/* Button */}
                <Button
                    text="Get in touch"
                    fill_background_color="#075fe4"
                    text_color="#ffffff"
                    text_font_size="18"
                    text_font_family="Space Grotesk"
                    text_font_weight="500"
                    text_line_height="23px"
                    border_border_radius="24px"
                    padding="12px 34px"
                    className="hover:opacity-90 transition-all duration-300 hover:scale-[1.03]"
                    onClick={() => {
                        const contactSection = document.getElementById("contact");
                        contactSection?.scrollIntoView({ behavior: "smooth" });
  }}
                />
                </div>

                {/* Right Image */}
                <div className="flex justify-center relative group">
                {/* Soft Glow */}
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-500"></div>

                <img
                    src="/images/yash-protfolio.jpg"
                    alt="Yashwanth Raghu — Software Engineer & Team Lead"
                    className="relative w-[280px] sm:w-[380px] lg:w-[500px] h-auto rounded-full object-cover border-4 border-[#1e293b] shadow-lg shadow-blue-900/40 transition-transform duration-500 group-hover:scale-[1.05]"
                />
                </div>
            </div>
        </section>


        <section className="bg-[#0e0e0e] text-white py-20 px-6 lg:px-24">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
                {/* Left Text Section */}
                <div className="lg:w-1/3 space-y-4">
                <h2 className="text-4xl font-semibold">What I Do</h2>
                <p className="text-gray-400 leading-relaxed text-sm">
                    I specialize in crafting custom solutions that seamlessly blend innovation with functionality.
                </p>
                </div>

                {/* Right Accordion Section */}
                <div className="lg:w-2/3 flex flex-col divide-y divide-gray-700">
                {services.map((service, index) => (
                    <div key={index} className="py-6 cursor-pointer" onClick={() => toggle(index)}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                        <span className="text-2xl">{service.icon}</span>
                        <h3 className="text-lg font-medium">{service.title}</h3>
                        </div>
                        {activeIndex === index ? (
                        <Minus size={18} className="text-gray-400" />
                        ) : (
                        <Plus size={18} className="text-gray-400" />
                        )}
                    </div>

                    {/* Expandable description */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <p className="text-gray-400 text-sm leading-relaxed ml-10">
                        {service.description}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>

        <section className="bg-[#0e1117] text-gray-300 py-20 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
                Experience Timeline
                </h2>

                <div className="relative border-l border-gray-700 ml-4 sm:ml-8">
                {[
                    {
                    year: "Dec 2023 – Present",
                    title: "Technical Team Lead",
                    company: "WeMakeScholars –Hyderabad, Telangana, India",
                    desc: "Leading end-to-end product development, managing sprint planning, and overseeing QA and development teams. Fixing issues and ensuring product delivery. Developed Mobile Application using React Native."
                    },
                    {
                    year: "Sep 2022 – Nov 2023",
                    title: "SDE-II (Full Stack Developer)",
                    company: "WeMakeScholars –Hyderabad, Telangana, India",
                    desc: "Worked across frontend and backend using HTML, CSS, Bootstrap, Materialize, PHP Yii2. Developed multiple banking modules and sanction management systems."
                    },
                    {
                    year: "Jun 2021 – Aug 2022",
                    title: "Frontend Engineer",
                    company: "SynergyM España – Bengaluru, India",
                    desc: "Built web applications from scratch using HTML, CSS, PHP, CodeIgniter. Integrated APIs and implemented MUX video streaming features."
                    },
                    {
                    year: "May 2021 – Jun 2021",
                    title: "QA Testing Engineer",
                    company: "SynergyM España – Bengaluru, India",
                    desc: "Tested Android and iOS apps. Automated testing using Appium. Worked on treadmill apps and Stripe payment systems."
                    },
                    {
                    year: "Nov 2019 – Apr 2021",
                    title: "Junior Member of Technical Staff",
                    company: "Auro – Bengaluru, India",
                    desc: "Developed and executed Manual test cases. Handled BLE device integration and analyzed customer disputes."
                    },
                ].map((exp, index) => (
                    <div key={index} className="mb-10 ml-6 relative">
                    {/* Dot */}
                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-4 ring-[#0e1117]" />
                    {/* Card */}
                    <div className="bg-[#1a1f2b] p-5 rounded-lg shadow-md hover:shadow-blue-900/20 transition-all duration-300">
                        <time className="text-sm text-blue-400 font-semibold">{exp.year}</time>
                        <h3 className="text-xl font-bold text-white mt-2">{exp.title}</h3>
                        <p className="text-sm text-gray-400 italic mb-2">{exp.company}</p>
                        <p className="text-gray-400 text-[15px] leading-relaxed">{exp.desc}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>

        <section className="bg-[#1b1f24] text-gray-300 py-20 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
                Tech Stack & Skills
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {skills.map((skill, index) => (
                    <div
                    key={index}
                    className="flex flex-col items-center justify-center bg-[#1a1f2b] p-6 rounded-2xl hover:bg-[#232b3b] hover:scale-105 transition-all duration-300 shadow-md"
                    >
                    <div className="text-[#075fe4] mb-3">{skill.icon}</div>
                    <p className="text-sm font-medium">{skill.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>


      {/* ---------------- SELECTED WORKS ---------------- */}
      {/* <section className="w-full px-6 sm:px-8 lg:px-18 mt-[148px]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-white text-[38px] leading-[52px] mb-10 font-manrope">
            My Selected Works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {portfolioProjects.map((project) => (
              <div key={project.id} className="flex flex-col gap-3">
                <div className="bg-[#2a2a2a] rounded-lg p-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[460px] object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-[22px] leading-[31px]">
                      {project.name}
                    </h3>
                    <Button
                      text={project.year}
                      text_font_size="14"
                      text_font_family="Liberation Sans"
                      text_font_weight="400"
                      text_line_height="17px"
                      text_color="#ffffff"
                      border_border="1 solid #ffffff19"
                      border_border_radius="18px"
                      padding="10px 28px"
                    />
                  </div>
                  <div className="flex gap-6">
                    {project.category.map((cat, i) => (
                      <span key={i} className="text-[#999] text-[14px]">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              text="View All"
              text_font_size="14"
              text_font_family="Inter"
              text_font_weight="500"
              text_line_height="17px"
              text_color="#ffffff"
              border_border="1 solid #ffffff19"
              border_border_radius="26px"
              layout_gap="6px"
              padding="16px 50px"
              className="flex items-center gap-2"
            >
              View All
              <img
                src="/images/img_656dc3a4c29d8a8dcdb4f6ceicarrowbtnsvg.svg"
                alt="Arrow"
                className="w-5 h-5"
              />
            </Button>
          </div>
        </div>
      </section>
 */}


  

        {/**Companies worked for */}
    <section className="bg-[#111] text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <p className="text-lg mb-4 md:mb-0">
            Organizations I’ve Worked With
          </p>
          {/* <button className="flex items-center gap-2 border border-gray-500 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-800 transition">
            See more work <ArrowRight size={18} />
          </button> */}
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition transform hover:scale-105"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-50 h-50 object-contain"
              />
              <p className="text-sm mt-2">{company.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="w-full py-16 bg-[#1b1f24] flex flex-col items-center text-center">
        <h2 className="text-white text-3xl font-space-grotesk font-bold mb-6">
            Download My Resume
        </h2>
        <p className="text-[#c3cad5] text-lg mb-8 max-w-[600px]">
            Get a detailed overview of my professional journey, skills, and
            experience in my latest resume.
        </p>
        <a
            href="/yash-resume.pdf" 
            download
            className="flex items-center gap-3 bg-[#075fe4] hover:bg-[#064ac2] text-white font-medium text-lg px-6 py-3 rounded-full transition duration-200"
        >
            <Download size={22} />
            Download Resume
        </a>
    </section>

      {/* ---------------- TESTIMONIALS ---------------- 
      <section className="w-full bg-[#0a0a0a] mt-[150px] py-[70px] px-6 sm:px-8 lg:px-18">
        <div className="w-full overflow-x-auto">
          <div className="flex gap-8 min-w-max px-4">
            {testimonials.map((t) => (
              <div key={t.id} className="flex flex-col w-[400px] lg:w-[500px] flex-shrink-0">
                <img src={t.company} alt="Company" className="w-[140px] h-[40px] mb-[40px]" />
                <p className="text-white mb-[40px] text-[16px] leading-[24px]">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-[64px] h-[64px] rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white text-[16px]">{t.name}</p>
                    <p className="text-[#999] text-[14px]">{t.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    </div>
  );
}
