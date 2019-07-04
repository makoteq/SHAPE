module.exports = {
    site: function(name,description,isfacebook,facebooklink,isinstagram,instagramlink,isgithub,githublink) {
return '<!DOCTYPE html>\
<html lang="en">\
<head>\
<meta charset="UTF-8" />\
<meta name="viewport" content="width=device-width, initial-scale=1.0" />\
<meta http-equiv="X-UA-Compatible" content="ie=edge" />\
<!--main css-->\
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"\
integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">\
<style>\
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap");\
</style>\
<style>\
body{font-family:"Source Sans Pro",sans-serif;margin:0}a{text-decoration:none;color:#000}.wrapper{background-image:url("desktop.png");background-size:cover;height:100vh;width:100vw;text-align:center}.header{font-family:"Source Sans Pro ",sans-serif;font-size:5em;font-weight:700;margin-bottom:20px}.description{color:#585858;font-weight:700;width:80vw;margin:0 auto}.con{position:absolute;top:50%;transform:translateY(-50%);width:100vw;text-align:center}.con_icons{margin:20px;height:100px}i:nth-of-type(1){font-size:4em;margin:10px;transition:.2s linear}i:nth-of-type(2){font-size:4em;margin:10px;transition:.2s linear}i:nth-of-type(3){font-size:4em;margin:10px;transition:.2s linear}i{cursor:pointer}i:hover{transform:scale(1.5)}\
</style>\
<title>This webside belongs to '+name+'</title>\
</head>\
<body>\
<div class="wrapper">\
<div class="con">\
<p class="header">'+name+'</p>\
<p class="description">\
'+description+'\
</p>\
<div class="con_icons">\
<a href="'+facebooklink+'" target="_blank"><i style="display:'+isfacebook+'" class="fab fa-facebook-square"></i></a>\
<a href="'+instagramlink+'" target="_blank"> <i style="display:'+isinstagram+'" class="fab fa-instagram"></i></a>\
<a href="'+githublink+'" target="_blank"><i style="display:'+isgithub+'" class="fab fa-github"></i>\
</div>\
</div>\
</div>\
</body>\
</html>'}
}