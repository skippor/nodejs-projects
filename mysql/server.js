var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    port: '3306',
    database: 'test'
});

connection.connect();

/*
CREATE TABLE courses (
    course_id INT NOT NULL AUTO_INCREMENT,
    course_name CHAR(40) NOT NULL,
    course_grade FLOAT NOT NULL,
    course_info CHAR(100) NULL,
    PRIMARY KEY(course_id)
);

INSERT INTO courses
(course_id,course_name,course_grade,course_info)
VALUES(1,'Network',3,'Computer Network');

INSERT INTO courses
(course_name,course_info,course_id,course_grade)
VALUES('Database','MySQL',2,3);

INSERT INTO courses
(course_name,course_grade,course_info)
VALUES('System',3,'Operation System');
*/

var sql = 'SELECT * FROM courses';
//查
connection.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------courses----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

connection.end();