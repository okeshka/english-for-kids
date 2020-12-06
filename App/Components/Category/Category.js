class Category {
    constructor(name, imageSrc) {
        this.name = name;
        this.image = `./assets/${imageSrc}`;
    }
    
    createCategory() {
        const categoryElement = document.createElement('a');
        categoryElement.className = "category-item green";
        categoryElement.innerHTML = 
            `<img src = ${this.image} alt = ${this.name} />${this.name}`
       return categoryElement
    }
}

export default class CategoryList {
    constructor(data) {
        this.categoryName = data[0];
        this.categoryData = data.slice(1);
        
    }
    createCategoryList() {
        let categoryList = [];
        this.categoryName.forEach((category, index, array) => {
            const random = Math.trunc(Math.random()*array.length);
            const categoryItem = new Category(category, this.categoryData[index][random].image);
            categoryList.push(categoryItem.createCategory());
        })
        return categoryList;
    }
}
