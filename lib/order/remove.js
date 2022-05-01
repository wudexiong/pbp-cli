"use strict";
/*
 * @Author: WuDeXiong
 * @Date: 2022-05-01 19:53:30
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-05-01 20:04:03
 * @FilePath: \pbp-cli\src\order\remove.ts
 * @Description: 删除命令
 *
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const fs_1 = require("fs");
const path_1 = require("path");
exports.default = {
    name: 'remove',
    apply({ params }) {
        const cmd = params[0];
        if (!cmd || index_1.specialField.indexOf(cmd) >= 0) {
            return console.log('要删除的命令不存在或该命令为特殊字段，无法删除！');
        }
        try {
            (0, fs_1.rmSync)((0, path_1.join)(__dirname, cmd));
            console.log('删除成功！');
        }
        catch (e) {
            console.log('删除失败！');
        }
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL29yZGVyL3JlbW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OztHQVNHOztBQUVILG9DQUFxRDtBQUNyRCwyQkFBNEI7QUFDNUIsK0JBQTRCO0FBQzVCLGtCQUFlO0lBQ2IsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQWU7UUFDM0IsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLElBQUksb0JBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSTtZQUNGLElBQUEsV0FBTSxFQUFDLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0NBQ0YsQ0FBQyJ9