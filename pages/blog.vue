<script setup lang="ts">
definePageMeta({
    middleware: [
        'slide',
    ],
});

const { data } = await useAsyncData(() => queryContent('/blog').sort({ title: -1 }).find());

</script>

<template>
    <div>
        <div class="mb-4 text-4xl text-green-500">Blog</div>
        <Suspense>
            <swiper-container navigation="true" a11y="true" space-between="20" class="mt-6 navigation" :breakpoints="{
                768: {
                    slidesPerView: 3,
                },
            }">
                <swiper-slide v-for="post in data" :key="post.slug">
                    <div class="md:px-4 py-2 h-[42rem] overflow-scroll border-green-500 md:border rounded-md">
                        <div class="flex justify-between">
                            <div class="text-2xl text-green-500">{{ post.description }}</div>
                            <div class="text-2xl text-green-500">{{ post.date }}</div>
                        </div>
                        <div class="text-xs text-gray-500">Abrir separadamente</div>
                        <div class="mt-4">
                            <ContentDoc class="prose prose-xl text-gray-400" :path="post._path">
                            </ContentDoc>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </Suspense>
    </div>
</template>

<style>
.navigation{
    --swiper-navigation-size: 30px;
    --swiper-navigation-top-offset: 50%;
    --swiper-navigation-sides-offset: 8px;
    --swiper-navigation-color: #1DA04D;
}
</style>