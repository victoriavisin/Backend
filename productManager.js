const fs = require('fs')



class ProductManager  {
    constructor (){
        this.events = []
        this.index = 0
        this.path = './productos.json'
    }

    getProducts = () => {
        return this.events

    }

    addProduct = (title,price,description,thumbnail,code,stock) => {
        this.index++
        const id = this.index
        const product = {id,title,price,description,thumbnail,code,stock}
        if (!title || !price || !description|| !thumbnail || !stock) {
            return console.log ("Falta información del producto")
        }

        this.events.push (product)
        fs.writeFileSync('./productos.json', JSON.stringify(product, null, '\t'))
    }

    deleteProduct(id) {
        const producId = id;
        this.events = this.events.filter((produc) => produc.id !== producId); 
        JSON.parse(fs.readFileSync(this.path, "utf-8"))  
      }

    getProductById (id) {
        this.events = this.events.find(e=> e.id === id)
        JSON.parse(fs.readFileSync(this.path, "utf-8"))
    }


    
}

const manager = new ProductManager()

manager.addProduct ("Alfajor",150,"Alfajor simple de chocolate y relleno con dulce de leche","https://res.cloudinary.com/dyxviqtpy/image/upload/v1679930638/alfajor_wclwfw.jpg","dsjdsi",50)
manager.addProduct ("Chocolate", 100,"Barra de chocolate amargo","https://res.cloudinary.com/dyxviqtpy/image/upload/v1679930638/chocolate_xq3fva.jpg","dsjdsy",13)
manager.getProducts()
console.log(manager.events)
manager.deleteProduct();
manager.getProductById();


