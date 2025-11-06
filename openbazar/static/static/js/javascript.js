const selectAll = document.getElementById('multi-select-all');
const rowCheckboxes = document.querySelectorAll('.multi-row-checkbox');
const deleteBtn = document.getElementById('multi-delete-btn');
const exportBtn = document.getElementById('multi-export-btn');

function updateButtons() {
    const anyChecked = Array.from(rowCheckboxes).some(cb => cb.checked);
    deleteBtn.disabled = !anyChecked;
    exportBtn.disabled = !anyChecked;
}

selectAll.addEventListener('change', () => {
    rowCheckboxes.forEach(cb => cb.checked = selectAll.checked);
    updateButtons();
});

rowCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
    if (!cb.checked) selectAll.checked = false;
    else if (Array.from(rowCheckboxes).every(cb => cb.checked)) selectAll.checked = true;
    updateButtons();
    });
});

deleteBtn.addEventListener('click', () => {
    const selectedRows = Array.from(rowCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.closest('tr'));
    selectedRows.forEach(row => row.remove());
    selectAll.checked = false;
    updateButtons();
});

exportBtn.addEventListener('click', () => {
    const selectedData = Array.from(rowCheckboxes)
    .filter(cb => cb.checked)
    .map(cb => {
        const cells = cb.closest('tr').querySelectorAll('td');
        return {
        product: cells[1].innerText,
        category: cells[2].innerText,
        price: cells[3].innerText
        };
    });
    console.log("Exported Data:", selectedData);
    alert("Exported " + selectedData.length + " items (check console).");
});