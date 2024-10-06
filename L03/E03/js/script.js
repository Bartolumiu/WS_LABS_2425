document.addEventListener('DOMContentLoaded', function() {
    let selector = document.getElementById('combobox');

    selector.addEventListener('change', function() {
        let selected = selector.options[selector.selectedIndex].value;
        console.log('Selected: ' + selected);
    });
});