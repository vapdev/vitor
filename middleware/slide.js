const map = {
    "index": 1,
    "trajetoria": 2,
    "stack": 3,
    "blog": 4,
    "contato": 5
}

export default defineNuxtRouteMiddleware((to, from) => {
    if (from.name && to.name && map[from.name] !== undefined && map[to.name] !== undefined) {
        const fromIndex = map[from.name];
        const toIndex = map[to.name];
        const goingBack = toIndex < fromIndex;
        // Set the appropriate transition name
        console.log(goingBack);
        if (goingBack) {
            to.meta.pageTransition = { name: 'slide-right' };
        } else {
            to.meta.pageTransition = { name: 'slide-left' };
        }
    }
})