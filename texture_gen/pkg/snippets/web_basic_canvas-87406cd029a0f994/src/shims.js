export function getCanvasGlContext(canvas, antialias, alpha) {
    const context = canvas.getContext('webgl2', {
        antialias: antialias,
        alpha: alpha,
    });
    console.log('webgl2 context:', context);
    return context;
}

export function getOffscreenCanvasGlContext(canvas, antialias, alpha) {
    const context = canvas.getContext('webgl2', {
        antialias: antialias,
        alpha: alpha,
    });
    console.log('webgl2 context:', context);
    return context;
}

export function downloadOffscreenCanvasBlob(canvas) {
    canvas.convertToBlob().then((blob) => saveFile(blob, "texture"));
}

export function downloadModelFile(model_string, filename) {
    const blob = new Blob([model_string], { type: 'text/plain' });
    saveFile(blob, filename + ".obj");
}

const saveFile = (blob, filename) => {
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    link.download = filename; // TODO: name as param

    document.body.appendChild(link);
    link.click();

    // apparently need setTimeout for firefox
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

export function show_modal(el) {
    el.showModal()
}

export function close_dialog(el) {
    el.close()
}

export function formdata_entries(formdata) {
    return formdata.entries()
}
