import { json } from "@remix-run/node"
import { useActionData, useLoaderData } from "@remix-run/react";
import { UsersList } from "~/features/UsersList";
import { getUsers } from "~/features/Users/user.api.server";

import type { ActionArgs } from "@remix-run/node"

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);
  
  return json(data);
};

export async function loader()
{
return json({
  users: await getUsers(),
});
}

export default function () {
  const { users } = useLoaderData<typeof loader>();

  //const data = useActionData<typeof action>();
  //console.log(data);

  return <UsersList users={users} />;     
}