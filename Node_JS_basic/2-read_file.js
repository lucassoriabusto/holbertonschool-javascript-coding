const fs = require('fs');

function countStudents(path) {
  try {
    // Leer el archivo CSV
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');

    // Inicializar listas para estudiantes de CS y SWE
    const nameList = [];
    const fieldCS = [];
    const fieldSWE = [];

    for (let i = 1; i < lines.length - 1; i++) {
      const line = lines[i].split(',');

      // Extrae los campos
      const firstname = line[0];
      // const lastname = line[1];
      // const age = line[2];
      const field = line[3];

      // Agrega el nombre a la lista de nombres
      nameList.push(firstname);

      if (field === 'CS') {
        fieldCS.push(firstname); // Agrega el nombre al campo CS
      } else if (field === 'SWE') {
        fieldSWE.push(firstname); // Agrega el nombre al campo SWE
      }
    }

    // Imprime el número total de estudiantes
    console.log(`Number of students: ${nameList.length}`);

    // Imprime el número de estudiantes en cada campo y la lista de nombres
    console.log(`Number of students in CS: ${fieldCS.length}. List: ${fieldCS.join(', ')}`);
    console.log(`Number of students in SWE: ${fieldSWE.length}. List: ${fieldSWE.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
