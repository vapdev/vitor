<template>
    <nav class="mb-2 flex text-white text-2xl">
        <ul class="flex">
            <li class="mr-6 cursor-pointer" :class="$route.path == '/' ? 'bg-green-950 font-bold' : ''">
                <NuxtLink to="/">{{ $t('inicio') }}</NuxtLink>
            </li>
            <li class="mr-6 cursor-pointer" :class="$route.path == '/trajetoria' ? 'bg-green-950 font-bold' : ''">
                <NuxtLink to="trajetoria">{{ $t('trajetoria') }}</NuxtLink>
            </li>
            <li class="mr-6 cursor-pointer" :class="$route.path == '/stack' ? 'bg-green-950 font-bold' : ''">
                <NuxtLink to="stack">Stack</NuxtLink>
            </li>
            <li class="mr-6 cursor-pointer" :class="$route.path == '/blog' ? 'bg-green-950 font-bold' : ''">
                <NuxtLink to="blog">Blog</NuxtLink>
            </li>
            <li class="mr-6 cursor-pointer" :class="$route.path == '/contato' ? 'bg-green-950 font-bold' : ''">
                <NuxtLink to="contato">{{ $t('contato') }}</NuxtLink>
            </li>
        </ul>
        <div class="w-full"></div>
        <LanguageSelector />
    </nav>
</template>

<script setup>
</script>
