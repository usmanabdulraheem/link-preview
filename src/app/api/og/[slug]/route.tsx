import { ImageResponse } from "next/og";
import axios from "axios";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

function svgToDataURL(svgText: string): string {
  return `data:image/svg+xml,${encodeURIComponent(svgText)}`;
}

const axiosInstance = axios.create({
  timeout: 300000,
  withCredentials: true,
});

export async function GET(_: any, { params }: any) {
  const user = await fetch(`https://api.github.com/users/${params.slug}`).then(
    (res) => res.json()
  );

  // const thumbnail = await fetch(`https://link-preview-poc.netlify.app/thumbnail.svg`).then(
  //   (res) => res
  // );

  const thumbnail = await axiosInstance
    .get(`https://link-preview-poc.netlify.app/thumbnail.svg`)
    .then(({ data }) => data);

  // console.log("***********", thumbnail)

  const imageSrc =
    params.slug === "thumbnail"
      ? "https://link-preview-poc.netlify.app/thumbnail.svg"
      // ? "https://placeholder.pics/svg/300"
      // ? "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/adobe.svg"
      : user.avatar_url;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            src={imageSrc}
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              marginBottom: 20,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "48px",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <p
                style={{
                  paddingRight: "10px",
                }}
              >{`${user.name}`}</p>
              <p>|</p>
              <p
                style={{
                  paddingLeft: "10px",
                }}
              >{`@${user.login}`}</p>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <p
                style={{
                  paddingRight: "10px",
                }}
              >{`${user.followers} followers`}</p>
              <p>-</p>
              <p
                style={{
                  paddingLeft: "10px",
                }}
              >{`${user.following} following`}</p>
            </div>
            {user.email && (
              <div
                style={{
                  display: "flex",
                }}
              >
                <p>Email</p>
                <p>:</p>
                <p
                  style={{
                    paddingLeft: "10px",
                  }}
                >{`${user.email}`}</p>
              </div>
            )}
            {user.blog && (
              <div
                style={{
                  display: "flex",
                }}
              >
                <p>Blog</p>
                <p>:</p>
                <p
                  style={{
                    paddingLeft: "10px",
                  }}
                >{`${user.blog}`}</p>
              </div>
            )}
            {user.location && (
              <div
                style={{
                  display: "flex",
                }}
              >
                <p>Location</p>
                <p>:</p>
                <p
                  style={{
                    paddingLeft: "10px",
                  }}
                >{`${user.location}`}</p>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
          }}
        >
          <p>{user.bio}</p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
