<script setup>
import { useNavbarStore } from '~/store/navbar'
import { storeToRefs } from 'pinia'

const navbarStore = useNavbarStore()
const { selectedTab } = storeToRefs(navbarStore)
const { setSelectedTab } = navbarStore

definePageMeta({
  middleware: [
    'blog',
  ],
});
</script>

<template>
  <div>
    <Trajetoria v-if="selectedTab == 'trajetoria'" />
    <Stack v-if="selectedTab == 'stack'" />
    <div v-if="selectedTab == 'home'">
      <div class="mb-6 text-green-600">
        <span class="text-6xl">{{ $t('hello') }}</span>
        <span class="text-6xl font-bold"> Vitor</span>
      </div>
      <div>
        {{ $t('apresentacao') }}
      </div>

      <div class="mt-6">
        {{ $t('conhecer_melhor') }} <a class="text-green-600 cursor-pointer"
          @click="setSelectedTab('trajetoria')">{{ $t('trajetoria') }}</a> {{ $t('ou_a_minha') }} <a class="text-green-600 cursor-pointer"
          @click="setSelectedTab('stack')">{{ $t('tech_stack') }}</a>.
      </div>
  </div>
</div></template>