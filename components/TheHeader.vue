<template>
    <nav class="mb-10 flex text-white text-2xl">
        <ul class="flex">
            <li class="mr-6 cursor-pointer" :class="selectedTab == 'home' ? 'bg-green-950 font-bold' : ''">
                <a @click="setSelectedTab('home')">Início</a>
            </li>
            <li class="mr-6 cursor-pointer" :class="selectedTab == 'trajetoria' ? 'bg-green-950 font-bold' : ''">
                <a @click="setSelectedTab('trajetoria')">Trajetória</a>
            </li>
            <li class="mr-6 cursor-pointer" :class="selectedTab == 'stack' ? 'bg-green-950 font-bold' : ''">
                <a @click="setSelectedTab('stack')">Stack</a>
            </li>
            <li class="mr-6 cursor-pointer" :class="selectedTab == 'blog' ? 'bg-green-950 font-bold' : ''">
                <a @click="setSelectedTab('blog')">Blog</a>
            </li>
            <li class="mr-6 cursor-pointer" :class="selectedTab == 'contato' ? 'bg-green-950 font-bold' : ''">
                <a @click="setSelectedTab('contato')">Contato</a>
            </li>
        </ul>
        <div class="w-full"></div>
        <LanguageSelector />
    </nav>
</template>

<script setup>
import { useNavbarStore } from '~/store/navbar'
import { storeToRefs } from 'pinia'

const navbarStore = useNavbarStore()
const { selectedTab } = storeToRefs(navbarStore)

const { setSelectedTab } = navbarStore
</script>
