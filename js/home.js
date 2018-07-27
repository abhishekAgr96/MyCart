var fruits=[{
	name:"apple",
	category:"fruits",
    price:50,
    quantity:0	
},
{
	name:"kiwi",
	category:"fruits",
    price:20,
    quantity:0	
},
{
	name:"pear",
	category:"fruits",
	price:30,
    quantity:0	
},
{
	name:"watermelon",
	category:"fruits",
	price:30,
    quantity:0	
},
{
	name:"banana",
	category:"fruits",
	price:20,
    quantity:0
},
{
	name:"pomegraname",
	category:"fruits",
	price:50,
    quantity:0	
},
{
	name:"papaya",
	category:"fruits",
	price:36,
    quantity:0	
},
{
	name:"sapota",
	category:"fruits",
	price:80,
    quantity:0	
},
{
	name:"avocada",
	category:"fruits",
	price:135,
    quantity:0	
},
{
	name:"muskmelon",
	category:"fruits",
	price:34,
    quantity:0	
}];


var vegetables=[{
	name:"beans",
	category:"vegetables",
	price:20,
    quantity:0	
},
{
	name:"palak",
	category:"vegetables",
	price:19,
    quantity:0	
},
{
	name:"onion",
	category:"vegetables",
	price:24,
    quantity:0	
},
{
	name:"potato",
	category:"vegetables",
	price:28,
    quantity:0	
},
{
	name:"tomato",
	category:"vegetables",
	price:10,
    quantity:0	
},
{
	name:"cauliflower",
	category:"vegetables",
	price:19,
    quantity:0	
},
{
	name:"capsicum",
	category:"vegetables",
	price:100,
    quantity:0	
},
{
	name:"carror",
	category:"vegetables",
	price:80,
    quantity:0	
},
{
	name:"mashrooms",
	category:"vegetables",
	price:52,
    quantity:0	
},
{
	name:"cucumber",
	category:"vegetables",
	price:24,
    quantity:0	
}];

var grocery=[{
	name:"soyabin oil",
	category:"grocery",
	price:99,
    quantity:0	
},
{
	name:"rice",
	category:"grocery",
	price:44,
    quantity:0	
},
{
	name:"salt",
	category:"grocery",
	price:18,
    quantity:0	
},
{
	name:"haldi",
	category:"grocery",
	price:38,
    quantity:0	
},
{
	name:"ghee",
	category:"grocery",
	price:349,
    quantity:0	
},
{
	name:"ata",
	category:"grocery",
	price:256,
    quantity:0	
},
{
	name:"besan",
	category:"grocery",
	price:46,
    quantity:0	
},
{
	name:"red chilli powder",
	category:"grocery",
	price:22,
    quantity:0	
},
{
	name:"hing",
	category:"grocery",
	price:56,
    quantity:0	
},
{
	name:"poha",
	category:"grocery",
	price:49,
    quantity:0
}];


var biscuits=[{
	name:"oreo",
	category:"biscuits",
	price:35,
    quantity:0
},
{
	name:"hide & seek",
	category:"biscuits",
	price:59,
    quantity:0
},
{
	name:"parle-G",
	category:"biscuits",
	price:5,
    quantity:0
},
{
	name:"marie gold",
	category:"biscuits",
	price:10,
    quantity:0
},
{
	name:"good day",
	category:"biscuits",
	price:34,
    quantity:0
},
{
	name:"dark fantasy",
	category:"biscuits",
	price:56,
    quantity:0
},
{
	name:"jim jam",
	category:"biscuits",
	price:58,
    quantity:0
},
{
	name:"milk cream biscuit",
	category:"biscuits",
	price:38,
    quantity:0
},
{
	name:"chocolate wafer",
	category:"biscuits",
	price:71,
    quantity:0
},
{
	name:"monaco",
	category:"biscuits",
	price:47,
    quantity:0
}];


myRow ="";
rowNo=1;
function search()
{   
	myRow="";
  //  clearElement('itemTable');
	document.getElementById("itemTable").style.visibility="visible";
    myRow=myRow+"<tr><th>Name</th><th>Category</th><th>price</th><th>Quantity</th></tr>";
    var search=document.getElementById("inputField").value;
    var regex=new RegExp(search,"g");
    fruits.forEach((fruit)=>{
        if(fruit.name.toLowerCase().match(regex))
            printRows(fruit);
    });
    vegetables.forEach((vegitable)=>{
        if(vegitable.name.toLowerCase().match(regex))
            printRows(vegitable);
    });
    grocery.forEach((groc)=>{
        if(groc.name.toLowerCase().match(regex))
            printRows(groc);
    });
    biscuits.forEach((biscuit)=>{
        if(biscuit.name.toLowerCase().match(regex))
            printRows(biscuit);
    });
    document.getElementById("itemTable").innerHTML=myRow;

}
function printRows(object)
{
    myRow = myRow + "<tr><td id=name"+rowNo+">"+object.name + "</td><td>" +object.category + "</td><td>" +
                     object.price + "</td><td><input type='number' id=row"+rowNo+" name='quantity' value=0 min='0' max='5'></td></tr>";
    rowNo++;
}
cartRow="<tr><th>Name</th><th>Quantity</th></tr>";
i=1;
function addToCart()
{   
    for(;i<rowNo;){
        var qnt=document.getElementById("row"+i).value;
        if(qnt>0){
		   var itemName= document.getElementById("name"+i).innerHTML;
		   localStorage.setItem("name"+i,itemName);
		   localStorage.setItem("quantity"+i,qnt);	
           cartRow=cartRow+"<tr><td id='nameInCart"+i+"'>"+itemName+"</td><td id='quantityInCart"+i+"'>"+qnt+"</td></tr>";
	       i++;	
		}
	}   
    document.getElementById("cartTable").innerHTML=cartRow;
}

function clearElement(id){
    var Ref = document.getElementById(id);
	 if(Ref) Ref.parentNode.removeChild(Ref);
}

function checkOut(){
	clearElement('itemTable');
	clearElement("addToCart");
	clearElement("reset");
//	document.getElementById("itemTable").style.visibility="hidden";
	document.getElementById("billTable").style.visibility="visible";
	var itemNo=1;
    var tableLength = document.getElementById('cartTable').rows.length;
      while ( itemNo < tableLength )
      {
		var name=localStorage.getItem("name"+itemNo);
		var quantity=localStorage.getItem("quantity"+itemNo);	 
		searchInJSON(name,quantity);
        itemNo++;
	 }
	 lastRow="<tr><th>Grand Total</th><td colspan='3'></td><td style='border-top:solid 1px'>"+total+"</td></tr>";   
	 billRow=billRow+lastRow;
	 document.getElementById("billTable").innerHTML=billRow;
	
}

function searchInJSON(myItemName,myItemQnt){

    var regex=new RegExp(myItemName,"i");
    fruits.forEach((fruit)=>{
        if(fruit.name.match(regex)){
			fruit.quantity=myItemQnt;
			printRowsInBill(fruit);
            
        }
    });
    vegetables.forEach((vegitable)=>{
        if(vegitable.name.toLowerCase().match(regex)){
			vegitable.quantity=myItemQnt;
			printRowsInBill(vegitable);
            
        }
    });
    grocery.forEach((groc)=>{
        if(groc.name.toLowerCase().match(regex)){
			groc.quantity=myItemQnt;
			printRowsInBill(groc);
            
        }
    });
    biscuits.forEach((biscuit)=>{
        if(biscuit.name.toLowerCase().match(regex)){
			biscuit.quantity=myItemQnt;
			printRowsInBill(biscuit);
            
        }
	});
   
	
   

}
total=0;
billRow="<tr><th>Name</th><th>cetegory</th><th>MRP</th><th>Quantity</th><th>Price</th></tr>";
function printRowsInBill(myObject){
	var unitTotal=myObject.price*myObject.quantity;
	total=total+unitTotal;
	billRow=billRow+"<tr><td>"+myObject.name+"</td><td>"+myObject.category+"</td><td>"+
    myObject.price+"</td><td>"+myObject.quantity+"<td>"+unitTotal+"</td><tr/>";
}