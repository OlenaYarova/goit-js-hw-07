

const allItems = document.querySelectorAll("#categories .item");
console.log("Number of categories:", allItems.length);
 allItems.forEach(item => {           
     const title = item.querySelector("h2").textContent;
     const countEl = item.querySelectorAll("ul li").length;
   console.log("Category:", title);
   console.log("Elements:", countEl);
});