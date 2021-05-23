new Vue({
    el: '#app',
    data: {
        title: "hasan",
        items: [
            
        ],
        newProduct: '',
        editIndex:'',
        edit: false,
        newPrice:''
    },

    computed: {

        total() {
            let total = 0;
            for (item of this.items) {
                total += parseFloat(item.price);
            }
            return total;
        }

    },
    methods: {


        onSubmit(index) {
            if (this.edit != true) {
                this.addNewProduct(index);
                
            }
            else {
                this.updateProduct(this.editIndex);

            }
        },
        addNewProduct() {

            this.items.push({ name: this.newProduct, price: this.newPrice });
        },
        removeProduct(index) {
            console.log(index);
            this.items.splice(index, 1);
        },
        editProduct(index) {
            this.edit = true;
            this.editIndex=index;
            
            this.newProduct=this.items[index].name;
            this.newPrice=this.items[index].price;
          
        },
        updateProduct(index){
            this.items[index].name=this.newProduct;
            this.items[index].price=this.newPrice;

        }
    }


});






