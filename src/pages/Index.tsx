import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Database, Network, Cpu } from "lucide-react";

const Index = () => {
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-glow-green">
              Félix Sebastião
            </h1>
            <p className="text-2xl md:text-3xl text-secondary text-glow-blue font-semibold">
              Assistente de TI & Desenvolvedor
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissional especializado em suporte técnico, análise de redes, desenvolvimento frontend
              e soluções tecnológicas eficientes
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button className="glow-green hover:scale-105 transition-transform">
                <Mail className="mr-2 h-4 w-4" />
                Entre em Contato
              </Button>
              <Button variant="outline" className="border-glow-blue hover:glow-blue transition-all">
                <Github className="mr-2 h-4 w-4" />
                Projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-primary text-glow-green">Sobre Mim</h2>
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
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-primary text-glow-green">Habilidades Técnicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-glow-green hover:glow-green transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold text-primary">{skill.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/20 text-secondary">
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
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-primary text-glow-green">Experiência Profissional</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="p-8 border-glow-blue hover:glow-blue transition-all duration-300 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                    <p className="text-xl text-secondary">{exp.role}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit border-secondary text-secondary">
                    {exp.location}
                  </Badge>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{task}</span>
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
              <h2 className="text-3xl font-bold mb-8 text-primary text-glow-green">Formação</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="p-6 border-glow-green bg-card/50 backdrop-blur-sm hover:glow-green transition-all"
                  >
                    <h3 className="text-lg font-semibold text-foreground">{edu.course}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <Badge variant="secondary" className="mt-2 bg-primary/20 text-primary">
                      {edu.status}
                    </Badge>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-secondary text-glow-blue">Certificações</h2>
              <Card className="p-6 border-glow-blue bg-card/50 backdrop-blur-sm">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground">
                      <span className="text-secondary mt-1">✓</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary text-glow-green">Contato</h2>
          <Card className="p-8 border-glow-blue glow-blue bg-card/50 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+5567991616239" className="hover:text-primary transition-colors">
                  (67) 99161-6239
                </a>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>Rua Madre Cristina, 298 – Campo Grande/MS</span>
              </div>
              <div className="flex gap-4 pt-4">
                <Button className="flex-1 glow-green hover:scale-105 transition-transform">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
                <Button variant="outline" className="flex-1 border-glow-blue hover:glow-blue transition-all">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2024 Félix Sebastião dos Santos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
