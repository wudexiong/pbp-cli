"use strict";
/*
 * @Author: WuDeXiong
 * @Date: 2022-04-30 16:27:39
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-05-01 20:11:26
 * @FilePath: \pbp-cli\src\index.ts
 * @Description: 入口文件
 *
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.specialField = void 0;
const commander_1 = require("commander");
// 特殊字段命令（禁止注册删除！）
exports.specialField = ['register', 'remove', 'list'];
/* eslint-disable @typescript-eslint/no-var-requires */
commander_1.program
    .version(`v${require('../package.json').version}`, '-v -V --version')
    .usage('pbp-cli <cmd> [params...]')
    .arguments('<cmd> [params...]')
    .action((cmd, params) => {
    try {
        const res = require('./order/' + cmd);
        const context = {
            program: commander_1.program,
            params,
        };
        res.default ? res.default.apply(context) : res.apply(context);
    }
    catch (e) {
        console.log(cmd + ' 不存在这个命令');
    }
})
    .parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7R0FTRzs7O0FBRUgseUNBQTZDO0FBTzdDLGtCQUFrQjtBQUNMLFFBQUEsWUFBWSxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUUzRCx1REFBdUQ7QUFDdkQsbUJBQU87S0FDSixPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQztLQUNwRSxLQUFLLENBQUMsMkJBQTJCLENBQUM7S0FDbEMsU0FBUyxDQUFDLG1CQUFtQixDQUFDO0tBQzlCLE1BQU0sQ0FBQyxDQUFDLEdBQVcsRUFBRSxNQUFnQixFQUFFLEVBQUU7SUFDeEMsSUFBSTtRQUNGLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDdEMsTUFBTSxPQUFPLEdBQUc7WUFDZCxPQUFPLEVBQVAsbUJBQU87WUFDUCxNQUFNO1NBQ1AsQ0FBQztRQUNGLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQy9EO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQztLQUMvQjtBQUNILENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMifQ==