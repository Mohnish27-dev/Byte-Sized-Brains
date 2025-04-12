


console.log("hello");


function mainthe(){
    const getFormData={
    getFoodItem:document.getElementById("food-name").value,
    getQuantity:document.getElementById("quantity").value,
    getCategory:document.getElementById("category").value,
    getExpiryDate:document.getElementById("expiry-date").value,
    getDescriptioin:document.getElementById("description").value,
    getPickupTime:document.getElementById("pickup-time").value,
    getRequirements:document.getElementById("storage").value
}
    document.getElementById("submit_donation").addEventListener("click",async(e)=>{
        // e.preventDefault()
        console.log(getFormData)
    })

}

