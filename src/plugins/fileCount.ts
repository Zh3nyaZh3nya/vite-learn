import fg from 'fast-glob';

export default function fileCount() {
    const virtualModuleId = 'virtual:file-count';
    const resolvedVirtualModuleId = '\0' + virtualModuleId;

    return {
        name: 'virtual-plugin-file-count',
        resolveId(id: string) {
            if (id === virtualModuleId) return resolvedVirtualModuleId
        },
        async load(id: string) {
            if (id === resolvedVirtualModuleId) {
                const files = await fg(['src/**/*.{js,ts,scss,png,svg,jpg}'], {
                    ignore: ['**/node_modules/**', '**/dist/**', '**/.idea/**', '**/git/**']
                });

                return `export const fileCount = ${files.length}`
            }
        }
    }
}