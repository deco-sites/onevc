import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={asset("/favicon-96x96.png")}
      >
      </link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
      <meta name="theme-color" content="#221E1F" />
      <meta name="msapplication-TileColor" content="#221E1F" />

      {
        /*
         * Include fonts
         * tip: It's always better copy fonts to the `/static/fonts` folder than serving from another
         * domain since DNS resolution times can really affect performance.
         */
      }
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body {
              font-family: "Montserrat", sans-serif;
            }
            .transition-open-modal {
              -webkit-transition: width .4s ease-in-out 0s, max-height .4s ease-in-out .4s;
              -o-transition: width .4s ease-in-out 0s, max-height .4s ease-in-out .4s;
              transition: width .4s ease-in-out 0s, max-height .4s ease-in-out .4s;
            }
            .transition-close-modal {
              -webkit-transition: max-height .4s ease-in-out 0s, width .4s ease-in-out .4s;;
              -o-transition: max-height .4s ease-in-out 0s, width .4s ease-in-out .4s;
              transition: max-height .4s ease-in-out 0s, width .4s ease-in-out .4s;
            }
            .open-modal {
              max-height: 100vh;
              width: 100%;
            }
            .close-modal {
              max-height: 10px;
              width: 0%;
            }
          `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
