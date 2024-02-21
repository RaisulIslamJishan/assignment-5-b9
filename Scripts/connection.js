document.addEventListener('click', function() {
    const buyNowButton = document.getElementById('buyNowButton');

    buyNowButton.addEventListener('click', function() {
        document.getElementById('sellsection')
    });
});





// function getTheButton() {
//     // Function to navigate to the purchase section
//     document.getElementById('sellsection');
// };

function getTheButton() {
document.getElementById('sellsection').addEventListener('click',function(){
    const buynow = document.getElementById('sellsection');
    return buynow;
})
}