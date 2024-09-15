// script.js
$(document).ready(function () {
    
    fetchApps();

    //getting apps 
    function fetchApps() {
        $.ajax({
            url: 'https://localhost:5002/api/Launcher/apps',  
            method: 'GET',
            success: function (data) {
                renderAppList(data);
            },
            error: function (error) {
                console.log("Error fetching apps: ", error);
            }
        });
    }

    //getting app with name and icon
    function renderAppList(apps) {
        $('#app-list').empty();
        apps.forEach(function (app) {
            let appElement = `
               <div> 
                    <div class="app-icon" data-app-name="${app.name}">
                    <img src="https://localhost:5002/api/Launcher/apps/icon/${app.name}" alt="${app.name}" />
                    
                </div>
                <p>${app.name}</p>
                 </div>

            `;
            $('#app-list').append(appElement);
        });

      
        //on click of icon actions to perform
        $('.app-icon').click(function () {
            showLoadingScreen();//before launching app show loading screen
            appName = $(this).data('app-name');
            launchApp(appName);//launch app
        });
    }

    //lauching app 
    function launchApp(appName) {
        $.ajax({
            url: 'https://localhost:5002/api/Launcher/apps/launch',
            method: 'POST',
            data: JSON.stringify(appName),
            contentType: "application/json",
            success: function () {

            },
            error: function (error) {
                console.log("Error launching app: ", error);
            }
        });
    }

    
    function showLoadingScreen() {
        $('#app-list').addClass('hidden');
        $('#loading-screen').removeClass('hidden');
        $('#settings-button').addClass('hidden');
    }

    //loading screen home button click action
    $('#homescreen-button').click(function () {
        
        $.ajax({
            url: 'https://localhost:5002/api/Launcher/apps/quit',  
            method: 'POST',
            data: JSON.stringify(appName),
            contentType: "application/json",
            success: function () {
                
                $('#app-list').removeClass('hidden');
                $('#loading-screen').addClass('hidden');
                $('#settings-button').removeClass('hidden');
            },
            error: function (error) {
                console.log("Error launching app: ", error);
            }
        });

    });

    //setting icon click action
    $('#settings-button').click(function () {
        $('#home-screen').addClass('hidden');
        
        $('#settings-screen').removeClass('hidden');
        loadSettings();
        $('#loading-screen').addClass('hidden');
        $('#settings-button').addClass('hidden');
    });

    //home icon click action
    $('#home-button').click(function () {
        $('#settings-screen').addClass('hidden');
        $('#settings-button').removeClass('hidden');
        $('#app-list').removeClass('hidden');
    });

   //new app add click button logic
    $('#add-app-button').click(function () {
        $('#app-file-selector').click();
    });

   //adding new app
    $('#app-file-selector').change(function () {
        var filePath = $(this).val();
        var fileName = filePath.split('\\').pop().split('/').pop();
        var appName = fileName.replace('.exe', '');
        
        
        $.ajax({
            url: 'https://localhost:5002/api/Launcher/apps/add',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ Name: appName, ExecutablePath: filePath }),
            success: function () {
                alert(appName + ' added successfully');
                loadSettings(); 
            },
            error: function (xhr) {
                alert('Failed to add ' + appName + ': ' + xhr.responseText);
            }
        });
    });

    //on click of setting icon 
    function loadSettings() {
        $('#app-list').addClass('hidden');
        $.ajax({
            url: 'https://localhost:5002/api/Launcher/apps',
            type: 'GET',
            success: function (apps) {
                console.log(apps);
                var appListHtml = '';
                apps.forEach(function (app) {
                    appListHtml += '<div >' +
                                   '<input type="checkbox" class="app-checkbox" data-appname="' + app.name + '">' +
                                   '<span>' + app.name + '</span>' +
                                   '</div>';
                });
                appListHtml += '<button id="remove-selected-apps">Remove</button>';
                $('#app-list-settings').html(appListHtml);
    
                
                $('#remove-selected-apps').click(function () {
                    $('.app-checkbox:checked').each(function () {
                        appName = $(this).data('appname');
                        
                        removeApp(appName);
                    });
                });
            },
            error: function (xhr) {
                alert('Failed to load apps: ' + xhr.responseText);
            }
        });
    }
    
    //on click of remove button
    function removeApp(appName) {
        console.log(appName)
        $.ajax({
            url: 'https://localhost:5002/api/Launcher/apps/remove/'+appName,
            
            type: 'DELETE',
            success: function () {
                
                alert('App ' + appName + ' removed successfully.');
                loadSettings()
            },
            
            error: function (xhr) {
                console.log(url);
                alert('Failed to remove app: ' + xhr.responseText);
            }
        });
    }
    

});
