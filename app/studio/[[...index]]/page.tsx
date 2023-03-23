"use client";

import { NextStudio } from "next-sanity/studio";

import _config from "../../../sanity.config";
import { useEffect, useState } from "react";

export default function StudioPage() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required

  const [config, setConfig] = useState(_config);

  useEffect(
    // Start fetching the theme in parallel with the Studio auth loading
    () =>
      // The webpackIgnore tells webpack to not attempt bundling this dynamic import,
      // and instead let it run natively in the browser at runtime
      void import(
        /* webpackIgnore: true */
        //@ts-ignore
        "https://themer.sanity.build/api/hues?default=3d4b61;950;lightest:ffffff;darkest:081421&transparent=f5f9ff"
      ).then(({ theme }) => setConfig((config) => ({ ...config, theme }))),
    []
  );
  return <NextStudio config={config} />;
}
