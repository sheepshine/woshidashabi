const Folder = function (name) {
    this.name = name
    this.parent = null
    this.files = []
}

Folder.prototype.add = function (file) {
    file.parent = this
    this.files.push(file)
}

Folder.prototype.scan = function () {
    console.log('开始扫描文件夹：', this.name)
    for (let i = 0; i< this.files.length; i++) {
        this.files[i].scan()
    }
}

Folder.prototype.remove = function () {
    if (!this.parent) {
        return
    }
    for (let i = 0; i < this.parent.files.length; i++) {
        if (this.parent.files[i] === this) {
            this.parent.files.splice(i, 1)
        }
    }
}

const File = function (name) {
    this.name = name
}

File.prototype.add = function(){ 
    throw new Error( '文件下面不能再添加文件' )
}

File.prototype.scan = function(){ 
    console.log( '开始扫描文件: ' + this.name )
}

const folder = new Folder( '学习资料' )
const folder1 = new Folder( 'JavaScript' )
const folder2 = new Folder ( 'jQuery' )
const file1 = new File( 'JavaScript 设计模式与开发实践' )
const file2 = new File( '精通 jQuery' )
const file3 = new File( '重构与模式' )
folder1.add( file1 )
folder2.add( file2 )
folder.add( folder1 )
folder.add( folder2 )
folder.add( file3 )

const folder3 = new Folder( 'Nodejs' )
const file4 = new File( '深入浅出 Node.js' )
folder3.add( file4 )
const file5 = new File( 'JavaScript 语言精髓与编程实践' )

folder.add( folder3 )
folder.add( file5 )

folder2.remove()
folder.scan()