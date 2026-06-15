/// <reference types="vite/client" />

declare module 'virtual:file-count' {
    export const fileCount: number
}

declare module '*.png' {
    const src: string
    export default src
}

declare module '*.svg' {
    const src: string
    export default src
}

declare module '*.jpg' {
    const src: string
    export default src
}