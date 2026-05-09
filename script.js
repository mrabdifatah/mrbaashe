 // --- Data Initializations ---

const projects = [
    {
        title: "Soltelco Project",
        description: "A high-performance full-stack ecosystem integrating multiple backend environments for maximum scalability.",
        tech: ["Django", "React", "Node.js", "Tailwind"],
        link: "#",
        repo: "#",
        images: ["./Images/Soltelco.JPG"]
    },
    {
        title: "School MS",
        description: "An enterprise-level system designed for robust data management and academic administration.",
        tech: ["ASP.NET Core", "C#", "SQL", "Tailwind"],
        link: "#",
        repo: "#",
        images: ["./Images/SchoolMS.JPG"]
    },
    {
        title: "Dalxiis App",
        description: "A cross-platform mobile solution for tourism, featuring real-time data syncing and modern UI components.",
        tech: ["Flutter", "Dart", "Firebase"],
        link: "#",
        repo: "#",
        images: ["./Images/Dalxiis.JPG"]
    },
    {
        title: "VIP Game",
        description: "A dynamic web application focusing on real-time state management and interactive user experiences.",
        tech: ["Python", "Django", "React", "Tailwind"],
        link: "#",
        repo: "#",
        images: ["./Images/VIP.JPG"]
    },
    {
        title: "Hotel MS",
        description: "A streamlined hospitality management platform focusing on secure booking flows and MVC architecture.",
        tech: ["Laravel", "PHP", "JS", "Tailwind"],
        link: "#",
        repo: "#",
        images: ["./Images/HotelMS.JPG"]
    },
    {
        title: "E-Commerce",
        description: "A complete marketplace solution with integrated inventory management and secure checkout features.",
        tech: ["Python", "Django", "JS", "Tailwind"],
        link: "#",
        repo: "#",
        images: ["./Images/Ecommerce.JPG"]
    },


];

const skills = [
    {
        category: "Backend Mastery",
        icon: "ph-database",
        items: ["Python (Django/Flask/FastAPI)", "ASP.NET Core (C#)", "Laravel (PHP)", "Node.js", "Express.js", "Django Rest Framework"]
    },
    {
        category: "Frontend & Mobile",
        icon: "ph-device-mobile",
        items: ["React", "Flutter (Dart)", "JavaScript", "Tailwind CSS", "Next.js", "TypeScript", "React Native", "Vue.js"]
    },
    {
        category: "Databases & Cloud",
        icon: "ph-cloud",
        items: ["SQL Server", "Firebase", "PostgreSQL", "MySQL", "MongoDB", "SQLite"]
    },
    {
        category: "Security & Systems",
        icon: "ph-shield-check",
        items: ["Snort (Network Monitoring)", "Kali/Ubuntu Linux", "Wireshark", "Nmap", "Metasploit", "Burp Suite", "John the Ripper"]
    }
];

const timeline = [
    {
        year: "Present",
        role: "Full-Stack Engineer & Ethical Hacker",
        company: "The Multi-Disciplinary Expert",
        description: "Currently operating as a versatile developer with mastery in UI/UX Design, Full-Stack Systems (Python/Django/React), and Network Security. Actively protecting digital assets as a skilled Ethical Hacker specializing in network security.",
        showWinnerBadge: false
    },
    {
        year: "2025",
        role: "Winner of the University-Wide Hackathon",
        company: "Hackathon Champion",
        description: "Led a team to victory in the prestigious Abaarso Tech Hackathon. Our solution was recognized for its technical depth and business viability, directly supported by Soltelco.",
        showWinnerBadge: true
    },
    {
        year: "2024",
        role: "Multiple Intra-Class Competition Winner",
        company: "The Competitive Edge",
        description: "Mastered the art of rapid problem-solving and competitive coding, winning several departmental challenges that sharpened my logic and speed.",
        showWinnerBadge: true
    },
    {
        year: "2023",
        role: "Commenced B.S. in Software Engineering",
        company: "Abaarso Tech University",
        description: "Established a reputation as one of the most proactive students in the cohort, consistently leading classroom technical discussions and excelling in early programming challenges.",
        showWinnerBadge: false
    }
];

// --- DOM elements ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
const htmlElement = document.documentElement;
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const currentYearSpan = document.getElementById('current-year');

// --- Functions ---

// Setup current year
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Theme Initialization
function initTheme() {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
}

function toggleTheme() {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        htmlElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

// Render Skills
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    skills.forEach((skillGroup, index) => {
        const delay = index * 100;
        const skillCardsHTML = `
            <div data-aos="fade-up" data-aos-delay="${delay}" class="relative bg-white/5 dark:bg-charcoal-dark/50 backdrop-blur-xl border border-gray-200/50 dark:border-brand/20 p-8 rounded-2xl h-full flex flex-col hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group overflow-hidden">
                <!-- Subtle glow orb -->
                <div class="absolute -top-10 -right-10 w-32 h-32 bg-brand/10 rounded-full blur-2xl group-hover:bg-brand/20 transition-colors"></div>
                
                <div class="w-14 h-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center text-3xl mb-6 shadow-inner ring-1 ring-brand/20 z-10">
                    <i class="${skillGroup.icon}"></i>
                </div>
                <h3 class="text-2xl font-bold mb-6 z-10">${skillGroup.category}</h3>
                <ul class="space-y-3 flex-grow z-10">
                    ${skillGroup.items.map(item => `
                        <li class="flex items-center text-slate-700 dark:text-slate-300 font-mono text-sm">
                            <i class="ph-caret-right text-brand mr-2"></i>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', skillCardsHTML);
    });
}

// Render Projects
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    projects.forEach((project, index) => {
        const delay = index * 100;
        const hasMultiple = project.images.length > 1;
        const imagesHTML = project.images.map((img, i) => `
            <img src="${img}" alt="${project.title}" class="carousel-img absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${i === 0 ? 'opacity-100' : 'opacity-0'} group-hover:scale-110 transform">
        `).join('');

        const carouselControls = hasMultiple ? `
            <div class="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onclick="changeSlide(event, this, -1)" class="w-8 h-8 rounded-full bg-charcoal/50 text-white flex justify-center items-center backdrop-blur-sm shadow-lg hover:bg-brand transition-colors"><i class="ph-caret-left"></i></button>
                <button onclick="changeSlide(event, this, 1)" class="w-8 h-8 rounded-full bg-charcoal/50 text-white flex justify-center items-center backdrop-blur-sm shadow-lg hover:bg-brand transition-colors"><i class="ph-caret-right"></i></button>
            </div>
        ` : '';

        const projectHTML = `
            <div data-aos="fade-up" data-aos-delay="${delay}" class="glass-panel rounded-2xl overflow-hidden project-card group flex flex-col h-full ring-1 ring-slate-200/50 dark:ring-slate-800/50 floating-card" style="animation-delay: ${index * 0.5}s">
                <div class="relative overflow-hidden h-52 carousel-container block">
                    ${imagesHTML}
                    ${carouselControls}
                    <div class="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-charcoal-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none z-10">
                        <div class="flex gap-4 w-full justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto">
                             <a href="${project.link}" class="px-4 py-2 rounded-full bg-brand text-white font-medium hover:bg-brand-light transition flex gap-2 items-center text-sm shadow-lg"><i class="ph-link text-lg"></i> Live Demo</a>
                             <a href="${project.repo}" class="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-gray-200 transition shadow-lg"><i class="ph-github-logo text-xl"></i></a>
                        </div>
                    </div>
                </div>
                <div class="p-8 flex flex-col flex-grow">
                    <h3 class="text-2xl font-bold mb-3 group-hover:text-brand transition-colors">${project.title}</h3>
                    <p class="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mt-auto">
                        ${project.tech.map(t => `<span class="px-3 py-1 text-xs font-semibold bg-brand/10 text-brand rounded-full border border-brand/20">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', projectHTML);
    });
}

// Carousel Logic
window.changeSlide = function (event, btn, direction) {
    event.preventDefault();
    event.stopPropagation();
    const container = btn.closest('.carousel-container');
    const images = Array.from(container.querySelectorAll('.carousel-img'));
    let currentIndex = images.findIndex(img => img.classList.contains('opacity-100'));

    if (currentIndex === -1) currentIndex = 0;
    images[currentIndex].classList.remove('opacity-100');
    images[currentIndex].classList.add('opacity-0');

    let nextIndex = (currentIndex + direction + images.length) % images.length;

    images[nextIndex].classList.remove('opacity-0');
    images[nextIndex].classList.add('opacity-100');
};

// Render Timeline
function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    timeline.forEach((item, index) => {
        const delay = index * 100;
        const timelineHTML = `
            <div data-aos="fade-up" data-aos-delay="${delay}" class="relative pl-10 md:pl-0 mb-12 last:mb-0">
                <!-- Timeline Dot / Glowing Node -->
                <div class="absolute left-[-8px] md:left-1/2 md:-ml-[8px] top-6 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-brand border border-white dark:border-charcoal z-10 shadow-[0_0_12px_rgba(59,130,246,0.9)] transition-transform hover:scale-150 duration-300"></div>
                
                <div class="md:grid md:grid-cols-[1fr_auto_1fr] md:gap-12 items-start">
                    
                    ${index % 2 === 0 ? `
                        <!-- Left side content (Desktop) -->
                        <div class="hidden md:block text-right group">
                            <div class="bg-white/5 dark:bg-charcoal-dark/50 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 p-8 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:border-brand/40">
                                <h3 class="text-3xl font-extrabold mb-2 tracking-tight flex items-center justify-end gap-3">
                                    ${item.showWinnerBadge ? '<i class="ph-trophy-fill text-yellow-400 text-4xl drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]"></i>' : ''}
                                    ${item.role}
                                </h3>
                                <div class="text-brand font-bold mb-4 text-xl tracking-wide uppercase">${item.company}</div>
                                <p class="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-lg">${item.description}</p>
                            </div>
                        </div>
                        
                        <!-- Center spacer (No internal line needed as HTML has pseudo element) -->
                        <div class="hidden md:block w-[1px] relative h-full"></div>

                        <!-- Right side date (Desktop) -->
                        <div class="hidden md:flex items-start h-full pt-8">
                            <span class="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-brand/10 text-brand font-black text-lg border border-brand/30 shadow-sm uppercase tracking-wider backdrop-blur-sm">${item.year}</span>
                        </div>
                    ` : `
                        <!-- Left side date (Desktop) -->
                        <div class="hidden md:flex items-start justify-end h-full pt-8">
                            <span class="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-brand/10 text-brand font-black text-lg border border-brand/30 shadow-sm uppercase tracking-wider backdrop-blur-sm">${item.year}</span>
                        </div>
                        
                        <!-- Center spacer -->
                        <div class="hidden md:block w-[1px] relative h-full"></div>

                        <!-- Right side content (Desktop) -->
                        <div class="hidden md:block text-left group">
                            <div class="bg-white/5 dark:bg-charcoal-dark/50 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 p-8 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:border-brand/40">
                                <h3 class="text-3xl font-extrabold mb-2 tracking-tight flex items-center justify-start gap-3">
                                    ${item.showWinnerBadge ? '<i class="ph-trophy-fill text-yellow-400 text-4xl drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]"></i>' : ''}
                                    ${item.role}
                                </h3>
                                <div class="text-brand font-bold mb-4 text-xl tracking-wide uppercase">${item.company}</div>
                                <p class="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-lg">${item.description}</p>
                            </div>
                        </div>
                    `}
                    
                    <!-- Mobile View -->
                    <div class="block md:hidden pb-4 group">
                        <div class="bg-white/5 dark:bg-charcoal-dark/50 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 p-6 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:border-brand/40 mt-1">
                            <span class="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-brand/10 text-brand font-black text-sm mb-5 border border-brand/30 shadow-sm uppercase tracking-wider">${item.year}</span>
                            <h3 class="text-2xl font-extrabold mb-2 tracking-tight flex items-start gap-2">
                                ${item.showWinnerBadge ? '<i class="ph-trophy-fill text-yellow-400 text-3xl drop-shadow-[0_0_8px_rgba(250,204,21,0.6)] flex-shrink-0"></i>' : ''}
                                <span>${item.role}</span>
                            </h3>
                            <div class="text-brand font-bold mb-3 text-lg tracking-wide uppercase">${item.company}</div>
                            <p class="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">${item.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', timelineHTML);
    });
}

// Form handling with Formsubmit.co (no signup needed!)
function initForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (!form || !status) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        btn.innerHTML = '<i class="ph-spinner animate-spin text-2xl mr-2"></i> Sending...';
        btn.classList.add('flex', 'justify-center', 'items-center', 'opacity-90');
        btn.disabled = true;

        // Collect form data
        const formData = new FormData(form);

        // Send via Formsubmit.co (emails go to ibnubaashe@gmail.com)
        fetch('https://formsubmit.co/ajax/ibnubaashe@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.get('from_name'),
                email: formData.get('from_email'),
                message: formData.get('message'),
                _subject: 'New Portfolio Contact from ' + formData.get('from_name')
            })
        })
        .then(response => response.json())
        .then(data => {
            btn.innerHTML = originalText;
            btn.classList.remove('flex', 'justify-center', 'items-center', 'opacity-90');
            btn.disabled = false;
            form.reset();

            status.innerHTML = "<i class='ph-check-circle mr-1 text-lg align-middle'></i> Message sent successfully! I'll get back to you soon.";
            status.className = "text-sm text-center font-bold mt-4 text-green-500 block p-3 rounded-lg bg-green-500/10 border border-green-500/20";

            setTimeout(() => {
                status.classList.add('hidden');
            }, 5000);
        })
        .catch((error) => {
            console.error('Form Error:', error);
            btn.innerHTML = originalText;
            btn.classList.remove('flex', 'justify-center', 'items-center', 'opacity-90');
            btn.disabled = false;

            status.innerHTML = "<i class='ph-warning mr-1 text-lg align-middle'></i> Failed to send message. Please try again or email me directly.";
            status.className = "text-sm text-center font-bold mt-4 text-red-500 block p-3 rounded-lg bg-red-500/10 border border-red-500/20";

            setTimeout(() => {
                status.classList.add('hidden');
            }, 5000);
        });
    });
}

// --- Event Listeners ---

if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        } else {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        });
    });
}

// Scroll handling for navbar
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
        nav.classList.remove('py-4');
        nav.classList.add('py-2');
    } else {
        nav.classList.remove('shadow-md');
        nav.classList.remove('py-2');
        nav.classList.add('py-4');
    }
});

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderSkills();
    renderProjects();
    renderTimeline();
    initForm();

    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }
});
