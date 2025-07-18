function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "gbHRGldqMHipk02+1kznjXhoBbqMI8b3yrd3tg9tTmTzXBlZdQ3SJqqCmu8gf2hxLdtjXQLmpNcXdNCy27mxVLFVNFURXicAeoImqOtPhg/k39ZkQhocWrHUCTTSzTBX";
    Downloader.Download(key.value, link);
    key.value = "";
}

