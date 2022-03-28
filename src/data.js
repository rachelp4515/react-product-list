import data from  './data.json' 
export default data


const allCategories = data.map(obj => obj.category)
export const categorySet =  new Set(allCategories) 
export const categoryUnique = Array.from(categorySet)

export const categoriesWithCounts = allCategories.reduce((obj, cat) => {
    if(cat in obj){
        obj[cat] += 1
    }
    else {
        obj[cat] = 1
    }
    return obj
}, {})

export const namesAndCategories = categoryUnique.map(name => {
    return {item: name , count: categoriesWithCounts[name]}
})

export const allProducts = data.map(obj => { return {
    name : obj.name,
    price : obj.price,
    category : obj.category
}})