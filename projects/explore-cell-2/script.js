function Unlock() 
{
    var key = document.getElementById("download_key");
    var link = "aLtkGn1UX3l1ICge4tNrsR6yWn8biIKlgiM/Z8ffZAEQw7rAvLWiRANgqv1GxXaJoX/2OdQtqCsYhtRxJzhgwLz4BPBEkdFBZx4qEIH1GvCKW4u9mhL6z8rslas2qhmi";
    Downloader.Download(key.value, link);
    key.value = "";
}