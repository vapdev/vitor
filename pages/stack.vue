<script setup>
definePageMeta({
    middleware: [
        'blog',
    ],
});

const skillsLanguages = [
    { icon: 'skill-icons:javascript', name: 'JavaScript' },
    { icon: 'skill-icons:typescript', name: 'TypeScript' },
    { icon: 'skill-icons:php-dark', name: 'PHP' },
    { icon: 'skill-icons:python-dark', name: 'Python' },
];

const skillsFrontend = [
    { icon: 'skill-icons:vuejs-dark', name: 'Vue.js' },
    { icon: 'skill-icons:tailwindcss-dark', name: 'Tailwind CSS' },
    { icon: 'skill-icons:bootstrap', name: 'Bootstrap' },
    { icon: 'skill-icons:html', name: 'HTML' },
    { icon: 'skill-icons:css', name: 'CSS' },
];

const skillsBackend = [
    { icon: 'skill-icons:laravel-dark', name: 'Laravel' },
    { icon: 'skill-icons:symfony-dark', name: 'Symfony' },
    { icon: 'skill-icons:django', name: 'Django' },
    { icon: 'skill-icons:flask-dark', name: 'Flask' },
    { icon: 'skill-icons:fastapi', name: 'FastAPI' },
];

const skillsDatabase = [
    { icon: 'skill-icons:postgresql-dark', name: 'PostgreSQL' },
    { icon: 'skill-icons:mysql-dark', name: 'MySQL' },
    { icon: 'skill-icons:mongodb', name: 'MongoDB' },
];
</script>

<template>
    <div>
        <div class="mb-4 text-4xl text-green-500">Stack</div>
        <div>
            Durante minha jornada profissional, tive a oportunidade de trabalhar com diversas linguagens e frameworks. Aqui
            está uma lista de algumas tecnologias que estiveram presentes ao longo do caminho:
        </div>
        <div class="text-sm mt-2 text-green-500">Este site foi feito com Nuxt e Tailwind</div>

        <div class="text-xl flex flex-col md:flex-row mt-6 md:mt-12 w-full justify-around">
            <div>
                <span>Linguagens</span>
                <div class="flex mt-2 md:mt-4 mr-2 w-[vw] mb-4">
                    <image class="hover:scale-110" v-for="skill in skillsLanguages" :title="skill.name">
                        <Icon class="mr-4" size="2.5em" :name="skill.icon" :key="skill.name" />
                    </image>
                </div>
            </div>
            <div>
                <span>Frontend</span>
                <div class="flex mt-2 mr-2 mb-4">
                    <image class="hover:scale-110" v-for="skill in skillsFrontend" :title="skill.name">
                        <Icon class="mr-4" size="2.5em" :name="skill.icon" :key="skill.name" />
                    </image>
                </div>
            </div>
            <div>
                <span>Backend</span>
                <div class="flex mt-2 mr-2 mb-4">
                    <image class="hover:scale-110" v-for="skill in skillsBackend" :title="skill.name">
                        <Icon class="mr-4" size="2.5em" :name="skill.icon" :key="skill.name" />
                    </image>
                </div>
            </div>
            <div>
                <span>Banco de dados</span>
                <div class="flex mt-2 mr-2 mb-4">
                    <image class="hover:scale-110" v-for="skill in skillsDatabase" :title="skill.name">
                        <Icon class="mr-4" size="2.5em" :name="skill.icon" :key="skill.name" />
                    </image>
                </div>
            </div>
        </div>
    </div>
</template>
