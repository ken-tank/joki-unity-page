function Unlock() 
{
    var key = document.getElementById("download_key").value;
    var link = "ZvBP3PCHkhnWk7sTRmL29bhUYnyTTmaeKA9ppXD1/9Z5IxxZIULSRMogt2t6IrrBe7F4u/2g86MLaq+BQvMJzO8oyrIkWzBogKe2vRB1PRw=";
    Downloader.Download(key, link);
}