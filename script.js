function setupScrollProgressIndicator() {
    window.addEventListener('scroll', () => {
        const scrollProgress = document.getElementById('scrollProgress');
        if (!scrollProgress) return;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight);
        scrollProgress.style.transform = `scaleX(${progress})`;
    });
}

function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuButton || !mobileMenu) return;

    const mobileMenuIcon = mobileMenuButton.querySelector('i');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        } else {
            mobileMenuIcon.classList.remove('fa-bars');
            mobileMenuIcon.classList.add('fa-times');
        }
    });

    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        });
    });
}

function createParticleField() {
    const particleField = document.getElementById('particleField');
    if (!particleField) return;
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particleField.appendChild(particle);
    }
}

function createNeuralNetwork() {
    const neuralNetwork = document.getElementById('neuralNetwork');
    if (!neuralNetwork) return;
    const neuronCount = 30;

    for (let i = 0; i < neuronCount; i++) {
        const neuron = document.createElement('div');
        neuron.className = 'neuron';
        neuron.style.left = Math.random() * 100 + '%';
        neuron.style.top = Math.random() * 100 + '%';
        neuron.style.animationDelay = Math.random() * 2 + 's';
        neuralNetwork.appendChild(neuron);
    }
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });

    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
}

function setupMagneticHover() {
    document.querySelectorAll('.magnetic-hover').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });
}

function setupCursorTrail() {
    let lastTime = 0;
    const throttleDelay = 100;

    document.addEventListener('mousemove', (e) => {
        const currentTime = Date.now();
        if (currentTime - lastTime < throttleDelay) return;
        lastTime = currentTime;

        const trail = document.createElement('div');
        trail.className = 'fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.animation = 'fadeOut 1s ease-out forwards';
        document.body.appendChild(trail);

        setTimeout(() => trail.remove(), 1000);
    });
}

function injectCursorTrailStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
        }
    `;
    document.head.appendChild(style);
}

const challengeData = {
    1: {
        title: "Escuelas con Corresponsabilidad (IA para la Educación)",
        intro: "Este reto se enfoca en el fortalecimiento de las condiciones físicas y la comunicación en planteles de educación básica en Guadalajara.",
        problem: "Brecha en el reporte de daños estructurales y falta de canales eficientes entre padres, maestros y gobierno.",
        synergy: [
            { role: "IC", desc: "Implementa un motor de Visión Artificial (vía Gemini 2.0 Flash) que clasifica automáticamente el nivel de urgencia de daños estructurales a partir de una foto enviada por un usuario." },
            { role: "LDGM", desc: "Diseña la Arquitectura de Información de la plataforma, asegurando que el flujo de reporte sea inclusivo para adultos mayores y docentes con baja alfabetización digital." }
        ],
        value: "Un agente de IA que redacta automáticamente el oficio formal de reporte basado en la imagen analizada."
    },
    2: {
        title: "Corazón Contento (IA para la Seguridad Alimentaria)",
        intro: "Busca optimizar el alcance y la logística de los comedores comunitarios municipales en zonas prioritarias de Guadalajara.",
        problem: "Desperdicio de insumos por falta de predicción de asistencia y dificultades en la localización de los comedores para la población vulnerable.",
        synergy: [
            { role: "IC", desc: "Desarrolla un algoritmo de Análisis Predictivo que estima la demanda semanal de alimentos basado en datos históricos de asistencia y clima local." },
            { role: "LDGM", desc: "Crea el Visual Storytelling del impacto del programa, diseñando un tablero (dashboard) interactivo que comunique de forma transparente cuántas personas han sido alimentadas y en qué zonas se requiere más apoyo." }
        ],
        value: "Uso de modelos multimodales para generar recetas saludables de bajo costo basadas en los excedentes de insumos del día."
    },
    3: {
        title: "Guardianes de la Ciudad (IA para el Urbanismo)",
        intro: "Fomenta la corresponsabilidad ciudadana en la mejora del entorno urbano y servicios públicos en las colonias de Guadalajara.",
        problem: "Los ciudadanos se sienten desconectados del mantenimiento de su calle; el reporte de baches o luminarias es lento y poco gratificante.",
        synergy: [
            { role: "IC", desc: "Construye una herramienta web que integra la API de Ruteo de INEGI para optimizar las rutas de las brigadas de reparación basadas en los reportes ciudadanos geolocalizados." },
            { role: "LDGM", desc: "Diseña una Experiencia Gamificada donde los ciudadanos ganan insignias de \"Guardián Oro\" al validar reportes de otros usuarios, utilizando una identidad visual que refuerce el orgullo tapatío." }
        ],
        value: "Detección inteligente de objetos en espacio público (basura, grafiti no artístico, daños) para asignar tareas automáticamente."
    },
    4: {
        title: "Renta para Jóvenes / Centro Histórico (IA para la Vivienda)",
        intro: "Plataforma para facilitar el acceso a la vivienda a jóvenes estudiantes en el primer cuadro de la ciudad, impulsando el repoblamiento del Centro.",
        problem: "Dificultad para encontrar edificios con vocación de renta para estudiantes y falta de confianza entre arrendadores y jóvenes.",
        synergy: [
            { role: "IC", desc: "Implementa un sistema de Matching Inteligente entre el perfil del estudiante (habilidades, horarios, presupuesto) y las opciones disponibles en el inventario de vivienda de la API de SEDATU." },
            { role: "LDGM", desc: "Diseña una interfaz de Exploración Visual del Centro Histórico, destacando no solo la vivienda sino los servicios culturales y de transporte cercanos, utilizando diseño de experiencias interactivas para \"vender\" el estilo de vida del centro." }
        ],
        value: "Un asistente conversacional que analiza contratos de arrendamiento en tiempo real para explicar cláusulas complejas en lenguaje sencillo para el estudiante."
    }
};

const scheduleData = [
    {
        number: 1,
        title: "Día 1: Definición y Empatía",
        subtitle: "Framing & Concept",
        objective: "Objetivo: Entender los retos de Guadalajara y definir la identidad del proyecto",
        activities: [
            { icon: "fas fa-flag-checkered", color: "from-cyan-500 to-blue-600", title: "Kick-off: Retos GDL 2026", time: "09:00 - 09:30", desc: "Presentación de los programas sociales aprobados por el Ayuntamiento de Guadalajara" },
            { icon: "fas fa-comments", color: "from-purple-500 to-pink-600", title: "Ponencia: Arquitectura Simbiótica", time: "09:30 - 10:15", desc: "Docentes de IC y LDGM explican cómo la IA une la Programación para Internet con el Diseño Web" },
            { icon: "fas fa-laptop-code", color: "from-cyan-500 to-purple-600", title: "Bootcamp: Prompting Pro", time: "10:15 - 11:15", desc: "Taller práctico de co-creación con Mistral Devstral 2 (Código) y Leonardo AI (Imagen)" },
            { icon: "fas fa-lightbulb", color: "from-pink-500 to-red-600", title: "Sprint de Ideación", time: "11:15 - 13:30", desc: "Metodología Design Thinking para seleccionar un reto local y validar la propuesta de valor" },
            { icon: "fas fa-check-double", color: "from-cyan-500 to-blue-600", title: "Validación Docente", time: "13:30 - 14:30", desc: "Mentoría directa por mesa para definir el alcance del prototipo final" }
        ]
    },
    {
        number: 2,
        title: "Día 2: Construcción y Demo Day",
        subtitle: "Prototyping & Pitch",
        objective: "Objetivo: Integración técnica y presentación de la solución",
        activities: [
            { icon: "fas fa-brain", color: "from-purple-500 to-pink-600", title: "Ponencia: Mindset MVP", time: "09:00 - 09:45", desc: "Cómo priorizar la funcionalidad básica para un entregable exitoso en 48 horas" },
            { icon: "fas fa-code", color: "from-cyan-500 to-purple-600", title: "Sprint de Desarrollo", time: "09:45 - 12:30", desc: "Codificación en Cursor y prototipado UI en Uizard. Docentes resuelven cuellos de botella" },
            { icon: "fas fa-cogs", color: "from-pink-500 to-red-600", title: "Pulido y Testeo IA", time: "12:30 - 13:30", desc: "Revisión de accesibilidad y optimización de llamados a APIs de Groq Cloud" },
            { icon: "fas fa-trophy", color: "from-cyan-500 to-blue-600", title: "Demo Day: Pitch GDL", time: "13:30 - 14:30", desc: "Presentación final de 3 minutos ante el comité docente evaluador", special: true }
        ]
    }
];

function openChallengeModal(id) {
    const data = challengeData[id];
    if (!data) return;

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalIntro').textContent = data.intro;
    document.getElementById('modalProblem').textContent = data.problem;
    document.getElementById('modalValue').textContent = data.value;

    const synergyList = document.getElementById('modalSynergy');
    synergyList.innerHTML = '';
    data.synergy.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong class="${item.role === 'IC' ? 'text-cyan-300' : 'text-pink-300'}">${item.role}:</strong> ${item.desc}`;
        synergyList.appendChild(li);
    });

    document.getElementById('challengeModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeChallengeModal() {
    document.getElementById('challengeModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.id === 'challengeModal') {
        closeChallengeModal();
    }
});

function renderSchedule() {
    const container = document.getElementById('scheduleContent');
    if (!container) return;

    container.innerHTML = scheduleData.map(day => `
        <div class="${day.number === 1 ? 'mb-12' : ''}">
            <div class="glass-card p-8 rounded-2xl mb-8">
                <div class="flex items-center justify-center mb-6">
                    <div class="w-16 h-16 bg-gradient-to-r ${day.number === 1 ? 'from-cyan-500 to-blue-600' : 'from-purple-500 to-pink-600'} rounded-full flex items-center justify-center">
                        <span class="text-white font-black text-2xl">${day.number}</span>
                    </div>
                </div>
                <h3 class="text-3xl font-bold ${day.number === 1 ? 'text-cyan-300' : 'text-purple-300'} text-center mb-2">${day.title}</h3>
                <p class="text-center text-gray-300 mb-8">${day.subtitle}</p>
                <p class="text-center ${day.number === 1 ? 'text-cyan-200' : 'text-purple-200'} text-lg font-semibold mb-8">
                    <i class="fas fa-bullseye mr-2"></i>${day.objective}
                </p>
            </div>

            <div class="space-y-4 timeline-3d">
                ${day.activities.map(activity => `
                    <div class="glass-card p-6 rounded-xl timeline-item-3d ${activity.special ? 'border-2 border-cyan-500' : ''}">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div class="flex items-center mb-4 md:mb-0">
                                <div class="w-12 h-12 bg-gradient-to-r ${activity.color} rounded-lg flex items-center justify-center mr-4">
                                    <i class="${activity.icon} text-white"></i>
                                </div>
                                <div>
                                    <h4 class="${activity.color.includes('cyan') ? 'text-cyan-300' : activity.color.includes('purple') ? 'text-purple-300' : activity.color.includes('pink') ? 'text-pink-300' : 'text-cyan-300'} font-bold text-lg">${activity.title}</h4>
                                    <p class="text-gray-400 text-sm">${activity.time}</p>
                                </div>
                            </div>
                            <p class="text-gray-300 text-sm md:ml-16">${activity.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    setupScrollProgressIndicator();
    setupSmoothScrolling();
    setupMobileMenu();
    setupScrollAnimations();
    createParticleField();
    createNeuralNetwork();
    setupMagneticHover();
    setupCursorTrail();
    injectCursorTrailStyles();
    renderSchedule();
});