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

  const imageSrc =
    router?.query?.slug === "thumbnail"
      ? "https://link-preview-poc.netlify.app/thumbnail.svg"
      : user?.avatar_url;
  const name = router?.query?.slug === "thumbnail" ? "Thumbnail" : user?.name;
  const login = router?.query?.slug === "thumbnail" ? "thumbnail" : user?.login;

  return (
    <div>
      <img
        // src={user?.avatar_url}
        src={imageSrc}
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          marginBottom: 20,
        }}
      />
      <p>{name}</p>
      <p>{`@${login}`}</p>
    </div>
  );
};

export default Info;
