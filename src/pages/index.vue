<template>
  <div class="min-w-sm">
    <Headers>
      <!--导航按钮-->
      <div class="nav-btn flex flex-1 items-center">
        <template v-for="item of navBtnList" :key="item.id">
          <div class="left-nav hover:bg-gray-100 cursor-pointer rounded-md flex justify-center items-center w-10 h-10"
               :class="item.icon === Right? 'ml-10' : '' ">
            <Icon :icon-name="item.icon" theme="multi-color" size="28" :fill="['#333' ,'#66798b' ,'#FFF' ,'#43CCF8']" />
          </div>
        </template>
      </div>

      <!--   导航菜单   -->
      <div class="menu flex flex-1 justify-center items-center">
        <template v-for="menu of menuList" :key="menu.id">
          <div
            @click="changeMenu(menu.id)"
            :class="[
            'mr-3','ml-3','px-1.5',
            'py-1','rounded-md',
            'word-break-all',
            'hover:bg-gray-100','text-lg',
            'font-bold','cursor-pointer',
            activeMenuItem === menu.id ? 'color-blue-500' :'']">
            {{ menu.name }}
          </div>
        </template>
      </div>

      <!--   搜索框   -->
      <div class="search flex flex-1 justify-end items-center">
        <div class="search-input w-50 bg-gray-100 flex items-center rounded-md h-8">
          <Icon class="mx-1 mt-1" :icon-name="Search" theme="outline" size="20" fill="#333" />
          <div class="input-s flex items-center flex-1">
            <input v-model="searchValue" style="border: none;width: 87%" class="bg-transparent p-0 outline-none" type="text" placeholder="搜索">
            <Icon @click="clearValue" v-if="isShowClose" class="mt-1 pl-1 pr-1 cursor-pointer" :icon-name="CloseOne" theme="outline" size="18" fill="#333" :strokeWidth="3" />
          </div>
        </div>

        <!--    头像    -->
        <div class="avatar mt-1 cursor-pointer">
          <Icon class="ml-6" :icon-name="Me" theme="outline" size="25" fill="#9CA3AF" :strokeWidth="3"/>
        </div>
      </div>
    </Headers>

    <Mains class="pt-15 pr-15 pl-15 pb-8">
      <router-view/>
      <Footers></Footers>
    </Mains>
  </div>
</template>

<script setup lang="ts">
import { Left, Right,Search,CloseOne,Me } from "@icon-park/vue-next";
import Icon from "@/components/Icon/icon.vue";
import { Ref } from "vue";
import { useInputChange,useMenu } from "@/hooks/useInput"; // 输入框hoooks

type NavBtn = {
  id: number,
  icon: Object
}

type Menu = {
  id: number,
  name: string
}


onMounted(() => {
  document.documentElement.setAttribute("theme", "light");
});

const navBtnList: Ref<NavBtn[]> = ref([
  {
    id: 1,
    icon: markRaw(Left)
  },
  {
    id: 2,
    icon: markRaw(Right)
  }
]);

const menuList: Ref<Menu[]> = ref([
  {
    id: 1,
    name: "首页"
  },
  {
    id: 2,
    name: "发现"
  },
  {
    id: 3,
    name: "音乐库"
  }
]);

const { activeMenuItem,changeMenu } = useMenu()

const { searchValue,isShowClose,clearValue } = useInputChange()

</script>

<style scoped>

@media (max-width: 970px) {
  .nav-btn {
    flex: unset;
  }
}

</style>