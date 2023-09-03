<script setup>
definePageMeta({
    middleware: [
        'slide',
    ],
});
const empresas = ref(
    [
        {
            'nome': 'Softpar',
            'cargo': 'softpar_cargo',
            'periodo': 'softpar_periodo',
            'descricao': 'PHP, Laravel, Vue.js, Lumen, Pinia, Vuex, Tailwind, Quasar, Vuetify, PostgreSQL, HTML, CSS, JavaScript.'
        },
        {
            'nome': 'Ead Guru',
            'cargo': 'ead_guru_cargo',
            'periodo': 'ead_guru_periodo',
            'descricao': 'Django, Python, Vue.js, MySQL, Bootstrap, HTML, CSS, JavaScript.'
        },
        {
            'nome': 'Maxicon',
            'cargo': 'maxicon_cargo',
            'periodo': 'maxicon_periodo',
            'descricao': 'PLSQL, Oracle Forms, Oracle Database, Python, Flask, Vue.js, MySQL, Bootstrap, HTML, CSS, JavaScript.'
        }
    ]
)
</script>

<template>
    <div>
        <div class="mb-4 text-4xl text-green-500">{{ $t('historico') }}</div>
        <div class="mb-4">
            {{ $t('trajetoria_1') }}
        </div>

        <div class="mb-4">
            {{ $t('trajetoria_2') }}
        </div>

        <div class="mt-12 font-bold">{{ $t('empresas_que_trabalhei') }}:</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div v-for="empresa in empresas" :key="empresa.nome">
                <div class="font-bold text-green-500">{{ empresa.nome }}</div>
                <div class="text-sm">{{$t(empresa.cargo) }}</div>
                <div class="text-sm">{{$t(empresa.periodo) }}</div>
                <div class="text-sm">{{ empresa.descricao }}</div>
            </div>
        </div>
    </div>
</template>