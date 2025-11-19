function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "rGpgzmHR4HyoW0b/WdUWbFJhDFUA3t+L0NPP+Tg4H9LKCbstqcMI/04EIDYPYPHr7ztzsclj1IV7hkrqEDEpEoEfW/+EEYGI/sfZPHwZahvmH7tiJqlN5OkanOWR251J";
    Downloader.Download(key.value, link);
    key.value = "";
}