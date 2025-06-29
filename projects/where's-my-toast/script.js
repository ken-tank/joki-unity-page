function Unlock() 
{
    var key = document.getElementById("download_key").value;
    var link = "lC5BbrFLRlefN3YKSerDwf8kHl5+2XA5YsVkYPknJ6crfctBgZwttByesmbysQ/VnTf5DgrPlMEox3dhUURNZRhwAc0NzhflOKj5wg8NHXnGVvj0HmSO834hMP1y+Q7Q";
    Downloader.Download(key, link);
}