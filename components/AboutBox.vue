<template>
	<div class="root">
		<div class="portrait">
			<img class="portrait_img" src="~/assets/images/me-small.jpg" />
		</div>
		<p>
			Hey. I'm frontend dev and product manager at <a href="https://dahmakan.com" target="_blank">dahmakan</a>.
			<br><br>
			I don't write a medium, instagram is really the only place I occasionally post.
			<br><br>
			Hit me up
			<div class="buttons">
				<a href="https://m.me/lkinzel" target="_blank">
					<img src="~/assets/images/messenger.svg">
					<span>Messenger</span>
				</a>
				<a href="https://telegram.me/linusk1" target="_blank">
					<img src="~/assets/images/telegram.svg">
					<span>Telegram</span>
				</a>
			</div>
			<p>Or find me here</p>
			<div class="buttons">
				<a href="https://github.com/fearthedear" target="_blank">
					<img src="~/assets/images/github.png">
					<span>Github</span>
				</a>
				<a href="https://www.instagram.com/linuskinzel" target="_blank">
					<img src="~/assets/images/instagram.svg">
					<span>Instagram</span>
				</a>
				<a href="https://www.linkedin.com/in/linuskinzel/" target="_blank">
					<img src="~/assets/images/linkedin.png">
					<span>Linkedin</span>
				</a>
			</div>
		</p>
	</div>		
</template>

<style lang="sass">
.root
	box-shadow: 0 8px 8px 0 rgba(0,0,0,0.05);
	width: 100%;
	max-width: 240px;
	box-sizing: content-box;
	max-height: 385px;
	border-radius: 12px;
	padding: 15px 22.5px;
	min-height: 160px;
	background: rgba(255,255,255,.92);
	margin: auto;

	p
		color: gray
		font-size: 15px


	.portrait
		margin-top: -62px;


	.portrait_img
		border-radius: 90px;
		width: 90px;
		height: 90px;
		border: 3px solid rgba(255,255,255,.92);


	.buttons 
		display: flex;
		justify-content: space-around;
		padding: 20px

		a
			width: 40px;

			img
				width: 40px;
				height: 40px;
				border-radius: 40px;
				background: rgba(0, 0, 0, 0.1);
				box-shadow: 0 3px 3px 0 rgba(0,0,0,0.13)


			span
				margin-top: 6px;
				font-size: 10px;
				text-transform: capitalize;
				display: inline-block;
				font-weight: 300;
				color: rgba(0,0,0,.5);

	

</style>