'use strict';

const dirTree = require('directory-tree');
const path = require('path');

function dirSidebar (rootPath, subPath = '') {
    const _root = dirTree(path.join(rootPath, subPath), {extensions:/\.md/});
    let sidebar = [];

    if (typeof _root === 'object') {
        const rootChildren = _root.children;
        let _path = '';
        function makeSidebar (parent, children) {
            children.forEach(child => {
                const name = path.parse(child.name).name;
                // console.log(name);
                if (name === 'README') {
                    sidebar.push(parent ? path.join(parent, '/') : '');
                } else if (child.type === 'file') {
                    sidebar.push(path.join(parent, name));
                } else if (child.type === 'directory') {
                    _path = path.join(parent, child.name);
                    makeSidebar(_path, child.children);
                }
            });
        }

        makeSidebar(subPath, rootChildren);
    }

    return sidebar;
};

module.exports = dirSidebar;