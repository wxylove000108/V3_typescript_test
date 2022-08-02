/*
 * @Author: 王鑫宇 937219635@qq.com
 * @Date: 2022-08-02 10:11:06
 * @LastEditors: 王鑫宇 937219635@qq.com
 * @LastEditTime: 2022-08-02 10:13:50
 * @FilePath: \code-music-player\src\api\music_home.ts
 * @Description:
 *
 * Copyright (c) 2022 by 王鑫宇 937219635@qq.com, All Rights Reserved.
 */
import request from '@/utils/request'

/**
 *
 * @param data
 * @returns
 */

type BannerData = {
  type: number
}
export function getBannerList(data?: BannerData) {
  return request({
    method: 'POST',
    url: '/banner',
    data
  })
}
