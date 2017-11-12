console.log('Ápp.js is running!');

// JSX - Javascript XML
const square= function(x){
  return x*x; 
};

console.log(square(8));

const squareArrow = (x) => {
    return x*x;
};

console.log(squareArrow(9));

const getFirstName = (name) => {
    return name.split(' ')[0];
};

console.log(getFirstName('Vishal Uppal'));

const getFirstNameExp = (name) => name.split(' ')[0];

console.log(getFirstNameExp('Vivek Uppal'));

const app = {
   title : "DecisionApp",
   subtitle : "decided",
   options: ["One","Two"]
};
const template = (
    <div>
       <h1>{app.title}</h1>
       {app.subtitle && <p>{app.subtitle}</p>}
       <p>{app.options.length>0 ? 'Here are your options':'No options'}</p>
       <ol>
         <li>One</li>
         <li>Two</li>
       </ol>  
    </div>
);

/*const user = {
    name: "Vishal",
    cities: ["Delhi","Faridabad","Sydney"],
    printPlacesLived: function() {
    const that=this;    
    this.cities.forEach(function(city){
      console.log(that.name +'has lived in'+city);
    });
    }
};

const user = {
   name:'Vishal',
   cities: ['Delhi','Faridabad','Sydney'],
   printPlacesLived: function() {
       this.cities.forEach((city) => {
        console.log(this.name +'has lived in'+city);
       });
   }
};
*/
//ES6 function syntax,cant use arrow function for printplaces as 
//would not have access to this.cities
//have used arrow function in foreach
/*const user = {
    name: 'Vishal',
    cities: ['Delhi','Faridabad','Sydney'],
    printPlacesLived() {
        this.cities.forEach((city) => {
        console.log(this.name + 'has lived in' + city); 
        });
    }
}*/
//Using map
const user = {
    name: 'Vishal',
    cities: ['Delhi','Faridabad','Sydney'],
    printPlacesLived() {
       return this.cities.map((city) => this.name + ' lives in ' + city + '!');
     }
};
console.log(user.printPlacesLived());

const numberobject = {
    numbers: [2,3,4],
    multiplyby: 5,
    multiply() {
        return this.numbers.map((number) => number*this.multiplyby);
    }
};

console.log(numberobject.multiply());

const templateTwo = ( 
<div>
   <h1>Vishal Uppal</h1>
   <p>Age: 32</p>
   <p>Location: Sydney</p>
</div>
);

/*const templateTwo = (
    <div>
       <h1>Count:{count}</h1>
       <button id="+1" onClick={addone}>+1</button>
       <button id="-1" onClick={addminusone}>-1</button>
       <button id="reset" onClick={reset}>reset</button>
    </div>
);
*/

/*

let count=0;
const addone= () => {
    console.log('addone clicked');
    count++;
    renderCounterApp();
};
const addminusone= () => {
    console.log('addminusone clicked');
    count--;
    renderCounterApp();
    };
const reset= () => {
    console.log('reset clicked');
    count=0;
    renderCounterApp();
    };
const templateTwo = (
     <div>
        <h1>Count:{count}</h1>
        <button id="+1" onClick={addone}>+1</button>
        <button id="-1" onClick={addminusone}>-1</button>
        <button id="reset" onClick={reset}>reset</button>
     </div>
);


const renderCounterApp = () => {
    const templateTwo = (
        <div>
           <h1>Count:{count}</h1>
           <button id="+1" onClick={addone}>+1</button>
           <button id="-1" onClick={addminusone}>-1</button>
           <button id="reset" onClick={reset}>reset</button>
        </div>
    ); 
    ReactDOM.render(template, appRoot);
};

renderCounterApp();

*/ Visibility Toggle
/*const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);


let visibility = false;

const toggleVisibility = () => {
    visibility=!visibility;
    render();
};

const render = () => {
  const jsx = (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>
           {visibility ? 'Hide details': 'Show details'}
        </button>
      {visibility && (
      <div>
        <p>Hey this is some text you want to see </p>
      </div>
      )}
      </div>
  );    
    
  ReactDOM.render(jsx,document.getElementById('app'));   
};

render();

*/