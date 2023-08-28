import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navbarStore', () => {
  const selectedTab = ref('home')

  const setSelectedTab = (tab: string) => {
    selectedTab.value = tab
  }
  return { selectedTab, setSelectedTab }
})