
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check system preference
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const skills = [
    { name: 'HTML/CSS/JavaScript', years: 10, percentage: 100 },
    { name: 'Bootstrap/Foundation/Vuetify', years: 8, percentage: 80 },
    { name: 'Angular', years: 7, percentage: 70 },
    { name: 'React', years: 6, percentage: 60 },
    { name: 'VueJS', years: 5, percentage: 50 },
    { name: 'NuxtJS', years: 3.5, percentage: 35 },
    { name: 'Tailwind CSS', years: 3, percentage: 30 },
    { name: 'NextJS', years: 2.5, percentage: 25 },
  ];

  const experiences = [
    {
      title: 'Senior Lead Front-End Developer',
      company: 'Current Position',
      period: '2020 - Present',
      description: 'Leading front-end development teams, architecting scalable solutions, and mentoring junior developers.',
      technologies: ['React', 'Angular', 'VueJS', 'Tailwind', 'CI/CD']
    },
    {
      title: 'Senior Front-End Developer',
      company: 'Remote (US Company)',
      period: '2018 - 2020',
      description: 'Developed responsive web applications and implemented modern CSS architectures.',
      technologies: ['React', 'SASS', 'Bootstrap', 'jQuery']
    },
    {
      title: 'Front-End Developer',
      company: 'Remote (European Company)',
      period: '2016 - 2018',
      description: 'Built component-based systems and implemented performance optimizations.',
      technologies: ['Angular', 'LESS', 'HTML5', 'CSS3']
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary">
              Clyde Ian Acaso
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-primary transition-colors ${
                    activeSection === item ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-accent"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Collapsible open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <CollapsibleContent className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-2 space-y-1">
              {['home', 'about', 'skills', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-accent rounded-md transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary animate-scale-in">
                Clyde Ian Acaso
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-in">
                Senior Lead Front-End Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
                10+ years of experience crafting exceptional web experiences with React, Angular, and Vue.js
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 animate-fade-in">
              <Badge variant="secondary" className="text-sm">📍 Liloan City, Cebu, Philippines</Badge>
              <Badge variant="secondary" className="text-sm">🌍 Remote Expert</Badge>
            </div>

            <div className="flex justify-center space-x-4 animate-fade-in">
              <Button size="lg" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('about')}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate front-end developer with extensive remote experience across U.S. and European companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge>10+ Years</Badge>
                  <span className="text-muted-foreground">Frontend Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge>Remote Expert</Badge>
                  <span className="text-muted-foreground">US & European Companies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge>Lead Developer</Badge>
                  <span className="text-muted-foreground">Team Leadership</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Technical Expertise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {['React', 'Angular', 'VueJS', 'Nuxt', 'NextJS', 'Tailwind', 'SASS/LESS', 'Bootstrap'].map((tech) => (
                    <Badge key={tech} variant="outline" className="justify-center">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Specialized in modern JavaScript frameworks, CSS architecture, and responsive design
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Technical Skills</h2>
            <p className="text-muted-foreground">
              Experience levels based on years of professional use
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <span className="text-sm text-muted-foreground">{skill.years}+ years</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">
                    {skill.percentage}% proficiency
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Professional Experience</h2>
            <p className="text-muted-foreground">
              Career highlights and key achievements
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="mt-2 sm:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="hover-scale">
              <CardContent className="p-6 text-center space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Ready to connect</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge>📍</Badge>
                    <span className="text-sm text-muted-foreground">
                      Liloan City, Cebu, Philippines
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge>🌍</Badge>
                    <span className="text-sm text-muted-foreground">
                      Available for remote work
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4 pt-4">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Clyde Ian Acaso. Crafted with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
