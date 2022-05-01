"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const index_1 = require("../index");
exports.default = {
    naem: 'register',
    /**
     * @description: 注册命令
     * @param {string} contextType
     * @return {void}
     */
    apply({ params }) {
        const path = params[0];
        if ((0, path_1.extname)(path) !== '.js') {
            return console.log('命令注册文件必须是.js文件');
        }
        if (index_1.specialField.indexOf((0, path_1.basename)(path, '.js')) >= 0) {
            return console.log('该命令为特殊字段，无法注册！');
        }
        try {
            (0, fs_1.copyFileSync)((0, path_1.join)(path), (0, path_1.join)(__dirname + '/' + (0, path_1.basename)(path)));
            console.log('注册命令成功');
        }
        catch (e) {
            console.log('注册失败！');
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3JkZXIvcmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7R0FTRzs7QUFFSCwrQkFBK0M7QUFDL0MsMkJBQWtDO0FBQ2xDLG9DQUFxRDtBQUVyRCxrQkFBZTtJQUNiLElBQUksRUFBRSxVQUFVO0lBQ2hCOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQWU7UUFDM0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBQSxjQUFPLEVBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQzNCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxvQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFBLGVBQVEsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDdEM7UUFDRCxJQUFJO1lBQ0YsSUFBQSxpQkFBWSxFQUFDLElBQUEsV0FBSSxFQUFDLElBQUksQ0FBQyxFQUFFLElBQUEsV0FBSSxFQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBQSxlQUFRLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0NBQ0YsQ0FBQyJ9