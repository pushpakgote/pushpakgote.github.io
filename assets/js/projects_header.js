// Get the element by its ID
var boxElement = document.getElementById("get_margin");
var project_header = document.getElementById("set_margin");

// Function to calculate and display margin values
function calculateMargins() {
    // Get the computed style of the element
    var computedStyle = window.getComputedStyle(boxElement);

    // Get the computed margin values (top, right, bottom, left)
    var marginTop = parseInt(computedStyle.marginTop);
    var marginRight = parseInt(computedStyle.marginRight);
    var marginBottom = parseInt(computedStyle.marginBottom);
    var marginLeft = parseInt(computedStyle.marginLeft);
    
    // Get the computed padding values (top, right, bottom, left)
    var paddingTop = parseInt(computedStyle.paddingTop);
    var paddingRight = parseInt(computedStyle.paddingRight);
    var paddingBottom = parseInt(computedStyle.paddingBottom);
    var paddingLeft = parseInt(computedStyle.paddingLeft);

    project_header.style.margin = `${marginTop}px ${marginRight+paddingRight}px ${marginBottom}px ${marginLeft+paddingLeft}px`;
    // project_header.style.padding= `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`;
    project_header.style.paddingTop = `${paddingTop}px`

    // console.log("marginTop=",marginTop)
    // console.log("marginRight=",marginRight)
    // console.log("marginBottom=",marginBottom)
    // console.log("marginLeft=",marginLeft)

}

// Initial calculation
calculateMargins();

// Add a resize event listener to recalculate margins when the page size changes
window.addEventListener("resize", calculateMargins);