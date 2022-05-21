import { useState } from "react";
import { provider } from "provider";

export function ProfileCard(props) {
  if (!props.ens) {
    return <></>;
  }

  const [avatar, setAvatar] = useState(null);
  const [description, setDescription] = useState(null);
  const [url, setUrl] = useState(null);
  const [email, setEmail] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [github, setGithub] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [tiktok, setTiktok] = useState(null);
  const [telegram, setTelegram] = useState(null);

  (async () => {
    const resolver = await provider.getResolver(props.ens);

    if (avatar == null) {
      resolver.getText("avatar").then((result) => {
        if (result) {
          setAvatar(result);
        } else {
          setAvatar("");
        }
      });
    }

    if (description == null) {
      resolver.getText("description").then((result) => {
        if (result) {
          setDescription(result);
        } else {
          setDescription("");
        }
      });
    }
    if (email === null) {
      resolver.getText("email").then((result) => {
        if (result) {
          setEmail(result);
        } else {
          setEmail("");
        }
      });
    }
    if (url === null) {
      resolver.getText("url").then((result) => {
        if (result) {
          setUrl(result);
        } else {
          setUrl("");
        }
      });
    }
    if (github === null) {
      resolver.getText("com.github").then((result) => {
        if (result) {
          setGithub(result);
        } else {
          setGithub("");
        }
      });
    }
    if (instagram === null) {
      resolver.getText("com.instagram").then((result) => {
        if (result) {
          setInstagram(result);
        } else {
          setInstagram("");
        }
      });
    }
    if (facebook === null) {
      resolver.getText("com.facebook").then((result) => {
        if (result) {
          setFacebook(result);
        } else {
          setFacebook("");
        }
      });
    }
    if (tiktok === null) {
      resolver.getText("com.tiktok").then((result) => {
        if (result) {
          setTiktok(result);
        } else {
          setTiktok("");
        }
      });
    }
    if (telegram === null) {
      resolver.getText("com.telegram").then((result) => {
        if (result) {
          setTelegram(result);
        } else {
          setTelegram("");
        }
      });
    }
    if (twitter === null) {
      resolver.getText("com.twitter").then((result) => {
        if (result) {
          setTwitter(result);
        } else {
          setTwitter("");
        }
      });
    }
  })();

  return (
    <div className="mt-5">
      <p>
        <img src={"https://metadata.ens.domains/mainnet/avatar/" + props.ens} width={100} height={100} style={{background: "grey"}} />
      </p>
      <p>address: {props.address}</p>
      <p>ens: {props.ens}</p>
      <p>primaryEns: {props.primaryEns}</p>
      <p>
        description: <br />{" "}
        {description === null
          ? "looking up"
          : description == ""
          ? "n/a"
          : description}
      </p>
      <p>
        url: <br /> {url === null ? "looking up" : url == "" ? "n/a" : url}
      </p>
      <p>
        email: <br />{" "}
        {email === null ? "looking up" : email == "" ? "n/a" : email}
      </p>
      <p>
        twitter: <br />{" "}
        {twitter === null ? "looking up" : twitter == "" ? "n/a" : twitter}
      </p>
      <p>
        github: <br />{" "}
        {github === null ? "looking up" : github == "" ? "n/a" : github}
      </p>
    </div>
  );
}
