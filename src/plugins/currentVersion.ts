import { readFileSync } from 'fs'
import { resolve } from 'path'

export function currentVersion() {
    const pkg = JSON.parse(readFileSync(resolve(process.cwd(), 'package.json'), 'utf-8'))
    const ver: string = pkg.version

    return {
        name: 'version-inject',
        transform(code: string, id: string) {
            if (!id.endsWith('.ts')) return null
            if (!code.includes('const version')) return null

            return code.replace(
                /const version\s*=\s*(['"`])[^'"`]*\1/,
                `const version = '${ver}'`
            )
        }
    }
}