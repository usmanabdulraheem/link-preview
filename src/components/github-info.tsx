"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Info = () => {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (router.query.slug) {
      fetch(`https://api.github.com/users/${router.query.slug}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [router.query.slug]);

  return (
    <div>
      <img
        src={user?.avatar_url}
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          marginBottom: 20,
        }}
      />
      <p>{`${user?.name}`}</p>
      <p>{`@${user?.login}`}</p>
    </div>
  );
};

export default Info;
