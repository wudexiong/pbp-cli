/*
 * @Author: WuDeXiong
 * @Date: 2022-04-30 23:14:46
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-05-01 20:10:49
 * @FilePath: \pbp-cli\src\order\register.ts
 * @Description: 注册命令功能
 *
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */

import { join, basename, extname } from 'path';
import { copyFileSync } from 'fs';
import { contextType, specialField } from '../index';

export default {
  naem: 'register',
  /**
   * @description: 注册命令
   * @param {string} contextType
   * @return {void}
   */
  apply({ params }: contextType) {
    const path = params[0];
    if (extname(path) !== '.js') {
      return console.log('命令注册文件必须是.js文件');
    }
    if (specialField.indexOf(basename(path, '.js')) >= 0) {
      return console.log('该命令为特殊字段，无法注册！');
    }
    try {
      copyFileSync(join(path), join(__dirname + '/' + basename(path)));
      console.log('注册命令成功');
    } catch (e) {
      console.log('注册失败！');
    }
  },
};
