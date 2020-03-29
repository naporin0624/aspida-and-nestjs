import React, { useState, useEffect } from "react";
import { api } from "../../utils/api";
import { User } from "../../../apis/@types";

export function UserWelcomeIndex() {
  const [user, setUser] = useState<User>({ name: "", id: 0 });
  useEffect(() => {
    api.api.user
      .$get()
      .then(res => {
        setUser(res);
        return res;
      })
      .then(async res => {
        const r = await api.api.user.$post({ data: res });
        return r;
      })
      .then(res => setUser(res));
  }, []);

  return (
    <div>
      <h1>Hello aspida and NestJS Environment</h1>
      <h2>Sample Code</h2>
      <label>
        {user.id}
        <p>{user.name}</p>
      </label>
    </div>
  );
}
