import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import glsl from 'rollup-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
		}),
		glsl({
			include: '**/*.glsl',
			exclude: ['**/index.html'],
		}),
	],
});