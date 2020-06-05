const Coveo = require('coveo-search-ui');

module.exports = function StandaloneSearchInitializer(orgId, token, options) {
    document.addEventListener("DOMContentLoaded", () => {
        const {
            restUri,
            standaloneSearchBoxRootSelector = '.coveo-search-section',
            pipelineContextSelector = '.coveo-search-section .CoveoPipelineContext',
            searchPageUrl,
            language,
            searchHub,
            placeholder,
            additionalInitOptions = {},
        } = options;

        Coveo.SearchEndpoint.configureCloudV2Endpoint(orgId, token, restUri);
        const standaloneSearchBoxRoot = document.querySelector(standaloneSearchBoxRootSelector);
        const pipelineContext = document.querySelector(pipelineContextSelector);

        Coveo.initSearchbox(standaloneSearchBoxRoot, searchPageUrl, {
            Analytics: {
                searchHub,
            },
            Searchbox: {
                enableQuerySyntax: true,
                placeholder,
            },
            CustomPipelineContext: {
                context: {
                    "locale": language,
                    "standalonesearchbox": "true"
                }
            },
            ...additionalInitOptions,
            externalComponents: [pipelineContext]
        });
    });
}