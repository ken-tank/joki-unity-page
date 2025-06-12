function Unlock() 
{
    var key = document.getElementById("download_key").value;
    var link = "BE9kMs3E3tIaeGp7YEV68v42Y5mhWENF5bkvqhr7QhfduJ1M4YcXa0uJzZsx8EIX8ugFgx88CZ5bf8NGNlYw4IGUsE4sN4Aj7npngLZT40Wmwct35mPdwZRMn/UASMS3";
    Downloader.Download(key, link);
}