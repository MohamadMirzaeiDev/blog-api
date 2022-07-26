const multer = require('multer');
const mkdir = require('mkdirp');

const storage  = multer.diskStorage({
    destination : function(req , file , cb){
        mkdir('public/uploads').then(made=>{
            cb(null , 'public/uploads');
        })
    } ,
    filename: function(req , file , cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null ,uniqueSuffix + '-' + file.originalname) ;
    } ,

})

const upload = multer({storage : storage ,limits : 1 * 1000 * 1000});

module.exports = upload ;