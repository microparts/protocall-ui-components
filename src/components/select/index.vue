<template>
    <div class="select">
        <li
          @click="toggleMenu()"
          :class="{ opened: showMenu }"
          class="select__dropdown-toggle"
          v-if="selectedOption.name !== undefined">
          {{ selectedOption.name }}
          <span class="select__caret"></span>
        </li>

        <li
          @click="toggleMenu()"
          class="select__dropdown-toggle"
          :class="{ opened: showMenu }"
          v-if="selectedOption.name === undefined">
          {{placeholderText}}
          <span class="select__caret"></span>
        </li>

        <ul class="select__dropdown-menu" v-if="showMenu">
            <li v-for="(option, index) in options" :key="index">
                <a href="javascript:void(0)" @click="updateOption(option)">
                    {{ option.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedOption: {
                  name: '',
                },
                showMenu: false,
                placeholderText: 'Please select an item',
            }
        },
        props: {
            options: {
                type: [Array, Object]
            },
            selected: {},
            placeholder: [String]
        },
        mounted() {
            this.selectedOption = this.selected;
            if (this.placeholder)
            {
                this.placeholderText = this.placeholder;
            }
        },
        methods: {
            updateOption(option) {
                this.selectedOption = option;
                this.showMenu = false;
                this.$emit('updateOption', this.selectedOption);
            },
            toggleMenu() {
              this.showMenu = !this.showMenu;
            }
        }
    }
</script>

<style lang="scss" scoped src="./style.scss"></style>
