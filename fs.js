//create a file and write content
const fs = require('fs/promises')

const createFile = async (filename, data) => {
    try{
        await fs.writeFile(filename, data)
        console.log("File was successfully created!")
    } catch (error){
        console.log(error)
    }
}

createFile('f1.txt', 'Welcome to my first Node.js code')

//Read file
const readfile = async (fileToRead) => {
    try {
        const data = await fs.readFile(fileToRead)
        console.log(data.toString());
    } catch (error) {
        console.log(error);
    }
}

readfile('f1.txt')
