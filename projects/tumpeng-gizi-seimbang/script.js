function Unlock() 
{
    var key = document.getElementById("download_key").value;
    var link = "kvMt/p1U9BAzEUD6qRJAlCXNhYAfbRDn7DoSJ+R8f9VsDKGygT782WLYwXL/W0lTu3N601/TRizcOCPNroUqQ1qSSqDGBKTECiJ5lGiJ2+o=";
    Downloader.Download(key, link);
}