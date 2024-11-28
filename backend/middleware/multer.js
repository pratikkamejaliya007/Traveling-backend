import multer from "multer";

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"upload")        
    },
    filename: (req, file, cb) => {
        const fileExtension = file.originalname.split('.').pop(); // get file extension
        cb(null, file.fieldname + "-" + Date.now() + "." + fileExtension);
    }
});

// Middleware for handling multiple files
const uploadpic = multer({ storage: Storage }).single("img")

export default uploadpic;