<template>
    <div class="flex w-full justify-center">
        <div class="flex flex-col items-center">
            <span>{{ $t('my_social_media') }}</span>
            <div class="flex mt-3">
                <a v-for="network in socialNetworks" :key="network.icon" :href="network.link" target="_blank"
                    rel="noopener noreferrer">
                    <Icon class="mr-2 cursor-pointer" size="2.3em" :name="network.icon" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>

const socialNetworks = [
    {
        icon: 'skill-icons:linkedin',
        link: 'https://www.linkedin.com/in/vitor-augusto-philippsen-bohn/'
    },
    {
        icon: 'skill-icons:github-dark',
        link: 'https://github.com/vapdev'
    },
    {
        icon: 'skill-icons:twitter',
        link: 'https://twiker.herokuapp.com/profile/VITIN-CRIMINAL'
    },
    {
        icon: 'skill-icons:instagram',
        link: 'https://www.instagram.com/vitinhoooooooo'
    }
];
</script>
