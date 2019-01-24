'use strict';

const dirTree = require('directory-tree');
const path = require('path');

function dirSidebar (rootPath, subPath = '') {
    const _root = dirTree(path.join(rootPath, subPath), {extensions:/\.md/});
    let sidebar = [];

    if (typeof _root === 'object') {
        const rootChildren = _root.children;
        function makeSidebar (parent, children) {
            children.forEach(child => {
                const name = path.parse(child.name).name;
                // console.log(name);
                if (name === 'README') {
                    sidebar.push(parent ? path.join(parent, '') : '');
                } else if (child.type === 'file') {
                    sidebar.push(path.join(parent, name));
                } else if (child.type === 'directory') {
                    makeSidebar(child.name.concat('/'), child.children);
                }
            });
        }

        makeSidebar(subPath, rootChildren);
    }

    // console.log(sidebar);
    // if (subPath === 'core/') console.log(debug);
    return sidebar;
};

module.exports = dirSidebar;