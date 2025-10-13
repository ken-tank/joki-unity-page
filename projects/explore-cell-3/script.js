function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "u5K3Cd7p9U64PD/VqW++5Xf2hazx0pjuttNlV/dHhuiYW0d/lAxoVMH2DG0D9v8w3fjQ+t/TqOT0iJCaV4OvNdjuWT5tITUU+LoGR7K5AE+QzrTw0zy8GXp4P1paqJWa";
    Downloader.Download(key.value, link);
    key.value = "";
}