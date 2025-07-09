function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "n17BfhS7S+3ofgNKrWbRNXb32+QAbNqPnzz9jFLRHc2EBsabv8MEZFZfEIJNu1LBnFAdL5ZBwkg65Fe39/FZt2tzdPl5TjzFlWZZl/TJ26obz1zaOYAx6SpbWqxjGOXd";
    Downloader.Download(key.value, link);
    key.value = "";
}