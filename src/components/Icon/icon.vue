<template>
  <component :is="iconName" :theme="theme" :size="size" :fill="fill"></component>
</template>

<script setup lang="ts">
type IconType = {
  name:string,
  props:Array<string>,
  setup:() => void
}
const props = defineProps<{
  iconName:{
    type:IconType,
    default:() => {}
  },
  theme:string,
  size?:string,
  fill?:Array<string> | string,
  strokeWidth?:number
}>()

console.log(props.iconName);
</script>