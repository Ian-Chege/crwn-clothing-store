//define an array of categories with their names and images
const categories = [
  {name:"Hats", image:""},
  {name:"Jackets", image:""},
  {name:"Sneakers", image:""},
  {name:"Women's", image:""},
  {name:"Men's", image:""}
];

//define a reusable component that takes a category as a prop and renders it
function Category ({category}) {
  return (
    <div className="categories-container">
      <div className="category-container">
        <img src={category.image} alt={category.name} />
        <div className="category-body-container">
          <h2>{category.name}</h2>
          <p>Shop now</p>
        </div>
      </div>
    </div>
  );
}

//use the map function to iterate over the categories array and render a Category component for each one
export default function App () {
  return(
    <div className="categories-container">
      {categories.map(category => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
}
