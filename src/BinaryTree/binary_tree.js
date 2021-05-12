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

BinaryTree.prototype.lookup = function(val){
    let response = {hasValue: false, parentNode: null, currentNode: null}
    if(this.root === null){
        return response
    }
    
    const lookupRecursively = function(node, parentNode){
        if(node.data === val){
            response = {hasVal: true, parentNode, currentNode: node}
            return response
        }
        if(node.data > val){
            lookupRecursively(node.leftNode, node)
        }else if(node.data < val){
            lookupRecursively(node.rightNode, node)
        }
    }

    lookupRecursively(this.root, null)

    return response
}

BinaryTree.prototype.remove = function (data){
    
}

const bt = new BinaryTree()
bt.insert(10)
bt.insert(9)
bt.insert(13)
console.log(bt)
console.log(bt.lookup(9))