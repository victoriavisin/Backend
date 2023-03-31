
class ProductManager  {
    constructor (){
        this.events = []
        this.index = 0
    }

    getProducts = () => {
        return this.events

    }

    addProduct = (title,price,thumbnail,stock) => {
        this.index++
        const id = this.index
        const product = {id,title,price,thumbnail,stock}
        if (!title || !price || !thumbnail || !stock) {
            return console.log ("Falta información del producto")
        }

        this.events.push (product)
    }
}

const manager = new ProductManager()
manager.addProduct ("Alfajor",150,"https://res.cloudinary.com/dyxviqtpy/image/upload/v1679930638/alfajor_wclwfw.jpg",50)
manager.addProduct ("Chocolate", 100,"https://res.cloudinary.com/dyxviqtpy/image/upload/v1679930638/chocolate_xq3fva.jpg",13)
manager.getProducts()
console.log(manager.events)