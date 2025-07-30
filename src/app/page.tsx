'use client';

import { useState } from 'react';
import {
  User,
  Briefcase,
  FileText,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Heart,
  Coffee,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Header } from '@/components/layout/header';

export default function Portfolio() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleExportPDF = () => {
    // In a real implementation, you'd use a library like jsPDF or react-pdf
    alert('PDF export functionality would be implemented here!');
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack web application built with React and Node.js, serving thousands of users daily',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '/placeholder.svg?height=200&width=300',
      link: '#',
    },
    {
      title: 'Mobile Banking App',
      description:
        'React Native app with secure authentication and real-time transactions',
      tech: ['React Native', 'Firebase', 'TypeScript'],
      image: '/placeholder.svg?height=200&width=300',
      link: '#',
    },
    {
      title: 'AI Dashboard',
      description:
        'Analytics dashboard with machine learning insights and data visualization',
      tech: ['Python', 'TensorFlow', 'React'],
      image: '/placeholder.svg?height=200&width=300',
      link: '#',
    },
  ];

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description:
        'Led development of scalable web applications serving 100k+ users. Mentored junior developers and implemented best practices.',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description:
        'Built responsive web interfaces and improved user experience metrics by 40%. Collaborated with design teams on user-centered solutions.',
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Labs',
      period: '2019 - 2020',
      description:
        'Developed features for mobile applications and learned modern development practices. Contributed to open-source projects.',
    },
  ];

  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'MongoDB',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Git',
    'Figma',
  ];

  const navigationItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div
      className={cn(
        'min-h-screen p-4 transition-colors duration-300 sm:p-8',
        theme === 'dark' ? 'bg-gray-900' : 'bg-stone-50'
      )}
    >
      <div className="mx-auto max-w-6xl">
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
          mobileMenuOpen={mobileMenuOpen}
          onMobileMenuOpenChange={setMobileMenuOpen}
          activeSection={activeSection}
          onActiveSectionChange={setActiveSection}
        />

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className={cn(
              'mb-8 rounded-2xl border p-6 shadow-lg transition-colors sm:hidden',
              theme === 'dark'
                ? 'border-gray-700 bg-gray-800'
                : 'border-gray-100 bg-white'
            )}
          >
            <div className="space-y-4">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActiveSection(id);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-xl p-3 transition-colors',
                    activeSection === id
                      ? theme === 'dark'
                        ? 'bg-yellow-400 font-semibold text-black'
                        : 'bg-yellow-100 font-semibold text-gray-900'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </button>
              ))}
              <Button
                onClick={toggleTheme}
                className={cn(
                  'w-full rounded-xl font-semibold',
                  theme === 'dark'
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                )}
              >
                {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </Button>
              <Button
                onClick={handleExportPDF}
                className="mt-4 w-full rounded-xl bg-yellow-400 font-semibold text-black hover:bg-yellow-500"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="mb-16 text-center sm:mb-20">
          <div className="mb-8">
            {/* Placeholder for hand-drawn illustration of a person waving */}
            <div
              className={cn(
                'mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border-2 transition-colors sm:h-40 sm:w-40',
                theme === 'dark'
                  ? 'border-gray-700 bg-gray-800'
                  : 'border-gray-200 bg-gray-100'
              )}
            >
              <User
                className={cn(
                  'h-16 w-16 sm:h-20 sm:w-20',
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
                )}
              />
            </div>
          </div>

          <h1
            className={cn(
              'mb-4 text-4xl leading-tight font-bold transition-colors sm:text-6xl',
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            )}
          >
            Build amazing things
            <br />
            <span
              className={cn(
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              )}
            >
              across the web
            </span>
          </h1>

          <p
            className={cn(
              'mx-auto mb-8 max-w-2xl text-lg leading-relaxed transition-colors sm:text-xl',
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            )}
          >
            A passionate full-stack developer connecting great ideas with
            beautiful, functional solutions. Let's create something amazing
            together.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              onClick={() => setActiveSection('contact')}
              className="rounded-full bg-gray-900 px-8 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Get in touch
            </Button>
            <Button
              onClick={() => setActiveSection('portfolio')}
              className="rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black hover:bg-yellow-500"
            >
              View my work
            </Button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* About Section */}
          {activeSection === 'about' && (
            <div className="grid gap-8 lg:grid-cols-2">
              {/* About Me Card */}
              <Card
                className={cn(
                  'overflow-hidden rounded-3xl border-0 transition-colors',
                  theme === 'dark' ? 'bg-rose-900/30' : 'bg-rose-100'
                )}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div
                      className={cn(
                        'mb-4 flex h-20 w-20 items-center justify-center rounded-2xl transition-colors',
                        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                      )}
                    >
                      <User
                        className={cn(
                          'h-10 w-10',
                          theme === 'dark' ? 'text-rose-400' : 'text-rose-400'
                        )}
                      />
                    </div>
                  </div>

                  <h2
                    className={cn(
                      'mb-4 text-2xl font-bold transition-colors',
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    )}
                  >
                    About me
                  </h2>
                  <p
                    className={cn(
                      'mb-6 leading-relaxed transition-colors',
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    )}
                  >
                    I'm a passionate full-stack developer with 5+ years of
                    experience creating digital solutions that make a
                    difference. I love turning complex problems into simple,
                    beautiful, and intuitive designs.
                  </p>
                  <p
                    className={cn(
                      'mb-6 leading-relaxed transition-colors',
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    )}
                  >
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open source projects, or
                    sharing knowledge with the developer community.
                  </p>

                  <Button
                    className={cn(
                      'rounded-full font-semibold transition-colors',
                      theme === 'dark'
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    )}
                  >
                    Learn more
                  </Button>
                </CardContent>
              </Card>

              {/* Skills Card */}
              <Card className="overflow-hidden rounded-3xl border-0 bg-yellow-400">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-300">
                      <Coffee className="h-10 w-10 text-gray-900" />
                    </div>
                  </div>

                  <h2 className="mb-4 text-2xl font-bold text-gray-900">
                    My expertise
                  </h2>
                  <p className="mb-6 leading-relaxed text-gray-800">
                    I specialize in modern web technologies and love working
                    with cutting-edge tools to build scalable, performant
                    applications.
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-gray-900 px-3 py-1 text-sm font-medium text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Button className="rounded-full bg-gray-900 font-semibold text-white hover:bg-gray-800">
                    View my projects
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Portfolio Section */}
          {activeSection === 'portfolio' && (
            <div>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                  My work
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                  Here are some of the projects I've worked on. Each one
                  represents a unique challenge and learning experience.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden rounded-3xl border border-gray-100 bg-white transition-shadow hover:shadow-lg"
                  >
                    <CardContent className="p-0">
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-6">
                        <h3 className="mb-2 text-xl font-bold text-gray-900">
                          {project.title}
                        </h3>
                        <p className="mb-4 leading-relaxed text-gray-600">
                          {project.description}
                        </p>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Button className="w-full rounded-full bg-gray-900 font-semibold text-white hover:bg-gray-800">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View project
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeSection === 'experience' && (
            <div>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                  My journey
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                  My professional experience and the path that led me to where I
                  am today.
                </p>
              </div>

              <div className="mb-12 space-y-6">
                {experience.map((job, index) => (
                  <Card
                    key={index}
                    className="rounded-3xl border border-gray-100 bg-white"
                  >
                    <CardContent className="p-8">
                      <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <div className="mb-2 sm:mb-0">
                          <h3 className="text-xl font-bold text-gray-900">
                            {job.title}
                          </h3>
                          <p className="font-medium text-gray-600">
                            {job.company}
                          </p>
                        </div>
                        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-gray-900">
                          {job.period}
                        </span>
                      </div>
                      <p className="leading-relaxed text-gray-700">
                        {job.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Education */}
              <Card className="rounded-3xl border-0 bg-rose-100">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">
                    Education
                  </h3>
                  <div className="rounded-2xl bg-white p-6">
                    <h4 className="text-lg font-bold text-gray-900">
                      Bachelor of Computer Science
                    </h4>
                    <p className="font-medium text-gray-600">
                      University of Technology
                    </p>
                    <p className="text-gray-600">2015 - 2019 | GPA: 3.8/4.0</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Info Card */}
              <Card className="rounded-3xl border-0 bg-rose-100">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {/* Placeholder for hand-drawn illustration */}
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white">
                      <Mail className="h-10 w-10 text-rose-400" />
                    </div>
                  </div>

                  <h2 className="mb-4 text-2xl font-bold text-gray-900">
                    Let's work together
                  </h2>
                  <p className="mb-6 leading-relaxed text-gray-700">
                    I'm always interested in new opportunities and exciting
                    projects. Whether you have a question or just want to say
                    hi, feel free to reach out!
                  </p>

                  <div className="mb-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">john.doe@email.com</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="rounded-full bg-gray-900 font-semibold text-white hover:bg-gray-800">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    <Button className="rounded-full bg-blue-600 font-semibold text-white hover:bg-blue-700">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form Card */}
              <Card className="rounded-3xl border-0 bg-yellow-400">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {/* Placeholder for hand-drawn illustration */}
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-300">
                      <Heart className="h-10 w-10 text-gray-900" />
                    </div>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    Send me a message
                  </h3>
                  <p className="mb-6 text-gray-800">
                    Got a project in mind? I'd love to hear about it and discuss
                    how we can bring your ideas to life.
                  </p>

                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border-0 bg-white p-4 font-medium focus:ring-2 focus:ring-gray-900 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-2xl border-0 bg-white p-4 font-medium focus:ring-2 focus:ring-gray-900 focus:outline-none"
                    />
                    <textarea
                      placeholder="Tell me about your project"
                      rows={4}
                      className="w-full resize-none rounded-2xl border-0 bg-white p-4 font-medium focus:ring-2 focus:ring-gray-900 focus:outline-none"
                    ></textarea>
                    <Button className="w-full rounded-2xl bg-gray-900 py-4 font-semibold text-white hover:bg-gray-800">
                      Send message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer
          className={cn(
            'mt-16 border-t py-8 text-center transition-colors sm:mt-20',
            theme === 'dark'
              ? 'border-gray-800 text-gray-400'
              : 'border-gray-200 text-gray-600'
          )}
        >
          <p>© 2025 Khai Shen. Made with ❤️ and ☕</p>
        </footer>
      </div>
    </div>
  );
}
