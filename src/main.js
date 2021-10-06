import Vue from 'vue';
import App from './App.vue';
import appConfig from '../app.config.js';
import { router } from './plugins/router.js';
import { apolloProvider, apolloClient } from './plugins/apollo-provider.js';
import i18n from './plugins/i18n';
import './plugins/vue-timeago.js';
import './plugins/vue-svgicon.js';
import './plugins/vue-observe-visibility.js';
import './plugins/vue-async-computed.js';
import './plugins/dayjs.js';
import { store } from './store';
import './filters.js';
import './registerServiceWorker';
import { FFetch } from '@/plugins/ffetch.js';
import { FantomWeb3Wallet } from './plugins/fantom-web3-wallet.js';
import { BNBridgeExchange } from './plugins/bnbridge-exchange/bnbridge-exchange.js';
import { FNano } from './plugins/fantom-nano.js';
import { DeFi } from './plugins/defi/defi.js';
import { Metamask } from '@/plugins/metamask/metamask.js';
import { Walletlink } from '@/plugins/walletlink/Walletlink.js';
import { Governance } from '@/plugins/governance/governance.js';
import 'focus-visible';

import './wallet.types.js';

Vue.use(FFetch);
Vue.use(FantomWeb3Wallet, {
    apolloClient,
});
Vue.use(BNBridgeExchange, {
    apiUrl: appConfig.bnbridgeApi.url,
    apiToken: appConfig.bnbridgeApi.token,
});
Vue.use(FNano);
Vue.use(DeFi, { apolloClient });
Vue.use(Metamask);
Vue.use(Walletlink);
Vue.use(Governance, { apolloClient });

Vue.config.productionTip = false;

// measure performance
// Vue.config.performance = true;

export const vueInstance = new Vue({
    render: (h) => h(App),
    router,
    store,
    i18n,
    apolloProvider,
}).$mount('#app');
