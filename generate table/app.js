document.addEventListener('DOMContentLoaded', () => {
    const rowsInput = document.getElementById('rowsInput');
    const columnsInput = document.getElementById('columnsInput');
    const generateBtn = document.getElementById('generateBtn');
    const tableContainer = document.getElementById('tableContainer');
  
    generateBtn.addEventListener('click', generateTable);
  
    function generateTable() {
      const rows = parseInt(rowsInput.value);
      const columns = parseInt(columnsInput.value);
  
      if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert('Please enter valid numbers for rows and columns.');
        return -1;
      }
  
      let tableHTML = '<table>';
      for (let i = 0; i < rows; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < columns; j++) {
          tableHTML += `<td> ${i + 1} </td>`;
        }
        tableHTML += '</tr>';
      }
      tableHTML += '</table>';
  
      tableContainer.innerHTML = tableHTML;
    }
  });
 