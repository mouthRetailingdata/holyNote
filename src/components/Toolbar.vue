<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

function goTo(path, query) {
    router.push({
        path: path,
        query: query
    })
}

</script>
<template>
    <div class="toolbar">
        <div class="logo-wrapper">
            <div class="no-logo"></div>
        </div>
        <ul>
            <li>
                <button type="button" @click="goTo('/')">主頁</button>
            </li>
            <li>
                <button type="button" @click="goTo('/List')">列表</button>
            </li>
            <li>
                <button type="button" @click="goTo('/Noting')">編輯</button>
            </li>
            <li>
                <button type="button" @click="goTo('/Setting')">設定</button>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.toolbar {
    width: 20%;
    height: 100%;
    // background: url("../assets/bgList.jpg");
    .logo-wrapper {
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        .no-logo {
            width: 80%;
            height: 80%;
            border: 5px solid var(--T2-color);
        }
    }
    ul {
        position: relative;
        
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url("../assets/bgList.jpg");
            z-index: -1; /* 放在列表项的后面 */
        }
        li {
            display: flex;
            align-items: center;
            border-radius: 12px;
            box-shadow: 0 0 2px 2px var(--T3-color);
            
            width: 80%;
            aspect-ratio: 5/1;
            margin-right: auto;
            margin-left: auto;
            margin-bottom: 10px;

            button {
                font-family: "NotoSerifJP";
                width: 100%;
                color: var(--T2-color);
                font-size: 30px;
                cursor: pointer;

            }
        }
    }
}
</style>