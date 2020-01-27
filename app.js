
document.addEventListener("keydown", evt => {
    if (evt.code === 'ArrowRight') {
        console.log("Right", move(10));
    }

    if (evt.code === 'ArrowLeft') {
        console.log("Left", move(10, -1));
    }

    if (evt.code === 'ArrowUp') {
        console.log("Up", move(10));
    }

    if (evt.code === 'ArrowDown') {
        console.log("Down", move(10, -1));
    }
});