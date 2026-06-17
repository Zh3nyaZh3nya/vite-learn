export function setupCounter(element: HTMLElement | null | undefined): void {
    if (!element) {
        return
    }

    let counter: number = 0

    const setCounter = (count: number): void => {
        counter = count
        element.innerHTML = `Count is ${counter}`
    }

    element.addEventListener('click', (): void => setCounter(counter + 1))
    setCounter(0)
}
