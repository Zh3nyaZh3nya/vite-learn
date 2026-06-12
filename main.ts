import '@/assets/css/style.scss';
import { mainPage } from "@/scripts/mainPage";
import { setupCounter } from '@/utils/counter.js'

const app: HTMLElement | null = document.querySelector('#app')
if (app) {
    app.innerHTML = mainPage()
    setupCounter(document?.querySelector('#counter'))
}
