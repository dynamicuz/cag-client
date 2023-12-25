"use client";

import dynamic from "next/dynamic";

const PersistGateComponent = dynamic(
   () =>
      import("redux-persist/integration/react").then((mod) => mod.PersistGate),
   {
      ssr: false,
   },
);

const SSROutset = ({ children, persistor }) => {
   if (typeof window !== "undefined") {
      return (
         <PersistGateComponent persistor={persistor}>
            {children}
         </PersistGateComponent>
      );
   }

   // You can create a visually hidden component to avoid layout flashes and also maintain SEO content
   // see Chakra for an example of one https://chakra-ui.com/docs/components/visually-hidden
   return (
      <span
         style={{
            border: "0",
            clip: "rect(0, 0, 0, 0)",
            height: "1px",
            width: "1px",
            margin: "-1px",
            padding: "0",
            overflow: "hidden",
            whiteSpace: "nowrap",
            position: "absolute",
         }}>
         {children}
      </span>
   );
};

export default SSROutset;
