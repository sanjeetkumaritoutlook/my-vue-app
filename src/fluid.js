export const fluid = {
    environments: {
      dev: {
        label: 'Development',
        esm: 'https://fluid-dev.lmig.com/fluid/build/fluid.esm.js',
        legacy: 'https://fluid-dev.lmig.com/fluid/build/fluid.js',
        css: 'https://fluid-dev.lmig.com/fluid/build/fluid.css',
      },
      test: {
        label: 'Test',
        esm: 'https://fluid-test.libertymutual.com/fluid/build/fluid.esm.js',
        legacy: 'https://fluid-test.libertymutual.com/fluid/build/fluid.js',
        css: 'https://fluid-test.libertymutual.com/fluid/build/fluid.css',
      },
      prod: {
        label: 'Production',
        esm: 'https://fluid.lmig.com/fluid/build/fluid.esm.js',
        legacy: 'https://fluid.lmig.com/fluid/build/fluid.js',
        css: 'https://fluid.lmig.com/fluid/build/fluid.css',
      },
      local: {
        label: 'Local',
        esm: 'http://localhost:3333/fluid/build/fluid.esm.js',
        legacy: 'http://localhost:3333/fluid/build/fluid.js',
        css: 'http://localhost:3333/fluid/build/fluid.css',
      },
      external: {
        label: 'External',
        esm: 'https://fluid.libertymutual.com/fluid/build/fluid.esm.js',
        legacy: 'https://fluid.libertymutual.com/fluid/build/fluid.js',
        css: 'https://fluid.libertymutual.com/fluid/build/fluid.css',
      },
    },
    init: (fluid, opts) => {
      console.debug(
        `🧪 Loading FLUID with from ${fluid.label} with options:`,
        opts
      );
      addStyleSheet(fluid);
      addScriptLoader(fluid);
    },
  };
  
  const addScriptLoader = (fluid) => {
    const script = document.createElement('script');
    script.id = 'fluid-loader-script';
    if ('noModule' in script) {
      script.type = 'module';
      script.src = fluid.esm;
    } else {
      script.type = 'text/javascript';
      script.src = fluid.legacy;
    }
  
    if (!document.getElementById('fluid-loader-script')) {
      document.head.appendChild(script);
      document.body.appendChild(
        document.createComment(
          `🧪 Application running the ${fluid.label} build of FLUID.`
        )
      );
    }
  };
  
  const addStyleSheet = (fluid) => {
    const element = document.createElement('link');
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('href', fluid.css);
    element.id = 'fluid-base-styles';
  
    if (!document.getElementById('fluid-base-styles')) {
      document.head.appendChild(element);
    }
  };
  