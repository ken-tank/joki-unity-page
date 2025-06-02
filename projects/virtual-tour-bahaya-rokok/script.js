function Unlock() 
{
    var key = document.getElementById("download_key").value;
    var link = "PnrcdR8S90BBqerXvLd9OxPAk7w7dNNXts9U3LqrusHTXv5R+JeVUwVi6M3mMyB/oa7dkxZeAfQr90JwiC7fPiXPFnFTA2zqQwzZEkckYL+j/ncRhsDdQXSIVlxHltTh";
    Downloader.Download(key, link);
}