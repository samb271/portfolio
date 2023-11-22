import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectsVisibilityStore = defineStore('projectsVisibility', () => {
  const isVisible = ref(false)
  const getVisibility = computed(() => isVisible.value)
  function toggle() {
    isVisible.value = !isVisible.value
  }

  return { getVisibility, toggle }
})