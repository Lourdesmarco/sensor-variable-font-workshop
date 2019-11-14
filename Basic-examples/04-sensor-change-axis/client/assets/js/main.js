window.onload = function() {
    // get the title DOM element
    let title = this.document.querySelector("#title");
    
    // get the input DOM element
    let h1weight = this.document.querySelector("#h1weight");
    
    // listen the input change event
    h1weight.addEventListener('input', function () {
        // change the CSS property 
        title.style.setProperty('--weightH1', h1weight.value);        
    }, false);
    
    // Create Socket.io object
    const socket = io();

    // Listen server sensor values emit by socket.io
    socket.on('sendNormalizedValue', function (normalizedValue) {

        // get the subtitle DOM element
        let subtitle = document.querySelector("#subtitle");
        
        // semantic function
        subtitle.style.setProperty('--weightH2', normalizedValue);
    })
};

