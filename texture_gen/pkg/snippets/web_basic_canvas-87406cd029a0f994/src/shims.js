export function getCanvasGlContext(canvas) {
    const context = canvas.getContext('webgl2', {
        antialias: false,
    });
    console.log('webgl2 context:', context);
    return context;
}

export function getOffscreenCanvasGlContext(canvas) {
    const context = canvas.getContext('webgl2', {
        antialias: false,
    });
    console.log('webgl2 context:', context);
    return context;
}

export function downloadOffscreenCanvasBlob(canvas) {
    canvas.convertToBlob().then((blob) => saveFile(blob));
}

const saveFile = (blob) => {
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    link.download = "reaction_diffusion"; // TODO: filename s param

    document.body.appendChild(link);
    link.click();

    // Apperantly needed for firefox
    setTimeout(() => {
        URL.revokeObjectURL(link.href);
        link.parentNode.removeChild(link);
    }, 0);
}

export function getCanvas2DContext(canvas) {
    const context = canvas.getContext('2d')
    console.log('2d context:', context);
    return context;
}

export function sleep_ms(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function time_now() {
    return window.performance.now();
}

export function connect_input_elements(element_a, element_b) {
    element_b.value = element_a.value;
    element_a.oninput = (event) => element_b.value = event.target.value;
    element_b.oninput = (event) => element_a.value = event.target.value;
}