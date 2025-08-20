function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "aLtkGn1UX3l1ICge4tNrsR6yWn8biIKlgiM/Z8ffZAGu/1VNyT4L4gE7FTCprK1WL0o1zvSG60tzTCHQXE8yTAKywiZ2cy3sBWJvw+jdS+QSoGuo7wE3mPeZ7eIjz/49";
    Downloader.Download(key.value, link);
    key.value = "";
}