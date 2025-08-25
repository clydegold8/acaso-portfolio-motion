import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import achievementArchitecture from "@/assets/achievement-architecture.jpg";
import achievementCollaboration from "@/assets/achievement-collaboration.jpg";
import achievementPerformance from "@/assets/achievement-performance.jpg";
import achievementAiSetOne from "@/assets/ai_adv1.png";
import achievementAiSetTwo from "@/assets/ai_adv2.png";
import achievementAiSetThree from "@/assets/ai_adv3.png";
import achievementAiSetFour from "@/assets/ai_adv4.png";
import achievementAiSetFive from "@/assets/ai_adv5.png";
import dashBoardV1 from "@/assets/dashboardv1.png";
import dashBoardV2 from "@/assets/dashboardv2.png";
import dashBoardV3 from "@/assets/dashboardv3.png";
import dashBoardV4 from "@/assets/dashboardv4.png";
import webV1 from "@/assets/bdtr.png";
import webV2 from "@/assets/cbi.png";
import webV3 from "@/assets/ce.png";
import webV4 from "@/assets/ire.png";
import webV5 from "@/assets/btr.png";
import webV6 from "@/assets/eb.png";
import webV7 from "@/assets/tta.png";
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
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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

  const openLightbox = (images: string[], index = 0) => {
    const lightboxSlides = images.map((img) => ({ src: img }));
    setLightboxImages(lightboxSlides);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const firstAchievementImageSet = [
    achievementArchitecture,
    dashBoardV1,
    dashBoardV2,
    dashBoardV3,
    dashBoardV4,
    webV1,
    webV2,
    webV3,
    webV4,
    webV5,
    webV6,
    webV7,
  ];
  const secondAchievementImageSet = [achievementPerformance];
  const thirdAchievementImageSet = [achievementCollaboration];
  const aiAchievementImageSet = [
    achievementAiSetFive,
    achievementAiSetOne,
    achievementAiSetTwo,
    achievementAiSetThree,
    achievementAiSetFour,
  ];

  const skills = [
    { name: "HTML/CSS/JavaScript", years: 10, percentage: 100 },
    { name: "Bootstrap/Foundation/Vuetify", years: 8, percentage: 80 },
    { name: "Angular", years: 7, percentage: 70 },
    { name: "React", years: 6, percentage: 60 },
    { name: "VueJS", years: 5, percentage: 50 },
    { name: "NuxtJS", years: 3.5, percentage: 35 },
    { name: "Tailwind CSS", years: 3, percentage: 30 },
    { name: "NextJS", years: 2.5, percentage: 25 },
    { name: "Artificial Intelligence and LLM's", years: 3, percentage: 35 },
    { name: "Leadership / Managerial", years: 3, percentage: 35 },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer / Emerging AI Solutions Engineer",
      company: "Freelance",
      period: "2025 - Present",
      description: `
        In my current freelance role, I continue to work as a Senior Frontend Developer while also expanding into the field of AI solutions engineering, 
        a new and rapidly evolving area in my career. My primary focus remains on building scalable React applications with strong UI/UX practices and 
        efficient data integrations, but I am also actively learning and applying AI-driven workflows to advertisement compliance and quality improvement. 
        As part of this growth, I have been gaining hands-on experience with AWS SageMaker to train and optimize machine learning models that support ad 
        compliance detection and automated quality scoring. While this is a new discipline for me, I approach it with confidence, leveraging my engineering 
        background to adapt quickly and deliver meaningful contributions. This blend of established frontend expertise and emerging AI capability reflects my
         commitment to evolving at pace with technology and creating solutions that deliver both innovation and impact.
        `,
      technologies: [
        "Artificial Intelligence",
        "AWS - SageMaker",
        "Leadership",
        "Front End Development",
      ],
    },
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

  // Helper function
  const renderStackedEffect = (images) => {
    if (images.length <= 1) return null;

    return (
      <>
        {images.slice(1).map(
          (_, i) =>
            i < 2 && (
              <div
                key={i}
                className={`absolute w-full h-full border border-border rounded-lg -z-${
                  i + 10
                } opacity-${70 - i * 20}`}
                style={{
                  top: `-${(i + 1) * 8}px`,
                  right: `-${(i + 1) * 8}px`,
                  background: "var(--background)",
                }}
              />
            )
        )}

        {/* Multiple images indicator */}
        <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium border border-border">
          {images.length} images
        </div>
      </>
    );
  };

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
              {[
                "home",
                "about",
                "skills",
                "experience",
                "achievements",
                "contact",
              ].map((item) => (
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
              ))}
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
              {[
                "home",
                "about",
                "skills",
                "experience",
                "achievements",
                "contact",
              ].map((item) => (
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
                10+ years of experience crafting exceptional web experiences
                with React, Angular, and Vue.js
              </p>
            </div>

            <div className="flex justify-center space-x-4 animate-fade-in">
              <Badge variant="secondary" className="text-sm">
                📍 Dauin City, Negros Oriental, Philippines 6217
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
              Hi, I'm Clyde Ian Acaso, a Front-End Developer with 10+ years of
              experience building fast, scalable, and user-focused web
              applications using React, VueJS, Angular, and modern frameworks.
              I’ve led front-end architecture for global teams, optimized
              performance across large-scale apps, and built component systems
              that enhance both maintainability and user experience. Alongside
              my mobile and full-stack background, I’m now expanding into AI
              solutions engineering exploring how large language models (LLMs),
              model context protocols (MCPs), and AI agents can be applied to
              solve real-world problems such as advertisement compliance,
              workflow automation, and intelligent user experiences. While this
              is a new and evolving field for me, I bring the same passion for
              clean code, UI/UX best practices, and rapid learning, combining
              technical expertise with practical innovation to deliver impactful
              digital solutions.
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
                    Frontend & Full Stack Development
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
                <div className="flex items-center space-x-2">
                  <Badge>Start-up Founder</Badge>
                  <span className="text-muted-foreground">
                    Fractional CTO on Trustloop
                  </span>
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

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Key Achievements
            </h2>
            <p className="text-muted-foreground">
              Notable accomplishments throughout my career
            </p>
          </div>

          <div className="space-y-12">
            {/* Architecture Achievement */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div
                  className="relative cursor-pointer hover-scale"
                  onClick={() => openLightbox(firstAchievementImageSet)}
                >
                  {/* Main front image */}
                  <img
                    src={firstAchievementImageSet[0]}
                    alt="Scalable front-end architecture"
                    className="rounded-lg shadow-lg w-full"
                  />

                  {renderStackedEffect(firstAchievementImageSet)}
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  Scalable Front-End Architectures
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built scalable front-end architectures using React, Vue,
                  Angular, and Nuxt for enterprise-level applications. Developed
                  modern websites with current technologies, following
                  mobile-first and responsive design principles to ensure
                  performance, accessibility, and seamless user experiences
                  across devices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Vue</Badge>
                  <Badge variant="secondary">Angular</Badge>
                  <Badge variant="secondary">Enterprise Scale / PWA</Badge>
                </div>
              </div>
            </div>

            {/* Modernization Achievement */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <div
                  className="cursor-pointer hover-scale"
                  onClick={() => openLightbox(secondAchievementImageSet)}
                >
                  <img
                    src={achievementPerformance}
                    alt="UI modernization and performance"
                    className="rounded-lg shadow-lg w-full"
                  />

                  {renderStackedEffect(secondAchievementImageSet)}
                </div>
              </div>
              <div className="order-2 space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  UI Modernization & Performance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leading UI modernization efforts where I migrated legacy
                  codebases into modern frameworks (React + TypeScript +
                  TailwindCSS), improving performance and reducing technical
                  debt. Implementing performance optimizations that cut page
                  load times by up to 40%, resulting in a smoother user
                  experience and measurable increases in user engagement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">TailwindCSS</Badge>
                  <Badge variant="secondary">40% Faster</Badge>
                  <Badge variant="secondary">Legacy Migration</Badge>
                </div>
              </div>
            </div>

            {/* Collaboration Achievement */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div
                  className="cursor-pointer hover-scale"
                  onClick={() => openLightbox(thirdAchievementImageSet)}
                >
                  <img
                    src={achievementCollaboration}
                    alt="Team collaboration and mentoring"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>

                {renderStackedEffect(thirdAchievementImageSet)}
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  Team Leadership & Mentoring
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Driving collaboration across teams, working closely with
                  back-end engineers, designers, and stakeholders to deliver
                  seamless, user-friendly applications on schedule. Mentoring
                  junior developers by conducting code reviews, sharing best
                  practices, and introducing scalable component patterns—helping
                  elevate overall team productivity.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Leadership</Badge>
                  <Badge variant="secondary">Mentoring</Badge>
                  <Badge variant="secondary">Code Reviews</Badge>
                  <Badge variant="secondary">Team Building</Badge>
                </div>
              </div>
            </div>

            {/* AI-Driven Achievement */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover-scale">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <h4 className="text-lg font-semibold text-primary">
                      AI-Driven Development
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Next-generation workflows
                    </p>
                  </div>
                </Card>
              </div>
              <div className="order-2 space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  AI-Driven Development Workflows
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Adopting AI-driven workflows in software development,
                  including automated testing, AI-assisted debugging, and
                  agent-based code generation, which accelerated delivery cycles
                  and improved overall code quality.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AI Development</Badge>
                  <Badge variant="secondary">Automated Testing</Badge>
                  <Badge variant="secondary">Code Generation</Badge>
                  <Badge variant="secondary">Quality Improvement</Badge>
                </div>
              </div>
            </div>

            {/* AI-Powered Advertiser Compliance */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div
                  className="relative cursor-pointer hover-scale"
                  onClick={() => openLightbox(aiAchievementImageSet)}
                >
                  {/* Main front image */}
                  <img
                    src={achievementAiSetFive}
                    alt="AI-Powered Advertiser Compliance - Advanced AI system for automated compliance monitoring and validation"
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                    width="400"
                    height="300"
                  />

                  {renderStackedEffect(aiAchievementImageSet)}
                </div>
              </div>
              <div className="order-2 space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  AI-Powered Advertiser Compliance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Developed AI-driven solutions for advertisement compliance,
                  enabling automated detection, scoring, and review of ad
                  content against regulatory standards. This reduced manual
                  effort, improved accuracy, and ensured faster compliance
                  checks while maintaining trust and transparency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Advertisement Compliance</Badge>
                  <Badge variant="secondary">AI Automation</Badge>
                  <Badge variant="secondary">Regulatory Alignment</Badge>
                  <Badge variant="secondary">Quality Assurance</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxImages}
        index={lightboxIndex}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
      />

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
                    <Badge>🏠</Badge>
                    <span className="text-sm text-muted-foreground">
                      Home: Brgy. Cotcot, Liloan City, Cebu 6002
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge>📍</Badge>
                    <span className="text-sm text-muted-foreground">
                      Current: Dauin City, Negros Oriental, Philippines 6217
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
