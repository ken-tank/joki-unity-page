function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "Td+Cx1+bIOm21v615em5L5qI58t2qDBo/led3C7Hu1t/o8+VhLPqR7ISUslcKL0K75G2YlEJXSpR3iXiiOKvJvGANPnrPdAn8/WoJ/1NU+5fDy6Yv1USDXwJH3FjOInW";
    Downloader.Download(key.value, link);
    key.value = "";
}