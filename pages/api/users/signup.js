import { client } from "@/lib/client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(401).end();
  }
  const { username, email, name, password } = req.body;
  let user;
  user = await client.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    user = await client.user.create({
      data: {
        username,
        name,
        email,
        password,
      },
    });
    console.log(user);
  }
  res.status(200).json({ ok: true });
}
