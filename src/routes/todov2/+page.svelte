<script>
	let { data } = $props();
</script>

<div class="centered">
	<h1>todos</h1>

	<label>
		add a todo:
		<input
			type="text"
			autocomplete="off"
			onkeydown={async (e) => {
				if (e.key !== 'Enter') return;

				const input = e.currentTarget;
				const description = input.value;

				// You can also add handlers that mutate data, such as POST.
				// In most cases, you should use form actions instead — you’ll end up writing less code,
				// and it’ll work without JavaScript, making it more resilient.
				// Inside the keydown event handler of the ‘add a todo’ <input>, let’s post some data to the server:
				// Here, we’re posting some JSON to the /todo API route —
				// using a userid from the user’s cookies — and receiving the id of the newly created todo in response.
				const response = await fetch('/todov2', {
					method: 'POST',
					body: JSON.stringify({ description }),
					headers: {
						'Content-Type': 'application/json'
					}
				});

				const { id } = await response.json();

				const todos = [
					...data.todos,
					{
						id,
						description
					}
				];

				data = { ...data, todos };
				input.value = '';
			}}
		/>
	</label>

	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li>
				<label>
					<input
						type="checkbox"
						checked={todo.done}
						onchange={async (e) => {
							const done = e.currentTarget.checked;

							// TODO handle change
							await fetch(`/todov2/${todo.id}`, {
								method: 'PUT',
								body: JSON.stringify({ done }),
								headers: {
									'Content-Type': 'application/json'
								}
							});
						}}
					/>
					<span>{todo.description}</span>
					<button
						aria-label="Mark as complete"
						onclick={async (e) => {
							// TODO handle delete
							await fetch(`/todov2/${todo.id}`, { method: 'DELETE' });

							const todos = data.todos.filter((t) => t.id !== todo.id);

							data = { ...data, todos };
						}}
					></button>
				</label>
			</li>
		{/each}
	</ul>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		display: flex;
		width: 100%;
	}

	input[type='text'] {
		flex: 1;
	}

	span {
		flex: 1;
	}

	button {
		border: none;
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}
</style>
