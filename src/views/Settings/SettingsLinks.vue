<template>
    <div class="settingslinks">
        <f-card class="f-card-double-padding">
            <div class="small-container">
                <p>
                    <a href="https://fantom.foundation/how-to-use-fantom-wallet/" target="_blank">
                        How to use Zilionixx fWallet
                    </a>
                </p>

                <p>
                    <a href="https://explorer.fantom.network/" target="_blank">
                        Zilionixx Explorer
                    </a>
                </p>

                <social-media-links />
            </div>
        </f-card>
    </div>
</template>

<script>
import SocialMediaLinks from '@/components/SocialMediaLinks/SocialMediaLinks.vue';
import FCard from '@/components/core/FCard/FCard.vue';

export default {
    name: 'SettingsLinks',

    components: { FCard, SocialMediaLinks },
};
</script>
