"use strict";
/*
 * @Author: WuDeXiong
 * @Date: 2022-04-30 23:14:46
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-05-01 00:00:28
 * @FilePath: \pbp-cli\src\plugins\register.ts
 * @Description:
 *
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
/**
 * @description: 注册组件（命令）
 * @param {string} path
 * @return {void}
 */
function register(path) {
    (0, fs_1.copyFileSync)((0, path_1.join)(path), (0, path_1.join)(__dirname + '/' + (0, path_1.basename)(path)));
    /* eslint-disable @typescript-eslint/no-var-requires */
    const res = require('./' + (0, path_1.basename)(path));
    res.default
        ? res.default.apply({ name: '成功' })
        : res.apply({ name: '成功' });
}
exports.register = register;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGx1Z2lucy9yZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OztHQVNHOzs7QUFFSCwrQkFBc0M7QUFDdEMsMkJBQWtDO0FBQ2xDOzs7O0dBSUc7QUFDSCxTQUFnQixRQUFRLENBQUMsSUFBWTtJQUNuQyxJQUFBLGlCQUFZLEVBQUMsSUFBQSxXQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUUsSUFBQSxXQUFJLEVBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFBLGVBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsdURBQXVEO0lBQ3ZELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBQSxlQUFRLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMzQyxHQUFHLENBQUMsT0FBTztRQUNULENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFQRCw0QkFPQyJ9