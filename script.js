const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('colorBox');
const savedColorsContainer = document.getElementById('savedColors');

let savedColors = JSON.parse(localStorage.getItem('colors')) || [];

function updateColor(color) {
    document.body.style.backgroundColor = color;
    colorBox.style.backgroundColor = color;
    
    if (!savedColors.includes(color)) {
        savedColors.push(color);
        localStorage.setItem('colors', JSON.stringify(savedColors));
        renderSavedColors();
    }
}

function renderSavedColors() {
    savedColorsContainer.innerHTML = '';
    savedColors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'saved-color';
        colorDiv.style.backgroundColor = color;
        colorDiv.title = color;
        colorDiv.onclick = () => {
            colorPicker.value = color;
            updateColor(color);
        };
        savedColorsContainer.appendChild(colorDiv);
    });
}

colorPicker.addEventListener('change', (e) => {
    updateColor(e.target.value);
});

// Initialize
updateColor(colorPicker.value);
renderSavedColors();
