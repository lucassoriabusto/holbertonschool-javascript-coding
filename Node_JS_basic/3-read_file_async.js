const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.promises.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n');

        const nameList = [];
        const fieldCS = [];
        const fieldSWE = [];

        for (let i = 1; i < lines.length - 1; i += 1) {
          const line = lines[i].split(',');

          const firstname = line[0];
          const field = line[3];

          nameList.push(firstname);

          if (field === 'CS') {
            fieldCS.push(firstname);
          } else if (field === 'SWE') {
            fieldSWE.push(firstname);
          }
        }

        const result = {
          totalStudents: nameList.length,
          studentsInCS: {
            count: fieldCS.length,
            list: fieldCS.join(', '),
          },
          studentsInSWE: {
            count: fieldSWE.length,
            list: fieldSWE.join(', '),
          },
        };

        console.log(`Number of students: ${result.totalStudents}`);
        console.log(`Number of students in CS: ${result.studentsInCS.count}. List: ${result.studentsInCS.list}`);
        console.log(`Number of students in SWE: ${result.studentsInSWE.count}. List: ${result.studentsInSWE.list}`);

        resolve(result);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
