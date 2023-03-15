var http = require('http'); 
var fs = require('fs'); 
var formidable = require('formidable'); 
 
// 包含上传表单的html文件
var upload_html = fs.readFileSync("upload.html"); 
 
// 将其替换为保存上传文件的位置
var upload_path = "/tmp/upload/"; 
 
http.createServer(function (req, res) { 
    if (req.url == '/upload/input') { 
      res.writeHead(200); 
      res.write(upload_html); 
      return res.end(); 
    } else if (req.url == '/upload/file') { 
        var form = new formidable.IncomingForm(); 
        form.parse(req, function (err, fields, files) { 
            // oldpath：文件保存到的临时文件夹
            console.log(files);
            var oldpath = files.filetoupload.filepath; 
            var newpath = upload_path + files.filetoupload.originalFilename; 
            // 将文件复制到新位置
            fs.rename(oldpath, newpath, function (err) { 
                if (err) throw err; 
                // 您可能会用另一个html页面进行响应
                res.write('File uploaded and moved!'); 
                res.end(); 
            }); 
        }); 
    }  
 }).listen(3000);
