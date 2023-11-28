function updateShape() {
    // Retrieve border-radius values from user input
    const topLeft = document.getElementById('topLeft').value + 'px';
    const topRight = document.getElementById('topRight').value + 'px';
    const bottomLeft = document.getElementById('bottomLeft').value + 'px';
    const bottomRight = document.getElementById('bottomRight').value + 'px';

    // Apply border-radius to the shape
    const shape = document.getElementById('shape');
    shape.style.borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
}

function copyToClipboard() {
    // Retrieve CSS from the shape
    const shape = document.getElementById('shape');
    const cssValue = window.getComputedStyle(shape).getPropertyValue('border-radius');

    // Copy CSS to clipboard
    navigator.clipboard.writeText(`border-radius: ${cssValue};`);
    alert('CSS copied to clipboard!');
}
