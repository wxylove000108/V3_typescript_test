
<template>
  <router-view/>
</template>

<script setup lang="ts">
  import { onMounted,ref,Ref } from 'vue'
  import { getBannerList } from '@/api/music_home'
  const bannerList:Ref<string[]> = ref([])
  onMounted(async () => {
    const res = await getBannerList({type:2})
    console.log(res)
    bannerList.value = res.data.banners
  })
</script>


<style scoped>

</style>
