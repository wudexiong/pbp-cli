"use strict";
/*
 * @Author: WuDeXiong
 * @Date: 2022-05-01 19:36:22
 * @LastEditors: OBKoro1
 * @LastEditTime: 2022-05-01 20:04:59
 * @FilePath: \pbp-cli\src\order\list.ts
 * @Description: 命令列表
 *
 * Copyright (c) 2022 by WuDeXiong, All Rights Reserved.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
exports.default = {
    name: 'list',
    apply() {
        const files = (0, fs_1.readdirSync)((0, path_1.join)(__dirname));
        files.forEach((path) => {
            if ((0, path_1.extname)(path) === '.js') {
                console.log((0, path_1.basename)(path, '.js'));
            }
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcmRlci9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7O0dBU0c7O0FBRUgsMkJBQWlDO0FBQ2pDLCtCQUErQztBQUMvQyxrQkFBZTtJQUNiLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSztRQUNILE1BQU0sS0FBSyxHQUFHLElBQUEsZ0JBQVcsRUFBQyxJQUFBLFdBQUksRUFBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQzNDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNyQixJQUFJLElBQUEsY0FBTyxFQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGVBQVEsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNwQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMifQ==