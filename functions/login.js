export async function onRequestPost({ request }) {
  const formData = await request.formData();

  return fetch("https://api.dogearhq.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });
}
