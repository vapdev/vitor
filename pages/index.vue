<script setup>
definePageMeta({
  middleware: ["blog"],
});
</script>

<template>
  <div>
    <Trajetoria v-if="selectedTab == 'trajetoria'" />
    <Stack v-if="selectedTab == 'stack'" />
    <div v-if="selectedTab == 'home'">
      <div class="mb-6 text-green-600">
        <span class="text-6xl">{{ $t("hello") }}</span>
        <span class="text-6xl font-bold"> Vitor</span>
      </div>
      <div>
        {{ $t("apresentacao") }}
      </div>

      <div class="mt-6">
        {{ $t("conhecer_melhor") }}
        <NuxtLink to="trajetoria" class="text-green-600 cursor-pointer">{{
          $t("trajetoria")
        }}</NuxtLink>
        {{ $t("ou_a_minha") }}
        <NuxtLink to="stack" class="text-green-600 cursor-pointer">{{
          $t("tech_stack")
        }}</NuxtLink
        >.
      </div>
    </div>
  </div>
</template>