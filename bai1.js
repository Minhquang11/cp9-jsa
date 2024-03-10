let menu = JSON.parse(localStorage.getItem('menu')) ||  ["rau xào", "thịt luộc", "gà rán"]
function updateMenu(){
    localStorage.setItem('menu', JSON.stringify(menu))
}
function addtoMenu(food){
    menu.push(food)
    updateMenu()
}
function Input(){
    var userInput = prompt("Nhập bất kì một chữ cái trong C, R, U, D")
    if(userInput === "C"){
        var foodInput = prompt("Mời nhập món ăn cần thêm vào")
        addtoMenu(foodInput)
        alert("Bạn đã thêm thành công")
    }
    if(userInput === "R"){
        let result = menu.join(", ")
        console.log(result) 
    }
    if(userInput === "U"){
        var updatefood = prompt("Mời người dùng nhập vào tên món muốn update")
        var index = menu.indexOf(updatefood);
        if(index !== -1){
            var newfood = prompt("Mời người dùng nhập vào tên món ăn mới")
            menu[index] = newfood;
            addtoMenu();
            alert("Món ăn đã được cập nhật")
        } else{
            alert("Món ăn đã đc thêm mới")
        }
    }
    if(userInput === "D"){
        var deletefood = prompt("Mời người dùng nhập vào tên món muốn Delete")
        var index = menu.indexOf(deletefood);
        if(index !== -1){
            menu.splice(index, 1)
            addtoMenu();
            alert("Món ăn đã được cập nhật")
    }
    }
}

Input();