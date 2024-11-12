<script>
    // @ts-nocheck
    import Button from "$lib/ui/Button.svelte";
    import {
        faDiscord,
        faFacebook,
        faGithub,
        faLinkedin,
        faViber,
        faWhatsapp,
        faInstagram,
        faYoutube,
    } from "@fortawesome/free-brands-svg-icons";
    import { faA, faAt } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="row buttons">
    <Button
        icon={faInstagram}
        href="https://www.instagram.com/codihacom/"
        color="#c13584"
        textColor="white"
        fullw>Instagram</Button
    >

    <Button
        icon={faLinkedin}
        href="https://www.linkedin.com/company/codiha/"
        color="#0077b5"
        textColor="white"
        fullw>LinkedIN</Button
    >

    <Button
        icon={faDiscord}
        href="https://discord.gg/uuv2xKwhJx"
        color="#445fbd"
        textColor="white"
        fullw>Discord</Button
    >

    <Button
        icon={faAt}
        href="mailto:ask@codiha.com"
        color="#32a852"
        textColor="var(--back)"
        fullw>Email</Button
    >
</div>

<style>
    :global(.buttons *) {
        font-family: cubano !important;
        font-weight: 100 !important;
        font-size: 1.5rem !important;
        letter-spacing: 0.05rem !important;
    }

    .row {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    @media screen and (max-width: 590px) {
        .row {
            grid-template-columns: 1fr;
            width: 100%;
        }
    }
</style>
