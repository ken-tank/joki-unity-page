function Unlock() 
{
    var key = document.getElementById("download_key").value;
    var link = "zo6N6OaRwQLVfG7wRlmO8nyvIQZa7QFfTCNypsDVDnmQUSDag97mr0inj3K/SPQGgnanSVPbAgDuO2kzjfigBcQxuf5cLF6ldh+h7GRJj1IKYr70y/3htK5eGRusZlGQ";
    Downloader.Download(key, link);
}