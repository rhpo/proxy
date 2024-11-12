<script>
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    // ...Your other imports

    if (browser) {
        goto("/");
    }
</script>

<a href="/">Click me!</a>
