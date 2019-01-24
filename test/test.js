'use strict';

const expect = require('chai').expect;
const dirTree = require('directory-tree');
const path = require('path');
const dirSidebar = require('../lib/vuepress-dir-sidebar');

describe('dirSidebar', () => {
    it('should return sidebar Array', () => {
        const rootPath = path.join(__dirname, '/testdir1');
        const sidebar = dirSidebar(rootPath);
        expect(sidebar).deep.equal([ '', 'core/tasks', 'core/users', 'license/licenses' ]);
	});

    it('should return sidebar Array', () => {
        const rootPath = path.join(__dirname, '/testdir1/project');
        const sidebar = dirSidebar(rootPath);
        expect(sidebar).deep.equal([]);
	});

    it('should return sidebar Array', () => {
        const rootPath = path.join(__dirname, '/testdir1/core');
        const sidebar = dirSidebar(rootPath);
        expect(sidebar).deep.equal([ 'tasks', 'users' ]);
	});

    it('should return sidebar Array', () => {
        const rootPath = path.join(__dirname, '/testdir2/');
        const sidebar = dirSidebar(rootPath);
        expect(sidebar).deep.equal([ 'meteor/', 'meteor/official/', 'meteor/official/guide/', 'meteor/todo', 'nodejs-api-ts-mongo-ecs' ]);
	});

    it('should return sidebar Array', () => {
        const rootPath = path.join(__dirname, '/testdir2/');
        const sidebar = dirSidebar(rootPath, 'meteor');
        expect(sidebar).deep.equal([ 'meteor/', 'meteor/official/', 'meteor/official/guide/', 'meteor/todo' ]);
	});

    it('should return sidebar Array', () => {
        const rootPath = path.join(__dirname, '/testdir2/');
        const sidebar = dirSidebar(rootPath, 'meteor/official');
        expect(sidebar).deep.equal([ 'meteor/official/', 'meteor/official/guide/' ]);
	});
});
