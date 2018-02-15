var address, worker, email, os, gpu, coin, loc;
var formIsValid;
var fs = require('fs');
var $ = require('jquery')

// Click event on search button
$("#configButton").on("click", function () 
{
    // Get the user form input stored in variables
    address = $("#address").val().trim();
    worker = $("#worker").val().trim();
    email = $("#email").val().trim();
    os = $("#os").val();
    gpu = $("#gpu").val();
    coin = $("#coin").val();
    loc = $("#loc").val();
    // Call validateForm() function to make sure all fields are completed
    validateForm();
    //if all fields are completed, the api results will be requested
    if (formIsValid === true) 
    {
        // Check to see if user has Nvidia or AMD GPU   
        // Run opencl for AMD, and CUDA for Nvidia
        if (gpu === "AMD") 
        {
            fs.writeFile("start.bat", "setx GPU_FORCE_64BIT_PTR 0 setx GPU_MAX_HEAP_SIZE 100 setx GPU_USE_SYNC_OBJECTS 1 setx GPU_MAX_ALLOC_PERCENT 100 setx GPU_SINGLE_ALLOC_PERCENT 100 ethminer.exe --farm-recheck 200 -G -S " + loc + " -FS eth-eu2.nanopool.org:9999 -O " + address + "." + worker + "/" + email, function (err)
            {
                // If the code experiences any errors it will log the error to the console.
                if (err) 
                {
                    return console.log(err);
                }
                console.log("fs.writeFile function ran");
            });                              
        }
        else 
        {
            
            fs.writeFile("start.bat", "setx GPU_FORCE_64BIT_PTR 0 setx GPU_MAX_HEAP_SIZE 100 setx GPU_USE_SYNC_OBJECTS 1 setx GPU_MAX_ALLOC_PERCENT 100 setx GPU_SINGLE_ALLOC_PERCENT 100 ethminer.exe --farm-recheck 200 -U -S " + loc + " -FS eth-eu2.nanopool.org:9999 -O " + address + "." + worker + "/" + email, function (err)
            {
                // If the code experiences any errors it will log the error to the console.
                if (err) 
                {
                    return console.log(err);
                }
                console.log("fs.writeFile function ran");
            });                              
        }
    }
});

    // open dashboard !!!Not Working!!!
    // function createWindowConfig() {
    //     // and load the index.html of the app.
    //     console.log("createWindowConfig function is running");
    //     mainWindow.loadURL(url.format({
    //         pathname: path.join(__dirname, 'app.html'),
    //         protocol: 'file:',
    //         slashes: true
    //     }))
    //     console.log("mainWindow function ran");
    //     // Emitted when the window is closed.
    //     mainWindow.on('closed', function () {
    //         // Dereference the window object, usually you would store windows
    //         // in an array if your app supports multi windows, this is the time
    //         // when you should delete the corresponding element.
    //         mainWindow = null
    //     })
    // }