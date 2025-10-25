import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, MapPin, Github, Linkedin, Instagram, Code2, Database, Network, Cpu } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { useState } from "react";

const Index = () => {
  // Disco girando automaticamente na velocidade 2

  // Music player removido temporariamente - foco no portfólio principal

  const skills = [
    { name: "Frontend", tech: ["React", "TypeScript", "JavaScript", "HTML/CSS"], icon: Code2 },
    { name: "Backend", tech: ["Python", "Lua", "Node.js"], icon: Cpu },
    { name: "Databases", tech: ["PostgreSQL", "SQL Server"], icon: Database },
    { name: "Redes", tech: ["Configuração", "Análise", "Manutenção"], icon: Network },
  ];

  const experience = [
    {
      company: "Globoo Fintec",
      role: "Suporte Técnico e Analista de Redes",
      location: "Campo Grande/MS",
      tasks: [
        "Montagem e manutenção de computadores e periféricos",
        "Instalação, configuração e análise de redes",
        "Suporte técnico a usuários internos e externos",
        "Diagnóstico e resolução de falhas em hardware e software",
      ],
    },
    {
      company: "Trackland",
      role: "Analista de Suporte & Analista de Dados Jr.",
      location: "Campo Grande/MS",
      tasks: [
        "Garantia da qualidade em instalações de rastreadores",
        "Suporte técnico durante processos de implantação",
        "Coleta e análise de dados de rastreamento",
        "Monitoramento da frota assegurando precisão e eficiência",
      ],
    },
  ];

  const education = [
    {
      course: "Análise e Desenvolvimento de Sistemas",
      institution: "ESTACIO",
      status: "3º semestre",
    },
    {
      course: "Desenvolvedor Front-end",
      institution: "EBAC",
      status: "Concluído",
    },
    {
      course: "Front-End",
      institution: "Codai – GrowDev",
      status: "Certificado",
    },
  ];

  const certifications = [
    "Técnico de Informática – Montagem e Manutenção",
    "Redes de Computadores",
    "Análise de Dados (Python, JavaScript, Lua)",
    "Banco de Dados: PostgreSQL e SQL Server",
    "Sistemas Operacionais: Linux e Windows",
    "Blockchain – fundamentos e aplicações",
    "Gestão Financeira",
    "CPA-10 – Certificação Profissional ANBIMA",
  ];

  return (
    <div className="min-h-screen bg-background floating-particles">
      {/* Skip Link para Acessibilidade */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-background focus:rounded-md focus:font-medium"
      >
        Ir para o conteúdo principal
      </a>

      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-slide-up">
            {/* Profile Photo */}
            <div className="flex justify-center mb-10 py-4">
              <div className="relative animate-float hover-glow-intense pulse-glow">
                {/* Disco Ventilador Girando */}
                <div className="absolute -inset-8 fan-disk fan-speed-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/30 via-secondary/50 to-primary/30 blur-lg"></div>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/30 to-green-500/20 blur-md"></div>
                  {/* Raios do disco */}
                  <div className="absolute inset-0 rounded-full">
                    <div className="absolute top-0 left-1/2 w-px h-full bg-primary/60 transform -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-primary/60 transform -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-full h-px bg-secondary/40 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 w-full h-px bg-secondary/40 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                  </div>
                </div>

                {/* Imagem Principal - Tamanho Equilibrado */}
                <div className="relative rounded-full p-1 bg-gradient-to-r from-primary via-secondary to-primary z-10">
                  <div className="rounded-full p-2 bg-background">
                    <img
                      src={profilePhoto}
                      alt="Felix Bastian"
                      className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-background hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Anéis Externos */}
                <div className="absolute -inset-5 rounded-full border-2 border-primary/30 animate-glow-pulse z-5" />
                <div className="absolute -inset-10 rounded-full border border-secondary/20 animate-glow-pulse z-5" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-glow-green hover-shake cursor-default">
              Felix Bastian
            </h1>
            <p className="text-2xl md:text-3xl text-secondary text-glow-blue font-semibold wave-effect cursor-default">
              Assistente de TI & Desenvolvedor
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto hover:text-primary transition-colors duration-300">
              Profissional especializado em suporte técnico, análise de redes, desenvolvimento frontend
              e soluções tecnológicas eficientes
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button asChild className="btn-glow glow-green hover:scale-110 transition-all duration-300" aria-label="Baixar CV do Felix Bastian">
                <a href="/cv-felix-bastian.pdf" download>
                  <Mail className="mr-2 h-4 w-4" />
                  Baixar CV
                </a>
              </Button>
              <Button asChild variant="outline" className="btn-glow border-glow-blue hover-glow-blue-intense transition-all duration-300" aria-label="Ver projetos no GitHub">
                <a href="#projetos">
                  <Code2 className="mr-2 h-4 w-4" />
                  Ver Projetos
                </a>
              </Button>
              <Button asChild variant="outline" className="btn-glow border-glow-green hover-glow-green-intense transition-all duration-300" aria-label="Entre em contato via WhatsApp">
                <a href="#contato">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Fale Comigo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main id="main-content">
        {/* About Section */}
      <section id="sobre" className="py-16 px-6" aria-labelledby="about-heading">
        <div className="container mx-auto max-w-6xl">
          <h2 id="about-heading" className="text-3xl font-bold mb-8 text-primary text-glow-green">Sobre Mim</h2>
          <Card className="p-8 border-glow-blue bg-card/50 backdrop-blur-sm">
            <p className="text-lg leading-relaxed text-foreground">
              Profissional com experiência nas áreas de tecnologia, suporte técnico, manutenção de
              computadores e análise de redes. Atuação em diagnóstico e resolução de problemas,
              instalação e gerenciamento de sistemas, suporte a usuários, montagem e manutenção de
              equipamentos e configurações de redes de computadores. Vivência em coleta e análise de
              dados, monitoramento de sistemas de rastreamento e implementação de soluções eficientes
              para garantir disponibilidade e segurança operacional.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-16 px-6 bg-muted/30" aria-labelledby="skills-heading">
        <div className="container mx-auto max-w-6xl">
          <h2 id="skills-heading" className="text-3xl font-bold mb-8 text-primary text-glow-green hover-shake cursor-default">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-glow-green card-hover hover-glow-intense wave-effect bg-card/50 backdrop-blur-sm group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-6 w-6 text-primary group-hover:scale-125 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-primary group-hover:text-glow-green transition-all duration-300">{skill.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/40 hover:scale-105 transition-all duration-200 cursor-default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-16 px-6" aria-labelledby="experience-heading">
        <div className="container mx-auto max-w-6xl">
          <h2 id="experience-heading" className="text-3xl font-bold mb-8 text-primary text-glow-green hover-shake cursor-default">Experiência Profissional</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="p-8 border-glow-blue card-hover hover-glow-blue-intense wave-effect bg-card/50 backdrop-blur-sm group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-glow-blue transition-all duration-300">{exp.company}</h3>
                    <p className="text-xl text-secondary group-hover:scale-105 transition-transform duration-300">{exp.role}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit border-secondary text-secondary hover:border-primary hover:text-primary transition-all duration-300">
                    {exp.location}
                  </Badge>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 group/item">
                      <span className="text-primary mt-1 group-hover/item:scale-125 transition-transform duration-200">▹</span>
                      <span className="group-hover/item:translate-x-1 transition-transform duration-200">{task}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary text-glow-green hover-shake cursor-default">Formação</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="p-6 border-glow-green bg-card/50 backdrop-blur-sm card-hover hover-glow-intense wave-effect group"
                  >
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-glow-green transition-all duration-300">{edu.course}</h3>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{edu.institution}</p>
                    <Badge variant="secondary" className="mt-2 bg-primary/20 text-primary hover:scale-105 transition-transform duration-200">
                      {edu.status}
                    </Badge>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-secondary text-glow-blue hover-shake cursor-default">Certificações</h2>
              <Card className="p-6 border-glow-blue bg-card/50 backdrop-blur-sm card-hover hover-glow-blue-intense wave-effect">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground hover:text-secondary hover:bg-secondary/10 p-2 rounded-lg transition-all duration-300 group/cert">
                      <span className="text-secondary mt-1 group-hover/cert:scale-125 transition-transform duration-200">✓</span>
                      <span className="group-hover/cert:translate-x-1 transition-transform duration-200">{cert}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-16 px-6" aria-labelledby="projects-heading">
        <div className="container mx-auto max-w-6xl">
          <h2 id="projects-heading" className="text-3xl font-bold mb-8 text-center text-primary text-glow-green hover-shake cursor-default">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Projeto 1 - Portfólio Interativo */}
            <Card className="p-6 border-glow-blue card-hover hover-glow-blue-intense bg-card/50 backdrop-blur-sm group">
              <div className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border border-primary/30">
                  <Code2 className="h-12 w-12 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-primary group-hover:text-glow-blue transition-all duration-300">
                  Portfólio Interativo com Animações
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <strong className="text-secondary">Problema:</strong> Necessidade de um portfólio que se destaque visualmente e demonstre habilidades técnicas.
                  </div>
                  <div>
                    <strong className="text-secondary">Solução:</strong> Desenvolvimento de interface com animações CSS avançadas, disco girando e efeitos neon responsivos.
                  </div>
                  <div>
                    <strong className="text-secondary">Meu Papel:</strong> Full-stack Developer - Design, desenvolvimento e deploy completo.
                  </div>
                  <div>
                    <strong className="text-secondary">Resultado:</strong> 100% responsivo, otimizado para SEO e acessibilidade AA.
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">React</Badge>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">Vite</Badge>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">Vercel</Badge>
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button asChild size="sm" className="btn-glow glow-green">
                    <a href="https://dev-portfolio-bastian.vercel.app" target="_blank" rel="noopener noreferrer">
                      Demo Live
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="btn-glow border-glow-blue">
                    <a href="https://github.com/bastianFlex/dev-portfolio-lumina" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-3 w-3" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Projeto 2 - Sistema de Suporte */}
            <Card className="p-6 border-glow-blue card-hover hover-glow-blue-intense bg-card/50 backdrop-blur-sm group">
              <div className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center border border-secondary/30">
                  <Network className="h-12 w-12 text-secondary" />
                </div>
                
                <h3 className="text-xl font-bold text-primary group-hover:text-glow-blue transition-all duration-300">
                  Sistema de Análise de Redes
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <strong className="text-secondary">Problema:</strong> Dificuldade em monitorar e diagnosticar problemas de rede em tempo real.
                  </div>
                  <div>
                    <strong className="text-secondary">Solução:</strong> Dashboard com monitoramento em tempo real, alertas automáticos e relatórios detalhados.
                  </div>
                  <div>
                    <strong className="text-secondary">Meu Papel:</strong> Desenvolvedor Frontend e Analista de Sistemas - Interface e integração com APIs.
                  </div>
                  <div>
                    <strong className="text-secondary">Resultado:</strong> Redução de 60% no tempo de diagnóstico de problemas de rede.
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">JavaScript</Badge>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">Node.js</Badge>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">Python</Badge>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">Socket.io</Badge>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">Docker</Badge>
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button asChild size="sm" className="btn-glow glow-green" disabled>
                    <span>Projeto Interno</span>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="btn-glow border-glow-blue">
                    <a href="#contact">
                      <MessageCircle className="mr-2 h-3 w-3" />
                      Saiba Mais
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Interessado em colaborar? Vamos conversar!</p>
            <Button asChild className="btn-glow glow-green hover:scale-110 transition-all duration-300">
              <a href="#contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Entre em Contato
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 px-6" aria-labelledby="contact-heading">
        <div className="container mx-auto max-w-6xl">
          <h2 id="contact-heading" className="text-3xl font-bold mb-8 text-center text-primary text-glow-green hover-shake cursor-default">Contato</h2>
          <Card className="p-4 sm:p-8 border-glow-blue card-hover hover-glow-blue-intense bg-card/50 backdrop-blur-sm max-w-2xl mx-auto group">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-base sm:text-lg hover:bg-green-600/10 p-3 rounded-lg transition-all duration-300 group/whatsapp">
                <MessageCircle className="h-5 w-5 text-green-500 group-hover/whatsapp:scale-125 transition-transform duration-300 flex-shrink-0" />
                <a href="https://wa.me/5567991616239" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors group-hover/whatsapp:translate-x-2 transition-transform duration-300">
                  WhatsApp: (67) 99161-6239
                </a>
              </div>
              <div className="flex items-center gap-3 text-base sm:text-lg hover:bg-secondary/10 p-3 rounded-lg transition-all duration-300 group/location">
                <MapPin className="h-5 w-5 text-secondary group-hover/location:scale-125 transition-transform duration-300 flex-shrink-0" />
                <span className="group-hover/location:translate-x-2 transition-transform duration-300">Campo Grande/MS</span>
              </div>
              {/* Botões Mobile-First */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild className="w-full sm:flex-1 btn-glow glow-green hover:scale-105 transition-all duration-300">
                  <a href="mailto:Fxbastian88@gmail.com" className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:flex-1 btn-glow border-glow-blue hover-glow-blue-intense hover:scale-105 transition-all duration-300">
                  <a href="https://www.linkedin.com/in/felix-bastian-9b7573287" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:flex-1 btn-glow border-glow-blue hover-glow-blue-intense hover:scale-105 transition-all duration-300">
                  <a href="https://www.instagram.com/flexbastian777" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2024 Felix Bastian. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Music Player removido temporariamente */}
    </div>
  );
};

export default Index;
