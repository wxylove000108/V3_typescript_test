/**
 * @Description:
 * @author 王鑫宇
 * @date 2022/8/3
 */

export function useInputChange() {
  const searchValue = ref<string>('')

  const isShowClose = computed(() => !!searchValue.value)
  const clearValue = () => {
    searchValue.value = ''
  }

  return {
    searchValue,
    isShowClose,
    clearValue
  }
}

export function useMenu() {
  const activeMenuItem = ref<number>(1)

  const changeMenu = (id: number) => {
    activeMenuItem.value = id
  }

  return {
    changeMenu,
    activeMenuItem
  }
}
