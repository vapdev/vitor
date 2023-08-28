<script setup>
definePageMeta({
  middleware: [
    'blog',
  ],
});
const empresas = ref(
    [
        {
            'nome': 'Softpar',
            'cargo': 'Desenvolvedor Full Stack',
            'periodo': '2023 - Atualmente',
            'descricao': 'PHP, Laravel, Vue.js, Lumen, Pinia, Vuex, Tailwind, Quasar, Vuetify, PostgreSQL, HTML, CSS e JavaScript.'
        },
        {
            'nome': 'Ead Guru',
            'cargo': 'Desenvolvedor Full Stack',
            'periodo': '2022 - 2023',
            'descricao': 'Django, Python, Vue.js, MySQL, Bootstrap, HTML, CSS e JavaScript.'
        },
        {
            'nome': 'Maxicon',
            'cargo': 'Desenvolvedor Full Stack',
            'periodo': '2021 - 2022',
            'descricao': 'PLSQL, Oracle Forms, Oracle Reports, Oracle Database, Python, Flask, Vue.js, MySQL, Bootstrap, HTML, CSS e JavaScript.'
        }
    ]
)
</script>

<template>
    <div>
        <div class="mb-4 text-4xl text-green-500">Histórico</div>
        <div class="mb-4">
            Desde jovem, fui fascinado por computadores, o que me levou a descobrir a programação ainda criança. Comecei a
            criar
            programas simples para controlar torneios de FIFA entre amigos, e essa paixão evoluiu para a escolha da minha
            carreira e
            formação acadêmica.
        </div>

        <div class="mb-4">
            Hoje, sou um desenvolvedor full stack apaixonado por transformar ideias em código funcional. Minha curiosidade
            e desejo de aprender me impulsionam a explorar novas tecnologias e enfrentar novos desafios.
        </div>

        <div class="mt-12 font-bold">Empresas onde já trabalhei:</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div v-for="empresa in empresas" :key="empresa.nome">
                <div class="font-bold text-green-500">{{ empresa.nome }}</div>
                <div class="text-sm">{{ empresa.cargo }}</div>
                <div class="text-sm">{{ empresa.periodo }}</div>
                <div class="text-sm">{{ empresa.descricao }}</div>
            </div>
        </div>
    </div>
</template>