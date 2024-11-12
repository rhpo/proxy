<script>
    import Button from "$lib/ui/Button.svelte";
    import { faDiscord } from "@fortawesome/free-brands-svg-icons";
    import {
        faHeart,
        faArrowRight,
        faFlagCheckered,
    } from "@fortawesome/free-solid-svg-icons";

    import Fa from "svelte-fa";
</script>

<div class="container skillbox" data-aos="flip-right" data-aos-duration="1200">
    <h1><Fa icon={faFlagCheckered} /> Get STARTED!</h1>
    <p class="description">
        Ready to join us? Fill out the registration form or join our Discord
        server to connect with the community and kickstart your journey beyond
        the classroom.
    </p>
</div>

<div class="links" data-aos="fade-right">
    <!-- <Button
        icon={faDiscord}
        href="https://discord.gg/uuv2xKwhJx"
        color="#445fbd"
        textColor="white"
        fullw>Discord</Button
    > -->

    <Button
        icon={faArrowRight}
        href="/register"
        color="#ff0000"
        textColor="white"
        fullw>join the club!</Button
    >
</div>

<style>
    :global(.colored) {
        color: var(--accent);
    }

    :global(.tooltip) {
        margin: 0;
        font-family: "Inter", sans-serif;
        font-size: 15px;
        font-weight: 500;
        color: white;
    }

    @keyframes blur {
        0% {
            filter: blur(0px);
        }

        50% {
            filter: blur(20px);
        }

        100% {
            filter: blur(0px);
        }
    }

    .container p {
        margin: 0;
    }

    .skillbox {
        width: 100%;
        max-width: var(--mw);
        padding: 20px;
        padding-bottom: 0;
        margin-bottom: 0;
        text-align: center;
    }

    .skillbox h1 {
        margin-bottom: 10px;
    }

    .links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: var(--mw);
    }

    .links > :global(*) {
        width: fit-content;
        font-size: 1.5rem;
    }
</style>
