import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node"; 
import { UserForm } from "~/features/Users/UserForm";

export async function action ({request}: ActionArgs) {
const formData = await request.formdata();

const data = Object.fromEntries(formdata);

return json(data);

}

export default function () {
  return <UserForm />;   
 }