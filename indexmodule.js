module.exports = {
    site: function(name,description) {
return '\<!DOCTYPE html>\
<html lang="en">\
<head>\
<meta charset="UTF-8" />\
<meta name="viewport" content="width=device-width, initial-scale=1.0" />\
<meta http-equiv="X-UA-Compatible" content="ie=edge" />\
<!--main css-->\
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"\
integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">\
<link rel="stylesheet" type="text/css" href="./main.css" />\
<style>\
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap");\
</style>\
<title>This side belongs to'+name+'</title>\
</head>\
<body>\
<div class="wrapper">\
<div class="con">\
<p class="header">'+name+'</p>\
<p class="description">\
'+description+'\
</p>\
<div class="con_icons">\
<i style="display:" class="fab fa-facebook-square"></i>\
<i  style="display:"  class="fab fa-instagram"></i>\
<i  style="display:"  class="fab fa-github"></i>\
</div>\
</div>\
</div>\
</body>\
</html>'
}
}