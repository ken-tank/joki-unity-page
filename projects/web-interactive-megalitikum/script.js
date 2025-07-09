function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "KRo1hGNmvSVkFPC+kL4YeJ1MzjdraAWLkwyIaDye5gnNlo2Z99U66kQ+f5+lnOm+ZBoqCKM3HaKnmumSyUBxC5Ge0oQVKzcMQ+zmi0qZy1zdh589IvhaGiBsgv2SZ4wd";
    Downloader.Download(key.value, link);
    key.value = "";
}