// text area
const textArea = document.getElementById('text-area');

// common function 
function bgAdd(btnId) {
    const btn = document.getElementById(btnId);
    btn.classList.remove('bg-transparent');
    btn.classList.add('bg-violet-500');
};
function bgRemove(btnId) {
    const btn = document.getElementById(btnId);
    btn.classList.remove('bg-violet-500');
    btn.classList.add('bg-transparent');
};


let bold = 0
document.getElementById('btn-bold').addEventListener('click', function () {
    if (bold === 0) {
        bgAdd('btn-bold');
        textArea.style.fontWeight = 'bold';
        bold = 1;
    } else {
        bgRemove('btn-bold');
        textArea.style.fontWeight = 'normal';
        bold = 0;
    }

});

let italic = 0;
document.getElementById('btn-italic').addEventListener('click', function () {
    if (italic === 0) {
        bgAdd('btn-italic');
        textArea.style.fontStyle = 'italic';
        italic = 1;
    } else {
        bgRemove('btn-italic');
        textArea.style.fontStyle = 'normal';
        italic = 0;
    }
});

let underline = 0;
document.getElementById('btn-underline').addEventListener('click', function () {
    if (underline === 0) {
        bgAdd('btn-underline');
        textArea.style.textDecoration = 'underline';
        underline = 1;
    } else {
        bgRemove('btn-underline');
        textArea.style.textDecoration = 'none';
        underline = 0;
    }
});

 bgAdd('btn-left');
document.getElementById('btn-left').addEventListener('click', function () {
    textArea.style.textAlign = 'left';
    bgAdd('btn-left');
    bgRemove('btn-center');
    bgRemove('btn-right');
});
document.getElementById('btn-center').addEventListener('click', function () {
    textArea.style.textAlign = 'center'; {
    bgAdd('btn-center');
    bgRemove('btn-left')
    bgRemove('btn-right')
    }
});
document.getElementById('btn-right').addEventListener('click', function () {
    textArea.style.textAlign = 'right';
    bgAdd('btn-right');
    bgRemove('btn-left')
    bgRemove('btn-center')

});


document.getElementById('font-size').addEventListener('input', function (event) {
    textArea.style.fontSize = event.target.value + 'px';
})

document.getElementById('font-color').addEventListener('input', function (event) {
    textArea.style.color = event.target.value;
})
