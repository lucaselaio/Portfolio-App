<template>
    <div>
        <div v-if="withReveal" @click="copyToClipboard" class="label text-center">
            <slot name="icon">
            </slot>
            <span class="revealText">
                &nbsp {{ text }}
            </span>
            <span v-if="copied" class="revealTextTop">
                {{ copied }}
            </span>
        </div>
        <div v-else class="label text-center">
            <slot name="icon">
            </slot>
            <span >
                &nbsp {{ text }}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Label',
    data() {
        return {
            copied: ''
        }
    },
    props: {
        text: {
            type: String,
            required: false,
            default: () => {
                return '';
            }
        },
        withReveal: {
            type: Boolean,
            required: false,
            default: () => {
                return false;
            }
        }
    },
    methods: {
        copyToClipboard() {

            const tempInput = document.createElement('input');
            tempInput.value = this.text;
            document.body.appendChild(tempInput);
            tempInput.select();

            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    this.copied = "Copied!";
                    setTimeout(() => {
                        this.copied = "";
                    }, 3000);
                }
            } catch (err) {
                console.error(err);
            }

            document.body.removeChild(tempInput);
        }
    },
    watch: {
        copied(newVal) {
            if (newVal) {
                this.classShow = 'show';
            }
        }
    }
}
</script>
<style lang="scss">
.label {
    // background-color: black;
    color: $white;
    padding: 1em 0.5em;
    border-radius: 15px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    // border: 2px solid #808080;   
}

.revealText {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    white-space: nowrap;
    padding: 5px;
    transition: opacity 0.3s, transform 0.8s;
}

.revealTextTop {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    padding: 5px;
    transition: opacity 0.3s, transform 0.8s;
    opacity: 1;
    border-radius: 15px;
    background-color: $mediumGray;
}


.label:hover .revealText {
    opacity: 1;
    bottom: 100%;
}
</style>