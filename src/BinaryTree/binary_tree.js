function BTNode(data){
    this.data = data
    this.leftNode = null
    this.rightNode = null
}

function BinaryTree(){
    this.root = null
}

BinaryTree.prototype.insert = function(data){
    const node = new BTNode(data)
    if(!this.root){
        this.root = node
    }else {       
        insertLeftOrRight(this.root, node)
    }
}

function insertLeftOrRight(oldNode, newNode){
    if(oldNode.data > newNode.data){
        if(oldNode.leftNode === null){
            oldNode.leftNode = newNode
        }else {
            insertLeftOrRight(oldNode.leftNode, newNode)
        }
    }else {
        if(oldNode.rightNode === null){
            oldNode.rightNode = newNode
        }else {
        insertLeftOrRight(oldNode.rightNode, newNode)
        }
    }
}

const bt = new BinaryTree()
bt.insert(10)
bt.insert(12)
bt.insert(13)
console.log(bt)
/* function insertRight(oldNode, node){
    if(oldNode === null){
        oldNode.data = node
    }else if(oldNode.data < node.data){
        insertLeft(oldNode.leftNode, newNode)
    }else {
        insertRight(oldNode.rightNode, newNode)
    }
} */