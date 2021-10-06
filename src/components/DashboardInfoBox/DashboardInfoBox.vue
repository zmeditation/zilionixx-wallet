<template>
    <f-card class="dashboard-info-box info-box f-card-double-padding">
        <div class="row no-vert-col-padding align-items-center align-center-lg">
            <div class="col-5 col-12-lg align-right__ align-center-lg last-lg"><dashboard-actions-box /></div>
            <div class="col balances">
                <div class="balance">
                    <h3 class="align-center-lg">
                        <span>
                            <f-t-m-token-value :value="accountsBalance" no-currency />
                            <span class="ftm"> ZNX</span>
                        </span>
                    </h3>
                    <div class="currency">
                        <f-t-m-token-value
                            :value="accountsBalance * this.$store.state.tokenPrice"
                            with-price-currency
                            no-currency
                        />
                    </div>
                    <div class="label h3">Available (Sum)</div>
                </div>
                <div class="balance total-balance">
                    <h3 class="align-center-lg">
                        <span>
                            <f-t-m-token-value :value="accountsTotalBalance" no-currency />
                            <span class="ftm"> ZNX</span>
                        </span>
                    </h3>
                    <div class="currency">
                        <f-t-m-token-value
                            :value="accountsTotalBalance * this.$store.state.tokenPrice"
                            with-price-currency
                            no-currency
                        />
                    </div>
                    <div class="label h3">Total (Sum)</div>
                </div>
            </div>
        </div>
    </f-card>
</template>

<script>
import FCard from '../core/FCard/FCard.vue';
import { WEIToFTM } from '../../utils/transactions.js';
import { mapGetters } from 'vuex';
import DashboardActionsBox from '../DashboardActionsBox/DashboardActionsBox.vue';
import FTMTokenValue from '@/components/core/FTMTokenValue/FTMTokenValue.vue';

export default {
    name: 'DashboardInfoBox',

    components: { FTMTokenValue, DashboardActionsBox, FCard },

    computed: {
        ...mapGetters(['accounts']),

        accountsBalance() {
            return this.accounts.reduce((_total, _currItem) => {
                return _total + WEIToFTM(_currItem.balance);
            }, 0);
        },

        accountsTotalBalance() {
            return this.accounts.reduce((_total, _currItem) => {
                return _total + WEIToFTM(_currItem.totalBalance);
            }, 0);
        },
    },
};
</script>

<style lang="scss">
@import 'style';
</style>
