# Standalone Searchbox Initializer

The Standalone Searchbox Initializer makes it quick to add a configurable standalone searchbox to a page.

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Getting Started

1. Install the component into your project.

```
npm i @coveops/standalone-searchbox-initializer
```

2. Use the Component or extend it

Typescript:

```javascript
import * as StandaloneSearchInitializer from '@coveops/standalone-searchbox-initializer';
```

Javascript

```javascript
const StandaloneSearchInitializer = require('@coveops/standalone-searchbox-initializer');
```

3. You can also expose the component alongside other components being built in your project.

```javascript
export * as StandaloneSearchInitializer from '@coveops/standalone-searchbox-initializer'
```

4. Include the component in your template as follows:

Add a basic integration into the page

```html
<div class="coveo-search-section">
    <!-- <div class="CoveoCustomPipelineContext"></div> -->
    <div class="CoveoAnalytics"></div>
    <div class="CoveoSearchbox" data-enable-omnibox="true"></div>
</div>
```

Add the following script if you're serving the component independently via a CDN:

```html
<script>
    CoveoStandaloneSearchboxInitializer(demoConfig.orgId, demoConfig.token, {
        standaloneSearchBoxRootSelector: '.coveo-search-section',
        restUri: demoConfig.restUri,
        searchPageUrl: demoConfig.searchUrl,
        language: "en",
        searchHub: demoConfig.searchHub,
        placeholder: 'Sample Placeholder'
    })        
</script>
```

Add the following script if you're serving the component from the project bundle using the `swapVar` utility:

```html
<script>
    Coveo.StandaloneSearchboxInitializer(demoConfig.orgId, demoConfig.token, {
        standaloneSearchBoxRootSelector: '.coveo-search-section',
        restUri: demoConfig.restUri,
        searchPageUrl: demoConfig.searchUrl,
        language: "en",
        searchHub: demoConfig.searchHub,
        placeholder: 'Sample Placeholder'
    })        
</script>
```

Be sure to update the variables to have the relevant information.

## Options

The following options can be configured:

| Option | Required | Type | Default | Notes |
| --- | --- | --- | --- | --- |
| `orgId` | Yes | string | | The ID of the Coveo Organization |
| `token` | Yes | string | | The API Key of the Coveo Organization |
| `options.standaloneSearchBoxRootSelector` | No | string | `.coveo-search-section` | The target search section containing the searchbox |
| `options.restUrl` | No | string |  | The Coveo API url |
| `options.searchPageUrl` | Yes | string |  | The local url to redirect to |
| `options.searchHub` | Yes | string |  | Searchhub the searchbox uses |

## Contribute

1. Clone the project
2. Build the code base: `npm run build`
3. Update the test organization ID and API Token and configure your port on the `npm serve` script in the `package.json`: `--org-id <ORG_ID> --token <ORG_KEY> --port 8080`
4. Serve the sandbox for live development `npm run serve`