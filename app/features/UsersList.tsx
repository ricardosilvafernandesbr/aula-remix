import React from "react";

import type { User } from "./Users/user.api.server";
import { Outlet } from "@remix-run/react";

interface Props {
    users : User[];
}
export function UsersList({users}: Props) {     

    return ( 
        <div>
          <h1>Users</h1>
         <Outlet />

          <ul>
            {users.map((user) => (
                <li key= {user.id}>
                {user.name}
                <img src = {user.avatar} alt={user.name} height="150" />
                </li>
            ))}
          </ul>
        </div>
      );  
}
