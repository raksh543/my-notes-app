const fs=require('fs')
const chalk=require('chalk')

const getNotes= () => {
    return 'Your Notes...'
}

const addNotes=function(title,body){
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note) => note.title === title )

    

    // const duplicateNotes=notes.filter(function(note){
    //     return note.title === title 

    // })

    if(duplicateNotes.length===0){
        notes.push({
            title: title,
            body: body
        })    
        saveNotes(notes)
        console.log('Note added Successfully!!')
    } else{
        console.log("Note title taken. Set another title.")
    }


}
const removeNotes=function(title){
    console.log(title)
    const notes=loadNotes()
    const notesToKeep=notes.filter(function(note){
        return note.title!==title
    })
    saveNotes(notesToKeep)
    if(notes.length>notesToKeep.length){
         console.log(chalk.green.inverse('note deleted successfully!'))
    } else{
        console.log(chalk.inverse.red('No notes found'))
    }
    
    
    }


const saveNotes = function (notes) {
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes=function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJson=dataBuffer.toString()
        const parsedData=JSON.parse(dataJson)
        return parsedData
    }catch(e){
        return []
    }
    
}


module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes
}