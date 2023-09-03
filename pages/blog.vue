<script setup lang="ts">
definePageMeta({
    middleware: [
        'blog',
    ],
});

const { data } = await useAsyncData(() => queryContent('/blog').find())
</script>

<template>
    <div>
        <div class="mb-4 text-4xl text-green-500">Blog</div>
        <div>
            Vou utilizar este espaço para compartilhar meus <span class="text-green-500">pensamentos, ideias e
                experiências</span>. Fique à vontade para
            comentar e
            compartilhar!
        </div>
        <div class="mt-10 flex">
            <div class="mx-10 px-6 py-4 w-[30rem] h-[30rem] overflow-hidden border-green-500 border-8 rounded-md" v-for="post in data"
                :key="post.slug">
                <div class="flex justify-between">
                    <div class="text-2xl text-green-500">{{ post.title }}</div>
                    <div class="text-2xl text-green-500">10/10/2022</div>
                </div>
                <div class="mt-4">
                    <Suspense>
                        <ContentRenderer :value="post"></ContentRenderer>
                    </Suspense>
                </div>
            </div>
        </div>
    </div>
</template>

