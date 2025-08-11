import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Check system preference
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const skills = [
    { name: "HTML/CSS/JavaScript", years: 10, percentage: 100 },
    { name: "Bootstrap/Foundation/Vuetify", years: 8, percentage: 80 },
    { name: "Angular", years: 7, percentage: 70 },
    { name: "React", years: 6, percentage: 60 },
    { name: "VueJS", years: 5, percentage: 50 },
    { name: "NuxtJS", years: 3.5, percentage: 35 },
    { name: "Tailwind CSS", years: 3, percentage: 30 },
    { name: "NextJS", years: 2.5, percentage: 25 },
    { name: "Artificial Intelligence and LLM's", years: 5, percentage: 50 },
    { name: "Leadership / Managerial", years: 5, percentage: 50 },
  ];

  const experiences = [
    {
      title: "Startup Co-Founder & Fractional CTO",
      company: "Trustloop",
      period: "2024 - Present",
      description: `
        As Startup Co-Founder & Fractional CTO at Trustloop, I helped turn a business idea from a close friend into a fully operational, 
        customer-facing digital platform. I led the initial system architecture, technology strategy, and end-to-end development using a 
        modern stack including React, Vue.js, Nuxt, and low-code tools like Wix and GoHighLevel to accelerate delivery and experimentation.

        While I no longer handle day-to-day engineering, I continue to support the team in a strategic technical advisory capacity — 
        guiding decisions on scalability, performance, and product direction. I also advise on dev workflows, infrastructure setup, and
         vendor/tooling evaluations to align with long-term business goals.
        `,
      technologies: [
        "Artificial Intelligence",
        "LLM's",
        "Leadership",
        "Managerial",
      ],
    },
    {
      title: "Senior Lead Front-End Developer",
      company: "Storma",
      period: "2022 - 2025",
      description: `
        Storma is a web application for HR and recruitment systems, where I led a complete refactor of the CSS codebase to significantly
         reduce file size and improve maintainability. By applying modular CSS principles through OOCSS and BEM, 
         I optimized the UI for a mobile-first, fully responsive experience. I also helped establish the company’s 
         CSS coding standards and integrated a linting tool to ensure consistency across the codebase.
        `,
      technologies: [
        "Artificial Intelligence",
        "NuxtJs",
        "VueJS",
        "Tailwind",
        "CI/CD",
        "LLM's",
      ],
    },
    {
      title: "Software Engineer",
      company: "Atomology",
      period: "2018 - 2022",
      description: `Atomology is a web application for product, HR, and payroll systems, where I successfully migrated the Endor Portals to improve performance and 
       code efficiency. I led front-end development efforts, enhancing product owner satisfaction, maintaining roadmap timelines, and refining the 
       branching strategy for quicker deployments. Additionally, I spearheaded the implementation of testing, significantly reducing regression 
       and bug occurrences.`,
      technologies: [
        "Angular",
        "SASS",
        "Bootstrap",
        "jQuery",
        "AngularJs",
        ".NET",
      ],
    },
    {
      title: "Senior Web Developer",
      company: "Circlepix",
      period: "2017 - 2018",
      description: `At Circlepix, I worked as a Senior Front-End Developer with full-stack capabilities, 
        contributing to a back-office system that managed virtual tours and real estate buyer prospecting. 
        I developed interactive and high-performing web applications using PHP, Angular, MySQL, and C#, while 
        also maintaining and enhancing existing systems with new features. My responsibilities included designing 
        custom email templates and marketing brochures, building pre-lander websites for advertising campaigns, and
         improving UI/UX by addressing interface issues. I also worked on CMS front-end development, including WordPress,
          and utilized technologies such as React Native, HTML, CSS, JavaScript, jQuery, and AJAX to deliver responsive 
          and user-friendly digital experiences.`,
      technologies: ["Angular", "LESS", "HTML5", "CSS3", "PHP", "MySQL"],
    },
    {
      title: "Web Development Specialist",
      company: "Fami Ads",
      period: "2015 - 2017",
      description: `At Fami Ads, a company specializing in custom email designs and static web pre-landers, I advocated for the
       use of semantic HTML in email templates, significantly improving deliverability to client inboxes. I was responsible for 
       designing and developing applications that met both functional and technical requirements, creating system specifications
        for complex components, and collaborating closely with teams to translate business needs into design and technical solutions.
         I also documented operational processes, contributed to the analysis, development, and testing of new features, 
      and played a key role in onboarding and mentoring junior developers to ensure a smooth integration into the team.`,
      technologies: [
        "VueJs",
        "Javascript",
        "HTML5",
        "CSS3",
        "PHP",
        "MySQL",
        "MJML",
      ],
    },
    {
      title: "Software Developer / Jr. Network Admin",
      company: "Mobile.co",
      period: "2014 - 2015",
      description: `At Mobile Co, a company focused on recruitment system web applications, 
      I held dual roles as a Web Developer and Junior Network Administrator. I collaborated with senior developers on software
       development tasks and was responsible for implementing UI/UX features to enhance the functionality and user experience of the company’s 
       web platform. In parallel, I managed network infrastructure and firewalls, ensuring system security and maintaining smooth day-to-day operations.`,
      technologies: ["Javascript", "HTML5", "CSS3", "PHP", "MySQL", "JQuery"],
    },
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
              {["home", "about", "skills", "experience", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize hover:text-primary transition-colors ${
                      activeSection === item
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-accent"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Collapsible open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <CollapsibleContent className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-2 space-y-1">
              {["home", "about", "skills", "experience", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-3 py-2 capitalize hover:bg-accent rounded-md transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
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
                10+ years of experience crafting exceptional web experiences
                with React, Angular, and Vue.js
              </p>
            </div>

            <div className="flex justify-center space-x-4 animate-fade-in">
              <Badge variant="secondary" className="text-sm">
                📍 Liloan City, Cebu, Philippines
              </Badge>
              <Badge variant="secondary" className="text-sm">
                🌍 Remote Expert
              </Badge>
            </div>

            <div className="flex justify-center space-x-4 animate-fade-in">
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("about")}
              >
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
              Hi, I'm Clyde Ian Acaso, a Front-End Developer with over 10 years
              of experience crafting fast, responsive, and scalable web
              applications. I specialize in React, VueJS, Angular, and other
              modern frameworks, with a strong foundation in HTML, CSS, and
              JavaScript. I've led front-end architecture for global remote
              teams, optimized performance across large-scale apps, and built
              component-based systems that improve maintainability and user
              experience. With hands-on experience in mobile development
              (Flutter, Ionic, React Native) and full-stack technologies like
              PHP and MySQL, I bring a versatile and user-focused approach to
              every project. I’m passionate about clean code, UI/UX best
              practices, and building intuitive digital experiences.
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
                  <span className="text-muted-foreground">
                    Frontend Development
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge>Remote Expert</Badge>
                  <span className="text-muted-foreground">
                    US & European Companies
                  </span>
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
                  {[
                    "React",
                    "Angular",
                    "VueJS",
                    "Nuxt",
                    "NextJS",
                    "Tailwind",
                    "SASS/LESS",
                    "Bootstrap",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="justify-center"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Specialized in modern JavaScript frameworks, CSS architecture,
                  and responsive design
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
            <h2 className="text-3xl font-bold text-primary mb-4">
              Technical Skills
            </h2>
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
                    <span className="text-sm text-muted-foreground">
                      {skill.years}+ years
                    </span>
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
      <section
        id="experience"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Professional Experience
            </h2>
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
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
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
            <h2 className="text-3xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
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
                    <span className="text-muted-foreground">
                      Ready to connect
                    </span>
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
                    <a target="_blank" href="https://github.com/clydegold8">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/clyde-ian-a-1a3339b1/"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
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
            © 2024 Clyde Ian Acaso. Crafted with React, TypeScript, and Tailwind
            CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
