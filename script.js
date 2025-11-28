const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "light");
    }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

document.querySelectorAll('.nav-item a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth",
        });
    });
});

const fadeElements = document.querySelectorAll(
    ".section, .education-card, .skill-category, .timeline-item, .project-card, .contact-card"
);

function checkFade() {
    fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

const translations = {
    pt: {
        nav_sobre: "Sobre",
        nav_app: "Aplicação",
        nav_educacao: "Formação",
        nav_habilidades: "Competências",
        nav_experiencia: "Experiência",
        nav_projetos: "Jogos",
        nav_sites: "Sítios",
        nav_contato: "Contacto",

        sobre_title: "Sobre Mim",
        sobre_p1: "Olá! O meu nome é Carlos Gustavo, tenho 21 anos e sou apaixonado por tecnologia e desenvolvimento de software. Desde cedo mergulhei neste universo com entusiasmo e, a cada nova linha de código que escrevo, reforço a certeza de que esta é realmente a minha vocação.",
        sobre_p2: "Sou movido pela curiosidade, criatividade e pelo desejo constante de aprender. Já desenvolvi projetos próprios e criei este sítio para partilhar um pouco do meu trabalho e da minha jornada no mundo da programação.",
        sobre_p3: "Acredito que a tecnologia tem a capacidade de transformar ideias em soluções reais — e é precisamente isso que me motiva todos os dias. Tenho formação prática em C#, com foco em desenvolvimento de jogos 3D, onde pude exercitar ao máximo a minha lógica e criatividade.",
        sobre_p4: "Atualmente estou a aprofundar os meus conhecimentos em HTML, CSS e JavaScript, com foco em desenvolvimento web, enquanto continuo a expandir as minhas competências noutras linguagens e ferramentas.",
        sobre_p5: "Este sítio é apenas o começo. Tenho muitos projetos e ideias em andamento e estou comprometido em evoluir profissionalmente, contribuir com soluções inovadoras e gerar impacto positivo através da tecnologia.",
        sobre_p6: "Se procura alguém dedicado, criativo, com vontade de aprender e que esteja sempre a evoluir, será um prazer fazer parte da sua equipa.",

        diplomas_title: "Diplomas & Certificados",
        diploma1_title: "Diploma em Programação de Videojogos Unity 3D",
        diploma2_title: "Certificado de Formação Profissional",
        diploma3_title: "Certificado da Comunidade de Desenvolvedores Unity",

        habilidades_title: "Competências Técnicas",
        skill_frontend: "Front-end",
        skill_backend: "Back-end",
        skill_game_dev: "Desenvolvimento de Videojogos",
        skill_tools: "Ferramentas & Outros",
        skill_responsive: "Design Responsivo",
        skill_english: "Inglês: Intermédio",

        experiencia_title: "Experiência Profissional",
        exp1_date: "2021 - Presente",
        exp1_title: "Programador Full Stack Freelancer",
        exp1_company: "Trabalho Independente",
        exp1_desc: "Desenvolvimento de aplicações web completas, desde o front-end ao back-end. Criação de sítios responsivos, aplicações interativas e integração com APIs. Experiência com tecnologias como React, Node.js, MongoDB e ferramentas modernas de desenvolvimento.",

        exp2_date: "2020 - 2021",
        exp2_title: "Desenvolvedor de Videojogos Independente",
        exp2_company: "Projetos Pessoais",
        exp2_desc: "Desenvolvimento de videojogos 3D utilizando Unity e C#. Criação de mecânicas inovadoras, design de níveis, implementação de IA para NPCs e otimização para várias plataformas. Publicação de projetos no YouTube com demonstrações e tutoriais.",

        exp3_date: "2019 - 2020",
        exp3_title: "Estagiário em Desenvolvimento",
        exp3_company: "Empresa de Tecnologia",
        exp3_desc: "Apoio no desenvolvimento de software, participação em reuniões de equipa, aprendizagem de metodologias ágeis e contribuição em projetos reais. Desenvolvimento de competências como trabalho em equipa, controlo de versões e boas práticas de programação.",

        projetos_title: "Jogos",
        jogo1_title: "Construção Extrema",
        jogo1_desc: "Um jogo de reflexos e precisão onde deve empilhar blocos no momento certo para alcançar pontuações cada vez maiores.",
        jogo1_link: "Ver Jogo",

        jogo2_title: "Time Hunt",
        jogo2_desc: "Um jogo de plataforma em pixel art com níveis desafiantes e inimigos únicos. Criado em Unity com C#.",
        jogo2_link: "Ver Jogo",

        jogo3_title: "Corrida do Hambúrguer",
        jogo3_desc: "Um mini-jogo divertido inspirado no SpongeBob, onde o objetivo é recolher hambúrgueres no fundo do mar.",
        jogo3_link: "Ver Jogo",

        sites_title: "Sítios",
        site_badge1: "Website",
        site1_title: "Showroom de Carros",
        site1_desc: "Website responsivo para apresentação de carros premium, com galeria, catálogo e design moderno.",
        site1_link: "Ver Sítio",

        site_badge2: "Website",
        site2_title: "Pixel Art Troll Game",
        site2_desc: "Um sítio interativo com mini-jogos em pixel art e desafios divertidos.",
        site2_link: "Ver Sítio",

        site_badge3: "Em Construção",
        site3_title: "Sítio em Construção",
        site3_desc: "Novo projeto em desenvolvimento. Em breve estará disponível.",
        site3_link: "Brevemente",

        contato_title: "Contacte-me",
        contato_email_title: "Email",
        contato_telefone_title: "Telefone",
        contato_local_title: "Localização",
        contato_local: "Portugal",

        footer_name: "Carlos Gustavo",
        footer_rights: "Todos os direitos reservados.",

        app_title: "✨ GustavoNexus — O Seu Hub Profissional num Só Lugar",
        app_desc: "O GustavoNexus é uma aplicação moderna para Windows que reúne as minhas competências, projetos, jogos, experiências profissionais e muito mais — tudo de forma rápida, organizada e elegante.",
        app_feat1: "💼 Perfil Completo — formação, experiência e percurso",
        app_feat2: "🕹️ Projetos & Jogos — vídeos, imagens e detalhes",
        app_feat3: "⚡ Rápido e Leve — tecnologia moderna e desempenho fluido",
        app_feat4: "🎨 Interface Elegante — moderna, intuitiva e responsiva",
        app_btn: "Transferir GustavoNexus (Windows)",
        app_note: "Basta executar o instalador e seguir as instruções. Não é necessário qualquer software adicional.",
        app_preview: "Captura de ecrã da aplicação GustavoNexus"
    },

    en: {
        nav_sobre: "About",
        nav_app: "Application",
        nav_educacao: "Education",
        nav_habilidades: "Skills",
        nav_experiencia: "Experience",
        nav_projetos: "Games",
        nav_sites: "Websites",
        nav_contato: "Contact",

        sobre_title: "About Me",
        sobre_p1: "Hello! My name is Carlos Gustavo, I’m 21 years old and I’m passionate about technology and software development. Since an early age, I dove into this world with enthusiasm, and with every new line of code I write, I reinforce the certainty that this is truly my vocation.",
        sobre_p2: "I am driven by curiosity, creativity, and a constant desire to learn. I have already developed personal projects and created this website to share some of my work and my journey in the world of programming.",
        sobre_p3: "I believe that technology has the ability to transform ideas into real solutions — and that is precisely what motivates me every day. I have practical training in C#, focused on 3D game development, where I strengthened both my logic and creativity.",
        sobre_p4: "I am currently deepening my knowledge in HTML, CSS, and JavaScript with a focus on web development, while continuing to expand my skills in other languages and tools.",
        sobre_p5: "This website is just the beginning. I have many projects and ideas underway, and I am committed to evolving professionally, contributing with innovative solutions, and generating a positive impact through technology.",
        sobre_p6: "If you are looking for someone dedicated, creative, eager to learn, and always improving, it will be a pleasure to be part of your team.",

        diplomas_title: "Diplomas & Certificates",
        diploma1_title: "Unity 3D Game Development Diploma",
        diploma2_title: "Professional Training Certificate",
        diploma3_title: "Unity Developer Community Certificate",

        habilidades_title: "Technical Skills",
        skill_frontend: "Front-end",
        skill_backend: "Back-end",
        skill_game_dev: "Game Development",
        skill_tools: "Tools & Others",
        skill_responsive: "Responsive Design",
        skill_english: "English: Intermediate",

        experiencia_title: "Professional Experience",
        exp1_date: "2021 - Present",
        exp1_title: "Full Stack Developer (Freelancer)",
        exp1_company: "Independent Work",
        exp1_desc: "Development of complete web applications, from front-end to back-end. Creation of responsive websites, interactive applications, and API integrations. Experience with technologies such as React, Node.js, MongoDB, and modern development tools.",

        exp2_date: "2020 - 2021",
        exp2_title: "Independent Game Developer",
        exp2_company: "Personal Projects",
        exp2_desc: "Development of 3D games using Unity and C#. Creation of innovative mechanics, level design, NPC AI implementation, and optimization for multiple platforms. Publishing projects on YouTube with showcases and tutorials.",

        exp3_date: "2019 - 2020",
        exp3_title: "Development Intern",
        exp3_company: "Technology Company",
        exp3_desc: "Assisted in software development, participated in team meetings, learned agile methodologies, and contributed to real projects. Developed skills such as teamwork, version control, and programming best practices.",

        projetos_title: "Games",
        jogo1_title: "Extreme Build",
        jogo1_desc: "A reflex and precision game where you must stack blocks at the right moment to reach increasingly higher scores.",
        jogo1_link: "View Game",

        jogo2_title: "Time Hunt",
        jogo2_desc: "A pixel art platformer with challenging levels and unique enemies. Created in Unity with C#.",
        jogo2_link: "View Game",

        jogo3_title: "Burger Run",
        jogo3_desc: "A fun mini-game inspired by SpongeBob, where the goal is to collect burgers under the sea.",
        jogo3_link: "View Game",

        sites_title: "Websites",
        site_badge1: "Website",
        site1_title: "Car Showroom",
        site1_desc: "A responsive website for showcasing premium cars, with a gallery, catalogue, and modern design.",
        site1_link: "View Website",

        site_badge2: "Website",
        site2_title: "Pixel Art Troll Game",
        site2_desc: "An interactive website featuring pixel-art mini-games and fun challenges.",
        site2_link: "View Website",

        site_badge3: "Under Construction",
        site3_title: "Website Under Construction",
        site3_desc: "New project under development. Coming soon.",
        site3_link: "Coming Soon",

        contato_title: "Contact Me",
        contato_email_title: "Email",
        contato_telefone_title: "Phone",
        contato_local_title: "Location",
        contato_local: "Portugal",

        footer_name: "Carlos Gustavo",
        footer_rights: "All rights reserved.",

        app_title: "✨ GustavoNexus — Your Professional Hub in One Place",
        app_desc: "GustavoNexus is a modern Windows application that brings together my skills, projects, games, professional experience, and much more — all in a fast, organised, and elegant interface.",
        app_feat1: "💼 Complete Profile — education, experience, and professional path",
        app_feat2: "🕹️ Projects & Games — videos, images, and details",
        app_feat3: "⚡ Fast & Lightweight — modern technology and smooth performance",
        app_feat4: "🎨 Elegant Interface — modern, intuitive, and responsive",
        app_btn: "Download GustavoNexus (Windows)",
        app_note: "Simply run the installer and follow the instructions. No additional software is required.",
        app_preview: "GustavoNexus application screenshot"
    }
};

const i18nElements = document.querySelectorAll("[data-i18n], [data-i18n-alt]");

function setLanguage(lang) {
    i18nElements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (key && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }

        const altKey = el.getAttribute("data-i18n-alt");
        if (altKey && translations[lang][altKey]) {
            el.setAttribute("alt", translations[lang][altKey]);
        }
    });

    document.getElementById("ptBtn").classList.toggle("active", lang === "pt");
    document.getElementById("enBtn").classList.toggle("active", lang === "en");

    localStorage.setItem("lang", lang);
}

document.getElementById("ptBtn").addEventListener("click", () => setLanguage("pt"));
document.getElementById("enBtn").addEventListener("click", () => setLanguage("en"));

const savedLang = localStorage.getItem("lang") || "pt";
setLanguage(savedLang);