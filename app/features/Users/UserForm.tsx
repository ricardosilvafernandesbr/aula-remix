export function UserForm() {
    return 
    (
    <form method="post" action="/users">
    <div><label htmlFor="name">Name</label>
    <input type="text" name="name" id="name"  />
    </div>
    <div><label htmlFor="name">E-mail</label>
    <input type="email" name="email" id="email"  />
    </div>
    <div><label htmlFor="name">E-mail</label>
    <input type="email" name="email" id="email"  />
    </div>
    <button type="submit">Create</button>
  </form>
  );
}