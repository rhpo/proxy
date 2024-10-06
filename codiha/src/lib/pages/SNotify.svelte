<script>
	// @ts-nocheck

	import Button from "$lib/ui/Button.svelte";

	import Input from "$lib/ui/Input.svelte";
	import { dialog } from "$lib/ui/dialog";
	import {
		faExclamationCircle,
		faMessage,
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
</script>

<div class="container" id="notify">
	<h1 data-aos="fade-right">
		<Fa icon={faMessage} /> want to know more?

		<ul>
			<p style="text-align: center" data-aos="fade-right">
				<li>
					<u>Can I work with Codiha certificates</u>: Yes mommy
				</li>

				<li>
					<u> How can I get a certificate from Codiha?: </u>

					<ul>
						<li>
							You can get a certificate from Codiha by completing
							the course and passing the assessment.
						</li>
					</ul>
				</li>
			</p>
		</ul>
	</h1>
</div>

<style>
	ul {
		font-size: 1.5rem;
	}
</style>
