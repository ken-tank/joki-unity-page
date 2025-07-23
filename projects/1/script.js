function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "GSDCq1xmLXLlUIaSCiR4k3bQPZ4yzaKbx1O14knwLyW/Nlz+jLYzDv7ugwkzeggptO5Yoln4xDSOIRuOb+3bSPn65/JMqNzTZnqp6+ydRiBXf5IlovvgByY0CBzbBnfA";
    Downloader.Download(key.value, link);
    key.value = "";
}

