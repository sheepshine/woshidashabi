const MacroCommand = function () {
    return {
        commandsList: [],
        add: function (item) {
            console.log(item, 'item')
            this.commandsList.push(item)
        },
        execute: function() {
            for (let i = 0; i<this.commandsList.length; i++) {
                this.commandsList[i].execute()
            }
        }
    }
}

const openAcCommand = {
    execute: function () {
        console.log('打开空调')
    }
}
const openTvCommand = {
    execute: function () {
        console.log('打开电视')
    }
}
const openSoundCommand = {
    execute: function () {
        console.log('打开音响')
    }
}
let macroCommand1 = MacroCommand()
macroCommand1.add(openTvCommand)
macroCommand1.add(openSoundCommand)

let macroCommand = MacroCommand()

macroCommand.add(macroCommand1)
macroCommand.add(openAcCommand)
macroCommand.execute()