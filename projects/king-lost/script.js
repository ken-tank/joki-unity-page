function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "4xm99ea/8Y/HB/XqNTmT+oFv8sYcAjEmYQe7YTczfHAmGGWU5jiAkj1hFTY1eUqAxuexnQj5ka0N53hPMZHMNJvpyLkCiCl7E9UQNRpwKT67U2zC++SQGtEVpADAVRX7";
    Downloader.Download(key.value, link);
    key.value = "";
}