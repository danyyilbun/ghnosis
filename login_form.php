<?php
	if(!isset($_SESSION["login"])) {
?>
<div class="form-div scrollable-table-div">
	<div class="row">
		<h2>Login</h2>
	</div>
	<?php
		if(isset($_SESSION["error_message"])) {
			$error_message = $_SESSION["error_message"];
			$_SESSION["error_message"] = null;
			?>
			<div class="row error-text"><?php echo $error_message; ?></div>
			<?php
		}
	?>
	<div class="row">
		<form action="security/login.php" method="post">
			<!-- Username -->
			<div class="input-group mt-3">
				<!-- <div class="input-group-prepend">
					<div class="input-group-text">@</div>
				</div> -->
				<input type="text" name="username" class="form-control" id="inlineFormInputGroup" placeholder="Username/Email" required>
			</div>

			<!-- Password -->
			<div class="input-group mt-3">
				<input type="password" name="password" class="form-control" id="password_id" placeholder="Password" required>
				<div class="input-group-append">
					<div class="input-group-text">
						<img id="eye"  onClick="toggleEye()" src="Pictures/eye-closed.png" alt="Eye closed">
					</div>
				</div>
			</div>
			<button type="submit" class="btn mt-3">Submit</button>
		</form>

	</div>	
	<script>
		function toggleEye() {
			var x = $("#password_id");
			if (x.attr("type") == "password") {
				document.getElementById("eye").src="Pictures/eye-open.png";
				x.attr("type", "text");
			} else {
				x.attr("type", "password");
				document.getElementById("eye").src="Pictures/eye-closed.png";
			}
		}

		var inputHeight = $("#inlineFormInputGroup").height();
		$("#eye").height(inputHeight);
		$("#eye").width(inputHeight);
		console.log(inputHeight);
	</script>
</div>
<?php
	} else {
		?>
			<h1>You are logged in</h1>
			<p>
				<a href="controllers/logout.php" class="btn" style="margin-top: 1em;"> Logout</a>
			</p>
		<?php
	}
?>