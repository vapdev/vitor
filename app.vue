<template>
  <div class="h-[100vh] flex flex-col justify-between">
    <div class="bg-zinc-950 p-6">
      <div class="overflow-hidden max-h-12 z-10">
        <TheHeader class="h-16 text-white overflow-y-hidden overflow-x-auto pb-8" />
      </div>
      <NuxtPage class="text-white text-2xl" />
    </div>
    <TheFooter class="pb-6 text-white" />
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
register();
</script>

<style>
html {
  font-family: "Roboto Mono", monospace;
  background-color: #09090b;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(60vw, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-60vw, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-60vw, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(60vw, 0);
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>