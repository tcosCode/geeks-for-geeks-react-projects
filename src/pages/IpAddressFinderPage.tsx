import { useState, useEffect } from "react";
import isIP from "validator/lib/isIP";

import styles from "@styles/IpAddressFinder.module.css";

export default function IpAddressFinderPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [myIP, setMyIP] = useState<string>("Buscando...");
  const [ip, setIp] = useState<string>("");
  const [location, setLocation] = useState<string>("Desconocida");
  const [isp, setIsp] = useState<string>("Desconocido");
  const [coord, setCoord] = useState<{ lat: number; lon: number }>({
    lat: 0,
    lon: 0,
  });
  const [bbox, setBbox] = useState<string>("");

  useEffect(() => {
    fetch("http://ip-api.com/json/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error:" + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setMyIP(data.query);
        setLocation(`${data.city}, ${data.region}, ${data.countryCode}`);
        setIsp(`${data.org}, ${data.isp}`);
        setCoord({ lat: data.lat, lon: data.lon });
        updateMap(data.lat, data.lon);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const findCustomIp = () => {
    if (!isIP(ip)) {
      alert("The IP is not valid");
    }
    fetch(`http://ip-api.com/json/${ip}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error: + response.statusText");
        }
        return response.json();
      })
      .then((data) => {
        setLocation(`${data.city}, ${data.region}, ${data.countryCode}`);
        setIsp(`${data.org}, ${data.isp}`);
        setCoord({ lat: data.lat, lon: data.lon });
        updateMap(data.lat, data.lon);
      })
      .catch((error) => console.error(error));
  };

  const updateMap = (lat: number, lon: number) => {
    setBbox(`${lon - 0.01},${lat - 0.01},${lon + 0.01},${lat + 0.01}`);
  };

  return (
    <div className={styles.container}>
      <h1>IP Address Finder</h1>
      <div className={styles.containerData}>
        <section className={styles.data}>
          <h2>Your IP:</h2>
          <p>{myIP}</p>
          <div className={styles.data__input}>
            <label htmlFor="ip">
              Which other IP you want to find?
              <input
                id="ip"
                type="text"
                value={ip}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIp(e.target.value)
                }
                placeholder="Write another IP"
              />
            </label>
            <button onClick={findCustomIp}>Find the IP</button>
          </div>
          <div className={styles.data__info}>
            <div>
              <h2>Aproximate location:</h2>
              <p>{location}</p>
            </div>
            <div>
              <h2>Internet Service Provider (ISP):</h2>
              <p>{isp}</p>
            </div>
          </div>
        </section>
        <section className={styles.map}>
          {!isLoading && (
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&amp;layer=mapnik&amp;marker=${coord.lat},${coord.lon}`}
            ></iframe>
          )}
        </section>
      </div>
    </div>
  );
}
