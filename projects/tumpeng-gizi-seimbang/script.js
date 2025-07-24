function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "VV7OCZfR/a+ql0ZiPytBxs6BMP2jXz5Yii1eW5/fBxauNqqgNLkFv9wQvQEOh7xTVqemlin5Ygw9+/ViwcJarTuKqdvHU05McLNmRAnDTreiqlKJgmO1gl4QYkELxaic";
    Downloader.Download(key.value, link);
    key.value = "";
}