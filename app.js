const validator=require('validator')
const chalk=require('chalk')
const notes=require('./notes.js')
const yargs=require('yargs')

//customize yargs version
yargs.version('1.1.0')
//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        body:{
            describe:'Write body',
            demandOption:true,
            type:'string'
        },
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.addNotes(argv.title,argv.body)
        console.log('Note Added')
    }
})
//create remove command
yargs.command({
    command:'remove',
    describe:"Remove a note",
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
//create list command
yargs.command({
    command: 'list',
    describe:'Listing out all the notes',
    handler: function(){
        console.log('List of all the notes')
    }
})
yargs.command({
    command:'read',
    describe:'Read a note',
    handler(){
        console.log('Reading out notes')
    }
})
//add,remove,list,read
// console.log(process.argv)
// console.log(yargs.argv)
yargs.parse()

// const command=process.argv[2]
// console.log(process.argv)
// if(command==='add'){
//     console.log('Adding note!')
// }else if(command==='remove'){
//     console.log('Removing Notes!')
// }


// const name='Rakshita'

// console.log(name)
// console.log(validator.isEmail('example.com'))
// console.log(validator.isURL('https://mead.io'))
// console.log(chalk.green('Success'))
// console.log(chalk.blue('Failure')+chalk.bold.red.bgYellow('Failure'))
// console.log(chalk.green.inverse('Inversed'))
// console.log(process.argv[2])











 



































// const fs=require('fs') //a constant fs given the refer the module named fs

// fs.writeFileSync('notes.txt','My name is rakshita jain')

//  fs.appendFileSync('notes.txt','\nThis is appended text')

// const notes=require('./notes.js')
// const sum=add(3,4)


// console.log(notes())
