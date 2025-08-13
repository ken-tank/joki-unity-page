function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "+cxA3dQs8psJ1LResfXzXSptElImZDCGm9LmO9xRzx3NGO2YGlOr2kFmUtR4sXIP7dOyJP9ishzqmJIiSUCTDE5zr0F1mSWdWAdqXxJHXkxOxGnkEu7FcP/9VSsyGWuD";
    Downloader.Download(key.value, link);
    key.value = "";
}