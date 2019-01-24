'use strict';

const expect = require('chai').expect;
const dirTree = require('directory-tree');
const path = require('path');
const dirSidebar = require('../lib/vuepress-dir-sidebar');

describe('Test: directoryTree', () => {
    it('should return sidebar Array', () => {
        const rootPath = path.join(__dirname, '/test-dir');
        const sidebar = dirSidebar(rootPath);
        expect(sidebar).deep.equal([ '', 'core/tasks', 'core/users', 'license/licenses' ]);
	});
});