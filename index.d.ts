import { PluginOption } from 'vite';

export type AliOssOptions = {
	region: string;
	accessKeyId: string;
	accessKeySecret: string;
	bucket: string;
	overwrite?: boolean;
	ignore?: string;
	headers?: Object;
	test?: boolean;
	enabled?: boolean;
} & Record<string, any>;


export default function vitePluginAliOss(options: AliOssOptions): PluginOption;
