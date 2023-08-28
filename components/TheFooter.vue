<template>
    <div class="flex w-full justify-center bottom-0 absolute">
        <div>
            <span>Minhas redes sociais</span>
            <div class="flex mt-3">
                <Icon class="mr-2 cursor-pointer" v-for="skill in socialNetworks" size="2.3em" :name="skill" />
            </div>
        </div>
    </div>
</template>

<script setup>

const socialNetworks = [
    'skill-icons:linkedin',
    'skill-icons:github-dark',
    'skill-icons:twitter',
    'skill-icons:instagram',
]
</script>
