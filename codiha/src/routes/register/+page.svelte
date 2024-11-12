<script>
    import { onMount } from "svelte";

    let dots = "";
    const formLink = "https://forms.gle/QUySmAMTWFxAAAoG9";

    async function listenBeforeHeGoes() {
        setTimeout(() => {
            window.location.href = formLink;
        }, 3000);

        try {
            await fetch("https://codiha-server.onrender.com/notify");
        } catch {}
    }

    onMount(() => {
        setInterval(() => {
            dots += ".";
            if (dots.length > 3) dots = "";
        }, 500);

        listenBeforeHeGoes();
    });
</script>

<h1>Redirecting{dots}</h1>
